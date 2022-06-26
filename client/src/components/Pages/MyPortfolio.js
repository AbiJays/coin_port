import React from "react";

import TransactionForm from "./NewTransaction";
import PortfolioTotal from "./pageComponents/PortfolioTotal";
import PortfolioCoins from "./pageComponents/PortfolioCoins";

const MyPortfolio = ({liveCoinData, portfolioData}) => {
    
    return (
        <>
        <PortfolioTotal portfolioData={portfolioData}/>
        <PortfolioCoins liveCoinData={liveCoinData} portfolioData={portfolioData}/>
        <TransactionForm/>
        </> 
     );
}
 
export default MyPortfolio;