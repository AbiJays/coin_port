import { useParams } from "react-router-dom";
import GraphCode from "./pageComponents/GraphCode";
import GraphContainer from "../../container/GraphContainer";


const CoinDetails = () => {
    const { slug }  = useParams()
    return (
    <>
        <h1> Choice {slug} </h1>
        <p>You're on page {slug}</p>
        <div id="lineChart">
        < GraphContainer/>
        </div>
    </>
     );
}
 
export default CoinDetails;