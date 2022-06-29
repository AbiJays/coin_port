import React from "react";
import TransactionForm from "./NewTransaction";
import PortfolioTotal from "./pageComponents/PortfolioTotal";
import PortfolioCoins from "./pageComponents/PortfolioCoins";

const MyPortfolio = ({liveCoinData, portfolioData}) => {
    
    return (
        <div className='main-container'>
            <PortfolioTotal portfolioData={portfolioData}/>
            <h1 id="portfolioH1">My Portfolio</h1>
            <PortfolioCoins liveCoinData={liveCoinData} portfolioData={portfolioData}/>
            <div className="link-container">
                <a href="/transactionform">Add Transaction</a>
            </div>
        </div> 
     );
}
 
export default MyPortfolio;