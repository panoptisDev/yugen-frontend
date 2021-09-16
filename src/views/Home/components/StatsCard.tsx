import React from "react";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import { Text } from "cryption-uikit";
import { useMedia } from "react-use";

export interface CardValueProps {
  totalSuply?: number;
  burnedSupply?: number;
  circulatingSupply?: number;
  totalFees?: string;
  stakerFees?: string;
  lpFees?: string;
  burnerFees?: string;
  devFees?: string;
}
const Card = styled.div`
  border-radius: 0.625rem !important;
  padding: 30px 15px;
  background-color: #ffffff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
const SubCard = styled.div`
  border-radius: 0.625rem !important;
  padding: 15px 15px;
  background-color: #ffffff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
const SubCard2 = styled.div`
  border-radius: 0.625rem !important;
  padding: 15px 15px;
  background-color: #ffffff;
  width: 100%;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
const SubCardContainer = styled.div`
  width: 100%;
  display: flex;
`;
const TextAlignMent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;
const ProgressText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;
const ProgressItemText = styled.div`
  display: flex;
  flex-direction: column;
`;

const BarParent = styled.div`
  overflow: hidden;
  position: relative;
  margin-top: 10px;
  height: 4px;
  border-radius: 2px;
  background-color: #eeeeee;
`;
const RedbBar = styled.div<{ progressVal: number; marginVal: number }>`
  background: #f55c47;
  border-top-left-radius: 0px;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-left-radius: 0px;
  transition: transform 0.4s linear;
  top: 0;
  left: ${({ marginVal }) => `${marginVal}%`};
  width: ${({ progressVal }) => `${progressVal}%`};
  bottom: 0;
  position: absolute;
  transition: transform 0.2s linear;
  transform-origin: left;
`;
const BlueBar = styled.div<{ progressVal: number }>`
  background: #2082e9;
  border-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 2px;
  transition: transform 0.4s linear;
  top: 0;
  left: 0px;
  width: ${({ progressVal }) => `${progressVal}%`};
  bottom: 0;
  position: absolute;
  transition: transform 0.2s linear;
  transform-origin: left;
