/* eslint-disable react/no-danger */
import React, { useState, useEffect, useMemo, useRef } from "react";
import { Route, useRouteMatch } from "react-router-dom";
import { LinkExternal, Text } from "cryption-uikit";
import BigNumber from "bignumber.js";
import orderBy from "lodash/orderBy";
import Container from "@material-ui/core/Container";
import { PoolCategory } from "config/constants/types";
import partition from "lodash/partition";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import { useWeb3React } from "@web3-react/core";
import { usePools, useBlock } from "state/hooks";
import { getCakeContract, getCNTStakerContract } from "utils/contractHelpers";
import cntMascot from "images/Cryption Network Mascot-01.png";
import PoolTabButtons from "./components/PoolTabButtons";
// import FlexLayout from "components/layout/Flex";
// import pools from "config/constants/pools";
import PoolCard from "./components/PoolCard";
import MrCNTaah from "../../images/MrCNTaah.png";

const NUMBER_OF_POOLS_VISIBLE = 20;
const Farm: React.FC = () => {
  const loadMoreRef = useRef<HTMLDivElement>(null);
  const { path } = useRouteMatch();
  const cake = getCakeContract();
  const { account } = useWeb3React("web3");
  const pools = usePools(account);
  const [numberOfPoolsVisible, setNumberOfPoolsVisible] = useState(
    NUMBER_OF_POOLS_VISIBLE
  );
  const [observerIsSet, setObserverIsSet] = useState(false);
  const [stakedOnly, setStakedOnly] = useState(false);
  const currentBlock = useBlock();
  const [totalSupply, setTotalSupply] = useState(null);
  const [finishedPools, openPools] = useMemo(
    () =>
      partition(
        pools,
        (pool) =>
          pool.isFinished ||
          parseInt(currentBlock.toString(), 10) > pool.endBlock
      ),
    [currentBlock, pools]
  );
  const stakedOnlyFinishedPools = useMemo(
    () =>
      finishedPools.filter(
        (pool) =>
          pool.userData &&
          new BigNumber(pool.userData.stakedBalance).isGreaterThan(0)
      ),
    [finishedPools]
  );
  const stakedOnlyOpenPools = useMemo(
    () =>
      openPools.filter(
        (pool) =>
          pool.userData &&
          new BigNumber(pool.userData.stakedBalance).isGreaterThan(0)
      ),
    [openPools]
  );
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    async function fetchTotalSupply() {
      const xCNTContract = getCNTStakerContract();
      const supply = await xCNTContract.methods.totalSupply().call();
      setTotalSupply(new BigNumber(supply));
    }
    if (cake && totalSupply !== null) {
      fetchTotalSupply();
    }
    const showMorePools = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setNumberOfPoolsVisible(
          (poolsCurrentlyVisible) =>
            poolsCurrentlyVisible + NUMBER_OF_POOLS_VISIBLE
        );
      }
    };

    if (!observerIsSet) {
      const loadMoreObserver = new IntersectionObserver(showMorePools, {
        rootMargin: "0px",
        threshold: 1,
      });
      loadMoreObserver.observe(loadMoreRef.current);
      setObserverIsSet(true);
    }
  }, [cake, observerIsSet, setTotalSupply, totalSupply]);
  return (
    <div>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={6} lg={6} xl={6}>
            <CNHeading>Pools</CNHeading>
            <Text fontSize="20px" color="#99a3ba">
              75% of the rewards will be sent to reward manager and will be
              vested as per the schedule.{" "}
              <LinkExternal href="https://docs.cryption.network/products/reward-manager">
                Learn more
              </LinkExternal>
            </Text>
          </Grid>
          <Grid item xs={12} md={6} lg={6} xl={6}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={cntMascot} alt="Cryption Netwrok" width="250px" />
            </div>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg">
        <PoolTabButtons
          stackedOnly={stakedOnly}
          setStackedOnly={setStakedOnly}
        />
        <Route exact path={`${path}`}>
          <Grid
            container
            spacing={3}
            style={{ margin: "30px 0px" }}
            justify="center"
          >
            {stakedOnly
              ? orderBy(stakedOnlyOpenPools, ["sortOrder"])
                  .slice(0, numberOfPoolsVisible)
                  .map(
                    (pool) =>
                      pool.poolCategory === PoolCategory.COMMUNITY && (
                        <Grid item xs={12} md={6} lg={4} xl={4}>
                          <PoolCard key={pool.sousId} pool={pool} />{" "}
                        </Grid>
                      )
                  )
              : orderBy(openPools, ["sortOrder"])
                  .slice(0, numberOfPoolsVisible)
                  .map(
                    (pool) =>
                      pool.poolCategory === PoolCategory.COMMUNITY && (
                        <Grid item xs={12} md={6} lg={4} xl={4}>
                          <PoolCard key={pool.sousId} pool={pool} />{" "}
                        </Grid>
                      )
                  )}
          </Grid>
          {((stakedOnly && stakedOnlyOpenPools.length === 0) ||
            (!stakedOnly && openPools.length === 0)) && (
            <div
              style={{
                width: "100%",
                display: "grid",
                justifyContent: "center",
              }}
            >
              <img src={MrCNTaah} alt="Cannot find" width="250px" />
            </div>
          )}
        </Route>
        <Route path={`${path}/history`}>
          <Grid
            container
            spacing={3}
            style={{ margin: "30px 0px" }}
            justify="center"
          >
            {stakedOnly
              ? orderBy(stakedOnlyFinishedPools, ["sortOrder"])
                  .slice(0, numberOfPoolsVisible)
                  .map((pool) => (
                    <Grid item xs={12} md={6} lg={4} xl={4}>
                      <PoolCard key={pool.sousId} pool={pool} />
                    </Grid>
                  ))
              : orderBy(finishedPools, ["sortOrder"])
                  .slice(0, numberOfPoolsVisible)
                  .map((pool) => (
                    <Grid item xs={12} md={6} lg={4} xl={4}>
                      <PoolCard key={pool.sousId} pool={pool} />
                    </Grid>
                  ))}
          </Grid>
          {((stakedOnly && stakedOnlyFinishedPools.length === 0) ||
            (!stakedOnly && finishedPools.length === 0)) && (
            <div
              style={{
                width: "100%",
                display: "grid",
                justifyContent: "center",
              }}
            >
              <img src={MrCNTaah} alt="Cannot find" width="250px" />
            </div>
          )}
        </Route>
        <div ref={loadMoreRef} />
      </Container>
    </div>
  );
};

const CNHeading = styled.div`
  font-size: 45px;
  font-weight: bold;
  text-align: center;
  color: white;
  margin-bottom: 20px;
`;

export default Farm;
