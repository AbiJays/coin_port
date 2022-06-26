const PortfolioCoinsDisplay = ({liveCoinData, portfolioData}) => {


    if (liveCoinData.length > 0) {

    const getCoinProperty = (coin, property) => {
        let coinPortfolioData = portfolioData.filter(data => data[0] === coin);
        return coinPortfolioData[0][1][property]
    } 

    const coinDataDisplay = liveCoinData.map(data => {
        // const name = data.name
        // const code = data.abbreviation
        // const priceData = data["Time Series (Digital Currency Daily)"]
        // const mostRecentData = priceData[Object.keys(priceData)[0]]
        // const mostRecentPrice = mostRecentData["4a. close (GBP)"]
        
        return (
            
            <tbody>
                <tr>
                    <td><a href={"http://localhost:3000/coin/" + data.name}>{data.name}</a></td>
                    <td>{data.abbreviation}</td>
                    <td>{getCoinProperty(data.abbreviation, 'portfolioQuantity')}</td>
                    <td></td>
                    <td>{data.price}</td>
                    <td>{getCoinProperty(data.abbreviation, 'investmentValue')}</td>
                    <td>{getCoinProperty(data.abbreviation, 'trend')}</td>
                </tr>
            </tbody>
    
            )
        })
    
    return coinDataDisplay;

}
}

export default PortfolioCoinsDisplay;