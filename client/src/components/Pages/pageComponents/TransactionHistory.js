import TransactionDisplay from "./TransactionDisplay";

const TransactionHistory = ({transactions}) => {
    // console.log(dbData);
    if (transactions.length === 0) {
        return <p>Loading...</p>
    }


    return (
        <>
        <h2>Transaction History</h2>
        <table>
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Currency</th>
                    <th></th>
                    <th></th>
                    <th>Quantity</th>
                    <th>Purchase Price (£)</th>
                    <th>Transaction Type</th>
                </tr>
            </thead>

            <TransactionDisplay transactions={transactions} />
            {/* <PortfolioCoinsDisplay liveCoinData={liveCoinData} portfolioData={portfolioData}/>     */}


        </table>
        </>
    )
}

export default TransactionHistory;