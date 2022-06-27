import GlobalCoins from "./pageComponents/GlobalCoins";

const GlobalCurrencies = ({liveCoinData, portfolioData, loaded, hello}) => {


    return (
        <>
            <h1>Available Crypto Currencies</h1>
            <GlobalCoins liveCoinData={liveCoinData} portfolioData={portfolioData}/>
        </>
    )
            
    }
export default GlobalCurrencies;