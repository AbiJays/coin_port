import React, { useEffect, useState } from "react";
import GlobalCurrencies from "./components/Pages/GlobalCurrencies";
import CoinRouter from "./components/Router";

const LogicContainer = () => {
    const [coins, setCoins] = useState(["BTC", "ETH"]);
    const [coinDataDaily, setCoinDataDaily] = useState([]);
    const [coinData5Min, setCoinData5Min] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [hello, sethello] = useState("Helloooooooo");

    const getCoinData = () => {
        console.log("Getting 5 min coin data");
        // const coinPromises = coins.map((coin) => {
        //     return fetch(`https://www.alphavantage.co/query?function=CRYPTO_INTRADAY&symbol=${coin}&market=USD&interval=5min&apikey=7PU7J7PVOJFO2VDL`) 
        //     .then(response => response.json())})
        // Promise.all(coinPromises)
        // .then((combinedData) => {
        //     setCoinData5Min(combinedData);
        // }) //This will pull data in every 5 minutes. For up to date info but only when fetch is triggered. Reconstruct it to just pull the new data[0]
        const coinDailyPromises = coins.map((coin) => {
            return fetch( `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=${coin}&market=GBP&apikey=1786JGDXIS069AHE`)
            .then(response => response.json())})
        Promise.all(coinDailyPromises)
        .then((combinedData) => {
            console.log(combinedData);
            setCoinDataDaily(combinedData);
            console.log(combinedData[0]["Meta Data"]["3. Digital Currency Name"]);
        })
        .then(setLoaded(true));

    }

    useEffect(()=> {
        getCoinData();
    }, []) 

    // latest coin values
    // useEffect(()=> { 
    //     getCoinData();
    // }, [variable/state]) 

    return (
        <>
            <CoinRouter coinDataDaily={coinDataDaily} loaded={loaded} hello={hello}/>
            {/* <GlobalCurrencies coinDataDaily={coinDataDaily} loaded={loaded}/> */}
        </>
    )
};

export default LogicContainer;