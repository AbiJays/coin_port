export const formatPortfolioData = (liveCoinData,handleDbData,handlePortfolioData) => {
    
    let collatedCoinList = []
    let coinDetails = []

    return fetch(`http://localhost:5000/api/transactions`)
        .then(res => res.json())
        .then(transactions => {
            handleDbData(transactions)
            transactions.forEach( transaction => {
                
                let liveIndex = liveCoinData.findIndex((coin) => coin.abbreviation == transaction.refName)
                if (!(collatedCoinList.includes(transaction.refName))){
                    collatedCoinList.push(transaction.refName)
                    
                    let coinObject = {
                        logo:liveCoinData[liveIndex].logo,
                        name:transaction.name,
                        abbreviation:transaction.refName,
                        currentPrice:liveCoinData[liveIndex].price,
                        trend:liveCoinData[liveIndex]['1d'],
                        portfolioQuantity:parseFloat(transaction.quantity),
                        investmentValue:(parseFloat(transaction.quantity)*parseFloat(liveCoinData[liveIndex].price)).toFixed(2),
                        totalSpend:(parseFloat(transaction.quantity)*parseFloat(transaction.price)).toFixed(2),
                        profitAndLoss:((parseFloat(transaction.quantity)*(liveCoinData[liveIndex].price))-parseFloat(transaction.quantity)*parseFloat(transaction.price)).toFixed(2)
                    }
                    coinDetails.push(coinObject)
                    }
                // Coin already in list
                else {
                    let index = coinDetails.findIndex((coin) => coin.abbreviation == transaction.refName)
                    let newQuantity;
                    let newTotalSpend;
                    if (transaction.type === 'BUY') {
                        newQuantity = parseFloat(coinDetails[index].portfolioQuantity) + parseFloat(transaction.quantity)
                        newTotalSpend  = (parseFloat(coinDetails[index].totalSpend) + (parseFloat(transaction.quantity)*parseFloat(transaction.price)))
                        coinDetails[index].portfolioQuantity = newQuantity
                        coinDetails[index].investmentValue = (newQuantity*(parseFloat(liveCoinData[liveIndex].price))).toFixed(2)
                        coinDetails[index].totalSpend = newTotalSpend.toFixed(2)
                        coinDetails[index].profitAndLoss = ((newQuantity*(liveCoinData[liveIndex].price))-newTotalSpend).toFixed(2)
                    }
                    else {
                        newQuantity = parseFloat(coinDetails[index].portfolioQuantity) - parseFloat(transaction.quantity)
                        newTotalSpend  = (parseFloat(coinDetails[index].totalSpend) - (parseFloat(transaction.quantity)*parseFloat(transaction.price)))
                        coinDetails[index].portfolioQuantity = newQuantity
                        coinDetails[index].investmentValue = (newQuantity*(parseFloat(liveCoinData[liveIndex].price))).toFixed(2)
                        coinDetails[index].totalSpend = newTotalSpend.toFixed(2)
                        coinDetails[index].profitAndLoss = ((newQuantity*(liveCoinData[liveIndex].price))-newTotalSpend).toFixed(2)
                    }
                }
            }
            )
        })
.then(res => handlePortfolioData(coinDetails))
}