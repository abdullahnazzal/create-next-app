import React from "react"
import { hours } from "../data"
function ReportTable(props) {
    if (props.cookieStandArray.length === 0) {
        return (
            <h2 className="mx-auto my-8 text-xl font-semibold text-center">
                No Cookie Stands Available
            </h2>
        )
    }
    else {

    
    return (
        <table className="mx-auto w-1/2 ny-4 border border-gray-900">
            <thead>
                <tr>
                    <th className="border border-gray-500">Location</th>
                    {
                        hours.map(hours => {
                            return (
                                <th key={hours.id} className="border border-gray-500"> {hours}</th>
                            )

                        })
                        // console.log(hours)
                    }
                    <th className="border border-gray-500">Totle</th>
                </tr>
            </thead>
            <tbody>
            {
            props.cookieStandArray.map((stand, idx) => {

              const element =
                <>
                  <td className='px-2 border border-black' >{stand.location}</td>
                  {
                    stand.hourly_sales.map(item => {
                      return (
                        <td className='border border-black'> {item} </td>
                      )
                    })
                  }
                  <td className='border border-black'>{stand.total}</td>
                </>

              if (idx % 2 == 0) {
                return (
                  <tr className='bg-green-400'>
                    {element}
                  </tr>
                )
              } else {
                return (
                  <tr className='bg-green-300'>
                    {element}
                  </tr>
                )
              }
            })
          }
            </tbody>
            <tfoot className='bg-green-500 '>
          <td className='px-2 font-semibold border border-black'>Totals</td>
          {
            props.totals.map(item => {
              return (
                <td className='font-semibold border border-black'>{item}</td>
              )
            })
          }
        </tfoot>
        </table>
    )
}

}

export default ReportTable