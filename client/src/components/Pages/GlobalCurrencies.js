import GlobalCoins from "./pageComponents/GlobalCoins";

const GlobalCurrencies = ({liveCoinData, loaded, hello}) => {


    return (
        <>
            <p>Available Crypto Currencies</p>
            <GlobalCoins liveCoinData={liveCoinData}/>
        </>
    )
            
    }
export default GlobalCurrencies;