export const getCoinPortfolioData = (portfolioData, slug) => {
    return portfolioData.find(coin => coin.abbreviation===slug)
}