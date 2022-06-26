import React from "react";

import TransactionForm from "./NewTransaction";
import PortfolioTotal from "./pageComponents/PortfolioTotal";
import PortfolioCoins from "./pageComponents/PortfolioCoins";

const MyPortfolio = ({coinDataDaily, portfolioData}) => {
    return (
        <>
        <PortfolioTotal coinDataDaily={coinDataDaily}/>
        <PortfolioCoins coinDataDaily={coinDataDaily} portfolioData={portfolioData}/>
        <h2>Add Investment</h2>
        <TransactionForm/>
        </> 
     );
}
 
export default MyPortfolio;