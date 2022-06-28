// export const getCoinPortfolioData = (portfolioData, slug) => {
//     return portfolioData.find(coin => coin.abbreviation===slug)
// }


export const getCoinPortfolioData = (coin) => {
    return fetch(`http://localhost:5000/api/coins/${coin}`)
            .then(res => res.json())}
