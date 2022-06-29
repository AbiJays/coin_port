import { useNavigate } from "react-router-dom";

const Logout = (handleLogout) => {
    let navigate = useNavigate();
    async function handleLogoutRequest() {
      await handleLogout()
      navigate("/")
    }
    return <a href="/" onClick={handleLogoutRequest}>Logout</a>
}

export default Logout;