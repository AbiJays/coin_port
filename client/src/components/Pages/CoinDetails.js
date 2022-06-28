import { useParams } from "react-router-dom";
import GraphCode from "./pageComponents/GraphCode";
import GraphContainer from "../../container/GraphContainer";
import { useEffect, useState } from "react";


const CoinDetails = () => {
    const { slug }  = useParams()

    const [selectedCoinData, setSelectedCoinData] = useState({})

    const selectedCoin = slug;
    console.log(slug)

    useEffect(()=> {
        getCoinData();
    }, []) 


    const getCoinData = () => {
        console.log("Getting slug data");
        // const coinPromises = coins.map((coin) => {
        //     return fetch(`https://www.alphavantage.co/query?function=CRYPTO_INTRADAY&symbol=${coin}&market=USD&interval=5min&apikey=7PU7J7PVOJFO2VDL`) 
        //     .then(response => response.json())})
        // Promise.all(coinPromises)
        // .then((combinedData) => {
        //     setCoinData5Min(combinedData);
        // }) //This will pull data in every 5 minutes. For up to date info but only when fetch is triggered. Reconstruct it to just pull the new data[0]
        // const coinDailyPromises = availableCoins.map((coin) => {
        return fetch( `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=${selectedCoin}&market=GBP&apikey=1786JGDXIS069AHE`)
        .then(res => res.json())
        .then((coinData) => {
            setSelectedCoinData(coinData);
            console.log('this is the data:', coinData)
        })
        }

    
        
        if (selectedCoinData) {
            console.log('is it here?', selectedCoinData)
            return (
                <>
                <h1> Choice {slug} </h1>
                <p>You're on page {slug}</p>
                <div id="lineChart">
                < GraphContainer slug={slug} selectedCoin={selectedCoin} selectedCoinData={selectedCoinData}/>
                </div>
            </>
            )
        }


        // return (
        //     <>
        //         <h1> Choice {slug} </h1>
        //         <p>You're on page {slug}</p>
        //         <div id="lineChart">
        //         < GraphContainer slug={slug} selectedCoin={selectedCoin} selectedCoinData={selectedCoinData}/>
        //         </div>
        //     </>
        //      ); 


}
 
export default CoinDetails;