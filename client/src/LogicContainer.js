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

    
    //Run function on startup
    let startUpHasRun = false  //Set with an if statement so that useEffect will stop running twice on startup
    useEffect(() =>{
        if (startUpHasRun === false) {
            getLiveCoinData()
            getPortfolioData()
            startUpHasRun = true
        }},[]);
    ///////////////////////////////////////////API
    
    // Refresh price update interval in milliseconds
    const PriceInterval = 60000  
    //Run function every interval
    useEffect(() => {
        const id = setInterval(() => getLiveCoinData(), PriceInterval)
        return () => clearInterval(id)
      }, []);
    //Get data from API 
    const getLiveCoinData = () => {

        let liveData = []

        console.log("Getting Live data")
        fetch(`https://api.nomics.com/v1/currencies/ticker?key=633baaa5c5fc3f3d6cd1535ca3c66509afe2f765&convert=GBP`)        
        .then(res=>res.json())
        .then(coins => coins.forEach(coin => {
            let liveCoinObject = [coin.id,{
                logo:[coin.logo_url],
                name:[coin.name],
                abbreviation:[coin.id],
                price:[coin.price],
                '1d':[coin['1d'].price_change_pct],
<<<<<<< HEAD
                // '7d':[coin['7d'].price_change_pct],
=======
                //'7d':[coin['7d'].price_change_pct],
>>>>>>> develop
                '30d':[coin['30d'].price_change_pct],
                '365d':[coin['365d'].price_change_pct]}]

            liveData.push(liveCoinObject)
        })).then(res => setLiveCoinData(liveData))
    }
    ///////////////////////////////////////DATABASE
    
    // updates portfolio data every time new live data is available
    useEffect( () => getPortfolioData(),[liveCoinData])
    
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
                    
                    //Find coin index
                    let index = liveCoinData.findIndex((coin) => coin[0] == transaction.refName)


                    let coinObject = [transaction.refName,{
                        logo:[liveCoinData[index][1].logo],
                        name:[transaction.name],
                        abbreviation:[transaction.refName],
                        // weightedAveragePurchasePrice:[transaction.price],
                        portfolioQuantity:[transaction.quantity],
                        currentPrice:[liveCoinData[index][1].price],
                        trend:[liveCoinData[index][1]['1d']],
                        investmentValue:[parseInt(transaction.quantity)*parseInt(liveCoinData[index][1].price)],
                        
                        totalSpend:[parseInt(transaction.quantity)*parseInt(transaction.price)]
                        // totalQuantity:[transaction.quantity]
                        }
                    ]
                    coinDetails.push(coinObject)
                }
                // Coin already in list
                else {
                    // find coin index in coinDetails
                    let index = coinDetails.findIndex((coin) => coin[0] == transaction.refName)
                   
                    //Update Quantity, portfolio value & total Spend
                    let newQuantity;
                    // If transaction type is buy
                    if (transaction.type === 'BUY') {
                        newQuantity = parseInt(coinDetails[index][1].portfolioQuantity) + parseInt(transaction.quantity)
                        coinDetails[index][1].portfolioQuantity = newQuantity
                        //Update portfolio value with new quantity
                        coinDetails[index][1].investmentValue = (newQuantity*parseInt(liveCoinData[index][1].price))
                        //Update total spend
                        coinDetails[index][1].totalSpend = (parseInt(coinDetails[index][1].totalSpend) + (parseInt(transaction.quantity)*parseInt(transaction.price)))}
                    // If transaction type is sell
                    else {
                        newQuantity = parseInt(coinDetails[index][1].portfolioQuantity) - parseInt(transaction.quantity)
                        coinDetails[index][1].portfolioQuantity = newQuantity
                        //Update portfolio value with new quantity
                        coinDetails[index][1].investmentValue = (newQuantity*parseInt(liveCoinData[index][1].price))
                        //Update total spend
                         coinDetails[index][1].totalSpend = (parseInt(coinDetails[index][1].totalSpend) - (parseInt(transaction.quantity)*parseInt(transaction.price)))}}
                }))
    .then(res => setPortfolioData(coinDetails))
    }

    const addTransaction = (transaction) => {
        setPortfolioData([...portfolioData, transaction])
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

    return (
        <>
            <CoinRouter
            loaded={loaded}
            hello={hello}
            dbData={dbData}
            portfolioData={portfolioData}
            liveCoinData={liveCoinData}
            addTransaction={addTransaction}/>
        </>
    )
};

export default LogicContainer;