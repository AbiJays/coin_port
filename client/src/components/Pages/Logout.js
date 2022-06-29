import { useNavigate } from "react-router-dom";

const Logout = ({handleLogout}) => {
    let navigate = useNavigate();
    function handleLogoutRequest() {
      handleLogout()
      navigate("/")
    }
    return <button className="logout-button" onClick={handleLogoutRequest}>Logout</button>
}

export default Logout;