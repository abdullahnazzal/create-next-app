import React from 'react'
import CookieStandAdmin from '../components/CookieStandAdmin'
import { useAuth } from '../contexts/auth'
import LoginForm from "../components/LoginForm";
import useResource from '../hooks/useResource';
import StandCookie from '../components/StandCookie';
export default function Home() {
  const { user, login, logout } = useAuth();
  // const {resources,loading} = useResource();

  return (
    <div >
      {
        user ? (
          <>

          <CookieStandAdmin  user={user} logout={logout}  />
          {/* <StandCookie stands={resources} loading={loading} /> */}
            </>
          
          
          ) :
          (
            <LoginForm login={login} />

          )
      }

    </div>
  )
}