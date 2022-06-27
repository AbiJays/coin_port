import React, { useEffect, useState } from "react";
import CurrencyInput from 'react-currency-input-field';
import TransactionHistory from "./pageComponents/TransactionHistory";

const TransactionForm = ({liveCoinData , portfolioData, dbData}) => {
    console.log(dbData)
    // Form entry
    const [ type, setType] = useState('BUY')
    const [ transactionQuantity, setTransactionQuantity ] = useState()
    const [ dateTime, setDateTime ] = useState((new Date()).toISOString().slice(0,-8))
    const [ price, setPrice] = useState()
    // Coin info autofill
    const [ coin, setCoin ] = useState(liveCoinData[0].abbreviation)
    const [ coinIndex, setCoinIndex ] = useState(0)
    const [ portfolioIndex, setPortfolioIndex] = useState(0)
    // Event handlers for filling out form
    const handleTransactionQuantityChange = event => setTransactionQuantity(event.target.value)
    const handleDateTimeChange = event => setDateTime(event.target.value)
    const handlePriceChange = event => setPrice(event.target.value)
    const handleCoinChange = event => coinChange(event.target.value)
    const handleTypeChange = event => {
        let newType = event.target.value      
        setType(newType)
        if (newType === 'BUY') { // If buying, update the displayed coin to the first entry in the live data
            coinChange(liveCoinData[0].abbreviation)
        }
        else { // If selling, update the displayed coin to the first entry in the portfolio
            coinChange(portfolioData[0].abbreviation)
        }}
    // Update indexes
    const coinChange = (newCoin) => {
        let findIndex = liveCoinData.findIndex((coin) => coin.abbreviation == newCoin)
        let findPortfolioIndex = portfolioData.findIndex((coin) => coin.abbreviation == newCoin)
        setCoin(newCoin)
        setCoinIndex(findIndex)
        setPortfolioIndex(findPortfolioIndex)}
    // Set coin change onloadup so indexes will start off correct
    useEffect(() => coinChange('BTC'),[])

    // data to be sent to the db
    const payload = {
        refName:coin,
        name:liveCoinData[coinIndex].name,
        logo:"TBC",
        quantity:transactionQuantity,
        "price":price,
        "dateTime":dateTime,
        "type":type
    }
    // Form submission
    const handleTransactionSubmit = (event) => {
         event.preventDefault();
         fetch(`http://localhost:5000/api/transactions/`, {
            method:'POST',
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(res => res.json())

        // Add transaction to dbdata and display transactions
        // then write routes for editing and deleting
        // Make sure logic container converts all numbers to integers
    }
    
    // Copied over from bird sightings
    // Need TransactionService.js file in which to define postTransaction()
    // const [formData, setFormData] = useState({})
    // const onChange = (e) => {
    //     formData[e.target.id] = e.target.value;
    //     setFormData(formData);
    // }

    // const onSubmit = (e) => {
    //     e.preventDefault();
    //     postTransaction(formData).then(() => {
    //         addTransaction(formData);
    //     })
    // }


    


    // const handleTransactionSubmit = (event) => {
    //     event.preventDefault();
    //     const currencyToSubmit = currency.trim();
    //     const transactionQuantityToSubmit = transactionQuantity.trim();
    //     const dateTimeToSubmit = dateTime.trim();
    //     const priceToSubmit = price.trim();
    //     if ( !currencyToSubmit || !transactionQuantityToSubmit || !dateTimeToSubmit || !priceToSubmit ){
    //         return
    //     }
    //     // TODO update transactions in portfolio
    //     setCurrency("");
    //     setDateTime("");
    //     setPrice("");
    //     setTransactionQuantity("");
        
    // }
    // Display available coins to buy and sell
    const CoinOptions = () => {
        // Take the names of the first 25 coins from the live feed
        const liveCoinList = liveCoinData.slice(0,24).map(coinName => coinName.abbreviation)
        // Take the names of all the coins in our portfolio
        const portfolioCoinList = portfolioData.map(coinName=>coinName.abbreviation)
        // Return an array of the unique values from both lists
        const coinList = liveCoinList.concat(portfolioCoinList.filter(coinName =>liveCoinList.indexOf(coinName) < 0))
        if (type === 'BUY') {
            return coinList.map(option => <option key={option} value = {option}> {option}</option>)
        }
        else {
            return portfolioCoinList.map(option=> <option key={option} value={option}> {option}</option>)
        }}
        // Change the behaviour of the max quantity so you cant sell more than you have
    const QuantityInput = () => {
        if (type === 'BUY') {
            return <input type="number" name="quantity" id="quantity" placeholder="Quantity" min = {0} value={transactionQuantity} onChange = {handleTransactionQuantityChange}/>
        }
            else {
            return  <input type="number" name="quantity" id="quantity" placeholder="Quantity" min = {0} max = {portfolioData[portfolioIndex].portfolioQuantity} value={transactionQuantity} onChange = {handleTransactionQuantityChange}/>
        }}  
    // Disable the ability to sell if your portfolio is empty
    const TypeOptions = () => {
        if (portfolioData.length > 0) {
            return ( <>
            <option value="BUY">BUY</option>
            <option value="SELL">SELL</option>
            </>)
        }
        else {
            return <option value="BUY">BUY</option>
        }}

    return (
        <>
        <h1>Log a New Transaction</h1>

        <p>You have in {portfolioIndex===(-1)? 0 : portfolioData[portfolioIndex].portfolioQuantity} {liveCoinData[coinIndex].name} in your portfolio{portfolioIndex===(-1)? "" : ` worth £${portfolioData[portfolioIndex].investmentValue}`} </p>
        <p>The current price is: £{liveCoinData[coinIndex].price}</p>

        <form className="transaction-form" onSubmit={handleTransactionSubmit} >
            <select name="transactionType" id="transactionType" value={type} onChange={handleTypeChange}>
                <TypeOptions></TypeOptions>
            </select>
            <select name="coin" id="coin" value={coin} onChange={handleCoinChange}>
                <CoinOptions ></CoinOptions>
            </select>
            <input type="submit" value="Post" />
            <table>
                <thead>
                    <tr>
                        {/* <th></th> //fullname
                        <th></th> //logo
                        <th></th> //abbrev
                        <th></th> //quantity - editable
                        <th></th> //price - editable
                        <th></th> //total value - auto
                        <th></th> //date - editable */}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <p>{liveCoinData[coinIndex].name}</p>
                        </td>
                        <td>
                        {/* <p>{liveCoinData[coinIndex].logo}</p> */}
                        <p>logo</p>
                        </td>
                        <td>
                            <p>{coin}</p>
                        </td>
                        <td>
                            <QuantityInput></QuantityInput>
                        </td>
                        <td>
                            <CurrencyInput id="price" placeholder="Price" decimalsLimit={2} value={price} onChange={handlePriceChange} />
                        </td>
                        <td>
                            <CurrencyInput id="totalValue" placeholder="totalValue" decimalsLimit={2} value={isNaN(transactionQuantity*price)? 0 : transactionQuantity*price} readOnly/>
                        </td>
                        <td>
                            <input type="datetime-local" id="date" value={dateTime} onChange={handleDateTimeChange} />
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>

        <TransactionHistory dbData={dbData}/>
        {/* <form className="transaction-form" onSubmit={handleTransactionSubmit} >
        </form> */}
        </>
    )}

export default TransactionForm