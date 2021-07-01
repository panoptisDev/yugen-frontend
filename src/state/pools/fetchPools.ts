import poolsConfig from "config/constants/pools";
import sousChefABI from "config/abi/sousChef.json";
import wbnbABI from "config/abi/weth.json";
import { QuoteToken } from "config/constants/types";
import multicall from "utils/multicall";
import { getAddress, getWbnbAddress } from "utils/addressHelpers";
import BigNumber from "bignumber.js";

export const fetchPoolsBlockLimits = async () => {
  const poolsWithEnd = poolsConfig;

  const callsFarmInfo = poolsWithEnd.map((poolConfig) => {
    return {
      address: getAddress(poolConfig.contractAddress),
      name: "farmInfo",
    };
  });

  const starts = await multicall(sousChefABI, callsFarmInfo);
  const ends = await multicall(sousChefABI, callsFarmInfo);

  return poolsWithEnd.map((cakePoolConfig, index) => {
    const startBlock = starts[index].startBlock._hex;
    const endBlock = ends[index].endBlock._hex;
    const poolHarvestIntervall = starts[index].harvestInterval._hex;
    return {
      sousId: cakePoolConfig.sousId,
      startBlock: new BigNumber(startBlock).toJSON(),
      endBlock: new BigNumber(endBlock).toJSON(),
      poolHarvestInterval: new BigNumber(poolHarvestIntervall).toJSON(),
    };
  });
};

export const fetchPoolsHarvestInterval = async () => {
  const poolsWithEnd = poolsConfig;

  const callsFarmInfo = poolsWithEnd.map((poolConfig) => {
    return {
      address: getAddress(poolConfig.contractAddress),
      name: "farmInfo",
    };
  });

  const starts = await multicall(sousChefABI, callsFarmInfo);

  return poolsWithEnd.map((cakePoolConfig, index) => {
    const poolHarvestIntervall = starts[index].harvestInterval._hex;
    return {
      sousId: cakePoolConfig.sousId,
      poolHarvestInterval: new BigNumber(poolHarvestIntervall).toJSON(),
    };
  });
};

export const fetchPoolsTotalStatking = async () => {
  const nonBnbPools = poolsConfig.filter(
    (p) => p.stakingTokenName !== QuoteToken.BNB
  );
  const bnbPool = poolsConfig.filter(
    (p) => p.stakingTokenName === QuoteToken.BNB
  );

  const callsNonBnbPools = nonBnbPools.map((poolConfig) => {
    return {
      address: getAddress(poolConfig.contractAddress),
      name: "totalInputTokensStaked",
    };
  });

  const callsBnbPools = bnbPool.map((poolConfig) => {
    return {
      address: getWbnbAddress(),
      name: "balanceOf",
      params: [getAddress(poolConfig.contractAddress)],
    };
  });

  const nonBnbPoolsTotalStaked = await multicall(sousChefABI, callsNonBnbPools);
  const bnbPoolsTotalStaked = await multicall(wbnbABI, callsBnbPools);

  return [
    ...nonBnbPools.map((p, index) => ({
      sousId: p.sousId,
      totalStaked: new BigNumber(nonBnbPoolsTotalStaked[index]).toJSON(),
    })),
    ...bnbPool.map((p, index) => ({
      sousId: p.sousId,
      totalStaked: new BigNumber(bnbPoolsTotalStaked[index]).toJSON(),
    })),
  ];
};
