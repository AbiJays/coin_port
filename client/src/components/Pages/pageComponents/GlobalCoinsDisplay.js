const GlobalCoinsDisplay = ({liveCoinData}) => {

    if (liveCoinData.length > 0) {

        const globalCoinDataDisplay = liveCoinData.map(data => {

            const getTrend = (data) => data >= 0 ? '+' : '-';
    
            return (
                <tbody>
                    <tr>
                        <td><a href={"http://localhost:3000/coin/" + data[1].name}>{data[1].name}</a></td>
                        <td><img src={data[1].logo} alt={data[1].name + "logo"} className="logo" /></td>
                        <td>{data[1].abbreviation}</td>
                        <td>{data[1].price}</td>
                        <td>{getTrend(data[1]['1d'])}</td>
                    </tr>
                </tbody>
            )
        })
    
    return globalCoinDataDisplay;

    }
}

export default GlobalCoinsDisplay;