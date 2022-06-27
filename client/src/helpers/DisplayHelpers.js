export const getTrend = (trend) => {
    if (trend > 0) {
        return <span className={["material-symbols-outlined", "trend-up"].join(' ')} >
        trending_up
    </span>
    }
    else if (trend < 0) {
        return <span className={["material-symbols-outlined", "trend-down"].join(' ')} >
        trending_down
        </span>
    } else {
        return <span className={"material-symbols-outlined"} >
        arrow_right_alt
        </span>
    }
}

export const getPortfolioTotal = (data) => {
    let portfolioTotal = 0
    data.forEach(coin => portfolioTotal += parseFloat(coin[1].investmentValue))
    return portfolioTotal
}