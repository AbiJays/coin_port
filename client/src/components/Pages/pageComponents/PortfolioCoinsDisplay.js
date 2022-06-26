const PortfolioCoinsDisplay = ({portfolioData}) => {



    if (portfolioData.length > 0) {



    const coinDataDisplay = portfolioData.map(data => {


        return (
            <tbody>
                <tr>
                    <td><a href={"http://localhost:3000/coin/" + data[1].name}>{data[1].name}</a></td>
                    <td><img src={data[1].logo} alt={data[1].name + "logo"} className="logo" /></td>
                    <td>{data[1].abbreviation}</td>
                    <td>{data[1].portfolioQuantity}</td>
                    <td></td>
                    <td>{data[1].currentPrice}</td>
                    <td>{data[1].investmentValue}</td>
                    <td>{data[1].trend}</td>
                </tr>
            </tbody>
    
            )
        })
    
    return coinDataDisplay;

}
}

export default PortfolioCoinsDisplay;