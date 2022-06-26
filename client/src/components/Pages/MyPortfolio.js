import React from "react";

import TransactionForm from "./NewTransaction";
import PortfolioTotal from "./pageComponents/PortfolioTotal";
import PortfolioCoins from "./pageComponents/PortfolioCoins";

const MyPortfolio = ({liveCoinData, portfolioData}) => {
    
    return (
        <>
        <PortfolioTotal liveCoinData={liveCoinData}/>
        <PortfolioCoins liveCoinData={liveCoinData} portfolioData={portfolioData}/>
        <h2>Add Investment</h2>
        <TransactionForm/>
        </> 
     );
}
 
export default MyPortfolio;