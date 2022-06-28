import { useParams } from "react-router-dom";
import GraphCode from "./pageComponents/GraphCode";
import GraphContainer from "../../container/GraphContainer";
import { useEffect, useState } from "react";
import { getCoinPortfolioData } from "../../helpers/CoinFilters";
import SingleCoinDisplay from "./pageComponents/SingleCoinDisplay";

const CoinDetails = ({portfolioData}) => {
    const { slug }  = useParams()

    const [selectedCoinData, setSelectedCoinData] = useState({})

    const selectedCoin = slug;
    console.log('slug:', slug)
    console.log('Portfolio data:', portfolioData)

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
        return fetch( `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=${slug}&market=GBP&apikey=1786JGDXIS069AHE`)
        .then(res => res.json())
        .then((coinData) => {
            console.log('this is the data:', coinData)
            setSelectedCoinData(coinData);
        })
        }


        if (!selectedCoinData || Object.keys(selectedCoinData).length === 0) {
            return <p>Loading</p>
        }
    
        
        if (selectedCoinData) {

            
            // console.log('this is the data:', selectedCoinData)
            // console.dir(portfolioData)
            // console.log('stuff', portfolioData.portfolioData)
            // const useablePortfolioData = portfolioData
            const coinPortfolioData = portfolioData.find(coin => coin.abbreviation===slug)
            // console.log('slugs portfolio data:', coinPortfolioData)

            const coinName = selectedCoinData["Meta Data"]["3. Digital Currency Name"]
            // console.log('is it here?', selectedCoinData)
            return (
                <>
                <h1>{coinName} </h1>
                <div>
                    <h4>{coinName}'s current market behaviour:</h4>
                    <div id="lineChart">
                    < GraphContainer slug={slug} selectedCoin={selectedCoin} selectedCoinData={selectedCoinData}/>
                    </div>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Currency</th>
                            <th></th>
                            <th></th>
                            <th>Quantity</th>
                            <th>Current Global Price (£)</th>
                            <th>Investment Value (£)</th>
                            <th>Current Trend</th>
                            <th>Profit Loss (£)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <SingleCoinDisplay coin={coinPortfolioData} portfolioData={portfolioData}/>
                        </tr>
                    </tbody>
                </table>
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