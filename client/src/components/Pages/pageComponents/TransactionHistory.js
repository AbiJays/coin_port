import TransactionDisplay from "./TransactionDisplay";

const TransactionHistory = ({transactions}) => {

    if (transactions.length === 0) {
        return (
            <p>You do not have any transactions for this coin yet</p>
        )
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
        </table>
        </>
    )
}
export default TransactionHistory;