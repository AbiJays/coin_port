import {Link} from "react-router-dom";

const NavBar = () => {
return (
        <ul>
            <li>
                <Link to="/myportfolio">My Portfolio</Link>
            </li>
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


