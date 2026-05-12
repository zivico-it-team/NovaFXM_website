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
import WhyUs from "./pages/AboutUS/WhyUs.jsx";
import AccountType from "./pages/Trading/AccountType.jsx";
import Indices from "./pages/Market/Indices.jsx";
import Faqs from "./pages/AboutUS/Faqs.jsx";

function App() {
  const [path, setPath] = useState(window.location.pathname);

  const normalizedPath = decodeURIComponent(path).toLowerCase();

  /* =========================
     ROUTE LISTENER
  ========================= */
  useEffect(() => {
    const handleRouteChange = () => {
      setPath(window.location.pathname);
    };

    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  /* =========================
     NAVIGATION
  ========================= */

  const navigate = (nextPath) => {
    window.history.pushState({}, "", nextPath);
    setPath(nextPath);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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

  /* =========================
     ROUTES
  ========================= */

  const isHomePage = path === "/";
  const isLoginPage = path === "/login";
  const isSignUpPage = path === "/signup";

  const isCryptoPage = path === "/crypto1";
  const isIndicesPage = path === "/indices";

  const isWhyUsPage = normalizedPath === "/why-us";
  const isAccountTypePage = normalizedPath === "/account type";
  const isFaqsPage = path === "/faqs";

  const showMainNavbar = !isLoginPage && !isSignUpPage;

  return (
    <div>

      {/* =========================
          NAVBAR
      ========================= */}
      {showMainNavbar && (
        <Navbar
          onHomeClick={navigateHome}
          onSignUpClick={() => navigate("/signup")}
          onLoginClick={() => navigate("/login")}
          onAccountTypeClick={() => navigate("/account type")}
          onWhyUsClick={() => navigate("/why-us")}
          onCryptoClick={() => navigate("/crypto1")}
          onIndicesClick={() => navigate("/indices")}
          onFaqsClick={() => navigate("/faqs")}
          
        />
      )}

      {/* =========================
          HOME
      ========================= */}
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

      {/* =========================
          INDICES
      ========================= */}
      {isIndicesPage && (
        <>
          <Indices />
          <Footer />
          <ChatBox />
        </>
      )}

      {/* =========================
          WHY US
      ========================= */}
      {isWhyUsPage && (
        <>
          <WhyUs />
          <Footer />
          <ChatBox />
        </>
      )}

      {/* =========================
          ACCOUNT TYPE
      ========================= */}
      {isAccountTypePage && (
        <>
          <AccountType />
          <Footer />
          <ChatBox />
        </>
      )}

      {/* =========================
          FAQS
      ========================= */}
      {isFaqsPage && (
        <>
          <Faqs />
          <Footer />
          <ChatBox />
        </>
      )}

      {/* =========================
          LOGIN
      ========================= */}
      {isLoginPage && (
        <LoginPage onSignUpClick={() => navigate("/signup")} />
      )}

      {/* =========================
          SIGNUP
      ========================= */}
      {isSignUpPage && (
        <RegisterPage onLoginClick={() => navigate("/login")} />
      )}

      {/* =========================
          CRYPTO
      ========================= */}
      {isCryptoPage && (
        <>
          <Market />
          <Footer />
          <ChatBox />
        </>
      )}
      

    </div>
  );
}

export default App;