import React, { useEffect, useState } from "react"
import Head from "./Head"
import Main from "./Main"
import Footer from "./Footer"
// import { useAuth } from '../contexts/auth'
import { hours } from "../data"
// import useResource from "../hooks/useResource"
function CookieStandAdmin() {
    const [cookieStandArray, setCookieStandArray] = useState([])
    const [totals, setTotals] = useState([])
    const sumTotals=()=>{
        if (cookieStandArray.length != 0) {
            
            const sumtotal = [];
            for (let i = 0; i <= cookieStandArray.length -1; i++) {
                for (let j = 0; j <= cookieStandArray[i].hourly_sales.length -1; j++) {
                    if (sumtotal[j]) {
                        sumtotal[j]+=cookieStandArray[i].hourly_sales[j]
                    }else{
                        sumtotal.push(cookieStandArray[i].hourly_sales[j])
                    }
                }   
            }
            setTotals([sumtotal, sumtotal.reduce((a,b) => a+b,0)])
        }
    }
    useEffect(()=>{
        sumTotals()
        console.log(cookieStandArray);
    },[cookieStandArray])
    function onCreate(event) {
        event.preventDefault()
        const cookieStand = {
            location: event.target.location.value,
            id: cookieStandArray.length,
            minimumCustomers: parseInt(event.target.minimumCustomers.value),
            maximumCustomers: parseInt(event.target.maximumCustomers.value),
            averageCookies: parseInt(event.target.averageCookies.value),
            hourly_sales: claculateHourlySales(parseInt(event.target.minimumCustomers.value), parseInt(event.target.maximumCustomers.value),parseInt(event.target.averageCookies.value)),
        }
        function claculateHourlySales(minSales,maxSales,avgCookies) {
            let hourly_sales = [];
            for (let i = 0; i < hours.length; i++) {
                hourly_sales[i] = (Math.floor(Math.random() * (maxSales - minSales + 1)) + minSales) * avgCookies 
            }
            return hourly_sales
        }
        setCookieStandArray(cookie => [...cookie, cookieStand])
        
       
    }
    return (
        <div className="">
            <Head />
            <Main onCreate={onCreate} cookieStandArray={cookieStandArray} totals={totals} />
            <Footer numberOfLocation={cookieStandArray} />
        </div>
    )
}

export default CookieStandAdmin