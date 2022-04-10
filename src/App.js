import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [currencyRate, setCurrencyRate] = useState(0);
  const [inputMoney, setInputMoney] = useState(0);
  // * API를 최초 1회만 호출하기 위해 dependency state 배열을 비워줌
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        // console.log(json);
        setCoins(() => json);
        setLoading(false);
      });
  }, []);

  // * 유저가 화폐 단위 선택
  const onSChangeCurrency = (event) => {
    setCurrencyRate(() => event.target.value);
  };

  // * 유저가 지불 예상 금액 입력
  const insertMoney = (event) => {
    setInputMoney(event.target.value);
  };

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <div>
            <select onChange={onSChangeCurrency}>
              <option key="value" value="0">
                값을 선택해주세요
              </option>
              {coins.map((coin) => (
                <option key={coin.id} value={coin.quotes.USD.price}>
                  {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price}
                </option>
              ))}
            </select>
          </div>
          <input
            type="text"
            placeholder="지불 예상 금액($)"
            onChange={insertMoney}
          />
          {inputMoney ? (
            <div>
              {Math.floor(inputMoney / currencyRate)}개를 살 수 있습니다.
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}

export default App;
