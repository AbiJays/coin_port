import {Link,useNavigate} from "react-router-dom";

const NavBar = () => {
    // const navigate = useNavigate();
    // const goBack = () => navigate(-1);
    
    return (
        <ul>
            <li>
                
                <Link to="/">Login</Link>
            </li>
            <li>
                <Link to="/myportfolio">My Portfolio</Link>
            </li>
            <li>
                <Link to="/coin/:slug">Coin Details</Link>
            </li>
            <li>
                <Link to="/transactionform">New Transaction</Link>
            </li>
            <li>
                <Link to="/global">Cryptoverse</Link>
            </li>
            <li>
                <Link to="/error">Error Message</Link>
            </li>
            <li>
                {/* <button onClick={goBack}>Back</button> */}
            </li>

        </ul>
    );
}
export default NavBar;


