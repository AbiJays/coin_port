import GlobalCoinsDisplay from "./GlobalCoinsDisplay"

const GlobalCoins = ({liveCoinData, hello}) => {

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
                        <tr>
                            <th>Currency</th>
                            <th></th>
                            <th></th>
                            <th>Current Price (£)</th>
                            <th>Current Trend</th>
                        </tr>
                    </thead>
                    <GlobalCoinsDisplay liveCoinData={liveCoinData}/>
                </table>
            </div>
        )
    }

}

export default GlobalCoins;