import React from "react"
import CreateForm from "./CreateForm"
import Header from "./Header"
import ReportTable from "./ReportTable"
// import useResource from "../hooks/useResource"
function Main(props) {
    // const {deleteResource} = useResource();
    // console.log(resources);
    return (
        <main className="flex-grow p-4 bg-green-50 ">
             
            <Header user={props.user} logout={props.logout}/>
            <CreateForm onCreate={props.onCreate} />
            <ReportTable cookieStandArray={props.cookieStandArray} onDelete={props.onDelete}/>
            {/* stands={resources} loading={loading} */}
            
        </main>
    )
}

export default Main