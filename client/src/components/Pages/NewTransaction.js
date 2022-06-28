import React, { useEffect, useState } from "react";
import CurrencyInput from 'react-currency-input-field';
import TransactionHistory from "./pageComponents/TransactionHistory";
import PortfolioTotal from "./pageComponents/PortfolioTotal";

const TransactionForm = ({liveCoinData , portfolioData, dbData, addTransaction}) => {
    // console.log('Transaction form', dbData)
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
    const handlePriceChange = (value) => setPrice(value)
    const handleCoinChange = event => coinChange(event.target.value)
    const handleMaxClick = event => setTransactionQuantity(portfolioData[portfolioIndex].portfolioQuantity)
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
        logo:liveCoinData[coinIndex].logo,
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
        .then(addTransaction())

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
        const liveCoinIds = liveCoinData.slice(0,24).map(coin => coin.abbreviation)
        // Take the names of all the coins in our portfolio
        const portfolioCoinIds = portfolioData.map(coin => coin.abbreviation)
        // Use combined list if BUYing, use portfolio list if SELLing
        const coinIds = type === 'BUY' ?
                        liveCoinIds.concat(portfolioCoinIds.filter(coin => liveCoinIds.indexOf(coin) < 0)) :
                        portfolioCoinIds

        return coinIds.map(id => <option key={id} value = {id}> {id}</option>)
    }

 
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
        // console.log(portfolioData[portfolioIndex].investmentValue)
        // console.log(liveCoinData[coinIndex].price)

    return (
        <>
        <PortfolioTotal portfolioData={portfolioData}></PortfolioTotal>
        <h1>Log a New Transaction</h1>

        <p>You have in {portfolioIndex===(-1)? 0 : portfolioData[portfolioIndex].portfolioQuantity} {liveCoinData[coinIndex].name} in your portfolio{portfolioIndex===(-1)? "" : ` worth £${(portfolioData[portfolioIndex].investmentValue)}`} </p>
        <p>The current price is: £{parseInt(liveCoinData[coinIndex].price).toFixed(2)}</p>

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
                        <img src={liveCoinData[coinIndex].logo} alt={liveCoinData[coinIndex].name + "logo"} className="logo" />
                        </td>
                        <td>
                            <p>{coin}</p>
                        </td>
                        <td>
                            <input type="number" name="quantity" id="quantity" placeholder="Quantity" min = {0} max = {type === 'BUY' ? null : portfolioData[portfolioIndex].portfolioQuantity} value={transactionQuantity} onChange = {handleTransactionQuantityChange} required/>
                        </td>
                        {   
                            type === 'SELL' &&  
                            <td>
                                <button name="MAX" id="MAX" onClick={handleMaxClick}>Max</button>
                            </td>
                        }
                        <td>
                            <CurrencyInput id="price" placeholder="Price" decimalsLimit={2}
                             value={price} onValueChange={handlePriceChange} required/>
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

        <TransactionHistory transactions={dbData}/>
        {/* <form className="transaction-form" onSubmit={handleTransactionSubmit} >
        </form> */}
        </>
    )}

export default TransactionForm