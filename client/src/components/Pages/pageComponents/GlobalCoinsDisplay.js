import { getTrend, portfolioCoinMarker } from "../../../helpers/DisplayHelpers"
import { useNavigate } from "react-router-dom"


const GlobalCoinsDisplay = ({liveCoinData, portfolioData}) => {
    let navigate = useNavigate();

    if (liveCoinData.length > 0) {
        const globalCoinDataDisplay = liveCoinData.map(coin => {
            function goToCoin() {
                console.log(coin.abbreviation)
                navigate(`/coin/${coin.abbreviation}`)
              }
            return (
                <>
                    <tr className="table-row">
                        <td align="center" className="centered-cell"><div onClick={goToCoin}>{portfolioCoinMarker(portfolioData, coin.abbreviation)}</div></td>
                        <td id="globalCoinName"><div onClick={goToCoin}>{coin.name}</div></td>
                        <td align="center" className="centered-cell">
                        <div onClick={goToCoin}>
                            <div>
                                <img src={coin.logo} alt={coin.abbreviation + "logo"} className="logo" />
                                <p>{coin.abbreviation}</p> 
                            </div>
                            </div>
                        </td>
                        <td align="center" className="centered-cell"><div onClick={goToCoin}>{parseFloat(coin.price).toFixed(2)}</div></td>
                        <td align="center" className="centered-cell"><div onClick={goToCoin}>{getTrend(coin['1d'])}</div></td>
                    </tr>
                        {/* <td><a href={"http://localhost:3000/coin/" + coin.abbreviation}><img src={coin.logo} alt={coin.abbreviation + "logo"} className="logo" /></a></td> */}
                </>
            )
        })
    
    return globalCoinDataDisplay;

    }
}

export default GlobalCoinsDisplay;