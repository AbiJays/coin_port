import { useParams } from "react-router-dom";

const CoinDetails = () => {
    const { slug }  = useParams()
    return ( 
        <>
        <h1> Choice {slug} </h1>
        <p>You're on page {slug}</p>
        </>
     );
}
 
export default CoinDetails;