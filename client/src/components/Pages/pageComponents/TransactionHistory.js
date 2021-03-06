import TransactionDisplay from "./TransactionDisplay";

const TransactionHistory = ({transactions}) => {

    if (transactions.length === 0) {
        return (
            <p>You do not have any transactions for this coin yet</p>
        )
    }
    return (
        <div className="transaction-history">
        <h2>Transaction History</h2>
        <table>
                <thead>
                <tr>
                    <th>Date</th>
                    <th colSpan="3">Currency</th>
                    <th>Quantity</th>
                    <th>Purchase Price (£)</th>
                    <th>Transaction Type</th>
                </tr>
            </thead>
            <TransactionDisplay transactions={transactions} />
        </table>
        </div>
    )
}
export default TransactionHistory;