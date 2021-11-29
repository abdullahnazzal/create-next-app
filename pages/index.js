import Head from 'next/head'
import React from 'react'
export default function Home() {
  const [cookieStandArray, setCookieStandArray] = React.useState([])

  function eventHandler(event) {
    event.preventDefault()
    const cookieStand = {
      location: event.target.location.value,
      minimumCustomers: event.target.minimumCustomers.value,
      maximumCustomers: event.target.maximumCustomers.value,
      averageCookies: event.target.averageCookies.value,
    }
    setCookieStandArray(cookie => [...cookie, cookieStand])
    
  }

  return (
    <div className="">
      {/* flex flex-col items-center justify-center min-h-screen py-2 */}
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen bg-green-50 ">
        <header className="flex bg-green-500 justify-between text-gray-50 p-4 item-center">
          <h1 className="text-2xl font-black" >
            Cookie Stand Admin
          </h1>
        </header>

        <form className="bg-green-200 w-3/4 mx-auto my-4 p-2 " onSubmit={eventHandler}>
          <legend className="text-xl text-center">Create Cookie Stand</legend>
          <label className="p-3">Location </label>
          <input type="text" name="location" /><br />

          <label className="p-3">Minimum Customers Per Hour </label>
          <label className="p-11">Maximum Customers Per Hour </label>
          <label className="p-2">Average Cookies Per Sale </label><br />
          <input className="m-3" type="number" min="1" name="minimumCustomers" />
          <input className="m-3" type="number" min="1" name="maximumCustomers" />
          <input className="m-3" type="number" min="0" step="0.1" name="averageCookies" />
          <button className="bg-green-500 mx-auto my-4 pr-10 pl-10 pt-2 pb-2">
            Create
          </button>
        </form>
        {/* "m-2 text-xl" */}
        <dev className="text-center">
          {
          cookieStandArray.map((cookie,key) => {
            return(
              <p key={key} >{JSON.stringify(cookie)}</p>
            )

          })

          }
        </dev>
      </main>
      <footer className="flex bg-green-500  text-gray-50 p-4 ">
        <p>@2021</p>
      </footer>
    </div>
  )
}
