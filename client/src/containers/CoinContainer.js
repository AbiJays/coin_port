import React, { useEffect, useState } from "react";
import PortfolioDisplay from "../components/portfolioDisplay";

const CoinContainer = () => {
    const [coins, setCoins] = useState(["BTC", "ETH"]);
    const [coinDataDaily, setCoinDataDaily] = useState([])
    const [coinData5Min, setCoinData5Min] = useState([])

    const getCoinData5Min = () => {
        console.log("Getting 5 min coin data");
        const coinPromises = coins.map((coin) => {
            return fetch(`https://www.alphavantage.co/query?function=CRYPTO_INTRADAY&symbol=${coin}&market=USD&interval=5min&apikey=7PU7J7PVOJFO2VDL`)
            .then(response => response.json())})
        Promise.all(coinPromises)
        .then((combinedData) => {
            setCoinData5Min(combinedData);
            console.log(combinedData);
        });

    }

    const getCoinDataDaily = () => {
        console.log("Getting daily coin data");
        const coinDailyPromises = coins.map((coin) => {
            return fetch( `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=${coin}&market=CNY&apikey=7PU7J7PVOJFO2VDL`)
            .then(response => response.json())})
        Promise.all(coinDailyPromises)
        .then((combinedData) => {
            setCoinDataDaily(combinedData);
            console.log(combinedData);
        })
    }

    useEffect(()=> {
        getCoinData5Min();
        getCoinDataDaily();
    }, [])

    return (
        <>
            <p>Here's the container</p>
            <PortfolioDisplay />
        </>
    )
};

export default CoinContainer;

