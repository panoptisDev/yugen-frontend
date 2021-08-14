import React, { memo, useState } from "react";
import styled from "styled-components";
import Web3 from "web3";
import { Button, AutoRenewIcon } from "cryption-uikit";
import UnlockButton from "components/UnlockButton";
import { useToast } from "state/hooks";
import BigNumber from "bignumber.js";
import {
  getERC20Contract,
  getWinnerLotteryContract,
} from "utils/contractHelpers";
import Loader from "./Loader";
import BtnLoader from "./BtnLoader";

const WinnerBtnContainer = ({ fetchValue, account, tokenInfo }) => {
  const [btnLoading, setBtnLoading] = useState(false);

  const allowanceBN = new BigNumber(fetchValue.allowance);
  const lotterySizeBN = new BigNumber(fetchValue.size);

  const { toastInfo, toastError, toastSuccess } = useToast();
  const web3 = new Web3(window.ethereum);
  const infiniteValue =
    "115792089237316195423570985008687907853269984665640564039457584007913129639935";

  const handleEnterWinnerLottery = async () => {
    toastInfo("Processing...", "Entering the lottery");
    setBtnLoading(() => true);

    try {
      const lotterySmartContract = await getWinnerLotteryContract();
      await lotterySmartContract.methods.enterLottery().send({ from: account });
      toastSuccess("Congrats", "You have successfully entered the lottery");
      setBtnLoading(() => false);
    } catch (e) {
      toastError("Error", "Failed to enter the lottery");
      setBtnLoading(() => false);
    }
  };

  const handleApprove = async () => {
    toastInfo("Processing...", "Approving your account for deposits");
    setBtnLoading(() => true);

    try {
      const ERC20SmartContract = await getERC20Contract(tokenInfo.tokenAddr);
      await ERC20SmartContract.methods
        .approve(tokenInfo.lotteryAddr, web3.utils.toBN(infiniteValue))
        .send({ from: account });
      toastSuccess("Success", "Account successfully approved");
      setBtnLoading(() => false);
    } catch (e) {
      toastError("Error", "Could not approve your account");
      setBtnLoading(() => false);
    }
  };

  if (account) {
    return (
      <>
        {allowanceBN.isGreaterThanOrEqualTo(lotterySizeBN) ? (
          <>
            {btnLoading ? (
              <ButtonContainer>
                <Button
                  isLoading
                  endIcon={<AutoRenewIcon spin color="currentColor" />}
                >
                  Processing...
                </Button>
              </ButtonContainer>
            ) : (
              <>
                {fetchValue.settling ? (
                  <ButtonContainer>
                    <Button
                      isLoading
                      endIcon={<AutoRenewIcon spin color="currentColor" />}
                    >
                      Settling...
                    </Button>
                  </ButtonContainer>
                ) : (
                  <ButtonContainer>
                    <Button onClick={handleEnterWinnerLottery}>
                      Enter with
                      <BtnLoader value={fetchValue.lotterySize} />
                    </Button>
                  </ButtonContainer>
                )}
              </>
            )}{" "}
          </>
        ) : (
          <>
            {btnLoading ? (
              <ButtonContainer>
                <Button
                  isLoading
                  endIcon={<AutoRenewIcon spin color="currentColor" />}
                >
                  Processing...
                </Button>
              </ButtonContainer>
            ) : (
              <ButtonContainer>
                <Button onClick={handleApprove}>
                  <span style={{ marginRight: "5px" }}>Approve</span>{" "}
                  <BtnLoader value={fetchValue.lotterySize} />
                </Button>
              </ButtonContainer>
            )}
          </>
        )}
        <LabelContainer>
          <Label
            style={{ textAlign: "right", fontSize: "14px", fontWeight: 400 }}
          >
            Balance :
          </Label>
          <Loader
            value={fetchValue.yourBalance}
            customTextAlign="left"
            customFontSize="14px"
          />
        </LabelContainer>
      </>
    );
  }
  return <UnlockButton />;
};

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;
const Label = styled.div`
  color: #f5f5f5;
  font-weight: 600;
  font-size: 18px;
  text-align: left;
  width: 100%;
  margin-right: 30px;
`;

export default memo(WinnerBtnContainer);
