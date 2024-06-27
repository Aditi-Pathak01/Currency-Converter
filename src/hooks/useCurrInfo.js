import React, { useEffect, useState } from "react";

function useCurrInfo(currency) {
  let [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
  }, [currency]);
  return data;
}
export default useCurrInfo