import { getTrend } from "../../../helpers/DisplayHelpers";
import { useNavigate } from "react-router-dom";

const SingleCoinDisplay = ({coin}) => {
    let navigate = useNavigate();

    function goToCoin() {
        console.log(coin.abbreviation)
        navigate(`/coin/${coin.abbreviation}`)
      }
    // return <button onClick={goToCoin}>button</button>
    return (
        <>


        <tr key={coin.abbreviation} className="table-row" >
            <td><div onClick={goToCoin}>{coin.name}</div></td>
            {/* <td><a href={"http://localhost:3000/coin/" + coin.abbreviation}>{coin.name}</a></td> */}
            <td><div onClick={goToCoin}>
                <div>
                    <img src={coin.logo} alt={coin.abbreviation + "logo"} className="logo" />
                    <p>{coin.abbreviation}</p>
                </div>
                </div>
            </td>
            <td align="center" className="centered-cell"><div onClick={goToCoin} >{coin.portfolioQuantity}</div></td>
            <td align="center" className="centered-cell"><div onClick={goToCoin}>{parseFloat(coin.currentPrice).toFixed(3)}</div></td>
            <td align="center" className="centered-cell"><div onClick={goToCoin}>{coin.investmentValue}</div></td>
            <td align="center" className="centered-cell"><div onClick={goToCoin}>{getTrend(coin.trend)}</div></td>
            <td align="center" className="centered-cell"><div onClick={goToCoin}>{coin.profitAndLoss}</div></td>
        </tr>
        </>
)}

export default SingleCoinDisplay;