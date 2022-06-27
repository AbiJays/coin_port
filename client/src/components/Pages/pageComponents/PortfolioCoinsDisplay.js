import { getTrend } from "../../../helpers/DisplayHelpers"

const PortfolioCoinsDisplay = ({portfolioData}) => {



    if (portfolioData.length > 0) {


    const coinDataDisplay = portfolioData.map(coin => {



        return (
            <tbody>
                <tr>
                    <td><a href={"http://localhost:3000/coin/" + coin[1].name}>{coin[1].name}</a></td>
                    <td><img src={coin[1].logo} alt={coin[1].name + "logo"} className="logo" /></td>
                    <td>{coin[1].abbreviation}</td>
                    <td>{coin[1].portfolioQuantity}</td>
                    <td></td>
                    <td>{parseFloat(coin[1].currentPrice).toFixed(3)}</td>
                    <td>{coin[1].investmentValue}</td>
                    <td>{getTrend(coin[1].trend)}</td>
                </tr>
            </tbody>
    
            )
        })
    
    return coinDataDisplay;

}
}

export default PortfolioCoinsDisplay;