import React from "react"
import CreateForm from "./CreateForm"
import Header from "./Header"
import ReportTable from "./ReportTable"
function Main(props) {
    return (
        <main className="h-screen bg-green-50 ">
            <Header/>
            <CreateForm onCreate={props.onCreate}/>
            <ReportTable cookieStandArray={props.cookieStandArray} totals={props.totals}/>
        </main>
    )
}

export default Main