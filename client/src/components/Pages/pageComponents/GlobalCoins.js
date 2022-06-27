import GlobalCoinsDisplay from "./GlobalCoinsDisplay"

const GlobalCoins = ({liveCoinData, portfolioData, hello}) => {

    if (liveCoinData.length === 0) {
        return (
            <p>Loading...</p>
            )
        }
        
        if (liveCoinData.length > 0) {
            
        return (

            <div>
                <table>
                    <thead>
                        <tr id="portfolio-marker">
                            <th>In Portfolio</th>
                            <th>Currency</th>
                            <th></th>
                            <th></th>
                            <th>Current Price (£)</th>
                            <th>Current Trend</th>
                        </tr>
                    </thead>
                    <GlobalCoinsDisplay liveCoinData={liveCoinData} portfolioData={portfolioData}/>
                </table>
            </div>
        )
    }

}

export default GlobalCoins;