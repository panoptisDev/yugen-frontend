import { AbiItem } from "web3-utils";
import poolsConfig from "config/constants/pools";
import farmABI from "config/abi/farm.json";
import sousChefABI from "config/abi/sousChef.json";
import erc20ABI from "config/abi/erc20.json";
import { QuoteToken } from "config/constants/types";
import multicall from "utils/multicall";
import { getAddress, getFarmAddress } from "utils/addressHelpers";
import { getWeb3NoAccount } from "utils/web3";
import BigNumber from "bignumber.js";

// Pool 0, Cake / Cake is a different kind of contract (master chef)
// BNB pools use the native BNB token (wrapping ? unwrapping is done at the contract level)
const nonBnbPools = poolsConfig.filter(
  (p) => p.stakingTokenName !== QuoteToken.BNB
);
const bnbPools = poolsConfig.filter(
  (p) => p.stakingTokenName === QuoteToken.BNB
);
const nonMasterPools = poolsConfig;
const web3 = getWeb3NoAccount();
const masterChefContract = new web3.eth.Contract(
  farmABI as unknown as AbiItem,
  getFarmAddress()
);

export const fetchPoolsAllowance = async (account) => {
  const calls = nonBnbPools.map((p) => ({
    address: p.stakingTokenAddress,
    name: "allowance",
    params: [account, getAddress(p.contractAddress)],
  }));

  const allowances = await multicall(erc20ABI, calls);

  return nonBnbPools.reduce(
    (acc, pool, index) => ({
      ...acc,
      [pool.sousId]: new BigNumber(allowances[index]).toJSON(),
    }),
    {}
  );
};

export const fetchUserBalances = async (account) => {
  // Non BNB pools
  const calls = nonBnbPools.map((p) => ({
    address: p.stakingTokenAddress,
    name: "balanceOf",
    params: [account],
  }));
  const tokenBalancesRaw = await multicall(erc20ABI, calls);
  const tokenBalances = nonBnbPools.reduce(
    (acc, pool, index) => ({
      ...acc,
      [pool.sousId]: new BigNumber(tokenBalancesRaw[index]).toJSON(),
    }),
    {}
  );

  // BNB pools
  const bnbBalance = await web3.eth.getBalance(account);
  const bnbBalances = bnbPools.reduce(
    (acc, pool) => ({
      ...acc,
      [pool.sousId]: new BigNumber(bnbBalance).toJSON(),
    }),
    {}
  );

  return { ...tokenBalances, ...bnbBalances };
};

export const fetchUserStakeBalances = async (account) => {
  const calls = nonMasterPools.map((p) => ({
    address: getAddress(p.contractAddress),
    name: "userInfo",
    params: [account],
  }));
  const userInfo = await multicall(sousChefABI, calls);
  const stakedBalances = nonMasterPools.reduce(
    (acc, pool, index) => ({
      ...acc,
      [pool.sousId]: new BigNumber(userInfo[index].amount._hex).toJSON(),
    }),
    {}
  );

  // Cake / Cake pool
  const { amount: masterPoolAmount } = await masterChefContract.methods
    .userInfo("0", account)
    .call();

  return { ...stakedBalances };
};

export const fetchUserPendingRewards = async (account) => {
  const calls = nonMasterPools.map((p) => ({
    address: getAddress(p.contractAddress),
    name: "pendingReward",
    params: [account, "0"],
  }));

  const res = await multicall(sousChefABI, calls);
  const pendingRewards = nonMasterPools.reduce(
    (acc, pool, index) => ({
      ...acc,
      [pool.sousId]: new BigNumber(res[index]).toJSON(),
    }),
    {}
  );

  // Cake / Cake pool
  const pendingReward = await masterChefContract.methods
    .pendingCNT("0", account)
    .call();

  return { ...pendingRewards };
};

export const fetchPoolUserCanHarvestPendingReward = async (account) => {
  const calls = nonMasterPools.map((p) => ({
    address: getAddress(p.contractAddress),
    name: "canHarvest",
    params: [account],
  }));

  const res = await multicall(sousChefABI, calls);
  const userCanHarvest = nonMasterPools.reduce(
    (acc, pool, index) => ({
      ...acc,
      [pool.sousId]: new BigNumber(res[index]).toJSON(),
    }),
    {}
  );

  return { ...userCanHarvest };
};

export const fetchPoolUserHarvestInterval = async (account) => {
  const calls = nonMasterPools.map((p) => ({
    address: getAddress(p.contractAddress),
    name: "getHarvestUntil",
    params: [account],
  }));

  const res = await multicall(sousChefABI, calls);
  const userHarvestInterval = nonMasterPools.reduce(
    (acc, pool, index) => ({
      ...acc,
      [pool.sousId]: new BigNumber(res[index]).toJSON(),
    }),
    {}
  );

  return { ...userHarvestInterval };
};
