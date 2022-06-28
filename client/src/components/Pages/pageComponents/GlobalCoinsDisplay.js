import { getTrend, portfolioCoinMarker } from "../../../helpers/DisplayHelpers"


const GlobalCoinsDisplay = ({liveCoinData, portfolioData}) => {

    if (liveCoinData.length > 0) {
        // console.log(liveCoinData);
        const globalCoinDataDisplay = liveCoinData.map(coin => {


    
            return (
                
                    <tr>
                        <td><a href={"http://localhost:3000/coin/" + coin.abbreviation}>{portfolioCoinMarker(portfolioData, coin.abbreviation)}</a></td>
                        <td><a href={"http://localhost:3000/coin/" + coin.abbreviation}>{coin.name}</a></td>
                        <td><a href={"http://localhost:3000/coin/" + coin.abbreviation}><img src={coin.logo} alt={coin.abbreviation + "logo"} className="logo" /></a></td>
                        <td><a href={"http://localhost:3000/coin/" + coin.abbreviation}>{coin.abbreviation}</a></td>
                        <td><a href={"http://localhost:3000/coin/" + coin.abbreviation}>{parseFloat(coin.price).toFixed(2)}</a></td>
                        <td><a href={"http://localhost:3000/coin/" + coin.abbreviation}>{getTrend(coin['1d'])}</a></td>
                    </tr>
            )
        })
    
    return globalCoinDataDisplay;

    }
}

export default GlobalCoinsDisplay;