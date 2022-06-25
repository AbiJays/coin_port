import React, { useEffect, useState } from "react";
import GlobalCurrencies from "./components/Pages/GlobalCurrencies";
import CoinRouter from "./components/Router";

const LogicContainer = () => {
    const [coins, setCoins] = useState(["BTC", "ETH"]);
    const [coinDataDaily, setCoinDataDaily] = useState([]);
    const [coinData5Min, setCoinData5Min] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [hello, sethello] = useState("Helloooooooo");
    
    const [dbData, setDbData] = useState([]);
    const [portfolioData, setPortfolioData] = useState([]);

    let getPortfolioDataHasRun = false  //Set with an if statement so that useEffect will stop running twice on startup


    const getPortfolioData = () => {
        
        let collatedCoinList = []
        let coinDetails = []

        console.log("Getting Portfolio data")
        fetch(`http://localhost:5000/api/transactions`)
            .then(res => res.json())
            .then(transactions => transactions.forEach( transaction => {
                setDbData(transactions)
                if (!(collatedCoinList.includes(transaction.refName))){
                    collatedCoinList.push(transaction.refName) 
                    
                    let coinObject = [transaction.refName,{
                        logo:[transaction.logo],
                        name:[transaction.name],
                        abbreviation:[transaction.refName],
                        // weightedAveragePurchasePrice:[transaction.price],
                        portfolioQuantity:[transaction.quantity],
                        currentPrice:['tbc'],
                        trend:['tbc'],
                        investmentValue:['tbc']//,
                        // totalSpend:[parseInt(transaction.quantity)*parseInt(transaction.price)],
                        // totalQuantity:[transaction.quantity]
                        }
                    ]
                    coinDetails.push(coinObject)
                }
                // Coin already in list
                else {
                    // find coin index in coinDetails
                    let index = coinDetails.findIndex((coin) => coin[0] == transaction.refName)
                    // Quantity
                    // If transaction type is buy
                    if (transaction.type === 'BUY') {
                        coinDetails[index][1].portfolioQuantity = parseInt(coinDetails[index][1].portfolioQuantity) + parseInt(transaction.quantity)
                    }
                    // If transaction type is sell
                    else {
                        coinDetails[index][1].portfolioQuantity = parseInt(coinDetails[index][1].portfolioQuantity) - parseInt(transaction.quantity)
                    }
                    }

                    
    }   ))
                .then(res => setPortfolioData(coinDetails))
    }

    useEffect(()=> {
        if (getPortfolioDataHasRun === false) {
            getPortfolioData();
            getPortfolioDataHasRun = true
        }
    }, []) 

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
            setCoinDataDaily(combinedData);
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
            <CoinRouter loaded={loaded} hello={hello} dbData={dbData} portfolioData={portfolioData} coinDataDaily={coinDataDaily}/>
            {/* <GlobalCurrencies coinDataDaily={coinDataDaily} loaded={loaded}/> */}
        </>
    )
};

export default LogicContainer;