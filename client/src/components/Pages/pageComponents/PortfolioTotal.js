import { getPortfolioTotal } from "../../../helpers/DisplayHelpers"

const PortfolioTotal = ({portfolioData}) => {
    return (
        <div>
            <h1>Portfolio Total Value:</h1>
            <p>£{getPortfolioTotal(portfolioData)}</p>
        </div>
    )
}

export default PortfolioTotal