`;
const CardValue: React.FC<CardValueProps> = ({
  totalSuply,
  circulatingSupply,
  burnedSupply,
  totalFees,
  stakerFees,
  lpFees,
  burnerFees,
  devFees,
}) => {
  const isInMobileView = useMedia("(max-width: 950px)");
  const numberWithCommas = (number) => {
    const parts = number.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  };
  let progressBar = 0;
  if (
    totalSuply &&
    circulatingSupply &&
    totalSuply > 0 &&
    circulatingSupply > 0
  ) {
    progressBar = (100 * circulatingSupply) / totalSuply;
  }
  let burnedProgress = 0;
  if (totalSuply && burnedSupply && totalSuply > 0 && burnedSupply > 0) {
    burnedProgress = (100 * burnedSupply) / totalSuply;
  }

  if (isInMobileView) {
    return (
      <>
        <Card>
          <ProgressText
            style={{ marginBottom: "15px", flexDirection: "column" }}
          >
            <Text color="#424945" fontSize="18px" fontWeight="700">
              CNT & Summary
            </Text>
            <Text color="#887263" fontSize="12px" ml="5px" textAlign="center">
              * Amount allocated through mining is distributed every second
            </Text>
          </ProgressText>

          <ProgressText
            style={{
              flexWrap: "wrap",
              justifyContent: "space-evenly",
            }}
          >
            <ProgressItemText>
              <Text color="#887263" fontSize="15px" textAlign="center">
                Circulating Supply
              </Text>
              <Text
                color="#2082E9"
                fontSize="22px"
                fontWeight="700"
                style={{ display: "flex", alignItems: "center" }}
              >
                {numberWithCommas(circulatingSupply)}{" "}
                <Text color="#887263" fontSize="15px" ml="8px">
                  {" "}
                  CNT{" "}
                </Text>
              </Text>
            </ProgressItemText>
            <ProgressItemText>
              <Text color="#887263" fontSize="15px" textAlign="center">
                Total Burned
              </Text>
              <Text
                color="#f55c47"
                fontSize="22px"
                fontWeight="700"
                style={{ display: "flex", alignItems: "center" }}
              >
                {numberWithCommas(burnedSupply)}{" "}
                <Text color="#887263" fontSize="15px" ml="8px">
                  {" "}
                  CNT{" "}
                </Text>
              </Text>
            </ProgressItemText>
            <ProgressItemText>
              <Text color="#887263" fontSize="15px" textAlign="center">
                Max Supply
              </Text>
              <Text
                color="#424945"
                fontSize="22px"
                fontWeight="700"
                style={{ display: "flex", alignItems: "center" }}
              >
                {numberWithCommas(100000000)}{" "}
                <Text color="#887263" fontSize="15px" ml="8px">
                  {" "}
                  CNT
                </Text>
              </Text>
            </ProgressItemText>
          </ProgressText>

          <BarParent>
            <BlueBar progressVal={progressBar} />
            <RedbBar progressVal={burnedProgress} marginVal={progressBar} />
          </BarParent>
        </Card>
        <br />
        <SubCard>
          <Grid item xs={12} md={6} lg={6} xl={6}>
            <TextAlignMent>
              <ProgressText>
                <Text color="#887263" fontSize="16px">
                  Total Supply
                </Text>
                <Text
                  color="#424945"
                  fontSize="16px"
                  fontWeight="400"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    letterSpacing: "1.5px",
                  }}
                >
                  {" "}
                  {numberWithCommas(totalSuply.toFixed(2))}
                  <Text color="#887263" fontSize="12px">
                    {" "}
                    CNT
                  </Text>
                </Text>
              </ProgressText>
              <ProgressText>
                <Text color="#887263" fontSize="16px">
                  CNT Rewards / Day
                </Text>
                <Text
                  color="#424945"
                  fontSize="16px"
                  fontWeight="400"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    letterSpacing: "1.5px",
                  }}
                >
                  {numberWithCommas(34560 * 0.75)}
                  <Text color="#887263" fontSize="12px" ml="5px">
                    {" "}
                    CNT
                  </Text>
                </Text>
              </ProgressText>
              <ProgressText>
                <Text color="#887263" fontSize="16px">
                  CNT Rewards / Block
                </Text>
                <Text
                  color="#424945"
                  fontSize="16px"
                  fontWeight="400"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    letterSpacing: "1.5px",
                  }}
                >
                  {numberWithCommas(0.75)}
                  <Text color="#887263" fontSize="12px" ml="5px">
                    {" "}
                    CNT
                  </Text>
                </Text>
              </ProgressText>
              {totalFees && (
                <ProgressText>
                  <Text color="#887263" fontSize="16px">
                    Total Fees (24 Hrs)
                  </Text>
                  <Text
                    color="#424945"
                    fontSize="16px"
                    fontWeight="400"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      letterSpacing: "1.5px",
                    }}
                  >
                    {totalFees}usd{" "}
                  </Text>
                </ProgressText>
              )}
            </TextAlignMent>
          </Grid>
        </SubCard>
        <br />
        <SubCard>
          {" "}
          <Grid item xs={12} md={6} lg={6} xl={6}>
            <TextAlignMent>
              {lpFees && (
                <ProgressText>
                  <Text color="#887263" fontSize="16px">
                    LP Fees
                  </Text>
                  <Text
                    color="#424945"
                    fontSize="16px"
                    fontWeight="400"
                    style={{ letterSpacing: "1.5px" }}
                  >
                    {" "}
                    {lpFees}usd{" "}
                  </Text>
                </ProgressText>
              )}
              {burnerFees && (
                <ProgressText>
                  <Text color="#887263" fontSize="16px">
                    Burner Allocation
                  </Text>
                  <Text
                    color="#424945"
                    fontSize="16px"
                    fontWeight="400"
                    style={{ letterSpacing: "1.5px" }}
                  >
                    {" "}
                    {burnerFees}usd{" "}
                  </Text>
                </ProgressText>
              )}
              {stakerFees && (
                <ProgressText>
                  <Text color="#887263" fontSize="16x">
                    Staker Distrubution
                  </Text>
                  <Text
                    color="#424945"
                    fontSize="16px"
                    fontWeight="400"
                    style={{ letterSpacing: "1.5px" }}
                  >
                    {" "}
                    {stakerFees}usd{" "}
                  </Text>
                </ProgressText>
              )}
              {devFees && (
                <ProgressText>
                  <Text color="#887263" fontSize="16px">
                    Dev Fees
                  </Text>
                  <Text
                    color="#424945"
                    fontSize="16px"
                    fontWeight="400"
                    style={{ letterSpacing: "1.5px" }}
                  >
                    {" "}
                    {devFees}usd{" "}
                  </Text>
                </ProgressText>
              )}
            </TextAlignMent>
          </Grid>
        </SubCard>
      </>
    );
  }
  return (
    <>
      <SubCardContainer>
        <SubCard2>
          <TextAlignMent>
            <ProgressText>
              <Text color="#887263" fontSize="16px">
                Total Supply
              </Text>
              <Text
                color="#424945"
                fontSize="16px"
                fontWeight="400"
                style={{
                  display: "flex",
                  alignItems: "center",
                  letterSpacing: "1.5px",
                }}
              >
                {" "}
                {numberWithCommas(totalSuply.toFixed(2))}
                <Text color="#887263" fontSize="12px" ml="5px">
                  {" "}
                  CNT
                </Text>
              </Text>
            </ProgressText>
            <ProgressText>
              <Text color="#887263" fontSize="16px">
                CNT Rewards / Day
              </Text>
              <Text
                color="#424945"
                fontSize="16px"
                fontWeight="400"
                style={{
                  display: "flex",
                  alignItems: "center",
                  letterSpacing: "1.5px",
                }}
              >
                {numberWithCommas(34560 * 0.75)}
                <Text color="#887263" fontSize="12px" ml="5px">
                  {" "}
                  CNT
                </Text>
              </Text>
            </ProgressText>
            <ProgressText>
              <Text color="#887263" fontSize="16px">
                CNT Rewards / Block
              </Text>
              <Text
                color="#424945"
                fontSize="16px"
                fontWeight="400"
                style={{
                  display: "flex",
                  alignItems: "center",
                  letterSpacing: "1.5px",
                }}
              >
                {numberWithCommas(0.75)}
                <Text color="#887263" fontSize="12px" ml="5px">
                  {" "}
                  CNT
                </Text>
              </Text>
            </ProgressText>
            {totalFees && (
              <ProgressText style={{ marginBottom: "0px" }}>
                <Text color="#887263" fontSize="16px">
                  Total Fees (24 Hrs)
                </Text>
                <Text
                  color="#424945"
                  fontSize="16px"
                  fontWeight="400"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    letterSpacing: "1.5px",
                  }}
                >
                  {totalFees}usd{" "}
                </Text>
              </ProgressText>
            )}
          </TextAlignMent>
        </SubCard2>
        <div style={{ margin: "0px 10px" }} />{" "}
        <SubCard2>
          <TextAlignMent>
            {lpFees && (
              <ProgressText>
                <Text color="#887263" fontSize="16px">
                  LP Fees
                </Text>
                <Text
                  color="#424945"
                  fontSize="16px"
                  fontWeight="400"
                  letterSpacing="1.5px"
                >
                  {" "}
                  {lpFees}usd{" "}
                </Text>
              </ProgressText>
            )}
            {burnerFees && (
              <ProgressText>
                <Text color="#887263" fontSize="16px">
                  Burner Allocation
                </Text>
                <Text
                  color="#424945"
                  fontSize="16px"
                  fontWeight="400"
                  style={{ letterSpacing: "1.5px" }}
                >
                  {" "}
                  {burnerFees}usd{" "}
                </Text>
              </ProgressText>
            )}
            {stakerFees && (
              <ProgressText>
                <Text color="#887263" fontSize="16x">
                  Staker Distrubution
                </Text>
                <Text
                  color="#424945"
                  fontSize="16px"
                  fontWeight="400"
                  style={{ letterSpacing: "1.5px" }}
                >
                  {" "}
                  {stakerFees}usd{" "}
                </Text>
              </ProgressText>
            )}
            {devFees && (
              <ProgressText style={{ marginBottom: "0px" }}>
                <Text color="#887263" fontSize="16px">
                  Dev Fees
                </Text>
                <Text
                  color="#424945"
                  fontSize="16px"
                  fontWeight="400"
                  style={{ letterSpacing: "1.5px" }}
                >
                  {" "}
                  {devFees}usd{" "}
                </Text>
              </ProgressText>
            )}
          </TextAlignMent>
        </SubCard2>
      </SubCardContainer>

      <div style={{ margin: "20px 0" }} />

      <Card>
        <ProgressText style={{ marginBottom: "15px", flexDirection: "column" }}>
          <Text color="#424945" fontSize="18px" fontWeight="700">
            CNT & Summary
          </Text>
          <Text color="#887263" fontSize="12px" ml="5px" textAlign="center">
            * Amount allocated through mining is distributed every second
          </Text>
        </ProgressText>

        <ProgressText
          style={{
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}
        >
          <ProgressItemText>
            <Text color="#887263" fontSize="15px" textAlign="center">
              Circulating Supply
            </Text>
            <Text
              color="#2082E9"
              fontSize="22px"
              fontWeight="700"
              style={{ display: "flex", alignItems: "center" }}
            >
              {numberWithCommas(circulatingSupply)}{" "}
              <Text color="#887263" fontSize="15px" ml="8px">
                {" "}
                CNT{" "}
              </Text>
            </Text>
          </ProgressItemText>
          <ProgressItemText>
            <Text color="#887263" fontSize="15px" textAlign="center">
              Total Burned
            </Text>
            <Text
              color="#f55c47"
              fontSize="22px"
              fontWeight="700"
              style={{ display: "flex", alignItems: "center" }}
            >
              {numberWithCommas(burnedSupply)}{" "}
              <Text color="#887263" fontSize="15px" ml="8px">
                {" "}
                CNT{" "}
              </Text>
            </Text>
          </ProgressItemText>
          <ProgressItemText>
            <Text color="#887263" fontSize="15px" textAlign="center">
              Max Supply
            </Text>
            <Text
              color="#424945"
              fontSize="22px"
              fontWeight="700"
              style={{ display: "flex", alignItems: "center" }}
            >
              {numberWithCommas(100000000)}{" "}
              <Text color="#887263" fontSize="15px" ml="8px">
                {" "}
                CNT
              </Text>
            </Text>
          </ProgressItemText>
        </ProgressText>

        <BarParent>
          <BlueBar progressVal={progressBar} />
          <RedbBar progressVal={burnedProgress} marginVal={progressBar} />
        </BarParent>
      </Card>
    </>
  );
};

export default CardValue;
