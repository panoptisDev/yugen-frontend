import React from "react";
import BigNumber from "bignumber.js";
import { Button, useModal } from "cryption-uikit";
import Row from "components/Row";
import useI18n from "hooks/useI18n";
import { useStake } from "hooks/useStake";
import { useStakeWithPermit } from "hooks/useStakeWithPermit";
import useUnstake from "hooks/useUnstake";
import { getBalanceNumber } from "utils/formatBalance";
import DepositModal from "../DepositModal";
import WithdrawModal from "../WithdrawModal";

interface FarmCardActionsProps {
  stakedBalance?: BigNumber;
  tokenBalance?: BigNumber;
  tokenName?: string;
  pid?: number;
  addLiquidityUrl?: string;
  signatureData?: any;
  setSignauteNull?: any;
  approvalDisabled?: boolean;
  handleApprove?: any;
  isApproved?: boolean;
  totalValueOfUserFormated?: string;
}

const StakeAction: React.FC<FarmCardActionsProps> = ({
  stakedBalance,
  tokenBalance,
  tokenName,
  pid,
  addLiquidityUrl,
  signatureData,
  setSignauteNull,
  approvalDisabled,
  handleApprove,
  isApproved,
  // totalValueOfUserFormated,
}) => {
  const TranslateString = useI18n();
  const { onStake } = useStake(pid);
  const { onStakeWithPermit } = useStakeWithPermit(
    pid,
    signatureData,
    setSignauteNull
  );
  const { onUnstake } = useUnstake(pid);

  const rawStakedBalance = getBalanceNumber(stakedBalance);

  const [onPresentDeposit] = useModal(
    <DepositModal
      max={tokenBalance}
      onConfirm={signatureData !== null ? onStakeWithPermit : onStake}
      tokenName={tokenName}
      addLiquidityUrl={addLiquidityUrl}
    />
  );
  const [onPresentWithdraw] = useModal(
    <WithdrawModal
      max={stakedBalance}
      onConfirm={onUnstake}
      tokenName={tokenName}
    />
  );
  const renderStakingButtons = () => {
    if (
      isApproved ||
      (signatureData !== null &&
        signatureData.deadline > Math.ceil(Date.now() / 1000))
    ) {
      return rawStakedBalance === 0 ? (
        <Button onClick={onPresentDeposit} variant="secondary">
          {TranslateString(999, "Stake LP")}
        </Button>
      ) : (
        <Row justifyContent="space-around">
          <Button
            mt="8px"
            scale="md"
            height="45px"
            onClick={onPresentDeposit}
            minWidth="120px"
            width="auto"
            mr="15px"
          >
            Stake
          </Button>
          <Button
            mt="8px"
            scale="md"
            height="45px"
            onClick={onPresentWithdraw}
            minWidth="120px"
            width="auto"
          >
            Unstake
          </Button>
        </Row>
      );
    }

    return (
      <div>
        <Row justifyContent="space-around">
          <Button
            mt="8px"
            scale="md"
            height="45px"
            disabled={approvalDisabled}
            onClick={handleApprove}
            minWidth="120px"
            width="100%"
          >
            {approvalDisabled ? "Approving..." : "Approve"}
          </Button>
        </Row>
      </div>
    );
  };

  return <div>{renderStakingButtons()}</div>;
};

export default StakeAction;
