import React, { useEffect, useState } from "react";
import GlobalCurrencies from "./components/Pages/GlobalCurrencies";
import CoinRouter from "./components/Router";

const LogicContainer = () => {
    // API States
    const [liveCoinData, setLiveCoinData] = useState([]);
    // 
    const [loaded, setLoaded] = useState(false);
    // Testing states
    const [hello, sethello] = useState("Helloooooooo");
    // Data fetched from the backend database
    const [dbData, setDbData] = useState([]);
    const [portfolioData, setPortfolioData] = useState([]);

    
   //Set with an if statement so that useEffect will stop running twice on startup
   useEffect(() =>getLiveCoinData(),[])

   // updates portfolio data every time new live data is available
   useEffect( () => liveCoinData.length > 0 && getPortfolioData(),[liveCoinData])
   

   // Refresh price update interval in milliseconds
    const PriceInterval = 60000  
    useEffect(() => {
        const id = setInterval(() => getLiveCoinData(), PriceInterval)
        return () => clearInterval(id)
    }, []);
    
    ///////////////////////////////////////////API

    //Get data from API 
    const getLiveCoinData = () => {

        let liveData = []

        console.log("Getting Live data")
        return fetch(`https://api.nomics.com/v1/currencies/ticker?key=633baaa5c5fc3f3d6cd1535ca3c66509afe2f765&convert=GBP`)        
        .then(res=>res.json())
        .then(coins => coins.forEach(coin => {


            let liveCoinObject = {
                logo:coin.logo_url,
                name:coin.name,
                abbreviation:coin.id,
                price: parseFloat(coin.price).toFixed(2) == '0.00' ? parseFloat(coin.price).toFixed(7) :parseFloat(coin.price).toFixed(2),
                '1d':coin['1d'] && coin['1d'].price_change_pct,
                '7d':coin['7d'] && coin['7d'].price_change_pct,
                '30d':coin['30d'] && coin['30d'].price_change_pct,
                '365d':coin['365d'] && coin['365d'].price_change_pct}

            liveData.push(liveCoinObject)
        })).then(res => {
            setLiveCoinData(liveData);
        })
    }
    ///////////////////////////////////////DATABASE
    
    
    const getPortfolioData = () => {
        
        let collatedCoinList = []
        let coinDetails = []

        // console.log("Getting Portfolio data")
        fetch(`http://localhost:5000/api/transactions`)
            .then(res => res.json())
            .then(transactions => transactions.forEach( transaction => {
                setDbData(transactions)
                
                //Find coin index in live data
                 let liveIndex = liveCoinData.findIndex((coin) => coin.abbreviation == transaction.refName)
                
                if (!(collatedCoinList.includes(transaction.refName))){
                    collatedCoinList.push(transaction.refName)
                    
                    let coinObject = {
                        logo:liveCoinData[liveIndex].logo,
                        name:transaction.name,
                        abbreviation:transaction.refName,
                        currentPrice:liveCoinData[liveIndex].price,
                        trend:liveCoinData[liveIndex]['1d'],

                        portfolioQuantity:parseFloat(transaction.quantity),
                        investmentValue:(parseFloat(transaction.quantity)*parseFloat(liveCoinData[liveIndex].price)).toFixed(2),
    
                        totalSpend:(parseFloat(transaction.quantity)*parseFloat(transaction.price)).toFixed(2),
                        profitAndLoss:((parseFloat(transaction.quantity)*(liveCoinData[liveIndex].price))-parseFloat(transaction.quantity)*parseFloat(transaction.price)).toFixed(2)
        

                        }
                    
                    coinDetails.push(coinObject)
                }
                // Coin already in list
                else {

                    let index = coinDetails.findIndex((coin) => coin.abbreviation == transaction.refName)
                    
                    //Update Quantity, portfolio value & total Spend
                    let newQuantity;
                    let newTotalSpend;
                    // If transaction type is buy
                    if (transaction.type === 'BUY') {
                        newQuantity = parseFloat(coinDetails[index].portfolioQuantity) + parseFloat(transaction.quantity)
                        coinDetails[index].portfolioQuantity = newQuantity
                        //Update portfolio value with new quantity
                        coinDetails[index].investmentValue = (newQuantity*(parseFloat(liveCoinData[liveIndex].price))).toFixed(2)
                        //Update total spend
                        newTotalSpend  = (parseFloat(coinDetails[index].totalSpend) + (parseFloat(transaction.quantity)*parseFloat(transaction.price)))
                        coinDetails[index].totalSpend = newTotalSpend.toFixed(2)
                        //Update profit&loss
                        coinDetails[index].profitAndLoss = ((newQuantity*(liveCoinData[liveIndex].price))-newTotalSpend).toFixed(2)}
                        // If transaction type is sell
                        else {
                            newQuantity = parseFloat(coinDetails[index].portfolioQuantity) - parseFloat(transaction.quantity)
                            coinDetails[index].portfolioQuantity = newQuantity
                            //Update portfolio value with new quantity
                            coinDetails[index].investmentValue = (newQuantity*(parseFloat(liveCoinData[liveIndex].price))).toFixed(2)
                            //Update total spend
                            newTotalSpend  = (parseFloat(coinDetails[index].totalSpend) - (parseFloat(transaction.quantity)*parseFloat(transaction.price)))
                            coinDetails[index].totalSpend = newTotalSpend.toFixed(2)
                            //Update profit&loss
                            coinDetails[index].profitAndLoss = ((newQuantity*(liveCoinData[liveIndex].price))-newTotalSpend).toFixed(2)
                        }
                }}))
    .then(res => setPortfolioData(coinDetails))
    }
    
    const addTransaction = () => {
        getLiveCoinData()
    };

    // const getCoinData = () => {
    //     console.log("Getting 5 min coin data");
        // const coinPromises = coins.map((coin) => {
        //     return fetch(`https://www.alphavantage.co/query?function=CRYPTO_INTRADAY&symbol=${coin}&market=USD&interval=5min&apikey=7PU7J7PVOJFO2VDL`) 
        //     .then(response => response.json())})
        // Promise.all(coinPromises)
        // .then((combinedData) => {
        //     setCoinData5Min(combinedData);
        // }) //This will pull data in every 5 minutes. For up to date info but only when fetch is triggered. Reconstruct it to just pull the new data[0]
        // const coinDailyPromises = coins.map((coin) => {
        //     return fetch( `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=${coin}&market=GBP&apikey=1786JGDXIS069AHE`)
        //     .then(response => response.json())})
        // Promise.all(coinDailyPromises)
        // .then((combinedData) => {
        //     setCoinDataDaily(combinedData);
        // })
        // .then(setLoaded(true));

    // }

    // useEffect(()=> {
    //     getCoinData();
    // }, []) 

    // latest coin values
    // useEffect(()=> { 
    //     getCoinData();
    // }, [variable/state]) 
    if (liveCoinData.length > 0 && portfolioData.length > 0) {
    return (
        <>
            <CoinRouter
            loaded={loaded}
            hello={hello}
            dbData={dbData}
            portfolioData={portfolioData}
            liveCoinData={liveCoinData}
            addTransaction={addTransaction}
            />
        </>
    )}
    return <h1>Loading</h1> 
};

export default LogicContainer;