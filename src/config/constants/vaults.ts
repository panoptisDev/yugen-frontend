import contracts from "./contracts";
import { QuoteToken, VaultConfig } from "./types";

const vaultsMainnet: VaultConfig[] = [
  {
    pid: 0,
    lpTokenName: "xCNT-wMATIC",
    lpTokenAddress: {
      97: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
      56: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
      80001: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
      137: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
      1: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
    },
    lpTokenPart1Address: {
      97: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
      56: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
      80001: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
      137: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
      1: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
    },
    lpTokenPart2Address: {
      97: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
      56: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
      80001: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
      137: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
      1: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
    },
    vaultAddress: {
      97: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
      56: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
      80001: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
      137: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
      1: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
    },
    strategyAddress: {
      97: "0x83C0b42CAa58735447EcE72c3DD584EbD19405B2",
      56: "0x83C0b42CAa58735447EcE72c3DD584EbD19405B2",
      80001: "0x83C0b42CAa58735447EcE72c3DD584EbD19405B2",
      137: "0x83C0b42CAa58735447EcE72c3DD584EbD19405B2",
      1: "0x83C0b42CAa58735447EcE72c3DD584EbD19405B2",
    },
    quoteTokenSymbol: QuoteToken.WMATIC,
    nonQuoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAddress: {
      97: "0x83C0b42CAa58735447EcE72c3DD584EbD19405B2",
      56: "0x83C0b42CAa58735447EcE72c3DD584EbD19405B2",
      80001: "0xBC659F08bf439ff856bCF4119fE6B2617C3706eD",
      137: "0x83C0b42CAa58735447EcE72c3DD584EbD19405B2",
      1: "0x83C0b42CAa58735447EcE72c3DD584EbD19405B2",
    },
    nonQuoteTokenAddress: {
      97: "0x83C0b42CAa58735447EcE72c3DD584EbD19405B2",
      56: "0x83C0b42CAa58735447EcE72c3DD584EbD19405B2",
      80001: "0xBC659F08bf439ff856bCF4119fE6B2617C3706eD",
      137: "0x83C0b42CAa58735447EcE72c3DD584EbD19405B2",
      1: "0x83C0b42CAa58735447EcE72c3DD584EbD19405B2",
    },
  },
];
const vaultsTestnet: VaultConfig[] = [
  {
    pid: 6,
    lpTokenName: "YGN-CNT",
    lpTokenAddress: {
      97: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
      56: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
      80001: "0x6eEAc368378A5729F6957B5A42Bee41A062d1Da1",
      137: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
      1: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
    },
    lpTokenPart1Address: {
      97: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
      56: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
      80001: "0xac0ec8a0a5062feecb496ac1ef7d2177f06f88b0",
      137: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
      1: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
    },
    lpTokenPart2Address: {
      97: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
      56: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
      80001: "0x766f03e47674608cccf7414f6c4ddf3d963ae394",
      137: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
      1: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
    },
    vaultAddress: {
      97: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
      56: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
      80001: "0x6E7a487CC89c36d146F03E6d1b08DC26b6C0649A",
      137: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
      1: "0x401e9E359d6De9B313c85Cde095D61b42B96EBEd",
    },
    strategyAddress: {
      97: "0x83C0b42CAa58735447EcE72c3DD584EbD19405B2",
      56: "0x83C0b42CAa58735447EcE72c3DD584EbD19405B2",
      80001: "0xa26E07C7842159a316FB9348A59eCFBC0c011494",
      137: "0x83C0b42CAa58735447EcE72c3DD584EbD19405B2",
      1: "0x83C0b42CAa58735447EcE72c3DD584EbD19405B2",
    },
    quoteTokenSymbol: QuoteToken.WMATIC,
    quoteTokenAddress: contracts.wbnb,
    nonQuoteTokenSymbol: QuoteToken.CAKE,
    nonQuoteTokenAddress: contracts.cake,
  },
];
const vaults = {
  "80001": vaultsTestnet,
  "1": vaultsMainnet,
  "137": vaultsMainnet,
  "5": vaultsTestnet,
};
let chainId =
  window && window.ethereum
    ? window.ethereum.networkVersion
    : process.env.REACT_APP_CHAIN_ID;
if (localStorage && localStorage.getItem("chainId")) {
  chainId = localStorage.getItem("chainId");
}

export default vaults[chainId || "80001"]
  ? vaults[chainId || "80001"]
  : vaults[process.env.REACT_APP_CHAIN_ID];
