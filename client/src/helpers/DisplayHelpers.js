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
// change to .reduce
export const getPortfolioTotal = (data) => {
    let portfolioTotal = 0
    data.forEach(coin => portfolioTotal += parseFloat(coin.investmentValue))
    return portfolioTotal
}

const checkPortfolioCoin = (data, coin) => {
    return data.some(portfolioCoin =>(portfolioCoin.abbreviation === coin))
}

export const portfolioCoinMarker = (data, coin) => {
    if (checkPortfolioCoin(data, coin) === true) {
        return <span className={"material-symbols-outlined"} >
        star
    </span>
    }
}