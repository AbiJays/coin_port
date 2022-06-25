import GlobalCoinsDisplay from "./GlobalCoinsDisplay"

const GlobalCoins = ({coinDataDaily}) => {

    if (coinDataDaily.length === 0) {
        return (
            <p>Loading...</p>
        )
    }

    if (coinDataDaily.length > 0) {

        // const globalCoinDataDisplay = coinDataDaily.map(data => {
        //     return (
        //         <tbody>
        //             <tr>
        //                 <td><a href={"http://localhost:3000/coin/" + data["Meta Data"]["3. Digital Currency Name"]}>{data["Meta Data"]["3. Digital Currency Name"]}</a></td>
        //                 <td>{data["Meta Data"]["2. Digital Currency Code"]}</td>
        //                 <td>TBD</td>
        //                 <td>TBD</td>
        //             </tr>
        //         </tbody>
        //     )
            
        // })
        return (

            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Currency</th>
                            <th>Symbol</th>
                            <th>Current Price</th>
                            <th>Current Trend</th>
                        </tr>
                    </thead>
                    <GlobalCoinsDisplay coinDataDaily={coinDataDaily}/>
                </table>
            </div>
        )
    }

}

export default GlobalCoins;