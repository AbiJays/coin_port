import PortfolioTotal from "./pageComponents/PortfolioTotal";
import PortfolioCoins from "./pageComponents/PortfolioCoins";

const MyPortfolio = ({coinDataDaily}) => {
    return (
        <>
        <PortfolioTotal coinDataDaily={coinDataDaily}/>
        <PortfolioCoins coinDataDaily={coinDataDaily}/>

        </> 
     );
}
 
export default MyPortfolio;