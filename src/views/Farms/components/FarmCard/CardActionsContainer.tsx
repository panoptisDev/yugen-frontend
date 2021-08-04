import React, { useState, useCallback, useMemo } from "react";
import BigNumber from "bignumber.js";
import styled from "styled-components";
import { provider as ProviderType } from "web3-core";
import Countdown from "react-countdown";
import { getAddress } from "utils/addressHelpers";
import { getBep20Contract } from "utils/contractHelpers";
import { Flex, Text, Radio } from "cryption-uikit";
import { Farm } from "state/types";
import { useFarmFromSymbol, useFarmUser, useProfile } from "state/hooks";
import useI18n from "hooks/useI18n";
import useWeb3 from "hooks/useWeb3";
import { useApprove, useApproveStaking } from "hooks/useApprove";
import UnlockButton from "components/UnlockButton";
import StakeAction from "./StakeAction";
import HarvestAction from "./HarvestAction";
import StakeActionSignleSided from "./StakeActionSignleSided";

const Action = styled.div`
  padding-top: 5px;
`;
export interface FarmWithStakedValue extends Farm {
  apy?: BigNumber;
}

interface FarmCardActionsProps {
  farm: FarmWithStakedValue;
  provider?: ProviderType;
  account?: string;
  addLiquidityUrl?: string;
  totalValue?: BigNumber;
}

