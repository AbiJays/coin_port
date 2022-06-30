import { useEffect, useState } from "react";
import React from "react";
import GraphCode from "../components/Pages/pageComponents/GraphCode";

const GraphContainer = ({slug, selectedCoin, selectedCoinData}) => {

    const [coins, setCoins] = useState(["BTC", "ETH"]);
    const [coinDataDaily, setCoinDataDaily] = useState([])
    const [coinData5Min, setCoinData5Min] = useState([])
   
    if (!selectedCoinData || Object.keys(selectedCoinData).length === 0) {
        return <p>Loading</p>;}

    if (selectedCoinData) {

        const listOfDates = Object.keys(selectedCoinData["Time Series (Digital Currency Daily)"])
        const data = listOfDates.map((date) => {
            return {
                "x": date,
                "y": parseFloat(selectedCoinData["Time Series (Digital Currency Daily)"][date]["4a. close (GBP)"])
            }
        })

        const id = selectedCoinData["Meta Data"]["3. Digital Currency Name"];
        const color = "hsl(240, 20%, 50%)";
        const formattedCloseData = [{
            "id": id,
            "color": color,
            "data": data.slice(0,9)
        }]

        return (
            <>
                <GraphCode data = {formattedCloseData} />
            </>
        )
    }
}

export default GraphContainer;