import React from "react"
import Head from "./Head"
import Main from "./Main"
import Footer from "./Footer"

function CookieStandAdmin() {
    const [cookieStandArray, setCookieStandArray] = React.useState([])
    const [totals,setTotal]= React.useState([ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    const sales = [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]
    function onCreate(event) {
        event.preventDefault()
        const cookieStand = {
            location: event.target.location.value,
            minimumCustomers: event.target.minimumCustomers.value,
            maximumCustomers: event.target.maximumCustomers.value,
            averageCookies: event.target.averageCookies.value,
            hourly_sales:sales,
            total: sales.reduce((a, b) => a + b, 0)
        }
        setCookieStandArray(cookie => [...cookie, cookieStand])
        console.log(cookieStandArray);
        let totalCal= totals.map((item,idx)=>{
            if (idx === totals.length -1) {
                return item +cookieStand.total
            }
            return item+cookieStand.hourly_sales[idx]
        })
        setTotal(totalCal)
    }
    return (
        <div className="">
            <Head />
            <Main onCreate={onCreate} cookieStandArray={cookieStandArray} totals={totals}/>
            <Footer numberOfLocation={cookieStandArray}/>
        </div>
    )
}

export default CookieStandAdmin