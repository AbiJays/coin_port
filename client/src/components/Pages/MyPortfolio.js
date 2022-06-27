import React from "react";

import TransactionForm from "./NewTransaction";
import PortfolioTotal from "./pageComponents/PortfolioTotal";
import PortfolioCoins from "./pageComponents/PortfolioCoins";

const MyPortfolio = ({liveCoinData, portfolioData}) => {
    
    return (
        <>
        <PortfolioTotal portfolioData={portfolioData}/>
        <PortfolioCoins liveCoinData={liveCoinData} portfolioData={portfolioData}/>
        <div className="link-container">
            <a href="/transactionform">Add a new transaction</a>
        </div>
        {/* <TransactionForm liveCoinData={liveCoinData} portfolioData={portfolioData}/> */}
        </> 
     );
}
 
export default MyPortfolio;