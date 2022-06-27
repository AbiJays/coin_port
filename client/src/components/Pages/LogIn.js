const LogIn = () => {

    return (
        <>
        <div>
            <h1>Welcome to Coin Port</h1>
            <form action="">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username"/>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password"/>
                <input type="submit" value="Log in"/>
            </form>

        </div>
        </>
    );
}

export default LogIn;
