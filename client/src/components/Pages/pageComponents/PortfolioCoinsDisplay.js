import { getTrend } from "../../../helpers/DisplayHelpers"

const PortfolioCoinsDisplay = ({portfolioData}) => {



    if (portfolioData.length > 0) {


    const coinDataDisplay = portfolioData.map(coin => {



        return (
            <tbody>
                <tr key={coin.abbreviation}>
                    <td><a href={"http://localhost:3000/coin/" + coin.name}>{coin.name}</a></td>
                    <td><img src={coin.logo} alt={coin.abbreviation + "logo"} className="logo" /></td>
                    <td>{coin.abbreviation}</td>
                    <td>{coin.portfolioQuantity}</td>
                    <td></td>
                    <td>{parseFloat(coin.currentPrice).toFixed(3)}</td>
                    <td>{coin.investmentValue}</td>
                    <td>{getTrend(coin.trend)}</td>
                </tr>
            </tbody>
    
            )
        })
    
    return coinDataDisplay;

}
}

export default PortfolioCoinsDisplay;