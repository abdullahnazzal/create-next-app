import React from "react"
import ReportTable from "./ReportTable"
function CreateForm({onCreate}) {
    return (
      <>
        <form className="w-3/4 p-2 mx-auto my-4 bg-green-200 " onSubmit={onCreate}>
          <legend className="text-xl text-center">Create Cookie Stand</legend>
          <label className="p-3">Location </label>
          <input type="text" name="location" /><br />

          <label className="p-3">Minimum Customers Per Hour </label>
          <label className="p-11">Maximum Customers Per Hour </label>
          <label className="p-2">Average Cookies Per Sale </label><br />
          <input className="m-3" type="number" min="1" name="minimumCustomers" />
          <input className="m-3" type="number" min="1" name="maximumCustomers" />
          <input className="m-3" type="number" min="0" step="0.1" name="averageCookies" />
          <button className="pt-2 pb-2 pl-10 pr-10 mx-auto my-4 bg-green-500">
            Create
          </button>
        </form>
        {/* <ReportTable cookieStandArray={cookieStandArray}/> */}
        </>
    )
}

export default CreateForm