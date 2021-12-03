import React from 'react'
import CookieStandAdmin from '../components/CookieStandAdmin'
import { useAuth } from '../contexts/auth'
import LoginForm from "../components/LoginForm"
export default function Home() {
  const { user, login, logout } = useAuth();
  return (
    <div >
      {
        user ? (
          <CookieStandAdmin user={user} logout={logout}  />

        ) :
          (
            <LoginForm login={login} />

          )
      }

    </div>
  )
}