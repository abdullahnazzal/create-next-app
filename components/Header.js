import React from "react"
// import { useAuth } from '../contexts/auth'

function Header(props) {
  // const { user, login ,logout} = useAuth();

  return (
    <header className="flex items-center p-4 bg-green-500 text-gray-50">
    {/* <header className="flex justify-between p-4 bg-green-500 text-gray-50 item-center"> */}
      
      
      <h1 className="text-2xl font-black" >
        Cookie Stand Admin
      </h1>
      <a href="/overview" className="p-1 mr-5 bg-black rounded-md">Overview</a>
      {
        props.user ? (
          <>
            <button className="p-2 text-white bg-gray-500 rounded" onClick={props.logout}>Logout</button>
            <h2 className="p-2 text-green-600 bg-gray-100 rounded-3xl">{props.user.username}</h2>
          </>
        ) :
          (
            <>
              <button className="p-2 text-white bg-gray-500 rounded" onClick={() => {props.login('admin', 'admin123') }}>Login</button>
            </>

          )
      }
    </header>
  )
}

export default Header