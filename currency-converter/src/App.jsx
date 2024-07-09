import { useState } from 'react';
import InputBox from './components/InputBox';
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('eur');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-customLightGray text-white">
      <div className="max-w-lg w-full mx-auto p-8 bg-customDarkGray rounded-xl shadow-lg">
        <h1 className="text-3xl font-semibold text-center mb-4">Currency Converter</h1>
        <form onSubmit={(e) => {
          e.preventDefault();
          convert();
        }}>
          <div className="mb-4">
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              selectCurrency={from}
              onAmountChange={(amount) => setAmount(amount)}
              className="text-gray-200"
            />
          </div>
          <div className="flex justify-center items-center mb-4">
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none"
              onClick={swap}
            >
              Swap
            </button>
          </div>
          <div className="mb-4">
            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              amountDisable
              className="text-gray-200"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-rolexGreen hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg focus:outline-none"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
