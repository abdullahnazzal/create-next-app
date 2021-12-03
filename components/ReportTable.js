import React from "react"
import { hours } from "../data"
function ReportTable(props) {
  const storesales=[];
  for (let i = 0; i < props.cookieStandArray.length; i++) {
    storesales.push(props.cookieStandArray[i].hourly_sales)
    const totals=[];
    for (let i = 0; i < storesales[0].length; i++) {
      let hoursTotals = 0;
      for (const store in storesales) {
        hoursTotals+=storesales[store][i]
        totals[i]=hoursTotals
          
        }
      }
      
    }
  

  if (props.cookieStandArray.length === 0) {
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
              hours.map(hours => {
                return (
                  <th key={hours.id} className="border border-b border-r border-gray-500" > {hours}</th>
                )

              })
              // console.log(hours)
            }
            <th className="border border-gray-500">Totle</th>
          </tr>
        </thead>
        <tbody>
          {props.cookieStandArray.map(value =>
            <tr key={value.id}  >
              <td className="text-lg border-b border-r border-gray-700 ">{value.location}</td>
              {value.hourly_sales.map(sale =>
                <td className="text-lg border-b border-r border-gray-700"> {sale}</td>
              )}
              <td className="text-lg border-b border-r border-gray-700">{value.hourly_sales.reduce(function (a, b) { return a + b; }, 0)}</td>
            </tr>
          )}
        </tbody>
        <tfoot className="bg-green-500 border-t border-b border-gray-700">
          <tr>
            <th className="border-r border-gray-700 ">Totals</th>
            {totals.map(sale =>
              <th className="border-r border-gray-700 "> {sale} </th>
            )}
            <th> {totals.reduce(function (a, b) { return a + b; }, 0)} </th>
          </tr>
        </tfoot>
      </table>
    )
  }

}

export default ReportTable