import React from "react";
import TransactionForm from "./NewTransaction";
import PortfolioTotal from "./pageComponents/PortfolioTotal";
import PortfolioCoins from "./pageComponents/PortfolioCoins";

const MyPortfolio = ({liveCoinData, portfolioData}) => {
    
    return (
        <>
        <h1 id="portfolioH1">My Portfolio</h1>
        <PortfolioTotal portfolioData={portfolioData}/>
        <PortfolioCoins liveCoinData={liveCoinData} portfolioData={portfolioData}/>
        <div className="link-container">
            <a href="/transactionform">Add Transaction</a>
        </div>
        </> 
     );
}
 
export default MyPortfolio;