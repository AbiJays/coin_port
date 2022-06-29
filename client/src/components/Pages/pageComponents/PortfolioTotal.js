import { getPortfolioTotal, getProfitAndLossTotal } from "../../../helpers/DisplayHelpers"

const PortfolioTotal = ({portfolioData}) => {
    return (
        <div className="portfolio-total">
            <h1>Portfolio Total Value: £{getPortfolioTotal(portfolioData).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h1>
            <h1>Total {(parseFloat(getProfitAndLossTotal(portfolioData)) >= 0 )? "profit" : "loss"}: £{getProfitAndLossTotal(portfolioData).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h1>
        </div>
    )}

export default PortfolioTotal