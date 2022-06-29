import { React, useEffect, useState } from "react";
// import { useParams,useLocation } from "react-router-dom";

import { useParams,useLocation, useNavigate } from "react-router-dom";
import GraphCode from "./pageComponents/GraphCode";
import GraphContainer from "../../container/GraphContainer";
import SingleCoinDisplay from "./pageComponents/SingleCoinDisplay";
import TransactionHistory from "./pageComponents/TransactionHistory";
import AutofillSearch from "./pageComponents/AutofillSearch";


const CoinDetails = ({portfolioData, liveCoinData}) => {
    const navigate = useNavigate();

    const { slug }  = useParams()

    const [selectedCoinData, setSelectedCoinData] = useState({})
    const [coinTransactions, setCoinTransactions] = useState([])

    const selectedCoin = slug;
    // console.log('slug:', slug)
    // console.log('Portfolio data:', portfolioData)



    useEffect(()=> {
        getCoinData();
        getCoinPortfolioData();
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
            // console.log('this is the data:', coinData)
            setSelectedCoinData(coinData);
        })
        }

        const getCoinPortfolioData = () => {
            fetch(`http://localhost:5000/api/coins/${selectedCoin}`)
                    .then(res => res.json())
                    .then(transactions => setCoinTransactions(transactions))}

           
                    
        const coinOptions = liveCoinData.map(coin => {
            return (
                <option key={coin.abbreviation}>{coin.name}</option>
            )
        })

        const getCoinByName = (selectedName) => liveCoinData.find(coin => coin.name === selectedName)

        const handleCoinSubmit = (e) => {
            console.log(e.target.value)
            // const newCoin = getCoinByName(e.target.value).abbreviation
            window.location.href = `http://localhost:3000/coin/${getCoinByName(e.target.value).abbreviation}`
        }

        if (!selectedCoinData || Object.keys(selectedCoinData).length === 0) {
            return <p>Loading</p>
        }
    
        // Catches error if coin not in API
        if (Object.keys(selectedCoinData).length === 1) {
            return (
                <>
                    <p>Sorry, we don't have data for that today...</p>
                    {/* <a href="http://localhost:3000/coin/BTC">Back to Bitcoin</a> */}
                
                    <select onChange={handleCoinSubmit}>
                        <option >View a different coin:</option>
                        {coinOptions}
                    </select>
                </>
            )
        }
        
        if (selectedCoinData) {

            function goToForm() {

                navigate(`/transactionform/${slug}`)
            }
            
            // console.log('portfolio data:', portfolioData)
            // console.log('this is the data:', selectedCoinData)
            // console.dir(portfolioData)
            // console.log('stuff', portfolioData.portfolioData)
            // const useablePortfolioData = portfolioData
            const coinPortfolioData = portfolioData.find(coin => coin.abbreviation===slug)
            const portfolioCoinCodes = portfolioData.map(coin => coin.abbreviation)
            // console.log('slugs portfolio data:', coinPortfolioData)
            const coinName = selectedCoinData["Meta Data"]["3. Digital Currency Name"]
            
            const coinOptions = liveCoinData.map(coin => {
                return (
                    <option key={coin.abbreviation}>{coin.name}</option>
                )
            })

            const getSearchResult = (coin) => {
                window.location.href = `http://localhost:3000/coin/${coin.abbreviation}` 
                       }
            return (
                <>
                <h1>{coinName} </h1>

                <div>

                    <div className="coin-detail-title-container">
                        <h4>{coinName}'s current market behaviour:</h4>
                        <select id="otherCoinSelector" onChange={handleCoinSubmit}>
                            <option >View a Different Coin:</option>
                            {coinOptions}
                        </select>
                        <div className="autofill-container">
                        <AutofillSearch liveCoinData={liveCoinData} getSearchResult={getSearchResult}/>
                        </div>
                    </div>

                    <div id="lineChart">
                    < GraphContainer slug={slug} selectedCoin={selectedCoin} selectedCoinData={selectedCoinData}/>
                    </div>
                </div>

                {portfolioCoinCodes.includes(slug) && 
                <table>
                    <thead>
                        <tr>
                            <th>Currency</th>
                            <th>Quantity</th>
                            <th>Current Global Price (£)</th>
                            <th>Investment Value (£)</th>
                            <th>Current Trend</th>
                            <th>Profit Loss (£)</th>
                        </tr>
                    </thead>
                    <tbody>
                      
                            <SingleCoinDisplay coin={coinPortfolioData} portfolioData={portfolioData}/>
            
                    </tbody>
                </table>
                }

                <button onClick={goToForm}>Click to add a transaction for {coinName}.</button>

                <TransactionHistory transactions={coinTransactions} coinName={coinName}></TransactionHistory>
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