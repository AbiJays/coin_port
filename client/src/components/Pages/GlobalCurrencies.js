import GlobalCoins from "./pageComponents/GlobalCoins";

const GlobalCurrencies = ({coinDataDaily, loaded, hello}) => {


    return (
        <>
            <p>Available Crypto Currencies</p>
            <GlobalCoins coinDataDaily={coinDataDaily}/>
        </>
    )
            
    }
export default GlobalCurrencies;