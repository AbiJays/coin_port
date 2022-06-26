const GlobalCoinsDisplay = ({coinDataDaily}) => {

    if (coinDataDaily.length > 0) {

        const globalCoinDataDisplay = coinDataDaily.map(data => {
            const name = data["Meta Data"]["3. Digital Currency Name"];
            const code = data["Meta Data"]["2. Digital Currency Code"];
            const priceData = data["Time Series (Digital Currency Daily)"]
            const mostRecentData = priceData[Object.keys(priceData)[0]]
            const mostRecentPrice = mostRecentData["4a. close (GBP)"]
            const trendComparisonData = priceData[Object.keys(priceData)[1]]
            const trendComparisonPrice = trendComparisonData["4a. close (GBP)"]
            const getTrend = (current, previous) => current >= previous ? '+' : '-';
    
            return (
                <tbody>
                    <tr>
                        <td><a href={"http://localhost:3000/coin/" + name}>{name}</a></td>
                        <td>{code}</td>
                        <td>{mostRecentPrice}</td>
                        <td>{getTrend(mostRecentPrice, trendComparisonPrice)}</td>
                    </tr>
                </tbody>
            )
        })
    
    return globalCoinDataDisplay;

    }
}

export default GlobalCoinsDisplay;