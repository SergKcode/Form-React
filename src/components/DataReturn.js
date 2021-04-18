import { useEffect, useState} from "react";
import React from "react";

export const DataReturn=({budget, origin, destiny})=>{
    const [conversionResult, setConversionResult] =useState("exchangeResult")
   


    const consultarAPI = async () => {
        const api = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.REACT_APP_APIKEY}/pair/EUR/GBP/300`);
        const data = await api.json()
        console.log(data)
        
        const exchangeResult = [data.conversion_rate, data.conversion_result]
        setConversionResult(exchangeResult)
        

        return exchangeResult
    }
    

    useEffect( () => {
        consultarAPI()
    }, []);

    return (
        <>
            <h1>Budget in Foreign currency:{budget}/ Origin:{origin} / destiny: {destiny}/ Conversion Result: {conversionResult}</h1>
        </>
    )
}