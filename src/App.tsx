import Header from "./components/layout/Navbar.jsx";

function App() {
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

export default App;
