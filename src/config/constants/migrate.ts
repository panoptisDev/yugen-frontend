import { MigrateConfig } from "./types";

const migrate: MigrateConfig[] = [
  {
    label: "Sushiswap",
    value: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4",
    migratorAddress: {
      80001: "0xa55E852c885E8800966D150a663115Bd0505fD69",
      137: "0x63e3F5155B443e9139Bc5eDe9960f6E3F8df2b58"
    },
  },
  {
    label: "Quickswap",
    value: "0x5757371414417b8C6CAad45bAeF941aBc7d3Ab32",
    migratorAddress: {
      80001: "0xa55E852c885E8800966D150a663115Bd0505fD69",
      137: "0x0732Cf2da254c0b12dFD1dcfa2c98200167C295F"
    },
  },
  {
    label: "Dyfn",
    value: "0xE7Fb3e833eFE5F9c441105EB65Ef8b261266423B",
    migratorAddress: {
      80001: "0xa55E852c885E8800966D150a663115Bd0505fD69",
      137: "0x733182852d43503Daa6d085248Fd9F096d5DCFc9"
    },
  },
];
export default migrate;
