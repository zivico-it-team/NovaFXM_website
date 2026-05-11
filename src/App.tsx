import { useEffect, useState } from "react";
import Review from "./components/Home/Review.jsx";
import Footer from "./components/layout/Footer.jsx";
import Navbar from "./components/layout/Navbar.jsx";
import ChatBox from "./components/layout/ChatBox.jsx";
import Hero from "./components/Home/Hero.jsx";
import AboutUs from "./components/Home/AboutUs.jsx";
import Methords from "./components/Home/Methords.jsx";
import Packeges from "./components/Home/Packeges.jsx";
import Quiz from "./components/Home/Quiz.jsx";
import LoginPage from "./auth/LoginPage.jsx";
import RegisterPage from "./auth/RegisterPage.jsx";
import Market from "./pages/Market/Cryptography.jsx";
import WhyUs from "./pages/AboutUS/WhyUs.jsx"

import AccountType from "./pages/Trading/AccountType.jsx";
import TermsConditions from "./pages/Trading/Terms&Conditions.jsx";


function App() {
  const [path, setPath] = useState(window.location.pathname);
  const normalizedPath = decodeURIComponent(path).toLowerCase();

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

  const navigateHome = () => {
    window.history.pushState({}, "", "/");
    setPath("/");

    requestAnimationFrame(() => {
      document.getElementById("hero")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  const isLoginPage = path === "/login";
  const isSignUpPage = path === "/signup";
  const isAccountTypePage = normalizedPath === "/account type";
  const isTermsConditionsPage = normalizedPath === "/terms-conditions";
  const isWhyUsPage = normalizedPath === "/why-us";
  const isHomePage = path === "/";
  const isCryptoPage = path === "/crypto1";
  const showMainNavbar = !isLoginPage && !isSignUpPage;
  

  return (
    <div>
      {showMainNavbar && (
        <Navbar
          onHomeClick={navigateHome}
          onSignUpClick={() => navigate("/signup")}
          onLoginClick={() => navigate("/login")}
          onAccountTypeClick={() => navigate("/Account type")}
          onTermsConditionsClick={() => navigate("/terms-conditions")}
          onWhyUsClick={() => navigate("/why-us")}
          onCryptoClick={() => navigate("/crypto1")}
          
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
          <WhyUs />
          <Footer />
          <ChatBox />
          
        </>
      )}

      {isWhyUsPage && (
        <>
          <WhyUs />
          <Footer />
          <ChatBox />
        </>
      )}

      {isAccountTypePage && (
        <>
          <AccountType />
          <Footer />
          <ChatBox />
        </>
      )}

      {isTermsConditionsPage && (
        <>
          <TermsConditions />
          <Footer />
          <ChatBox />
        </>
      )}

      {isLoginPage && (
        <LoginPage onSignUpClick={() => navigate("/signup")} />
      )}

      {isSignUpPage && (
        <RegisterPage onLoginClick={() => navigate("/login")} />
      )}
       {isCryptoPage  && <Market />}
    </div>
  );
}

export default App;



