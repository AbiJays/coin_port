import React from "react";
import GraphSelector from "../components/GraphSelector";
import GraphDetails from "../components/GraphDetails";
import GraphCode from "../components/Pages/pageComponents/GraphCode";

const GraphContainer = () => {

    const [coins, setCoins] = useState(["BTC", "ETH"]);
    const [coinDataDaily, setCoinDataDaily] = useState([])
    const [coinData5Min, setCoinData5Min] = useState([])

    useEffect(()=> {
        getCoinData();
    }, []) 

    const getCoinData = () => {
        console.log("Getting 5 min coin data");
        const coinPromises = coins.map((coin) => {
            return fetch(`https://www.alphavantage.co/query?function=CRYPTO_INTRADAY&symbol=${coin}&market=USD&interval=5min&apikey=7PU7J7PVOJFO2VDL`) 
            .then(response => response.json())})
        Promise.all(coinPromises)
        .then((combinedData) => {
            setCoinData5Min(combinedData);
        }) //This will pull data in every 5 minutes. For up to date info but only when fetch is triggered. Reconstruct it to just pull the new data[0]
        const coinDailyPromises = coins.map((coin) => {
            return fetch( `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=${coin}&market=GBP&apikey=1786JGDXIS069AHE`)
            .then(response => response.json())})
        Promise.all(coinDailyPromises)
        .then((combinedData) => {
            setCoinDataDaily(combinedData);
        })
        .then(setLoaded(true));
    }
    
    const data = combinedData.map((date) => {
        return {
            "x": date,
            "Y": parseFloat(combinedData["Time Series (Digital Currency Daily)"][date]["4a. close (GBP)"])
        }
    })

    const id = combinedData["Meta Data"]["3. Digital Currency Name"];
    const color = hsl(240, 20%, 50%);

    const formattedCloseData = [{
        "id": id,
        "color": color,
        "data": data
    }]

    return ( 
        <>
        <GraphCode data = {formattedCloseData} />
        </>
     );

}
export default GraphContainer;