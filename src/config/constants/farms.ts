import contracts from "./contracts";
import { FarmConfig, QuoteToken } from "./types";

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: "CNT-MATIC",
    lpAddresses: {
      97: "0xe70b7523f4bffa1f2e88d2ba709afd026030f412",
      56: "0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6",
      80001: "0xb46F190E6073028DBE144aC4C25941FB121892C3",
      137: "0x71ccF81b24d500705d54cc8b6d420B1131a9E5E5",
    },
    tokenSymbol: "CNT",
    tokenAddresses: {
      97: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
      56: "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82",
      80001: "0x766F03e47674608cCcF7414f6c4DDF3d963Ae394",
      137: "0xD1e6354fb05bF72A8909266203dAb80947dcEccF",
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 1,
    lpSymbol: "CNT-USDC",
    lpAddresses: {
      97: "0x2f7682b64b88149ba3250aee32db712964de5fa9",
      56: "0x1b96b92314c44b159149f7e0303511fb2fc4774f",
      80001: "0xCA751724e47CD3F7488b2daD690Fd5CbfbcFeB88",
      137: "0x12837210d2BD0F471B81fc278C56eD0429cDa3Ed",
    },
    tokenSymbol: "CNT",
    tokenAddresses: {
      97: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
      56: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
      80001: "0x766F03e47674608cCcF7414f6c4DDF3d963Ae394",
      137: "0xD1e6354fb05bF72A8909266203dAb80947dcEccF",
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
  },
  {
    pid: 2,
    lpSymbol: "CNT-ETH",
    lpAddresses: {
      97: "",
      56: "",
      80001: "",
      137: "0x63f3fe7f2b89eefa358cc37fbeae480492e7cf3b",
    },
    tokenSymbol: "CNT",
    tokenAddresses: {
      97: "",
      56: "",
      80001: "",
      137: "0xD1e6354fb05bF72A8909266203dAb80947dcEccF",
    },
    quoteTokenSymbol: QuoteToken.ETH,
    quoteTokenAdresses: contracts.eth,
  },
  {
    pid: 3,
    lpSymbol: "MATIC-USDC",
    lpAddresses: {
      97: "0xE66790075ad839978fEBa15D4d8bB2b415556a1D",
      56: "0x70D8929d04b60Af4fb9B58713eBcf18765aDE422",
      80001: "0x1Ccd6F823A18847ed72695a08836EB09a1043156",
      137: "0xA2937659873ef52Da71a399e4079EBb2a7e5fFF6",
    },
    tokenSymbol: "USDC",
    tokenAddresses: {
      97: "0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5",
      56: "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
      80001: "0xD89a2E56B778AEfe719fc86E122B7db752Bb6B41",
      137: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 4,
    lpSymbol: "MATIC-ETH",
    lpAddresses: {
      97: "0xE66790075ad839978fEBa15D4d8bB2b415556a1D",
      56: "0x70D8929d04b60Af4fb9B58713eBcf18765aDE422",
      80001: "0x1Ccd6F823A18847ed72695a08836EB09a1043156",
      137: "0xb7D81710549551cd3BcAb4F116602700D85abFD1",
    },
    tokenSymbol: "ETH",
    tokenAddresses: {
      97: "0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5",
      56: "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
      80001: "0xD89a2E56B778AEfe719fc86E122B7db752Bb6B41",
      137: "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 5,
    lpSymbol: "BTC-USDC",
    lpAddresses: {
      97: "0xE66790075ad839978fEBa15D4d8bB2b415556a1D",
      56: "0x70D8929d04b60Af4fb9B58713eBcf18765aDE422",
      80001: "0x1Ccd6F823A18847ed72695a08836EB09a1043156",
      137: "0x264d5335e4ED0173F56aD3BfABac178a8d222e1F",
    },
    tokenSymbol: "USDC",
    tokenAddresses: {
      97: "0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5",
      56: "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
      80001: "0xD89a2E56B778AEfe719fc86E122B7db752Bb6B41",
      137: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
    },
    quoteTokenSymbol: QuoteToken.BTC,
    quoteTokenAdresses: contracts.btc,
  },
  {
    pid: 6,
    lpSymbol: "BTC-ETH",
    lpAddresses: {
      97: "0xE66790075ad839978fEBa15D4d8bB2b415556a1D",
      56: "0x70D8929d04b60Af4fb9B58713eBcf18765aDE422",
      80001: "0x1Ccd6F823A18847ed72695a08836EB09a1043156",
      137: "0xfDad5f693eF778A0563601836375cb8FFc3C1d84",
    },
    tokenSymbol: "BTC",
    tokenAddresses: {
      97: "0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5",
      56: "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
      80001: "0xD89a2E56B778AEfe719fc86E122B7db752Bb6B41",
      137: "0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6",
    },
    quoteTokenSymbol: QuoteToken.ETH,
    quoteTokenAdresses: contracts.eth,
  },
  {
    pid: 6,
    lpSymbol: "BTC-ETH",
    lpAddresses: {
      97: "0xE66790075ad839978fEBa15D4d8bB2b415556a1D",
      56: "0x70D8929d04b60Af4fb9B58713eBcf18765aDE422",
      80001: "0x1Ccd6F823A18847ed72695a08836EB09a1043156",
      137: "0xfDad5f693eF778A0563601836375cb8FFc3C1d84",
    },
    tokenSymbol: "BTC",
    tokenAddresses: {
      97: "0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5",
      56: "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
      80001: "0xD89a2E56B778AEfe719fc86E122B7db752Bb6B41",
      137: "0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6",
    },
    quoteTokenSymbol: QuoteToken.ETH,
    quoteTokenAdresses: contracts.eth,
  },
  {
    pid: 7,
    lpSymbol: "USDT-USDC",
    lpAddresses: {
      97: "0xE66790075ad839978fEBa15D4d8bB2b415556a1D",
      56: "0x70D8929d04b60Af4fb9B58713eBcf18765aDE422",
      80001: "0x1Ccd6F823A18847ed72695a08836EB09a1043156",
      137: "0xA8C1349A88523b6F5ee24ffb8d8Ce35f2c90Bf13",
    },
    tokenSymbol: "USDT",
    tokenAddresses: {
      97: "0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5",
      56: "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
      80001: "0xD89a2E56B778AEfe719fc86E122B7db752Bb6B41",
      137: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 8,
    lpSymbol: "ETH-USDC",
    lpAddresses: {
      97: "0xE66790075ad839978fEBa15D4d8bB2b415556a1D",
      56: "0x70D8929d04b60Af4fb9B58713eBcf18765aDE422",
      80001: "0x1Ccd6F823A18847ed72695a08836EB09a1043156",
      137: "0x2d18f8b79C1703298B0dff74e3BcCFdA8a2e4711",
    },
    tokenSymbol: "USDC",
    tokenAddresses: {
      97: "0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5",
      56: "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
      80001: "0xD89a2E56B778AEfe719fc86E122B7db752Bb6B41",
      137: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
    },
    quoteTokenSymbol: QuoteToken.ETH,
    quoteTokenAdresses: contracts.eth,
  },
  {
    pid: 9,
    lpSymbol: "DAI-USDC",
    lpAddresses: {
      97: "0xE66790075ad839978fEBa15D4d8bB2b415556a1D",
      56: "0x70D8929d04b60Af4fb9B58713eBcf18765aDE422",
      80001: "0x1Ccd6F823A18847ed72695a08836EB09a1043156",
      137: "0xd2D2B7677f85d83a24F08dfE4dE043340066F221",
    },
    tokenSymbol: "DAI",
    tokenAddresses: {
      97: "0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5",
      56: "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
      80001: "0xD89a2E56B778AEfe719fc86E122B7db752Bb6B41",
      137: "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063",
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 10,
    lpSymbol: "ETH-USDT",
    lpAddresses: {
      97: "0xE66790075ad839978fEBa15D4d8bB2b415556a1D",
      56: "0x70D8929d04b60Af4fb9B58713eBcf18765aDE422",
      80001: "0x1Ccd6F823A18847ed72695a08836EB09a1043156",
      137: "0x229f8aB5D51cb78d84319f4012363B2437E2C3c4",
    },
    tokenSymbol: "USDT",
    tokenAddresses: {
      97: "0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5",
      56: "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
      80001: "0xD89a2E56B778AEfe719fc86E122B7db752Bb6B41",
      137: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
    },
    quoteTokenSymbol: QuoteToken.ETH,
    quoteTokenAdresses: contracts.eth,
  },
  {
    pid: 11,
    lpSymbol: "ETH-DAI",
    lpAddresses: {
      97: "0xE66790075ad839978fEBa15D4d8bB2b415556a1D",
      56: "0x70D8929d04b60Af4fb9B58713eBcf18765aDE422",
      80001: "0x1Ccd6F823A18847ed72695a08836EB09a1043156",
      137: "0xE9ecAF6b677fD62b7b768fe376ce6A6B0C395FC5",
    },
    tokenSymbol: "DAI",
    tokenAddresses: {
      97: "0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5",
      56: "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
      80001: "0xD89a2E56B778AEfe719fc86E122B7db752Bb6B41",
      137: "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063",
    },
    quoteTokenSymbol: QuoteToken.ETH,
    quoteTokenAdresses: contracts.eth,
  },
  {
    pid: 12,
    lpSymbol: "AAVE-ETH",
    lpAddresses: {
      97: "0xE66790075ad839978fEBa15D4d8bB2b415556a1D",
      56: "0x70D8929d04b60Af4fb9B58713eBcf18765aDE422",
      80001: "0x1Ccd6F823A18847ed72695a08836EB09a1043156",
      137: "0x95Efe9e1EFb09aea596bB96dB4E6d58E64a6a616",
    },
    tokenSymbol: "AAVE",
    tokenAddresses: {
      97: "0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5",
      56: "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
      80001: "0xD89a2E56B778AEfe719fc86E122B7db752Bb6B41",
      137: "0xd6df932a45c0f255f85145f286ea0b292b21c90b",
    },
    quoteTokenSymbol: QuoteToken.ETH,
    quoteTokenAdresses: contracts.eth,
  },

  // {
  //   pid: 1,
  //   lpSymbol: "MATIC-USDT",
  //   lpAddresses: {
  //     97: "0xE66790075ad839978fEBa15D4d8bB2b415556a1D",
  //     56: "0x70D8929d04b60Af4fb9B58713eBcf18765aDE422",
  //     80001: "0x1Ccd6F823A18847ed72695a08836EB09a1043156",
  //     137: "0xb2b39b54a82aedcab018eb601e8fcd19bc6ec8ab",
  //   },
  //   tokenSymbol: "USDT",
  //   tokenAddresses: {
  //     97: "0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5",
  //     56: "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
  //     80001: "0xD89a2E56B778AEfe719fc86E122B7db752Bb6B41",
  //     137: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 2,
  //   lpSymbol: "CNT-USDT",
  //   lpAddresses: {
  //     97: "0x2f7682b64b88149ba3250aee32db712964de5fa9",
  //     56: "0x1b96b92314c44b159149f7e0303511fb2fc4774f",
  //     80001: "0xCA751724e47CD3F7488b2daD690Fd5CbfbcFeB88",
  //     137: "0x04D2d843E31017Ca1d9a2801900cF6454103FC17",
  //   },
  //   tokenSymbol: "CNT",
  //   tokenAddresses: {
  //     97: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
  //     56: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
  //     80001: "0x766F03e47674608cCcF7414f6c4DDF3d963Ae394",
  //     137: "0xD1e6354fb05bF72A8909266203dAb80947dcEccF",
  //   },
  //   quoteTokenSymbol: QuoteToken.CAKE,
  //   quoteTokenAdresses: contracts.cake,
  // },
  // {
  //   pid: 3,
  //   lpSymbol: "CNT-ETH",
  //   lpAddresses: {
  //     97: "",
  //     56: "",
  //     80001: "",
  //     137: "0x63f3fe7f2b89eefa358cc37fbeae480492e7cf3b",
  //   },
  //   tokenSymbol: "CNT",
  //   tokenAddresses: {
  //     97: "",
  //     56: "",
  //     80001: "",
  //     137: "0xD1e6354fb05bF72A8909266203dAb80947dcEccF",
  //   },
  //   quoteTokenSymbol: QuoteToken.ETH,
  //   quoteTokenAdresses: contracts.eth,
  // },
  // {
  //   pid: 4,
  //   lpSymbol: "MATIC-DAI",
  //   lpAddresses: {
  //     97: "",
  //     56: "",
  //     80001: "",
  //     137: "0xaC5D1a011aFD5C33Dcb3fdC8B2Ae5F4091080635",
  //   },
  //   tokenSymbol: "DAI",
  //   tokenAddresses: {
  //     97: "",
  //     56: "",
  //     80001: "",
  //     137: "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063",
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 5,
  //   lpSymbol: "MATIC-USD",
  //   lpAddresses: {
  //     97: "",
  //     56: "",
  //     80001: "",
  //     137: "0xa2937659873ef52da71a399e4079ebb2a7e5fff6",
  //   },
  //   tokenSymbol: "USDC",
  //   tokenAddresses: {
  //     97: "",
  //     56: "",
  //     80001: "",
  //     137: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
];

export default farms;
