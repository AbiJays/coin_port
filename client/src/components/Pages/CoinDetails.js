import { useParams } from "react-router-dom";

const CoinDetails = () => {
    const { snail }  = useParams()
    return ( 
        <>
        <h1> Choice {snail} </h1>
        <p>You're on page {snail}</p>
        </>
     );
}
 
export default CoinDetails;