import React, { useState } from "react";
import CurrencyInput from 'react-currency-input-field';

const TransactionForm = () => {

    const [ currency, setCurrency] = useState("");
    const [ transactionQuantity, setTransactionQuantity ] = useState("");
    const [ dateTime, setDateTime ] = useState("");
    const [ price, setPrice] = useState("");

    const handleCurrencyChange = (event) => {
        setCurrencyCoin(event.target.value);
    }

    const handleTransactionQuantityChange = (event) => {
        setTransactionQuantity(event.target.value);
    }
    const handleDateTimeChange= (event) => {
        setDateTime(event.target.value);
    }

    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    }

    const handleTransactionSubmit = (event) => {
        event.preventDefault();
        const currencyToSubmit = currency.trim();
        const ToSubmit = .trim();
        const ToSubmit = .trim();
        const priceToSubmit = price.trim();
        if ( || )
            return
    }
    
    
    return (
        <>
        <h1>New Transaction Page</h1>
        <form>
            <input 
            type="text" 
            placeholder="Coin Name"
            value={currency}
            onChange={handleCurrencyChange}
            />
            <input 
            type="text" 
            placeholder="Transaction Quantity"
            value={transactionQuantity}
            onChange={handleTransactionQuantityChange}
            />
            <input 
            type="date" 
            name="transaction-date" 
            id="date" 
            value={dateTime}
            min="2021-01-01" 
            onChange={handleDateTimeChange}
            />
            <CurrencyInput 
            id="price"
            placeholder="Price"
            value={price}
            decimalsLimit={2}
            onChange={handlePriceChange}
            />
            <input 
            type="submit" 
            value="Post" 
            />
        </form>
        </>
    )
}

export default TransactionForm