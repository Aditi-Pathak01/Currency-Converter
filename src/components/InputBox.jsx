import React from "react";

export default function InputBox({
  label,
  placeholder,
  amount,
  selectCurr,
  currOptions = [],
  onAmtChange,
  onCurrChange,
}) {
  return (
    <div className="border-4 border-gray bg-gray-300 flex justify-around items-center w-full h-[12vh] rounded-lg">
      <div className="flex justify-center items-center">
        <label className="text-gray-800 mr-5">{label}</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => {
            onAmtChange(Number(e.target.value));
          }}
          placeholder={placeholder}
          className="outline-none rounded-md px-2"
        />
      </div>

      <div className="flex justify-center items-center">
        <label className="text-gray-800 mr-3">Currency Type</label>
        <select
          className="p-[0.2vh] rounded-md w-1/3 outine-none"
          value={selectCurr}
          onChange={(e) => {
            onCurrChange(e.target.value);
          }}
        >
          {currOptions.map((currency) => {
            return (
              <>
                <option
                  key={currency}
                  value={currency}
                  className="outline-none"
                >
                  {currency.toUpperCase()}
                </option>
                ;
              </>
            );
          })}
        </select>
      </div>
    </div>
  );
}
