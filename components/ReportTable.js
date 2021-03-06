import React, { useEffect } from "react"
import { hours } from "../data"
import useResource from "../hooks/useResource";
// import useResource from "../hooks/useResource";
// import useResource from "../hooks/useResource";

function ReportTable(props) {
  const { resources , loading} = useResource();
  // console.log(resources);
  if (loading) {
    console.log(loading);
  }
  else{
    
    const storesales = [];
    for (let i = 0; i < resources.length; i++) {
      storesales.push(resources[i].hourly_sales)
      const totals = [];
      for (let i = 0; i < storesales[0].length; i++) {
        let hoursTotals = 0;
        for (const store in storesales) {
          hoursTotals += storesales[store][i]
          totals[i] = hoursTotals
  
        }
      }
  
    }
  }
  useEffect(() => {

  },[resources])

   if (loading) {
    return (
      <h2 className="mx-auto my-8 text-xl font-semibold text-center">
        loading
      </h2>
    )
  }
  else if (resources?.length == 0) {
    return (
      <h2 className="mx-auto my-8 text-xl font-semibold text-center">
        No Cookie Stands Available
      </h2>
    )
  }
  else {
    return (

      <table className="w-1/2 mx-auto border border-gray-900 ny-4">
        <thead>
          <tr>
            <th className="border border-gray-500 ">Location</th>
            {
              hours.map((hours,idx) => {
                return (
                  <th key={idx} className="border border-b border-r border-gray-500" > {hours}</th>
                )

              })
              // console.log(hours)
            }
            <th className="border border-gray-500">Totle</th>
          </tr>
        </thead>
        <tbody>
          {resources?.map((value,idx) =>
            <tr key={value.id}  >
              <td key={value.id} className="text-lg border-b border-r border-gray-700 ">
                <button key={value.id} onClick={() => props.onDelete(value.id)} >[X] </button>
                {value.location}
              </td>
              {value.hourly_sales.map((sale,idx) =>
                <td key={idx}  className="text-lg border-b border-r border-gray-700"> {sale}</td>
              )}
              <td  className="text-lg border-b border-r border-gray-700">{value.hourly_sales.reduce(function (a, b) { return a + b; }, 0)}</td>

             
            </tr>
          )}
        </tbody>
        <tfoot className="bg-green-500 border-t border-b border-gray-700">
          <tr>
            <th className="border-r border-gray-700 ">Totals</th>
            {totals?.map((sale,idx) =>
              <th key={idx} className="border-r border-gray-700 "> {sale} </th>
            )}
            <th> {totals?.reduce(function (a, b) { return a + b; }, 0)} </th>
          </tr>
        </tfoot>
      </table>
    )
  }

}

export default ReportTable