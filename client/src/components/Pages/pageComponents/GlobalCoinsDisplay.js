import { getTrend, portfolioCoinMarker } from "../../../helpers/DisplayHelpers"

const GlobalCoinsDisplay = ({liveCoinData, portfolioData}) => {

    if (liveCoinData.length > 0) {
        // console.log(liveCoinData);
        const globalCoinDataDisplay = liveCoinData.map(coin => {


    
            return (
                <tbody>
                    <tr>
                        <td>{portfolioCoinMarker(portfolioData, coin.abbreviation)}</td>
                        <td><a href={"http://localhost:3000/coin/" + coin.name}>{coin.name}</a></td>
                        <td><img src={coin.logo} alt={coin.abbreviation + "logo"} className="logo" /></td>
                        <td>{coin.abbreviation}</td>
                        <td>{parseFloat(coin.price).toFixed(2)}</td>
                        <td>{getTrend(coin['1d'])}</td>
                    </tr>
                </tbody>
            )
        })
    
    return globalCoinDataDisplay;

    }
}

export default GlobalCoinsDisplay;