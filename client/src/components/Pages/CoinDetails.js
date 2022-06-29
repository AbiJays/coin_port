import { React, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import GraphContainer from "../../container/GraphContainer";
import SingleCoinDisplay from "./pageComponents/SingleCoinDisplay";
import TransactionHistory from "./pageComponents/TransactionHistory";
import AutofillSearch from "./pageComponents/AutofillSearch";
import PortfolioTotal from "./pageComponents/PortfolioTotal";

const CoinDetails = ({portfolioData, liveCoinData}) => {
    
    const navigate = useNavigate();
    const { slug }  = useParams()
    const [selectedCoinData, setSelectedCoinData] = useState({})
    const [coinTransactions, setCoinTransactions] = useState([])
    const [selectedCoin, setSelectedCoin] = useState(slug)
    // const selectedCoin = slug;
    // console.log('slug:', slug)
    // console.log('Portfolio data:', portfolioData)

    // useEffect( () => {
    //     setSelectedCoin(slug)
    // }, [slug])

    useEffect(()=> {
        getCoinData();
        getCoinPortfolioData();
    }, [selectedCoin
    ])

    const getCoinData = () => {
        return fetch( `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=${slug}&market=GBP&apikey=1786JGDXIS069AHE`)
        .then(res => res.json())
        .then((coinData) => {
            setSelectedCoinData(coinData);
        })}

        const getCoinPortfolioData = () => {
            fetch(`http://localhost:5000/api/coins/${selectedCoin}`)
                    .then(res => res.json())
                    .then(transactions => setCoinTransactions(transactions))}

        const coinOptions = liveCoinData.map(coin => {
            return (
                <option key={coin.abbreviation}>{coin.name}</option>
            )})

        const getCoinByName = (selectedName) => liveCoinData.find(coin => coin.name === selectedName)

        const handleCoinSubmit = (e) => {
            // console.log(e.target.value)
            const newCoin = getCoinByName(e.target.value).abbreviation
            setSelectedCoin(newCoin)
            navigate(`/coin/${newCoin}`)
        }

        if (!selectedCoinData || Object.keys(selectedCoinData).length === 0) {
            return <p>Loading</p>
        }
    
        // Catches error if coin not in API
        if (Object.keys(selectedCoinData).length === 1) {
            return (
                <>
                    <p>Sorry, we don't have data for that today...</p>
                    <select onChange={handleCoinSubmit}>
                        <option >View a different coin:</option>
                        {coinOptions}
                    </select>
                </>
            )}
        if (selectedCoinData) {
            function goToForm() {
                navigate(`/transactionform/${slug}`)
            }
            const coinPortfolioData = portfolioData.find(coin => coin.abbreviation===slug)
            const portfolioCoinCodes = portfolioData.map(coin => coin.abbreviation)
            const coinName = selectedCoinData["Meta Data"]["3. Digital Currency Name"]
            const coinOptions = liveCoinData.map(coin => {
                return (
                    <option key={coin.abbreviation}>{coin.name}</option>
                )
            })

            const getSearchResult = (coin) => {
                // const newCoin = getCoinByName(e.target.value).abbreviation
                setSelectedCoin(coin.abbreviation)
                navigate(`/coin/${coin.abbreviation}`)
            }
            return (
            <div className="main-container">
                <PortfolioTotal portfolioData={portfolioData}/>
                <h1>{coinName} </h1>
                <div>
                    <div className="coin-detail-title-container">
                        <h4>{coinName}'s current market behaviour:</h4>
                        <div>
                            <select id="otherCoinSelector" onChange={handleCoinSubmit}>
                                <option >View a Different Coin:</option>
                                {coinOptions}
                            </select>
                            <div className="autofill-container">
                            <AutofillSearch liveCoinData={liveCoinData} getSearchResult={getSearchResult}/>
                        </div>
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
                            <th colSpan="2">Currency</th>
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

                <button className="new-transaction-button" onClick={goToForm}>Click to add a transaction for {coinName}.</button>

                <TransactionHistory transactions={coinTransactions} coinName={coinName}></TransactionHistory>
            </div>
            )
        }}
 
export default CoinDetails;