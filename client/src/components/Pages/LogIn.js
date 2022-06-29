import { useState } from "react"
import { useNavigate } from "react-router-dom";

const LogIn = ({getUsernameAttempt, getPasswordAttempt, handleLoginAttempt}) => {

const [warning, setWarning] = useState("")
    let navigate=useNavigate();
    const handleUsernameInput = (e) => {
        // console.log('username', e.target.value)
        getUsernameAttempt(e);
        setWarning("")
    }

    const removeWarning = () => setWarning("")
    
    const handlePasswordInput = (e) => getPasswordAttempt(e)

    async function handleLoginSubmit(e) {
        e.preventDefault()
        await handleLoginAttempt()
        if (!handleLoginAttempt()) {
            setWarning("The details you entered don't match our database, please try again.")
        } else {
            navigate("/myportfolio")
        }
        e.target.reset()
    }
    
        return (
        <div >
            <h1 id= "logInHeader">Welcome to <span className="brandName">CoinPort</span></h1>
            <form id= "logInForm" action="" onSubmit={handleLoginSubmit}>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" onChange={handleUsernameInput} onClick={removeWarning}/>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" onChange={handlePasswordInput}/>
                <input type="submit" id="logInSubmit" value="Log in"/>
            </form>
            <p id="login-warning-text">{warning}</p> 
        </div>
    )}

export default LogIn;
