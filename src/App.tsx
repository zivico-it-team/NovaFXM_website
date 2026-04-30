import { useEffect, useState } from "react";
import Review from "./components/Home/Review.jsx";
import Footer from "./components/layout/Footer.jsx";
import Navbar from "./components/layout/Navbar.jsx";
import Hero from "./components/Home/Hero.jsx";
import AboutUs from "./components/Home/AboutUs.jsx";
import Methords from "./components/Home/Methords.jsx";
import Packeges from "./components/Home/Packeges.jsx";
import Quiz from "./components/Home/Quiz.jsx";
import LoginPage from "./auth/LoginPage.jsx";
import RegisterPage from "./auth/RegisterPage.jsx";

function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleRouteChange = () => setPath(window.location.pathname);

    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  const navigate = (nextPath: string) => {
    window.history.pushState({}, "", nextPath);
    setPath(nextPath);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isLoginPage = path === "/login";
  const isSignUpPage = path === "/signup";
  const isHomePage = !isLoginPage && !isSignUpPage;

  return (
    <div>
      {isHomePage && (
        <Navbar
          onHomeClick={() => navigate("/")}
          onSignUpClick={() => navigate("/signup")}
          onLoginClick={() => navigate("/login")}
        />
      )}

      {isHomePage && (
        <>
          <Hero />
          <AboutUs />
          <Methords />
          <Packeges />
          <Review />
          <Quiz />
          <Footer />
        </>
      )}

      {isLoginPage && (
        <LoginPage onSignUpClick={() => navigate("/signup")} />
      )}

      {isSignUpPage && (
        <RegisterPage onLoginClick={() => navigate("/login")} />
      )}
    </div>
  );
}

export default App;
