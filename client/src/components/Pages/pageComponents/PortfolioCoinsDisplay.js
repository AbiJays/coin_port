import SingleCoinDisplay from "./SingleCoinDisplay"

const PortfolioCoinsDisplay = ({portfolioData}) => {

    if (portfolioData.length > 0) {
    const coinDataDisplay = portfolioData.map(coin => {
        return (
            <SingleCoinDisplay key={coin.abbreviation} coin={coin}/>
        )
    });
    
    return coinDataDisplay;
    }
}

export default PortfolioCoinsDisplay;