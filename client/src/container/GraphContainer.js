import { useEffect, useState } from "react";
import React from "react";
import GraphCode from "../components/Pages/pageComponents/GraphCode";
import DataStored from "../dataStored.js";
import { availableCoins } from "../helpers/AvailableCoins";


const GraphContainer = ({slug, selectedCoin, selectedCoinData}) => {


    const [coins, setCoins] = useState(["BTC", "ETH"]);
    const [coinDataDaily, setCoinDataDaily] = useState([])
    const [coinData5Min, setCoinData5Min] = useState([])

    // console.log('how about here?', selectedCoinData)
    // const [selectedCoinData, setSelectedCoinData] = useState({})

    // const selectedCoin = slug[Object.keys(slug)[0]];
    // console.log(selectedCoin)

    // useEffect(()=> {
    //     getCoinData();
    // }, []) 


    // const getCoinData = () => {
    //     console.log("Getting slug data");
    //     // const coinPromises = coins.map((coin) => {
    //     //     return fetch(`https://www.alphavantage.co/query?function=CRYPTO_INTRADAY&symbol=${coin}&market=USD&interval=5min&apikey=7PU7J7PVOJFO2VDL`) 
    //     //     .then(response => response.json())})
    //     // Promise.all(coinPromises)
    //     // .then((combinedData) => {
    //     //     setCoinData5Min(combinedData);
    //     // }) //This will pull data in every 5 minutes. For up to date info but only when fetch is triggered. Reconstruct it to just pull the new data[0]
    //     // const coinDailyPromises = availableCoins.map((coin) => {
    //     return fetch( `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=${selectedCoin}&market=GBP&apikey=1786JGDXIS069AHE`)
    //     .then(res => res.json())
    //     .then((coinData) => {
    //         setSelectedCoinData(coinData);
    //         console.log(selectedCoin)
    //         console.log(coinData)
    //     })
    //     }

        
        // console.log('available:', availableCoins)
        // console.log('allData:', coinDataDaily)
   
        if (!selectedCoinData || Object.keys(selectedCoinData).length === 0) {
            return <p>Loading</p>
        }

        if (selectedCoinData) {

        
        // const selectedCoin = coinDataDaily.find(coin => coin["Meta Data"]["2. Digital Currency Code"] == slug[Object.keys(slug)[0]])
        // console.log('selectedCoinData:', selectedCoinData)
        const listOfDates = Object.keys(selectedCoinData["Time Series (Digital Currency Daily)"])

        
        const data = listOfDates.map((date) => {
                return {
                    "x": date,
                    "y": parseFloat(selectedCoinData["Time Series (Digital Currency Daily)"][date]["4a. close (GBP)"])
            }
        })
    
        const id = selectedCoinData["Meta Data"]["3. Digital Currency Name"];
        const color = "hsl(240, 20%, 50%)";
    
        const formattedCloseData = [{
            "id": id,
            "color": color,
            "data": data.slice(0,9)
        }]

      
    
   

    return (
            <>
                <GraphCode data = {formattedCloseData} />
            </>
    )


}
}
export default GraphContainer;