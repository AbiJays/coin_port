import { getTrend } from "../../../helpers/DisplayHelpers";

const SingleCoinDisplay = ({coin}) => {

    return (
        <>
            <tr key={coin.abbreviation} className="table-row" >
                <td><a href={"http://localhost:3000/coin/" + coin.abbreviation}>{coin.name}</a></td>
                <td><a href={"http://localhost:3000/coin/" + coin.abbreviation}>
                    <div>
                        <img src={coin.logo} alt={coin.abbreviation + "logo"} className="logo" />
                        <p>{coin.abbreviation}</p>
                    </div>
                    </a>
                </td>
                <td><a href={"http://localhost:3000/coin/" + coin.abbreviation}>{coin.portfolioQuantity}</a></td>
                <td><a href={"http://localhost:3000/coin/" + coin.abbreviation}>{parseFloat(coin.currentPrice).toFixed(3)}</a></td>
                <td><a href={"http://localhost:3000/coin/" + coin.abbreviation}>{coin.investmentValue}</a></td>
                <td><a href={"http://localhost:3000/coin/" + coin.abbreviation}>{getTrend(coin.trend)}</a></td>
                <td><a href={"http://localhost:3000/coin/" + coin.abbreviation}>{coin.profitAndLoss}</a></td>
            </tr>
        </>
)}

export default SingleCoinDisplay;