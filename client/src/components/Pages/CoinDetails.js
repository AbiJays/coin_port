import { useParams } from "react-router-dom";
import GraphContainer from "../../container/GraphContainer";


const CoinDetails = () => {
    const { slug }  = useParams()
    return (
    <>
        <h1> Choice {slug} </h1>
        <p>You're on page {slug}</p>
        <GraphCode />
    </>
     );
}
 
export default CoinDetails;