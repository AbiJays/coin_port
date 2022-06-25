const PortfolioCoinsDisplay = ({coinDataDaily, portfolioData}) => {

    if (coinDataDaily.length > 0) {

    const getCoinProperty = (coin, property) => {
        let coinPortfolioData = portfolioData.filter(data => data[0] === coin);
        return coinPortfolioData[0][1][property]
    } 

    const coinDataDisplay = coinDataDaily.map(data => {
        const name = data["Meta Data"]["3. Digital Currency Name"]
        const code = data["Meta Data"]["2. Digital Currency Code"]
        const priceData = data["Time Series (Digital Currency Daily)"]
        const mostRecentData = priceData[Object.keys(priceData)[0]]
        const mostRecentPrice = mostRecentData["4a. close (GBP)"]
        
        return (
            
            <tbody>
                <tr>
                    <td><a href={"http://localhost:3000/coin/" + name}>{name}</a></td>
                    <td>{code}</td>
                    <td>{getCoinProperty(code, 'portfolioQuantity')}</td>
                    <td></td>
                    <td>{mostRecentPrice}</td>
                    <td>{getCoinProperty(code, 'investmentValue')}</td>
                    <td>{getCoinProperty(code, 'trend')}</td>
                </tr>
            </tbody>
    
            )
        })
    
    return coinDataDisplay;

}
}

export default PortfolioCoinsDisplay;