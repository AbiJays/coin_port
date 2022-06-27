import { useEffect, useState } from "react";
import React from "react";
import GraphCode from "../components/Pages/pageComponents/GraphCode";
import DataStored from "../dataStored.js";


const GraphContainer = () => {

    const [coins, setCoins] = useState(["BTC", "ETH"]);
    const [coinDataDaily, setCoinDataDaily] = useState([])
    const [coinData5Min, setCoinData5Min] = useState([])

    useEffect(()=> {
        getCoinData();
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
        // .then(setLoaded(true));
        }
    
        
        if (coinDataDaily.length === 0) {
            return <p>Loading</p>
        }
        console.log(coinDataDaily[0]["Meta Data"])

        // const dates =[{}]

        const dates = coinDataDaily.map(coin => {
            // const coinCode = coin["Meta Data"]["2. Digital Currency Code"]
            const container = {};
            container[coin["Meta Data"]["2. Digital Currency Code"]] = Object.keys(coin["Time Series (Digital Currency Daily)"])
            return container;
        })

        // console.log('Dates be like:', dates);
        // const listOfDates = Object.keys(coinDataDaily["Time Series (Digital Currency Daily)"])

        const graphsData = coinDataDaily.map((coin) => {
        // console.log('Dates be like:', dates);
        const coinCode = String(coin["Meta Data"]["2. Digital Currency Code"])
        // console.log('Coin is called', coinCode)
        const coinDatesObject = dates.filter(date => Object.keys(date)[0] === coin["Meta Data"]["2. Digital Currency Code"])
        const coinDates = coinDatesObject[0][coinCode]
        // console.log('Coin Specific Dates be Like:', coinDates)
        console.log(coinDates)
        const data = coinDates.map((date) => {
                return {
                    "x": date,
                    "y": parseFloat(coin["Time Series (Digital Currency Daily)"][date]["4a. close (GBP)"])
            }
        })
    
        const id = coin["Meta Data"]["3. Digital Currency Name"];
        const color = "hsl(240, 20%, 50%)";
    
        const formattedCloseData = [{
            "id": id,
            "color": color,
            "data": data.slice(0,9)
        }]

        return formattedCloseData
    
    })

    console.log(graphsData)
        return ( 
            <>
            <GraphCode data = {graphsData} />
            </>
         );


    // return (
    //     {graphs}
    // )


}
export default GraphContainer;