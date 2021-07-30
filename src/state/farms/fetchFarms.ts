import BigNumber from "bignumber.js";
import erc20 from "config/abi/erc20.json";
import farmABI from "config/abi/farm.json";
import multicall from "utils/multicall";
import { getAddress, getFarmAddress } from "utils/addressHelpers";
import farmsConfig from "config/constants/farms";

const fetchFarms = async () => {
  const data = await Promise.all(
    farmsConfig.map(async (farmConfig) => {
      const lpAdress = getAddress(farmConfig.lpAddresses);
      const calls = [
        // Balance of token in the LP contract
        {
          address: getAddress(farmConfig.tokenAddresses),
          name: "balanceOf",
          params: [lpAdress],
        },
        // Balance of quote token on LP contract
        {
          address: getAddress(farmConfig.quoteTokenAdresses),
          name: "balanceOf",
          params: [lpAdress],
        },
        // Balance of LP tokens in the master chef contract
        {
          address: lpAdress,
          name: "balanceOf",
          params: [getFarmAddress()],
        },
        // Total supply of LP tokens
        {
          address: lpAdress,
          name: "totalSupply",
        },
        // Token decimals
        {
          address: getAddress(farmConfig.tokenAddresses),
          name: "decimals",
        },
        // Quote token decimals
        {
          address: getAddress(farmConfig.quoteTokenAdresses),
          name: "decimals",
        },
      ];

      const [
        tokenBalanceLP,
        quoteTokenBlanceLP,
        lpTokenBalanceMC,
        lpTotalSupply,
        tokenDecimals,
        quoteTokenDecimals,
      ] = await multicall(erc20, calls);

      // Ratio in % a LP tokens that are in staking, vs the total number in circulation
      const lpTokenRatio = new BigNumber(lpTokenBalanceMC).div(
        new BigNumber(lpTotalSupply)
      );

      // Total value in staking in quote token value
      const lpTotalInQuoteToken = new BigNumber(quoteTokenBlanceLP)
        .div(new BigNumber(10).pow(18))
        .times(new BigNumber(2))
        .times(lpTokenRatio);

      // Amount of token in the LP that are considered staking (i.e amount of token * lp ratio)
      const tokenAmount = new BigNumber(tokenBalanceLP)
        .div(new BigNumber(10).pow(tokenDecimals))
        .times(lpTokenRatio);
      const quoteTokenAmount = new BigNumber(quoteTokenBlanceLP)
        .div(new BigNumber(10).pow(quoteTokenDecimals))
        .times(lpTokenRatio);

      const [info, totalAllocPoint] = await multicall(farmABI, [
        {
          address: getFarmAddress(),
          name: "poolInfo",
          params: [farmConfig.pid],
        },
        {
          address: getFarmAddress(),
          name: "totalAllocPoint",
        },
      ]);

      const allocPoint = new BigNumber(info.allocPoint._hex);
      const poolHarvestInterval = new BigNumber(info.harvestInterval._hex);

      const poolWeight = allocPoint.div(new BigNumber(totalAllocPoint));

      return {
        ...farmConfig,
        tokenAmount: tokenAmount.toJSON(),
        quoteTokenAmount: quoteTokenAmount.toJSON(),
        lpTotalInQuoteToken: lpTotalInQuoteToken.toJSON(),
        tokenPriceVsQuote: quoteTokenAmount.div(tokenAmount).toJSON(),
        poolWeight: poolWeight.toJSON(),
        multiplier: `${allocPoint.div(100).toString()}X`,
        poolHarvestInterval: poolHarvestInterval.toString(),
        lpTotalSupply: lpTokenBalanceMC,
      };
    })
  );
  return data;
};

export default fetchFarms;
