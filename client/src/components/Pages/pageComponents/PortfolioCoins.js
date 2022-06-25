const PortfolioCoins = ({coinDataDaily}) => {
    
    if (coinDataDaily.length ===0 ){
        return (
            <p>Loading...</p>
        )
    }

    if (coinDataDaily.length > 0) {

        const coinDataDisplay = coinDataDaily.map(data => {
            return (
                
                    <tr>
                        <td><a href={"http://localhost:3000/coin/" + data["Meta Data"]["3. Digital Currency Name"]}>{data["Meta Data"]["3. Digital Currency Name"]}</a></td>
                        <td>{data["Meta Data"]["2. Digital Currency Code"]}</td>
                        <td>TBD</td>
                        <td>TBD</td>
                        <td>TBD</td>
                        <td>TBD</td>
                    </tr>
        
                )
            })
            
            return (
                <div>
                    <table>
                        <tr>
                            <th>Currency</th>
                            <th>Quantity</th>
                            <th>Average Purchase Price</th>
                            <th>Current Global Price</th>
                            <th>Investment Value</th>
                            <th>Current Trend</th>
                        </tr>
                    {coinDataDisplay}

                    </table>
                </div>
            )
            
    }

}

export default PortfolioCoins;