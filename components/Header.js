import React from "react"

function Header() {
  return (
    <header className="flex justify-between p-4 bg-green-500 text-gray-50 item-center">
      <h1 className="text-2xl font-black" >
        Cookie Stand Admin
      </h1>
      <a href="/overview" className="p-1 mr-5 bg-black rounded-md">Overview</a>
     
    </header>
  )
}

export default Header