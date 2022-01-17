/* eslint-disable dot-notation */
import { useCallback } from "react";
import { useWeb3React } from "@web3-react/core";
import { useDispatch } from "react-redux";
import { fetchFarmUserDataAsync } from "state/actions";
import { stake, vaultstake, GaslessStake } from "utils/callHelpers";
import { useProfile, useToast } from "state/hooks";
import { fetchVaultUserDataAsync } from "state/vaults";
import {
  useFarmWrapper,
  useMasterchef,
  useMasterchefGasless,
  useVaultchef,
} from "./useContract";

export const useStake = (pid: number) => {
  const dispatch = useDispatch();
  const { account, library } = useWeb3React("web3");
  const masterChefContract = useMasterchef();
  const masterChefGaslessContract = useMasterchefGasless();
  const { toastInfo, toastError, toastSuccess } = useToast();
  const { metaTranscation } = useProfile();

  const handleStake = useCallback(
    async (amount: string) => {
      let resp;
      try {
        toastInfo("Processing...", `You requested to Deposited `);
        if (metaTranscation) {
          resp = await GaslessStake(
            masterChefGaslessContract,
            pid,
            amount,
            account,
            library
          );

          // @ts-ignore
          if (typeof resp !== "undefined" && resp.code === 4001) {
            toastError("canceled", ` signautures rejected`);
          } else {
            toastSuccess("Success", ` Deposited successfully`);
          }

          dispatch(fetchFarmUserDataAsync(account));
        } else {
          await stake(masterChefContract, pid, amount, account);
          toastSuccess("Success", ` Deposited successfully`);
          dispatch(fetchFarmUserDataAsync(account));
        }
      } catch (error) {
        if (
          error["message"] ===
            "MetaMask Tx Signature: User denied transaction signature." ||
          error["message"] ===
            "MetaMask Message Signature: User denied message signature." ||
          error["code"] === 4001
        ) {
          // toastInfo("canceled...", `cancelled signature `);
          toastError("canceled", ` signautures rejected`);
        } else {
          toastError("Error...", `Failed to Deposit`);
        }
      }
    },
    [
      account,
      dispatch,
      masterChefGaslessContract,
      masterChefContract,
      pid,
      metaTranscation,
      library,
      toastInfo,
      toastSuccess,
      toastError,
    ]
  );

  return { onStake: handleStake };
};

export const useStakeSingleSided = (pid: number) => {
  const dispatch = useDispatch();
  const { account } = useWeb3React("web3");
  const farmWrapperContract = useFarmWrapper();
  const { toastInfo, toastError, toastSuccess } = useToast();

  const handleStakeSingleSided = useCallback(
    async (amount: string) => {
      try {
        toastInfo("Processing...", `You requested to Deposited `);
        await stake(farmWrapperContract, pid, amount, account);
        toastSuccess("Success", ` Deposited successfully`);
        dispatch(fetchFarmUserDataAsync(account));
      } catch (error) {
        if (
          error["message"] ===
            "MetaMask Tx Signature: User denied transaction signature." ||
          error["message"] ===
            "MetaMask Message Signature: User denied message signature." ||
          error["code"] === 4001
        ) {
          // toastInfo("canceled...", `cancelled signature `);
          toastError("canceled", ` signautures rejected`);
        } else {
          toastError("Error...", `Failed to Deposit`);
        }
      }
    },
    [
      toastInfo,
      farmWrapperContract,
      pid,
      account,
      toastSuccess,
      dispatch,
      toastError,
    ]
  );

  return { onStakeSingleSided: handleStakeSingleSided };
};

export const useVaultStake = (pid: number, vaultContractAddress: string) => {
  const dispatch = useDispatch();
  const { account } = useWeb3React("web3");
  const vaultContract = useVaultchef(vaultContractAddress);
  const { toastInfo, toastError, toastSuccess } = useToast();
  const { metaTranscation } = useProfile();

  const handleStake = useCallback(
    async (amount: string) => {
      let resp;
      try {
        toastInfo("Processing...", `You requested to Deposited `);
        if (metaTranscation) {
          resp = await vaultstake(vaultContract, pid, amount, account);

          // @ts-ignore
          if (typeof resp !== "undefined" && resp.code === 4001) {
            toastError("Cancelled", "Signautures rejected");
          } else {
            toastSuccess("Success", "Deposited successfully");
          }

          dispatch(fetchVaultUserDataAsync(account));
        } else {
          await vaultstake(vaultContract, pid, amount, account);
          toastSuccess("Success", "Deposited successfully");
          dispatch(fetchVaultUserDataAsync(account));
        }
      } catch (error) {
        if (
          error["message"] ===
            "MetaMask Tx Signature: User denied transaction signature." ||
          error["message"] ===
            "MetaMask Message Signature: User denied message signature." ||
          error["code"] === 4001
        ) {
          toastError("Cancelled", "Signautures rejected");
        } else {
          toastError("Error...", "Failed to Deposit");
        }
      }
    },
    [
      account,
      dispatch,
      vaultContract,
      pid,
      metaTranscation,
      toastInfo,
      toastSuccess,
      toastError,
    ]
  );

  return { onStake: handleStake };
};

export default useStake;
