import { useEffect, useState } from "react";

// ================= HOME COMPONENTS =================
import Review from "./components/Home/Review.jsx";
import Hero from "./components/Home/Hero.jsx";
import AboutUs from "./components/Home/AboutUs.jsx";
import Methords from "./components/Home/Methords.jsx";
import Packeges from "./components/Home/Packeges.jsx";
import Quiz from "./components/Home/Quiz.jsx";

// ================= LAYOUT =================
import Footer from "./components/layout/Footer.jsx";
import Navbar from "./components/layout/Navbar.jsx";
import ChatBox from "./components/layout/ChatBox.jsx";

// ================= PAGES =================
import LoginPage from "./auth/LoginPage.jsx";
import RegisterPage from "./auth/RegisterPage.jsx";
import Market from "./pages/Market/Cryptography.jsx";
import WhyUs from "./pages/AboutUS/WhyUs.jsx";
import PrivancyPolicy from "./pages/PrivancyPolicy.jsx";
import AccountType from "./pages/Trading/AccountType.jsx";
import Stock from "./pages/Market/Stock";

function App() {
  const [path, setPath] = useState(window.location.pathname);

  const normalizedPath = decodeURIComponent(path).toLowerCase();

  // ================= ROUTE LISTENER =================
  useEffect(() => {
    const handleRouteChange = () => setPath(window.location.pathname);

    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  // ================= NAVIGATION =================
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
      });
    });
  };

  // ================= ROUTES =================
  const isHomePage = path === "/";
  const isLoginPage = path === "/login";
  const isSignUpPage = path === "/signup";
  const isCryptoPage = path === "/crypto1";

  const isWhyUsPage = normalizedPath === "/why-us";
  const isAccountTypePage = normalizedPath === "/account-type";
  const isPrivacyPage = normalizedPath === "/privacy";
  const isStockPage = path === "/stock";

  // ================= NAVBAR CONTROL =================
  const showMainNavbar =
    !isLoginPage &&
    !isSignUpPage;

  return (
    <div>

      {/* ================= NAVBAR ================= */}
      {showMainNavbar && (
        <Navbar
          onHomeClick={navigateHome}
          onSignUpClick={() => navigate("/signup")}
          onLoginClick={() => navigate("/login")}
          onAccountTypeClick={() => navigate("/account-type")}
          onWhyUsClick={() => navigate("/why-us")}
          onCryptoClick={() => navigate("/crypto1")}
          onStockClick={() => navigate("/stock")}
        />
      )}

      {/* ================= HOME ================= */}
      {isHomePage && (
        <>
          <Hero />
          <AboutUs />
          <Methords />
          <Packeges />
          <Review />
          
          <Quiz />
          <Footer navigate={navigate} />
          <ChatBox />
        </>
      )}

      {/* ================= PRIVACY ================= */}
      {isPrivacyPage && (
        <>
          <PrivancyPolicy />
          <Footer navigate={navigate} />
          <ChatBox />
        </>
      )}

      {/* ================= WHY US ================= */}
      {isWhyUsPage && (
        <>
          <WhyUs />
          <Footer navigate={navigate} />
          <ChatBox />
        </>
      )}

      {/* ================= STOCK ================= */}
      {isStockPage && (
        <>
          <Stock />
          <Footer navigate={navigate} />
          <ChatBox />
        </>
      )}

      {/* ================= ACCOUNT TYPE ================= */}
      {isAccountTypePage && (
        <>
          <AccountType />
          <Footer navigate={navigate} />
          <ChatBox />
        </>
      )}

      {/* ================= LOGIN ================= */}
      {isLoginPage && (
        <LoginPage onSignUpClick={() => navigate("/signup")} />
      )}

      {/* ================= SIGNUP ================= */}
      {isSignUpPage && (
        <RegisterPage onLoginClick={() => navigate("/login")} />
      )}

      {/* ================= CRYPTO ================= */}
      {isCryptoPage && <Market />}

    </div>
  );
}

export default App;
