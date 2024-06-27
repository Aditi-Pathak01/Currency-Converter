import React, { useState } from "react";
import { InputBox } from "./components";
import useCurrInfo from "./hooks/useCurrInfo";
function App() {
  let [amount, setAmount] = useState("");
  let [from, setFrom] = useState("usd");
  let [to, setTo] = useState("inr");
  let [convertedAmt, setConvertedAmt] = useState("");

  let currInfo = useCurrInfo(from);
  let options = Object.keys(currInfo);

  const convert = () => {
    setConvertedAmt(amount * currInfo[to]);
  };
  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  return (
    <>
      <div className="w-full h-screen bg-gray-800 p-10">
        <h1 className="text-gray-300 text-[5vw] text-center">Currency Converter</h1>
        <div className="relative w-1/2 h-[40vh] mx-auto flex flex-col justify-center items-center gap-5 p-8 mt-20 rounded-lg border border-gray-400">
          <InputBox
            placeholder="Amount"
            label="From"
            amount={amount}
            onAmtChange={(amount) => {
              setAmount(amount);
            }}
            selectCurr={from}
            currOptions={options}
            onCurrChange={(currency) => {
              setFrom(currency);
            }}
          />

          <InputBox
            placeholder="Converted Amount"
            label="To"
            amount={convertedAmt}
            onAmtChange={(amount) => {
              setConvertedAmt(amount);
            }}
            selectCurr={to}
            currOptions={options}
            onCurrChange={(currency) => {
              setTo(currency);
            }}
          />
          <button
            className="bg-gray-300 p-3 absolute top-[110%] rounded-md text-gray-800 font-bold"
            onClick={() => {
              convert();
            }}
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
          <button
            className="absolute bg-gray-800 p-4 left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] rounded-md text-gray-300 font-bold border border-gray-300"
            onClick={swap}
          >
            SWAP
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
