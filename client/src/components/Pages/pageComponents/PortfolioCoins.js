const PortfolioCoins = ({coinDataDaily}) => {
    
    if (coinDataDaily.length ===0 ){
        return (
            <p>Loading...</p>
        )
    }


    const coinDataDisplay = coinDataDaily.map(data => {
        return (
            <a href={"http://localhost:3000/coin/" + data["Meta Data"]["3. Digital Currency Name"]}>
                <ul>
                    <li>{data["Meta Data"]["3. Digital Currency Name"]}</li>
                    <li>{data["Meta Data"]["2. Digital Currency Code"]}</li>
                    <li>Current Price - TBD</li>
                    <li>Trend Arrow - TBD</li>
                </ul>
            </a>
            )
        })
        
        return (
            <div>
                {coinDataDisplay}
            </div>
        )

}

export default PortfolioCoins;