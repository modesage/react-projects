import { useId } from 'react';

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <div className={`bg-customLightGray p-4 rounded-lg shadow-md ${className}`}>
      <label htmlFor={amountInputId} className="block text-sm font-medium text-gray-300 mb-1">{label}</label>
      <div className="flex flex-col sm:flex-row items-center">
        <input
          id={amountInputId}
          className="flex-grow appearance-none border border-customDarkGray rounded py-1 px-2 mb-2 sm:mr-2 sm:mb-0 leading-tight bg-customDarkGray text-gray-200 focus:outline-none focus:border-blue-500"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
        <select
          className="appearance-none bg-customDarkGray border border-customDarkGray rounded py-1 px-2 leading-tight text-gray-200 focus:outline-none focus:border-blue-500 hover:bg-customBlack"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>{currency}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
