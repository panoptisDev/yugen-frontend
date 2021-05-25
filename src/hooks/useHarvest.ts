import { useCallback } from "react";
import { useWeb3React } from "@web3-react/core";
import { useDispatch } from "react-redux";
import { useProfile } from "state/hooks";
import {
  fetchFarmUserDataAsync,
  updateUserBalance,
  updateUserPendingReward,
} from "state/actions";
import {
  soushHarvest,
  soushHarvestBnb,
  harvest,
  GaslessHarvest,
} from "utils/callHelpers";
import {
  useMasterchef,
  useSousChef,
  useMasterchefGasless,
} from "./useContract";

export const useHarvest = (farmPid: number) => {
  const dispatch = useDispatch();
  const { account } = useWeb3React('web3');
  const masterChefContract = useMasterchef();
  const masterChefGaslessContract = useMasterchefGasless();
  const { metaTranscation } = useProfile();

  const handleHarvest = useCallback(async () => {
    let txHash;
    if (metaTranscation) {
      txHash = await GaslessHarvest(
        masterChefGaslessContract,
        farmPid,
        account
      );
      dispatch(fetchFarmUserDataAsync(account));
    } else {
      txHash = await harvest(masterChefContract, farmPid, account);
      dispatch(fetchFarmUserDataAsync(account));
    }
    return txHash;
  }, [
    account,
    dispatch,
    farmPid,
    masterChefContract,
    masterChefGaslessContract,
    metaTranscation,
  ]);

  return { onReward: handleHarvest };
};

export const useAllHarvest = (farmPids: number[]) => {
  const { account } = useWeb3React('web3');
  const masterChefContract = useMasterchef();

  const handleHarvest = useCallback(async () => {
    const harvestPromises = farmPids.reduce((accum, pid) => {
      return [...accum, harvest(masterChefContract, pid, account)];
    }, []);

    return Promise.all(harvestPromises);
  }, [account, farmPids, masterChefContract]);

  return { onReward: handleHarvest };
};

export const useSousHarvest = (sousId, isUsingBnb = false) => {
  const dispatch = useDispatch();
  const { account } = useWeb3React('web3');
  const sousChefContract = useSousChef(sousId);

  const handleHarvest = useCallback(async () => {
    // if (sousId === 0) {
    //   await harvest(masterChefContract, 0, account);
    // } else
    if (isUsingBnb) {
      await soushHarvestBnb(sousChefContract, account);
    } else {
      await soushHarvest(sousChefContract, account);
    }
    dispatch(updateUserPendingReward(sousId, account));
    dispatch(updateUserBalance(sousId, account));
  }, [account, dispatch, isUsingBnb, sousChefContract, sousId]);

  return { onReward: handleHarvest };
};
