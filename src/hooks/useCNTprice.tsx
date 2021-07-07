import { CNTinUSDLink } from "config";
import { useEffect, useState } from "react";

const useHarvest = () => {
  const [valueOfCNTinUSD, setValueOfCNTinUSD] = useState(0);

  const getCNTinUSD = async () => {
    try {
      const res = await fetch(CNTinUSDLink);
      const data = await res.json();
      const value = data["cryption-network"].usd;
      setValueOfCNTinUSD(() => value);
    } catch {
      // eslint-disable-next-line no-console
      console.log("Failed to get CNT price in USD");
    }
  };

  useEffect(() => {
    getCNTinUSD();
  });

  return { valueOfCNTinUSD };
};
export default useHarvest;
