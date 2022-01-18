import contracts from "./contracts";
import { FarmConfig, QuoteToken } from "./types";

const farmsEthereumMainnet: FarmConfig[] = [];
const farmsEthereumTestnet: FarmConfig[] = [];
const farmsMaticMainnet: FarmConfig[] = [
  {
    pid: 0,
    isPool: false,
    tag: "Powered by QuickSwap",
    lpSymbol: "QUICK-wMATIC",
    tempApr: "29.55",
    lpAddresses: {
      97: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      56: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      80001: "0x978d374800eb7861283ffa0326bb4c853045b919", // QUICK-wMATIC
      5: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      137: "0x019ba0325f1988213D448b3472fA1cf8D07618d7",
      1: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      250: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
      4002: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
    },
    tokenSymbol: "QUICK-wMATIC",
    volatility: "binance",
    tokenAddresses: {
      97: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      56: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      80001: "0x9293C7381b9cEA6B27Ce9069f26746e7D43bC29d", // QUICK
      5: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      137: "0x831753dd7087cac61ab5644b308642cc1c33dc13",
      1: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      250: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
      4002: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
    },
    quoteTokenSymbol: QuoteToken.WMATIC,
    quoteTokenAdresses: contracts.wbnb,
    quoteTokenCoinGeckoId: "wmatic",
    singleSidedToken: {
      97: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      56: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      80001: "0x9c3c9283d3e44854697cd22d3faa240cfb032889", // wMATIC
      5: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      137: "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270",
      1: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      250: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
      4002: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
    },
    singleSidedTokenName: "WMATIC",
    singleSidedToToken: {
      97: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      56: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      80001: "0x9293C7381b9cEA6B27Ce9069f26746e7D43bC29d", // QUICK
      5: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      137: "0x831753dd7087cac61ab5644b308642cc1c33dc13",
      1: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      250: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
      4002: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
    },
    singleSidedToTokenName: "QUICK",
    getLpLink:
      "https://quickswap.exchange/#/add/0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270/0x831753dd7087cac61ab5644b308642cc1c33dc13",
  },
  // {
  //   pid: 1,
  // isPool:false,
  //   tag: "Powered by CafeSwap",
  //   lpSymbol: "pBREW-wETH",
  //   tempApr: "130.7",
  //   lpAddresses: {
  //     97: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
  //     56: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
  //     80001: "0x978d374800eb7861283ffa0326bb4c853045b919",
  //     5: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
  //     137: "0x3EF3a87d745FABCAc255E9352Ea402d20F922C1C",
  //     1: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
  //     250: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
  //     4002: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
  //   },
  //   tokenSymbol: "pBREW-wETH",
  //   volatility: "failure",
  //   tokenAddresses: {
  //     97: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
  //     56: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
  //     80001: "0x9293C7381b9cEA6B27Ce9069f26746e7D43bC29d", // pBREW
  //     5: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
  //     137: "0xb5106a3277718ecad2f20ab6b86ce0fee7a21f09",
  //     1: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
  //     250: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
  //     4002: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
  //   },
  //   quoteTokenSymbol: QuoteToken.ETH,
  //   quoteTokenAdresses: contracts.eth,
  //   quoteTokenCoinGeckoId: "ethereum",
  //   singleSidedToken: {
  //     97: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
  //     56: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
  //     80001: "0x9c3c9283d3e44854697cd22d3faa240cfb032889", // wETH
  //     5: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
  //     137: "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
  //     1: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
  //     250: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
  //     4002: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
  //   },
  //   singleSidedTokenName: "wETH",
  //   singleSidedToToken: {
  //     97: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
  //     56: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
  //     80001: "0x9293C7381b9cEA6B27Ce9069f26746e7D43bC29d", // pBREW
  //     5: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
  //     137: "0xb5106a3277718ecad2f20ab6b86ce0fee7a21f09",
  //     1: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
  //     250: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
  //     4002: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
  //   },
  //   singleSidedToTokenName: "pBREW",
  // getLpLink:
  //   "https://polygondex.cafeswap.finance/#/add/0x7ceb23fd6bc0add59e62ac25578270cff1b9f619/0xb5106a3277718ecad2f20ab6b86ce0fee7a21f09",
  // },
  {
    pid: 2,
    isPool: false,
    tag: "Powered by QuickSwap",
    lpSymbol: "wMATIC-wETH",
    tempApr: "12.36",
    lpAddresses: {
      97: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      56: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      80001: "0x978d374800eb7861283ffa0326bb4c853045b919",
      5: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      137: "0xadbF1854e5883eB8aa7BAf50705338739e558E5b",
      1: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      250: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
      4002: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
    },
    tokenSymbol: "wMATIC-wETH",
    volatility: "failure",
    tokenAddresses: {
      97: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      56: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      80001: "0x9293C7381b9cEA6B27Ce9069f26746e7D43bC29d", // wETH
      5: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      137: "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
      1: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      250: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
      4002: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
    },
    quoteTokenSymbol: QuoteToken.WMATIC,
    quoteTokenAdresses: contracts.wbnb,
    quoteTokenCoinGeckoId: "wmatic",
    singleSidedToken: {
      97: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      56: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      80001: "0x9c3c9283d3e44854697cd22d3faa240cfb032889", // wMATIC
      5: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      137: "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270",
      1: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      250: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
      4002: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
    },
    singleSidedTokenName: "WMATIC",
    singleSidedToToken: {
      97: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      56: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      80001: "0x9293C7381b9cEA6B27Ce9069f26746e7D43bC29d", // wETH
      5: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      137: "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
      1: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      250: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
      4002: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
    },
    singleSidedToTokenName: "wETH",
    getLpLink:
      "https://quickswap.exchange/#/add/0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270/0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
  },
  {
    pid: 3,
    isPool: false,
    tag: "Powered by Nacho Finance",
    lpSymbol: "wETH-NACHO",
    tempApr: "357.89",
    lpAddresses: {
      97: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      56: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      80001: "0x978d374800eb7861283ffa0326bb4c853045b919",
      5: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      137: "0x8D25fec513309F2d329d99d6F677D46C831FDEe8",
      1: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      250: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
      4002: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
    },
    tokenSymbol: "wETH-NACHO",
    volatility: "success",
    tokenAddresses: {
      97: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      56: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      80001: "0x9293C7381b9cEA6B27Ce9069f26746e7D43bC29d", // NACHO
      5: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      137: "0xcd86152047e800d67bdf00a4c635a8b6c0e5c4c2",
      1: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      250: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
      4002: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
    },
    quoteTokenSymbol: QuoteToken.ETH,
    quoteTokenAdresses: contracts.eth,
    quoteTokenCoinGeckoId: "ethereum",
    singleSidedToken: {
      97: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      56: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      80001: "0x9c3c9283d3e44854697cd22d3faa240cfb032889", // wETH
      5: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      137: "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
      1: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      250: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
      4002: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
    },
    singleSidedTokenName: "wETH",
    singleSidedToToken: {
      97: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      56: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      80001: "0x9293C7381b9cEA6B27Ce9069f26746e7D43bC29d", // NACHO
      5: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      137: "0xcd86152047e800d67bdf00a4c635a8b6c0e5c4c2",
      1: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      250: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
      4002: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
    },
    singleSidedToTokenName: "NACHO",
    showSingleSided: true,
    getLpLink:
      "https://quickswap.exchange/#/add/0x7ceb23fd6bc0add59e62ac25578270cff1b9f619/0xcd86152047e800d67bdf00a4c635a8b6c0e5c4c2",
  },
  {
    pid: 4,
    isPool: false,
    tag: "Powered by Nacho Finance",
    lpSymbol: "wMATIC-NSHARE",
    tempApr: "481.92",
    lpAddresses: {
      97: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      56: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      80001: "0x978d374800eb7861283ffa0326bb4c853045b919",
      5: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      137: "0x1C84Cd20Ea6cc100E0A890464411F1365Ab1F664",
      1: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      250: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
      4002: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
    },
    tokenSymbol: "wMATIC-NSHARE",
    volatility: "failure",
    tokenAddresses: {
      97: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      56: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      80001: "0x9293C7381b9cEA6B27Ce9069f26746e7D43bC29d", // NSHARE
      5: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      137: "0x948d0a28b600bdbd77af4ea30e6f338167034181",
      1: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      250: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
      4002: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
    },
    quoteTokenSymbol: QuoteToken.WMATIC,
    quoteTokenAdresses: contracts.wbnb,
    quoteTokenCoinGeckoId: "wmatic",
    singleSidedToken: {
      97: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      56: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      80001: "0x9c3c9283d3e44854697cd22d3faa240cfb032889", // wMATIC
      5: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      137: "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270",
      1: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      250: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
      4002: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
    },
    singleSidedTokenName: "WMATIC",
    singleSidedToToken: {
      97: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      56: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      80001: "0x9293C7381b9cEA6B27Ce9069f26746e7D43bC29d", // NSHARE
      5: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      137: "0x948d0a28b600bdbd77af4ea30e6f338167034181",
      1: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      250: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
      4002: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
    },
    singleSidedToTokenName: "NSHARE",
    getLpLink:
      "https://quickswap.exchange/#/add/0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270/0x948d0a28b600bdbd77af4ea30e6f338167034181",
  },
  {
    pid: 5,
    isPool: false,
    tag: "Powered by QuickSwap",
    lpSymbol: "wMATIC-USDC",
    tempApr: "21.24",
    lpAddresses: {
      97: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      56: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      80001: "0x978d374800eb7861283ffa0326bb4c853045b919",
      5: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      137: "0x6e7a5FAFcec6BB1e78bAE2A1F0B612012BF14827",
      1: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      250: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
      4002: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
    },
    tokenSymbol: "wMATIC-USDC",
    volatility: "failure",
    tokenAddresses: {
      97: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      56: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      80001: "0x9293C7381b9cEA6B27Ce9069f26746e7D43bC29d", // USDC
      5: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      137: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
      1: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      250: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
      4002: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
    },
    quoteTokenSymbol: QuoteToken.WMATIC,
    quoteTokenAdresses: contracts.wbnb,
    quoteTokenCoinGeckoId: "wmatic",
    singleSidedToken: {
      97: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      56: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      80001: "0x9c3c9283d3e44854697cd22d3faa240cfb032889", // wMATIC
      5: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      137: "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270",
      1: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      250: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
      4002: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
    },
    singleSidedTokenName: "WMATIC",
    singleSidedToToken: {
      97: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      56: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      80001: "0x9293C7381b9cEA6B27Ce9069f26746e7D43bC29d", // USDC
      5: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      137: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
      1: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      250: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
      4002: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
    },
    singleSidedToTokenName: "USDC",
    getLpLink:
      "https://quickswap.exchange/#/add/0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270/0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
  },
  {
    pid: 6,
    isPool: false,
    tag: "Powered by SushiSwap",
    lpSymbol: "FXS-FRAX",
    tempApr: "19.73",
    lpAddresses: {
      97: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      56: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      80001: "0x978d374800eb7861283ffa0326bb4c853045b919",
      5: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      137: "0xDf45B5B68d9dC84173DD963c763AeA8CAD3E24A6",
      1: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      250: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
      4002: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
    },
    tokenSymbol: "FXS-FRAX",
    volatility: "binance",
    tokenAddresses: {
      97: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      56: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      80001: "0x9293C7381b9cEA6B27Ce9069f26746e7D43bC29d", // FRAX
      5: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      137: "0x45c32fa6df82ead1e2ef74d17b76547eddfaff89",
      1: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      250: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
      4002: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
    },
    quoteTokenSymbol: QuoteToken.FXS,
    quoteTokenAdresses: contracts.fxs,
    quoteTokenCoinGeckoId: "frax-share",
    singleSidedToken: {
      97: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      56: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      80001: "0x9c3c9283d3e44854697cd22d3faa240cfb032889", // FXS
      5: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      137: "0x1a3acf6d19267e2d3e7f898f42803e90c9219062",
      1: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      250: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
      4002: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
    },
    singleSidedTokenName: "FXS",
    singleSidedToToken: {
      97: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      56: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      80001: "0x9293C7381b9cEA6B27Ce9069f26746e7D43bC29d", // FRAX
      5: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      137: "0x45c32fa6df82ead1e2ef74d17b76547eddfaff89",
      1: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      250: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
      4002: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
    },
    singleSidedToTokenName: "FRAX",
    getLpLink:
      "https://app.sushi.com/add/0x104592a158490a9228070e0a8e5343b499e125d0/0x3e121107f6f22da4911079845a470757af4e1a1b",
  },
  {
    pid: 7,
    isPool: false,
    tag: "Powered by SushiSwap",
    lpSymbol: "AVAX-wETH",
    tempApr: "26.52",
    lpAddresses: {
      97: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      56: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      80001: "0x978d374800eb7861283ffa0326bb4c853045b919",
      5: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      137: "0x1274De0DE2e9D9b1d0E06313c0E5EdD01CC335eF",
      1: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      250: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
      4002: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
    },
    tokenSymbol: "AVAX-wETH",
    volatility: "binance",
    tokenAddresses: {
      97: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      56: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      80001: "0x9293C7381b9cEA6B27Ce9069f26746e7D43bC29d", // AVAX
      5: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      137: "0x2C89bbc92BD86F8075d1DEcc58C7F4E0107f286b",
      1: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      250: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
      4002: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
    },
    quoteTokenSymbol: QuoteToken.ETH,
    quoteTokenAdresses: contracts.eth,
    quoteTokenCoinGeckoId: "ethereum",
    singleSidedToken: {
      97: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      56: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      80001: "0x9c3c9283d3e44854697cd22d3faa240cfb032889", // wETH
      5: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      137: "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
      1: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      250: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
      4002: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
    },
    singleSidedTokenName: "wETH",
    singleSidedToToken: {
      97: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      56: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      80001: "0x9293C7381b9cEA6B27Ce9069f26746e7D43bC29d", // AVAX
      5: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      137: "0x2C89bbc92BD86F8075d1DEcc58C7F4E0107f286b",
      1: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      250: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
      4002: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
    },
    singleSidedToTokenName: "AVAX",
    getLpLink:
      "https://app.sushi.com/add/0x2c89bbc92bd86f8075d1decc58c7f4e0107f286b/0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
  },
  {
    pid: 8,
    isPool: false,
    tag: "Powered by SushiSwap",
    lpSymbol: "BCT-KLIMA",
    tempApr: "203",
    lpAddresses: {
      97: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      56: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      80001: "0x978d374800eb7861283ffa0326bb4c853045b919",
      5: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      137: "0x9803c7aE526049210a1725F7487AF26fE2c24614",
      1: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      250: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
      4002: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
    },
    tokenSymbol: "BCT-KLIMA",
    volatility: "failure",
    tokenAddresses: {
      97: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      56: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      80001: "0x9293C7381b9cEA6B27Ce9069f26746e7D43bC29d", // KLIMA
      5: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      137: "0x4e78011ce80ee02d2c3e649fb657e45898257815",
      1: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      250: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
      4002: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
    },
    quoteTokenSymbol: QuoteToken.BCT,
    quoteTokenAdresses: contracts.bct,
    quoteTokenCoinGeckoId: "toucan-protocol-base-carbon-tonne",
    singleSidedToken: {
      97: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      56: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      80001: "0x9c3c9283d3e44854697cd22d3faa240cfb032889", // BCT
      5: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      137: "0x2f800db0fdb5223b3c3f354886d907a671414a7f",
      1: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      250: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
      4002: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
    },
    singleSidedTokenName: "BCT",
    singleSidedToToken: {
      97: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      56: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      80001: "0x9293C7381b9cEA6B27Ce9069f26746e7D43bC29d", // KLIMA
      5: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      137: "0x4e78011ce80ee02d2c3e649fb657e45898257815",
      1: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      250: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
      4002: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
    },
    singleSidedToTokenName: "KLIMA",
    getLpLink:
      "https://app.sushi.com/add/0x2f800db0fdb5223b3c3f354886d907a671414a7f/0x4e78011ce80ee02d2c3e649fb657e45898257815",
  },
  {
    pid: 9,
    isPool: true,
    tag: "Powered by EthaLend",
    lpSymbol: "USDC",
    tempApr: "23.59",
    lpAddresses: {
      97: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      56: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      80001: "0x978d374800eb7861283ffa0326bb4c853045b919",
      5: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      137: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
      1: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      250: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
      4002: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
    },
    tokenSymbol: "USDC",
    volatility: "success",
    tokenAddresses: {
      97: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      56: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      80001: "0x9293C7381b9cEA6B27Ce9069f26746e7D43bC29d", // USDC
      5: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      137: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
      1: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      250: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
      4002: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
    quoteTokenCoinGeckoId: "usd-coin",
    singleSidedToken: {
      97: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      56: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      80001: "0x9c3c9283d3e44854697cd22d3faa240cfb032889", // USDC
      5: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      137: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
      1: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      250: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
      4002: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
    },
    singleSidedTokenName: "USDC",
    singleSidedToToken: {
      97: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      56: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      80001: "0x9293C7381b9cEA6B27Ce9069f26746e7D43bC29d", // USDC
      5: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      137: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
      1: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      250: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
      4002: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
    },
    singleSidedToTokenName: "USDC",
    getLpLink:
      "https://quickswap.exchange/#/swap?inputCurrency=eth&outputCurrency=0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
  },
  {
    pid: 10,
    isPool: true,
    tag: "Powered by EthaLend",
    lpSymbol: "DAI",
    tempApr: "29.42",
    lpAddresses: {
      97: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      56: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      80001: "0x978d374800eb7861283ffa0326bb4c853045b919",
      5: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      137: "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063",
      1: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      250: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
      4002: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
    },
    tokenSymbol: "DAI",
    volatility: "success",
    tokenAddresses: {
      97: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      56: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      80001: "0x9293C7381b9cEA6B27Ce9069f26746e7D43bC29d", // BCT
      5: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      137: "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063",
      1: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      250: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
      4002: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
    },
    quoteTokenSymbol: QuoteToken.DAI,
    quoteTokenAdresses: contracts.dai,
    quoteTokenCoinGeckoId: "dai",
    singleSidedToken: {
      97: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      56: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      80001: "0x9c3c9283d3e44854697cd22d3faa240cfb032889", // DAI
      5: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      137: "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063",
      1: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      250: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
      4002: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
    },
    singleSidedTokenName: "DAI",
    singleSidedToToken: {
      97: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      56: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      80001: "0x9293C7381b9cEA6B27Ce9069f26746e7D43bC29d", // DAI
      5: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      137: "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063",
      1: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      250: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
      4002: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
    },
    singleSidedToTokenName: "DAI",
    getLpLink:
      "https://quickswap.exchange/#/swap?inputCurrency=eth&outputCurrency=0x8f3cf7ad23cd3cadbd9735aff958023239c6a063",
  },
  {
    pid: 11,
    isPool: true,
    tag: "Powered by EthaLend",
    lpSymbol: "USDT",
    tempApr: "27.24",
    lpAddresses: {
      97: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      56: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      80001: "0x978d374800eb7861283ffa0326bb4c853045b919",
      5: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      137: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
      1: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      250: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
      4002: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
    },
    tokenSymbol: "USDT",
    volatility: "success",
    tokenAddresses: {
      97: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      56: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      80001: "0x9293C7381b9cEA6B27Ce9069f26746e7D43bC29d", // USDT
      5: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      137: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
      1: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      250: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
      4002: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
    },
    quoteTokenSymbol: QuoteToken.USDT,
    quoteTokenAdresses: contracts.usdt,
    quoteTokenCoinGeckoId: "tether",
    singleSidedToken: {
      97: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      56: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      80001: "0x9c3c9283d3e44854697cd22d3faa240cfb032889", // USDT
      5: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      137: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
      1: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      250: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
      4002: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
    },
    singleSidedTokenName: "USDT",
    singleSidedToToken: {
      97: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      56: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      80001: "0x9293C7381b9cEA6B27Ce9069f26746e7D43bC29d", // USDT
      5: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      137: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
      1: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      250: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
      4002: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
    },
    singleSidedToTokenName: "USDT",
    getLpLink:
      "https://quickswap.exchange/#/swap?inputCurrency=eth&outputCurrency=0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
  },
];
const farmsMaticTestnet: FarmConfig[] = [
  {
    pid: 0,
    isPool: false,
    tag: "Powered by SpookySwap",
    lpSymbol: "SUPER-wMATIC",
    lpAddresses: {
      97: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      56: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      80001: "0x978d374800eb7861283ffa0326bb4c853045b919", // SUPER-wMATIC
      5: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      137: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      1: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      250: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
      4002: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
    },
    tokenSymbol: "SUPER",
    volatility: "failure",
    tokenAddresses: {
      97: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      56: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      80001: "0x9293C7381b9cEA6B27Ce9069f26746e7D43bC29d", // SUPER
      5: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      137: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      1: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      250: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
      4002: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
    },
    quoteTokenSymbol: QuoteToken.WMATIC,
    quoteTokenAdresses: contracts.wbnb,
    quoteTokenCoinGeckoId: "wmatic",
    singleSidedToken: {
      97: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      56: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      80001: "0x9c3c9283d3e44854697cd22d3faa240cfb032889", // wMATIC
      5: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      137: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      1: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      250: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
      4002: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
    },
    singleSidedTokenName: "WMATIC",
    singleSidedToToken: {
      97: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      56: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      80001: "0x9293C7381b9cEA6B27Ce9069f26746e7D43bC29d", // SUPER
      5: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      137: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      1: "0x86652c1301843B4E06fBfbBDaA6849266fb2b5e7",
      250: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
      4002: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
    },
    singleSidedToTokenName: "SUPER",
    getLpLink:
      "https://quickswap.exchange/#/add/0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270/0x831753dd7087cac61ab5644b308642cc1c33dc13",
  },
];
const farmsFantomMainnet: FarmConfig[] = [];
const farmsFantomTestnet: FarmConfig[] = [];

const farms = {
  "80001": farmsMaticTestnet,
  "1": farmsEthereumMainnet,
  "137": farmsMaticMainnet,
  "5": farmsEthereumTestnet,
  "4002": farmsFantomTestnet,
  "250": farmsFantomMainnet,
};

let chainId = process.env.REACT_APP_CHAIN_ID;
if (localStorage && localStorage.getItem("chainId")) {
  chainId = localStorage.getItem("chainId");
}
if (window && window.ethereum && window.ethereum.networkVersion) {
  chainId = window.ethereum.networkVersion;
}
export default farms[chainId || "137"]
  ? farms[chainId || "137"]
  : farms[process.env.REACT_APP_CHAIN_ID];
