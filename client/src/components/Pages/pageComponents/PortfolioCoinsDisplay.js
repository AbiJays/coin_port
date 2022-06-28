import { getTrend } from "../../../helpers/DisplayHelpers"
import SingleCoinDisplay from "./SingleCoinDisplay"

const PortfolioCoinsDisplay = ({portfolioData}) => {



    if (portfolioData.length > 0) {


    const coinDataDisplay = portfolioData.map(coin => {



        return (
            <>
                <tr key={coin.abbreviation}>
                    <SingleCoinDisplay coin={coin}/>
                </tr>
            </>
    
            )
        })
    
    return coinDataDisplay;

}
}

export default PortfolioCoinsDisplay;