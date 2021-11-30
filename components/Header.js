import React from "react"
function Header() {
    return (
        <header className="flex bg-green-500 justify-between text-gray-50 p-4 item-center">
        <h1 className="text-2xl font-black" >
          Cookie Stand Admin
        </h1>
        <a href="#" className="p-1 mr-5 bg-black rounded-md">Overview</a>
      </header>
    )
}

export default Header