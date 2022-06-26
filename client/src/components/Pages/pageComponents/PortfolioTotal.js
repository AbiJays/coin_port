import { getPortfolioTotal } from "../../../helpers/DisplayHelpers"

const PortfolioTotal = ({portfolioData}) => {
    return (
        <div className="portfolio-total">
            <h1>Portfolio Total Value:</h1>
            <h1>£{getPortfolioTotal(portfolioData).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h1>
        </div>
    )
}

export default PortfolioTotal