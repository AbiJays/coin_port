const TransactionDisplay = ({transactions}) => {
    
    const transactionHistoryDisplay = transactions.map(coin => {
        return (
            <tbody>
                <tr className="transaction-row">
                    <td>{coin.dateTime.slice(0,10)}</td>
                    <td>{coin.name}</td>
                    <td><img src={coin.logo} alt={coin.abbreviation + "logo"} className="logo" /></td>
                    <td>{coin.refName}</td>
                    <td>{coin.quantity}</td>
                    <td>{coin.price}</td>
                    <td>{coin.type}</td>
                </tr>
            </tbody>
        )})
    return transactionHistoryDisplay;
}
export default TransactionDisplay;
