import {Link,useNavigate} from "react-router-dom";

const NavBar = ({liveCoinData}) => {
    // const navigate = useNavigate();
    // const goBack = () => navigate(-1);
    
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
                                <Link to={`/coin/:${coin[1].name}`}>{coin[1].name}</Link>
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
            {/* <li>
                <button onClick={goBack}>Back</button>
            </li> */}

        </ul>
    );
}
export default NavBar;


