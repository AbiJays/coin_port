import {Link,useNavigate} from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    
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
                <Link to="/newtransaction">New Transaction</Link>
            </li>
            <li>
                <Link to="/Global">Cryptoverse</Link>
            </li>
            <li>
                <Link to="/Error">Error Message</Link>
            </li>
            <li>
                <button onClick={goBack}>Back</button>
            </li>

        </ul>
    );
}
export default NavBar;


