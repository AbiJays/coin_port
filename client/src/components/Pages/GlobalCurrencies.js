import GlobalCoins from "./pageComponents/GlobalCoins";
import PortfolioTotal from "./pageComponents/PortfolioTotal";

const GlobalCurrencies = ({liveCoinData, portfolioData, loaded, hello}) => {


    return (
        <>
            <h1 id="globalH1">Available Crypto Currencies</h1>
            <PortfolioTotal portfolioData={portfolioData}></PortfolioTotal>
            <GlobalCoins liveCoinData={liveCoinData} portfolioData={portfolioData}/>
        </>
    )
            
    }
export default GlobalCurrencies;