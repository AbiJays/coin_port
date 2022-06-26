import GlobalCoins from "./pageComponents/GlobalCoins";

const GlobalCurrencies = ({liveCoinData, loaded, hello}) => {


    return (
        <>
            <h1>Available Crypto Currencies</h1>
            <GlobalCoins liveCoinData={liveCoinData}/>
        </>
    )
            
    }
export default GlobalCurrencies;