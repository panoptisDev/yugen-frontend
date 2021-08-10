import React, { useState } from "react";
import BigNumber from "bignumber.js";
import styled from "styled-components";
import { getBalanceNumber } from "utils/formatBalance";
import useI18n from "hooks/useI18n";
import { ChevronDown, ChevronUp } from "react-feather";
import { Flex, MetamaskIcon } from "cryption-uikit";
import Balance from "components/Balance";
import { CommunityTag, CoreTag, BinanceTag } from "components/Tags";
// import { useBlock } from "state/hooks";
import { PoolCategory } from "config/constants/types";
import { registerToken } from "utils/wallet";

const tags = {
  [PoolCategory.BINANCE]: BinanceTag,
  [PoolCategory.CORE]: CoreTag,
  [PoolCategory.COMMUNITY]: CommunityTag,
};

interface Props {
  projectLink: string;
  decimals: number;
  totalStaked: BigNumber;
  tokenName: string;
  tokenAddress: string;
  tokenDecimals: number;
  startBlock: number;
  endBlock: number;
  isFinished: boolean;
  poolCategory: PoolCategory;
  metamaskImg?: string;
  StakingTokenPrice?: number;
  rewardTokenName?: string;
  rewardTokenAddress?: string;
}

const StyledFooter = styled.div<{ isFinished: boolean }>`
  border-top: 1px solid ${({ theme }) => (theme.isDark ? "#524B63" : "#E9EAEB")};
  color: #86878f;
  padding: 24px;
`;

const StyledDetailsButton = styled.button`
  align-items: center;
  background-color: transparent;
  border: 0;
  color: #2082e9;
  cursor: pointer;
  display: inline-flex;
  font-size: 16px;
  font-weight: 600;
  height: 32px;
  justify-content: center;
  outline: 0;
  padding: 0;
  &:hover {
    opacity: 0.9;
  }

  & > svg {
    margin-left: 4px;
  }
`;

const Details = styled.div`
  margin-top: 24px;
`;

const Row = styled(Flex)`
  align-items: center;
`;

const FlexFull = styled.div`
  flex: 1;
`;
const Label = styled.div`
  font-size: 14px;
`;
const TokenLink = styled.a`
  font-size: 14px;
  text-decoration: none;
  color: #2082e9;
  cursor: pointer;
`;

const CardFooter: React.FC<Props> = ({
  projectLink,
  decimals,
  tokenAddress,
  totalStaked,
  tokenName,
  tokenDecimals,
  isFinished,
  poolCategory,
  metamaskImg,
  StakingTokenPrice,
  rewardTokenName,
  rewardTokenAddress,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const TranslateString = useI18n();
  const Icon = isOpen ? ChevronUp : ChevronDown;

  const handleClick = () => setIsOpen(!isOpen);
  const Tag = tags[poolCategory];

  return (
    <StyledFooter isFinished={isFinished}>
      <Row>
        <FlexFull>
          <Tag />
        </FlexFull>
        <StyledDetailsButton onClick={handleClick}>
          {isOpen
            ? TranslateString(1066, "Hide")
            : TranslateString(658, "Details")}{" "}
          <Icon />
        </StyledDetailsButton>
      </Row>
      {isOpen && (
        <Details>
          <Row mb="4px">
            <FlexFull>
              <Label>{TranslateString(408, "Total Liquidity")}</Label>
            </FlexFull>
            <span>$</span>
            <Balance
              fontSize="14px"
              isDisabled={isFinished}
              value={getBalanceNumber(
                new BigNumber(totalStaked).multipliedBy(
                  new BigNumber(StakingTokenPrice)
                ),
                decimals
              )}
            />
          </Row>
          {/* {blocksUntilStart > 0 && (
            <Row mb="4px">
              <FlexFull>
                <Label>{TranslateString(410, "Start")}:</Label>
              </FlexFull>
              <Balance
                fontSize="14px"
                isDisabled={isFinished}
                value={blocksUntilStart}
                decimals={0}
              />
            </Row>
          )} */}
          {/* {blocksUntilStart === 0 && blocksRemaining > 0 && (
            <Row mb="4px">
              <FlexFull>
                <Label>{TranslateString(410, "End")}:</Label>
              </FlexFull>
              <Balance
                fontSize="14px"
                isDisabled={isFinished}
                value={blocksRemaining}
                decimals={0}
              />
            </Row>
          )} */}
          <Flex mb="5px" mt="10px" justifyContent="center">
            <TokenLink
              onClick={() =>
                registerToken(
                  rewardTokenAddress,
                  rewardTokenName,
                  tokenDecimals,
                  metamaskImg
                )
              }
            >
              Add {rewardTokenName} to Metamask
            </TokenLink>
            <MetamaskIcon height={15} width={15} ml="4px" />
          </Flex>
          <Flex mb="5px" mt="10px" justifyContent="center">
            <TokenLink href={projectLink} target="_blank">
              {TranslateString(412, "View project site")}
            </TokenLink>
          </Flex>
        </Details>
      )}
    </StyledFooter>
  );
};

export default React.memo(CardFooter);
