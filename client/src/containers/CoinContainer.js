import React, {useState} from 'react';

const CoinContainer = () => {

    const [availableCurrencies, setAvailableCurrencies] = useState([]);

    setAvailableCurrencies(["BTC", "ETH", "XRP", "BCH", "ADA"]);

    const getCoinData = () => {
        console.log("Getting Coin Data");
        const coinPromises = availableCurrencies.map((currency) => {
            return fetch(`https://www.alphavantage.co/query?function=CRYPTO_INTRADAY&symbol=${currency}&market=USD&interval=5min&apikey=1786JGDXIS069AHE`)
            .then(response => response.json())})
            .then()
    }
    
    

    return (
        <>
            <h2>CoinContainer</h2>
        </>
    )
}

export default CoinContainer;