import { getTrend } from "../../../helpers/DisplayHelpers"

const PortfolioCoinsDisplay = ({portfolioData}) => {



    if (portfolioData.length > 0) {


    const coinDataDisplay = portfolioData.map(coin => {



        return (
            <tbody className="portfolio-display">
                <tr key={coin.abbreviation}>
                    <td><a href={"http://localhost:3000/coin/" + coin.abbreviation}>{coin.name}</a></td>
                    <td><a href={"http://localhost:3000/coin/" + coin.abbreviation}><img src={coin.logo} alt={coin.abbreviation + "logo"} className="logo" /></a></td>
                    <td><a href={"http://localhost:3000/coin/" + coin.abbreviation}>{coin.abbreviation}</a></td>
                    <td><a href={"http://localhost:3000/coin/" + coin.abbreviation}>{coin.portfolioQuantity}</a></td>
                    <td><a href={"http://localhost:3000/coin/" + coin.abbreviation}></a></td>
                    <td><a href={"http://localhost:3000/coin/" + coin.abbreviation}>{parseFloat(coin.currentPrice).toFixed(3)}</a></td>
                    <td><a href={"http://localhost:3000/coin/" + coin.abbreviation}>{coin.investmentValue}</a></td>
                    <td><a href={"http://localhost:3000/coin/" + coin.abbreviation}>{getTrend(coin.trend)}</a></td>
                </tr>
            </tbody>
    
            )
        })
    
    return coinDataDisplay;

}
}

export default PortfolioCoinsDisplay;