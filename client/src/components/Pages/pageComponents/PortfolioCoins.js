import PortfolioCoinsDisplay from "./PortfolioCoinsDisplay"

const PortfolioCoins = ({coinDataDaily, portfolioData}) => {
    
    if (coinDataDaily.length ===0 ){
        return (
            <p>Loading...</p>
        )
    }
    
    console.log(portfolioData[0][1])

    if (coinDataDaily.length > 0) {

        // const getCoinProperty = (coin, property) => {
        //     let coinPortfolioData = portfolioData.filter(data => data[0] === coin);
        //     return coinPortfolioData[0][1][property]
        // } 

        // const coinDataDisplay = coinDataDaily.map(data => {
        //     let coin = data["Meta Data"]["2. Digital Currency Code"]
        //     // console.log(getCoinProperty(coin, 'abbreviation'))

        //     return (
                
        //         <tbody>
        //             <tr>
        //                 <td><a href={"http://localhost:3000/coin/" + data["Meta Data"]["3. Digital Currency Name"]}>{data["Meta Data"]["3. Digital Currency Name"]}</a></td>
        //                 <td>{data["Meta Data"]["2. Digital Currency Code"]}</td>
        //                 <td>{getCoinProperty(data["Meta Data"]["2. Digital Currency Code"], 'portfolioQuantity')}</td>
        //                 <td>TBD</td>
        //                 <td>TBD</td>
        //                 <td>TBD</td>
        //                 <td>TBD</td>
        //             </tr>
        //         </tbody>
        
        //         )
        //     })
            
            return (
                <div>
                    <table>
                        <thead>
                        <tr>
                            <th>Currency</th>
                            <th></th>
                            <th>Quantity</th>
                            <th>Average Purchase Price</th>
                            <th>Current Global Price</th>
                            <th>Investment Value</th>
                            <th>Current Trend</th>
                        </tr>
                        </thead>

                    <PortfolioCoinsDisplay coinDataDaily={coinDataDaily} portfolioData={portfolioData}/>    
                    {/* {coinDataDisplay} */}

                    </table>
                </div>
            )
            
    }

}

export default PortfolioCoins;