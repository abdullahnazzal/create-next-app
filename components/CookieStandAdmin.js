import React, { useEffect, useState } from "react"
import Head from "./Head"
import Main from "./Main"
import Footer from "./Footer"
// import { useAuth } from '../contexts/auth'
import { hours } from "../data"
import useResource from "../hooks/useResource"

function CookieStandAdmin(props) {
    const {resources,loading,createResource,deleteResource} = useResource();
    
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
    },[cookieStandArray])

    async function onCreate(event) {
        event.preventDefault()
        const cookieStand = {
            id: resources.length,
            location: event.target.location.value,
            description: event.target.location.value,
            hourly_sales: claculateHourlySales(parseInt(event.target.minimumCustomers.value), parseInt(event.target.maximumCustomers.value),parseInt(event.target.averageCookies.value)),
            minimum_customers_per_hour: parseInt(event.target.minimumCustomers.value),
            maximum_customers_per_hour: parseInt(event.target.maximumCustomers.value),
            average_cookies_per_sale: parseInt(event.target.averageCookies.value),
            owner: props.user.id,
        }
        function claculateHourlySales(minSales,maxSales,avgCookies) {
            let hourly_sales = [];
            for (let i = 0; i < hours.length; i++) {
                hourly_sales[i] = (Math.floor(Math.random() * (maxSales - minSales + 1)) + minSales) * avgCookies 
            }
            return hourly_sales
        }
        setCookieStandArray(cookie => [...cookie, cookieStand])
        
        createResource(cookieStand);

    }
    // if(loading) {
    //     return <p>Loading</p>
    // } 
    
    return (
        <div className="flex flex-col justify-between h-screen">
            <Head />
            <Main user={props.user} logout={props.logout} onCreate={onCreate} onDelete={deleteResource} cookieStandArray={cookieStandArray}  />
            <Footer  />
            
        </div>
    )
}

export default CookieStandAdmin