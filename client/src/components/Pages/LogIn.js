const LogIn = () => {

    return (
        <>
        <div >
            <h1 id= "logInHeader">Welcome to <span class="brandName">CoinPort</span></h1>
            <form id= "logInForm" action="">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username"/>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password"/>
                <input type="submit" id="logInSubmit" value="Log in"/>
            </form>

        </div>
        </>
    );
}

export default LogIn;
