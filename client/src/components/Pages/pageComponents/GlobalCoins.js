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
                            <th colSpan="2" id="globalCurrency">Currency</th>
                            <th>Current Price (£)</th>
                            <th>Current Trend</th>
                        </tr>
                    </thead>
                    <tbody>
                        <GlobalCoinsDisplay liveCoinData={liveCoinData} portfolioData={portfolioData}/>
                    </tbody>
                </table>
            </div>
        )
    }

}

export default GlobalCoins;