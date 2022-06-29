import GlobalCoins from "./pageComponents/GlobalCoins";
import PortfolioTotal from "./pageComponents/PortfolioTotal";

const GlobalCurrencies = ({liveCoinData, portfolioData}) => {
    return (
        <div className="main-container">
            <PortfolioTotal portfolioData={portfolioData}></PortfolioTotal>
            <h1 id="globalH1">Available Crypto Currencies</h1>
            <GlobalCoins liveCoinData={liveCoinData} portfolioData={portfolioData}/>
        </div>
    )}
    
export default GlobalCurrencies;