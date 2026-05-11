import { useEffect, useState } from "react";

import Navbar from "./components/layout/Navbar.jsx";
import ChatBox from "./components/layout/ChatBox.jsx";
import Footer from "./components/layout/Footer.jsx";

import Hero from "./components/Home/Hero.jsx";
import AboutUs from "./components/Home/AboutUs.jsx";
import Methords from "./components/Home/Methords.jsx";
import Packeges from "./components/Home/Packeges.jsx";
import Review from "./components/Home/Review.jsx";
import Quiz from "./components/Home/Quiz.jsx";

import LoginPage from "./auth/LoginPage.jsx";
import RegisterPage from "./auth/RegisterPage.jsx";

import CryptocurrencyPage from "./pages/Market/Cryptography.jsx";
import IndicesPage from "./pages/Market/Indices.jsx";
import WhyUs from "./pages/AboutUS/WhyUs.jsx";
import AccountType from "./pages/Trading/AccountType.jsx";

function App() {
  const [path, setPath] = useState(window.location.pathname);
  const normalizedPath = decodeURIComponent(path).toLowerCase();

  // Handle browser back/forward
  useEffect(() => {
    const handleRouteChange = () => setPath(window.location.pathname);

    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  // Navigate function
  const navigate = (nextPath: string) => {
    window.history.pushState({}, "", nextPath);
    setPath(nextPath);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Home scroll navigation
  const navigateHome = () => {
    navigate("/");

    requestAnimationFrame(() => {
      document.getElementById("hero")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  // Routes (FIXED)
  const isLoginPage = normalizedPath === "/login";
  const isSignUpPage = normalizedPath === "/signup";
  const isAccountTypePage = normalizedPath === "/account-type";
  const isWhyUsPage = normalizedPath === "/why-us";
  const isHomePage = normalizedPath === "/";
  const isCryptoPage = normalizedPath === "/crypto1";
  const isIndicesPage = normalizedPath === "/indices";

  const showMainNavbar = !isLoginPage && !isSignUpPage;

  return (
    <div>
      {/* Navbar */}
      {showMainNavbar && (
        <Navbar
          onHomeClick={navigateHome}
          onSignUpClick={() => navigate("/signup")}
          onLoginClick={() => navigate("/login")}
          onAccountTypeClick={() => navigate("/account-type")}
          onWhyUsClick={() => navigate("/why-us")}
          onCryptoClick={() => navigate("/crypto1")}
          onIndicesClick={() => navigate("/indices")}
        />
      )}

      {/* Home Page */}
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

      {/* Why Us Page */}
      {isWhyUsPage && (
        <>
          <WhyUs />
          <Footer />
          <ChatBox />
        </>
      )}

      {/* Account Type Page */}
      {isAccountTypePage && (
        <>
          <AccountType />
          <Footer />
          <ChatBox />
        </>
      )}

      {/* Login Page */}
      {isLoginPage && (
        <LoginPage onSignUpClick={() => navigate("/signup")} />
      )}

      {/* Signup Page */}
      {isSignUpPage && (
        <RegisterPage onLoginClick={() => navigate("/login")} />
      )}

      {/* Crypto Page */}
      {isCryptoPage && (
        <>
          <CryptocurrencyPage />
          <Footer />
          <ChatBox />
        </>
      )}

      {/* Indices Page */}
      {isIndicesPage && <IndicesPage />}
    </div>
  );
}

export default App;