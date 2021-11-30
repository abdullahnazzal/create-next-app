import React from "react"
function Footer(props) {
    return (
        <footer className="flex bg-green-500  text-gray-50 p-4 ">
            <p> {props.numberOfLocation.length}Location World Wide</p>
        </footer>
    )
}

export default Footer