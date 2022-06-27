import { getTrend, portfolioCoinMarker } from "../../../helpers/DisplayHelpers"

const GlobalCoinsDisplay = ({liveCoinData, portfolioData}) => {

    if (liveCoinData.length > 0) {
        // console.log(liveCoinData);
        const globalCoinDataDisplay = liveCoinData.map(coin => {


    
            return (
                <tbody>
                    <tr>
                        <td><a href={"http://localhost:3000/coin/" + coin.name}>{portfolioCoinMarker(portfolioData, coin.abbreviation)}</a></td>
                        <td><a href={"http://localhost:3000/coin/" + coin.name}>{coin.name}</a></td>
                        <td><a href={"http://localhost:3000/coin/" + coin.name}><img src={coin.logo} alt={coin.abbreviation + "logo"} className="logo" /></a></td>
                        <td><a href={"http://localhost:3000/coin/" + coin.name}>{coin.abbreviation}</a></td>
                        <td><a href={"http://localhost:3000/coin/" + coin.name}>{parseFloat(coin.price).toFixed(2)}</a></td>
                        <td><a href={"http://localhost:3000/coin/" + coin.name}>{getTrend(coin['1d'])}</a></td>
                    </tr>
                </tbody>
            )
        })
    
    return globalCoinDataDisplay;

    }
}

export default GlobalCoinsDisplay;