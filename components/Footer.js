import React from "react"
import useResource from "../hooks/useResource";
function Footer() {
    const { resources, loading } = useResource();
    if (loading) 
        return (
            <footer className="p-4 bg-green-500  text-gray-50">
                <p> Loading </p>
            </footer>
        )
    
    return (
        <footer className="p-4 bg-green-500 text-gray-50 ">
            <p> {resources.length} - Location World Wide</p>
        </footer>
    )
}

export default Footer