import React, { useEffect, useState } from "react";
import CoinRouter from "./components/Router";

const LogicContainer = () => {
    // API States
    const [liveCoinData, setLiveCoinData] = useState([]);
    // Data fetched from the backend database
    const [dbData, setDbData] = useState([]);
    const [portfolioData, setPortfolioData] = useState([]);
    // Login States
    const [loginStatus, setLoginStatus] = useState(true) 
    const [usernameAttempt, setUsernameAttempt] = useState("");
    const [passwordAttempt, setPasswordAttempt] = useState("");
    const loginDetails = {
        username: 'whereiszsolt',
        password: 'hegone'
    }
    const ApiRefreshInterval = 15000 // milliseconds  
   
    useEffect(() => {
        getLiveCoinData()
        const interval = setInterval(() => getLiveCoinData(), ApiRefreshInterval)
        return () => clearInterval(interval)
    }, []);
    useEffect( () => liveCoinData.length > 0 && getPortfolioData(),[liveCoinData])
    
// API call
    const getLiveCoinData = () => {
        console.log('getting live data')
        return fetch(`https://api.nomics.com/v1/currencies/ticker?key=02a98957d8cbe4cebd6d468860b690bac7baeb5a&convert=GBP`)        
        .then(res=>res.json())
        .then(coins => coins.map(coin => {
            return (
                {logo:coin.logo_url,
                    name:coin.name,
                abbreviation:coin.id,
                price: parseFloat(coin.price).toFixed(2) == '0.00' ? parseFloat(coin.price).toFixed(7) :parseFloat(coin.price).toFixed(2),
                '1d':coin['1d'] && coin['1d'].price_change_pct,
                '7d':coin['7d'] && coin['7d'].price_change_pct,
                '30d':coin['30d'] && coin['30d'].price_change_pct,
                '365d':coin['365d'] && coin['365d'].price_change_pct})
            }))
        .then(apiData => setLiveCoinData(apiData))
    }
    const addTransaction = () => getLiveCoinData()

    // Database call
    const getPortfolioData = () => {
        console.log('getting database data')
        let collatedCoinList = []
        let coinDetails = []

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
                    let newQuantity;
                    let newTotalSpend;
                    if (transaction.type === 'BUY') {
                        newQuantity = parseFloat(coinDetails[index].portfolioQuantity) + parseFloat(transaction.quantity)
                        newTotalSpend  = (parseFloat(coinDetails[index].totalSpend) + (parseFloat(transaction.quantity)*parseFloat(transaction.price)))
                        coinDetails[index].portfolioQuantity = newQuantity
                        coinDetails[index].investmentValue = (newQuantity*(parseFloat(liveCoinData[liveIndex].price))).toFixed(2)
                        coinDetails[index].totalSpend = newTotalSpend.toFixed(2)
                        coinDetails[index].profitAndLoss = ((newQuantity*(liveCoinData[liveIndex].price))-newTotalSpend).toFixed(2)
                    }
                    else {
                        newQuantity = parseFloat(coinDetails[index].portfolioQuantity) - parseFloat(transaction.quantity)
                        newTotalSpend  = (parseFloat(coinDetails[index].totalSpend) - (parseFloat(transaction.quantity)*parseFloat(transaction.price)))
                        coinDetails[index].portfolioQuantity = newQuantity
                        coinDetails[index].investmentValue = (newQuantity*(parseFloat(liveCoinData[liveIndex].price))).toFixed(2)
                        coinDetails[index].totalSpend = newTotalSpend.toFixed(2)
                        coinDetails[index].profitAndLoss = ((newQuantity*(liveCoinData[liveIndex].price))-newTotalSpend).toFixed(2)
                    }
                }}))
    .then(res => setPortfolioData(coinDetails))
    }
    const getUsernameAttempt = (e) => {
        setUsernameAttempt(e.target.value);
        setLoginStatus(false);
    }
    const getPasswordAttempt = (e) => {
        setPasswordAttempt(e.target.value);
        setLoginStatus(false);
    }
    const handleLoginAttempt = (e) => {
        if (usernameAttempt === loginDetails.username && passwordAttempt === loginDetails.password) {
            setLoginStatus(true);
        }
        return (usernameAttempt !== loginDetails.username || passwordAttempt !== loginDetails.password) ? false : true;
    }
    const handleLogout = () => {
        setLoginStatus(false);
    }

    if (liveCoinData.length > 0 && portfolioData.length > 0) {
    return (
        <>
            <CoinRouter
            dbData={dbData}
            portfolioData={portfolioData}
            liveCoinData={liveCoinData}
            addTransaction={addTransaction}
            getUsernameAttempt={getUsernameAttempt}
            getPasswordAttempt={getPasswordAttempt}
            handleLoginAttempt={handleLoginAttempt}
            loginStatus={loginStatus}
            handleLogout={handleLogout}
            />
        </>
    )}
    return <h1>Loading</h1> 
};

export default LogicContainer;