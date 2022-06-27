import React from "react";
import GraphSelector from "../components/GraphSelector";
import GraphDetails from "../components/GraphDetails";

const GraphContainer = () => {

    const getCoinData = () => {
        console.log("Getting 5 min coin data");
        const coinPromises = coins.map((coin) => {
            return fetch(`https://www.alphavantage.co/query?function=CRYPTO_INTRADAY&symbol=${coin}&market=USD&interval=5min&apikey=7PU7J7PVOJFO2VDL`) 
            .then(response => response.json())})
        Promise.all(coinPromises)
        .then((combinedData) => {
            setCoinData5Min(combinedData);
        }) //This will pull data in every 5 minutes. For up to date info but only when fetch is triggered. Reconstruct it to just pull the new data[0]
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

    return ( 
        <h1>I'm a GraphContainer</h1>
     );

}
 
export default GraphContainer;





    // latest coin values
    // useEffect(()=> { 
    //     getCoinData();
    // }, [variable/state]) 