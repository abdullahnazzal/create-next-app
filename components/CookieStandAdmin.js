import React from "react"
import Head from "./Head"
import Main from "./Main"
import Footer from "./Footer"
// import { useAuth } from '../contexts/auth'

function CookieStandAdmin() {
    // const { user, login ,logout} = useAuth();
    const [cookieStandArray, setCookieStandArray] = React.useState([])
    const [totals, setTotal] = React.useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    const sales = [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]
    function onCreate(event) {
        event.preventDefault()
        const cookieStand = {
            location: event.target.location.value,
            minimumCustomers: event.target.minimumCustomers.value,
            maximumCustomers: event.target.maximumCustomers.value,
            averageCookies: event.target.averageCookies.value,
            hourly_sales: sales,
            total: sales.reduce((a, b) => a + b, 0)
        }
        setCookieStandArray(cookie => [...cookie, cookieStand])
        console.log(cookieStandArray);
        let totalCal = totals.map((item, idx) => {
            if (idx === totals.length - 1) {
                return item + cookieStand.total
            }
            return item + cookieStand.hourly_sales[idx]
        })
        setTotal(totalCal)
    }
    return (
        <div className="">
            {/* {
                user ? (
                    <>
                        <button className="p-2 text-white bg-gray-500 rounded" onClick={logout}>Logout</button>
                        <h2>Welcome {user.username}</h2>
                    </>
                ) :
                    (
                        <>
                            <button className="p-2 text-white bg-gray-500 rounded" onClick={() => { login('admin', 'Pass@123') }}>Login</button>
                            <h2> Need to Log in </h2>
                        </>

                    )
            } */}
            <Head />
            <Main onCreate={onCreate} cookieStandArray={cookieStandArray} totals={totals} />
            <Footer numberOfLocation={cookieStandArray} />
        </div>
    )
}

export default CookieStandAdmin