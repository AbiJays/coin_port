import { getTrend } from "../../../helpers/DisplayHelpers"

const GlobalCoinsDisplay = ({liveCoinData}) => {

    if (liveCoinData.length > 0) {

        const globalCoinDataDisplay = liveCoinData.map(coin => {

    
            return (
                <tbody>
                    <tr>
                        <td><a href={"http://localhost:3000/coin/" + coin[1].name}>{coin[1].name}</a></td>
                        <td><img src={coin[1].logo} alt={coin[1].name + "logo"} className="logo" /></td>
                        <td>{coin[1].abbreviation}</td>
                        <td>{parseFloat(coin[1].price).toFixed(2)}</td>
                        <td>{getTrend(coin[1]['1d'])}</td>
                    </tr>
                </tbody>
            )
        })
    
    return globalCoinDataDisplay;

    }
}

export default GlobalCoinsDisplay;