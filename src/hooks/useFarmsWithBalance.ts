import { useEffect, useState } from "react";
import BigNumber from "bignumber.js";
import { useWeb3React } from "@web3-react/core";
import multicall from "utils/multicall";
import { getFarmAddress } from "utils/addressHelpers";
import farmABI from "config/abi/farm.json";
import { farmsConfig } from "config/constants";
import { FarmConfig } from "config/constants/types";
import useRefresh from "./useRefresh";

export interface FarmWithBalance extends FarmConfig {
  balance: BigNumber;
}

const useFarmsWithBalance = () => {
  const [farmsWithBalances, setFarmsWithBalances] = useState<FarmWithBalance[]>(
    []
  );
  const { account } = useWeb3React('web3');
  const { fastRefresh } = useRefresh();

  useEffect(() => {
    const fetchBalances = async () => {
      const calls = farmsConfig.map((farm) => ({
        address: getFarmAddress(),
        name: "pendingCNT",
        params: [farm.pid, account],
      }));

      const rawResults = await multicall(farmABI, calls);
      const results = farmsConfig.map((farm, index) => ({
        ...farm,
        balance: new BigNumber(rawResults[index]),
      }));

      setFarmsWithBalances(results);
    };

    if (account) {
      fetchBalances();
    }
  }, [account, fastRefresh]);

  return farmsWithBalances;
};

export default useFarmsWithBalance;