const CardActions: React.FC<FarmCardActionsProps> = ({
  farm,
  account,
  addLiquidityUrl,
  totalValue,
}) => {
  const TranslateString = useI18n();
  const [requestedApproval, setRequestedApproval] = useState(false);
  const { pid, lpAddresses, singleSidedToken, singleSidedToToken } =
    useFarmFromSymbol(farm.lpSymbol);

  const {
    allowance,
    tokenBalance,
    stakedBalance,
    earnings,
    canHarvest,
    harvestInterval,
    SingleSidedAllowances,
    SingleSidedTokenBalance,
  } = useFarmUser(pid);

  const lpAddress = getAddress(lpAddresses);
  const singleSidedAddress = getAddress(singleSidedToken);
  const singleSidedToTokenAddress = getAddress(singleSidedToToken);

  const lpName = farm.lpSymbol.toUpperCase();
  const singleSidedTokenName = farm.singleSidedTokenName.toUpperCase();
  const isApproved = account && allowance && allowance.isGreaterThan(0);
  const isSignleSidedTokenApproved =
    account && SingleSidedAllowances && SingleSidedAllowances.isGreaterThan(0);
  const web3 = useWeb3();
  const singleSidedTokendecimals = farm.singleSidedTokenDecimal
    ? farm.singleSidedTokenDecimal
    : new BigNumber(18);

  const [radioValue, setRadioValue] = React.useState("LP");
  const [radioTrue, SetradioTrue] = React.useState(true);

  const handleRadioChange = (e) => {
    if (e.target.value === "LP") {
      SetradioTrue(true);
    } else {
      SetradioTrue(false);
    }
    setRadioValue(() => e.target.value);
  };

  const totalValueOfUser: BigNumber = useMemo(() => {
    if (!account) {
      return null;
    }
    if (!stakedBalance) {
      return null;
    }
    if (!farm.lpTotalInQuoteToken) {
      return null;
    }

    return totalValue.times(stakedBalance).div(farm.lpTotalSupply);
  }, [
    totalValue,
    stakedBalance,
    farm.lpTotalInQuoteToken,
    account,
    farm.lpTotalSupply,
  ]);

  const totalValueOfUserFormated = totalValueOfUser
    ? `$${Number(totalValueOfUser).toLocaleString(undefined, {
        maximumFractionDigits: 2,
      })}`
    : "-";

  const lpContract = getBep20Contract(lpAddress, web3);

  const { metaTranscation } = useProfile();

  const [signatureData, setSignatureData] = useState<{
    v: number;
    r: string;
    s: string;
    deadline: number;
  } | null>(null);

  const { onApprove } = useApprove(lpContract);

  const handleApprove = useCallback(async () => {
    try {
      setRequestedApproval(true);
      if (metaTranscation) {
        const { v, r, s, deadlineForSignature } = await onApprove();
        setSignatureData({
          v,
          r,
          s,
          deadline: deadlineForSignature,
        });
      } else {
        await onApprove();
      }
      setRequestedApproval(false);
    } catch (e) {
      console.error(e);
    }
  }, [onApprove, metaTranscation]);

  const setSignauteNull = () => {
    setSignatureData(null);
  };

  const Renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return "now";
    }
    return (
      <div>
        {days > 0 ? `${days.toString()} days ` : ""}
        {hours > 0 ? `${hours.toString()} Hr ` : ""}
        {minutes > 0 ? `${minutes.toString()} min ` : ""}
        {seconds > 0 ? `${seconds.toString()} sec` : ""}
      </div>
    );
  };

  const RenderNextHarvestIn = () => {
    const check =
      isApproved ||
      (signatureData !== null &&
        signatureData.deadline > Math.ceil(Date.now() / 1000));

    if (check && harvestInterval.toNumber() * 1000) {
      return (
        <>
          <Flex justifyContent="space-between">
            <Text>{TranslateString(318, "Next Harvest in :")}</Text>
            <Text bold>
              <Countdown
                date={harvestInterval.toNumber() * 1000}
                renderer={Renderer}
              >
                <div style={{ color: "white" }}>Done !</div>
              </Countdown>
            </Text>
          </Flex>
        </>
      );
    }

    return (
      <Flex justifyContent="space-between" style={{ color: "#1E202A" }}>
        <Text color="#1E202A">{TranslateString(318, "Next Harvest in :")}</Text>
        <Text bold color="#1E202A">
          <div style={{ color: "#1E202A" }}>Done !</div>
        </Text>
      </Flex>
    );
  };

  const renderApprovalOrStakeButton = () => {
    return (
      <>
        <Flex mt="15px">
          <Text
            bold
            textTransform="uppercase"
            color="#2082E9"
            fontSize="12px"
            pr="5px"
          >
            {lpName}
          </Text>
          <Text
            bold
            textTransform="uppercase"
            color="#86878F"
            fontSize="12px"
            mb="10px"
          >
            {TranslateString(1074, "Staked")}
          </Text>
        </Flex>
        <Flex>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>LP</Text>
              <Radio
                name="LP"
                scale="sm"
                value="LP"
                onChange={handleRadioChange}
                checked={radioTrue}
                style={{ margin: "10px" }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>MATIC</Text>
              <Radio
                scale="sm"
                name="MATIC"
                value="MATIC"
                onChange={handleRadioChange}
                checked={!radioTrue}
                style={{ margin: "10px" }}
              />
            </div>
          </div>
        </Flex>
        {radioTrue ? (
          <StakeAction
            stakedBalance={stakedBalance}
            tokenBalance={tokenBalance}
            tokenName={lpName}
            pid={pid}
            addLiquidityUrl={addLiquidityUrl}
            signatureData={signatureData}
            setSignauteNull={setSignauteNull}
            approvalDisabled={requestedApproval}
            handleApprove={handleApprove}
            isApproved={isApproved}
            totalValueOfUserFormated={totalValueOfUserFormated}
          />
        ) : (
          <StakeActionSignleSided
            stakedBalance={stakedBalance}
            tokenBalance={SingleSidedTokenBalance}
            tokenName={singleSidedTokenName}
            decimal={singleSidedTokendecimals}
            pid={pid}
            addLiquidityUrl={addLiquidityUrl}
            isApproved={isSignleSidedTokenApproved}
            totalValueOfUserFormated={totalValueOfUserFormated}
            singleSidedAddress={singleSidedAddress}
            singleSidedToTokenAddress={singleSidedToTokenAddress}
            lpTokenAddress={lpAddress}
          />
        )}

        {/* :
          (
            <Button
              mt="8px"
              width="100%"
              disabled={requestedApproval}
              onClick={handleApprove}
            >
              {TranslateString(758, "Approve")}
            </Button>
          )
        } */}
      </>
    );
  };

  return (
    <Action>
      <RenderNextHarvestIn />
      <br />
      <Flex>
        <Text
          bold
          textTransform="uppercase"
          color="#2082E9"
          fontSize="12px"
          pr="5px"
        >
          {/* TODO: Is there a way to get a dynamic value here from useFarmFromSymbol? */}
          CNT
        </Text>
        <Text
          bold
          textTransform="uppercase"
          color="#86878F"
          fontSize="12px"
          mb="10px"
        >
          {TranslateString(1072, "Earned")}
        </Text>
      </Flex>

      <HarvestAction earnings={earnings} canHarvest={canHarvest} pid={pid} />
      {!account ? (
        <UnlockButton mt="8px" width="100%" />
      ) : (
        renderApprovalOrStakeButton()
      )}
    </Action>
  );
};

export default CardActions;
