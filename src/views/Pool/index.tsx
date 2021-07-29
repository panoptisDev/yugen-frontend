/* eslint-disable no-nested-ternary */
import React, { useContext, useMemo } from "react";
import styled, { ThemeContext } from "styled-components";
import { Pair } from "@cryption-network/polydex-sdk";
import { Button, CardBody, Text, Card } from "cryption-uikit";
import { Link } from "react-router-dom";
import CardNav from "components/CardNav";
import Question from "components/QuestionHelper";
import FullPositionCard from "components/PositionCard";
import { useTokenBalancesWithLoadingIndicator } from "state/wallet/hooks";
import { StyledInternalLink } from "components/Shared";
import { LightCard } from "components/Card";
import { RowBetween } from "components/Row";
import { AutoColumn } from "components/Column";

import { useActiveWeb3React } from "hooks";
import { usePairs } from "data/Reserves";
import { toV2LiquidityToken, useTrackedTokenPairs } from "state/user/hooks";
import { Dots } from "components/swap/styleds";
import useI18n from "hooks/useI18n";
import PageHeader from "components/PageHeader";
// import AppBody from '../AppBody'
import "./index.css";

const ContainerCard = styled(Card)`
  border-radius: 0.625rem !important;
  padding: 30px;
  background-color: #1e202a;
  display: flex;
  margin-top: 70px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export default function Pool() {
  const theme = useContext(ThemeContext);
  const { account } = useActiveWeb3React();
  const TranslateString = useI18n();

  // fetch the user's balances of all tracked V2 LP tokens
  const trackedTokenPairs = useTrackedTokenPairs();
  const tokenPairsWithLiquidityTokens = useMemo(
    () =>
      trackedTokenPairs.map((tokens) => ({
        liquidityToken: toV2LiquidityToken(tokens),
        tokens,
      })),
    [trackedTokenPairs]
  );
  const liquidityTokens = useMemo(
    () => tokenPairsWithLiquidityTokens.map((tpwlt) => tpwlt.liquidityToken),
    [tokenPairsWithLiquidityTokens]
  );
  const [v2PairsBalances, fetchingV2PairBalances] =
    useTokenBalancesWithLoadingIndicator(account ?? undefined, liquidityTokens);

  // fetch the reserves for all V2 pools in which the user has a balance
  const liquidityTokensWithBalances = useMemo(
    () =>
      tokenPairsWithLiquidityTokens.filter(({ liquidityToken }) =>
        v2PairsBalances[liquidityToken.address]?.greaterThan("0")
      ),
    [tokenPairsWithLiquidityTokens, v2PairsBalances]
  );

  const v2Pairs = usePairs(
    liquidityTokensWithBalances.map(({ tokens }) => tokens)
  );
  const v2IsLoading =
    fetchingV2PairBalances ||
    v2Pairs?.length < liquidityTokensWithBalances.length ||
    v2Pairs?.some((V2Pair) => !V2Pair);

  const allV2PairsWithLiquidity = v2Pairs
    .map(([, pair]) => pair)
    .filter((v2Pair): v2Pair is Pair => Boolean(v2Pair));
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "70px",
      }}
    >
      <ContainerCard>
        <CardNav activeIndex={1} />
        <PageHeader
          title={TranslateString(262, "Liquidity")}
          description={TranslateString(
            1168,
            "Add liquidity to receive LP tokens"
          )}
        >
          <Button
            id="join-pool-button"
            as={Link}
            to="/add/ETH/0xD1e6354fb05bF72A8909266203dAb80947dcEccF"
            className="add-liquidity"
          >
            {TranslateString(168, "Add Liquidity")}
          </Button>
        </PageHeader>
        <AutoColumn gap="lg" justify="center">
          <CardBody>
            <AutoColumn gap="12px" style={{ width: "100%" }}>
              <RowBetween padding="0 8px">
                <Text color={theme.colors.text}>
                  {TranslateString(107, "Your Liquidity")}
                </Text>
                <Question
                  text={TranslateString(
                    1170,
                    "When you add liquidity, you are given pool tokens that represent your share. If you don’t see a pool you joined in this list, try importing a pool below."
                  )}
                />
              </RowBetween>

              {!account ? (
                <LightCard padding="40px">
                  <Text color="textDisabled" textAlign="center">
                    {TranslateString(
                      156,
                      "Connect to a wallet to view your liquidity."
                    )}
                  </Text>
                </LightCard>
              ) : v2IsLoading ? (
                <LightCard padding="40px">
                  <Text color="textDisabled" textAlign="center">
                    <Dots>Loading</Dots>
                  </Text>
                </LightCard>
              ) : allV2PairsWithLiquidity?.length > 0 ? (
                <>
                  {allV2PairsWithLiquidity.map((v2Pair) => (
                    <FullPositionCard
                      key={v2Pair.liquidityToken.address}
                      pair={v2Pair}
                    />
                  ))}
                </>
              ) : (
                <LightCard padding="40px">
                  <Text color="textDisabled" textAlign="center">
                    {TranslateString(104, "No liquidity found.")}
                  </Text>
                </LightCard>
              )}

              <div>
                <Text
                  fontSize="14px"
                  style={{ padding: ".5rem 0 .5rem 0" }}
                  color="white"
                >
                  {TranslateString(106, "Don't see a pool you joined?")}{" "}
                  <StyledInternalLink
                    id="import-pool-link"
                    to="/find"
                    color="#2082E9"
                    style={{ color: "#2082E9" }}
                  >
                    {TranslateString(108, "Import it.")}
                  </StyledInternalLink>
                </Text>
                <Text
                  fontSize="14px"
                  style={{ padding: ".5rem 0 .5rem 0" }}
                  color="white"
                >
                  {TranslateString(
                    1172,
                    "Or, if you staked your LP tokens in a farm, unstake them to see them here."
                  )}
                </Text>
              </div>
            </AutoColumn>
          </CardBody>
        </AutoColumn>
      </ContainerCard>
    </div>
  );
}
