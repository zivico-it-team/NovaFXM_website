
    
    import React, { useState } from 'react'
import LoginPage from './auth/LoginPage.jsx'
import Header from "./components/layout/Navbar.jsx";
import RegisterPage from './auth/RegisterPage.jsx'

export default function App() {
  const [showLogin, setShowLogin] = useState(true)

  return (
    <div>
      <Header />
      {showLogin ? (
        <LoginPage onSignUpClick={() => setShowLogin(false)} />
      ) : (
        <RegisterPage onLoginClick={() => setShowLogin(true)} />
      )}
    </div>
  )
}