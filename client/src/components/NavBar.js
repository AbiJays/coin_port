import {Link} from "react-router-dom";

const NavBar = ({liveCoinData}) => {
 
    
    return (
        <ul>
            {/* <li>
                
                <Link to="/">Login</Link>
            </li> */}
            <li>
                <Link to="/myportfolio">My Portfolio</Link>
            </li>
            {/* <li>
                <ul>
                    {liveCoinData.map(coin => {
                        return (
                            <li>
                                <Link to={`/coin/:${coin.name}`}>{coin.name}</Link>
                            </li>
                            )

                    })}
                </ul>
            </li> */}
            {/* <li>
                <Link to="/coin/:slug">Coin Details</Link>
            </li> */}
            <li>
                <Link to="/transactionform">Add a Transaction</Link>
            </li>
            <li>
                <Link to="/global">Cryptoverse</Link>
            </li>
    

        </ul>
    );
}
export default NavBar;


