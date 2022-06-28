import PortfolioCoinsDisplay from "./PortfolioCoinsDisplay"

const PortfolioCoins = ({liveCoinData, portfolioData}) => {
    
    if (liveCoinData.length ===0 || portfolioData.length === 0 ){
        return (
            <p>Loading...</p>
        )
    }


    if (liveCoinData.length > 0) {

            
            return (
                <div>
                    <table>
                        <thead>
                        <tr>
                            <th>Currency</th>
                            <th></th>
                            <th></th>
                            <th>Quantity</th>
                            <th>Current Global Price (£)</th>
                            <th>Investment Value (£)</th>
                            <th>Current Trend</th>
                            <th>Profit Loss (£)</th>
                        </tr>
                        </thead>

                    <PortfolioCoinsDisplay liveCoinData={liveCoinData} portfolioData={portfolioData}/>    


                    </table>
                </div>
            )
            
    }

}

export default PortfolioCoins;