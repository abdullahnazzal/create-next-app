import React, { useEffect, useState } from "react"
import Head from "./Head"
import Main from "./Main"
import Footer from "./Footer"
// import { useAuth } from '../contexts/auth'
import { hours } from "../data"
// import useResource from "../hooks/useResource"
function CookieStandAdmin({logout,user}) {
    // const { user, login ,logout} = useAuth();
    const [cookieStandArray, setCookieStandArray] = useState([])
    const [totals, setTotals] = useState([])
    // const sales = [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]
    // const {resources,createResource} = useResource();
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
            // console.log("fdgfd",cookieStandArray[1].hourly_sales);
            setTotals([sumtotal, sumtotal.reduce((a,b) => a+b,0)])
        }
        // setCookieStandArray(cookie => [...cookie, cookieStand])
        // 
        // console.log(totals);
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
            // description: "Cookie Stand",
            minimumCustomers: parseInt(event.target.minimumCustomers.value),
            maximumCustomers: parseInt(event.target.maximumCustomers.value),
            averageCookies: parseInt(event.target.averageCookies.value),
            hourly_sales: claculateHourlySales(parseInt(event.target.minimumCustomers.value), parseInt(event.target.maximumCustomers.value),parseInt(event.target.averageCookies.value)),
            // owner: user.id,
            // total: sales.reduce((a, b) => a + b, 0)
        }
        function claculateHourlySales(minSales,maxSales,avgCookies) {
            let hourly_sales = [];
            for (let i = 0; i < hours.length; i++) {
                hourly_sales[i] = (Math.floor(Math.random() * (maxSales - minSales + 1)) + minSales) * avgCookies 
            }
            return hourly_sales
        }
        setCookieStandArray(cookie => [...cookie, cookieStand])
        
        // setTotals()
        // createResource(cookieStand);
        // event.target.reset()
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