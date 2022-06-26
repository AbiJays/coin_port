const LogIn = ({dbData,portfolioData,liveCoinData}) => {
    
    console.log(portfolioData)
    console.log(liveCoinData);
    // console.log(liveCoinData[0][1].price)

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
        {/* <p>{liveCoinData[0][1].price}</p>

        <p>{portfolioData[1][1].currentPrice}</p>
        <p>{portfolioData[1][1].trend}</p>
        <p>{portfolioData[1][1].investmentValue}</p>
        <p>{portfolioData[1][1].totalSpend}</p> */}
        </>
    );
}

export default LogIn;
// portfolioData[0][1].name