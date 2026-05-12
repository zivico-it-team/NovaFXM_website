// src/App.jsx
// import type { ReactNode } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Layout
import Header from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ChatBox from "./components/layout/ChatBox";

// Home sections
import Hero from "./components/Home/Hero";
import AboutUs from "./components/Home/AboutUs";
import Methords from "./components/Home/Methords";
import Packeges from "./components/Home/Packeges";
import Review from "./components/Home/Review";
import Quiz from "./components/Home/Quiz";

// Pages
import Profile from "./auth/profile";
import LoginPage from "./auth/LoginPage";
import RegisterPage from "./auth/RegisterPage";
import AccountType from "./pages/Trading/AccountType";
import TermsConditions from "./pages/Trading/Terms&Conditions";
import WhyUs from "./pages/AboutUS/WhyUs";
import Market from "./pages/Market/Cryptography";
import Indices from "./pages/Market/Indices";
import Stock from "./pages/Market/Stock";
import Deposit from "./pages/Trading/Deposits&Withdrawals";
import Promotions from "./pages/Trading/Promotions";
import Forex from "./pages/Market/Forex";
import FAQ from "./pages/AboutUS/Faqs";
//footer pages
import Privacy from "./pages/PrivancyPolicy";
// ─── Layout Wrappers ──────────────────────────────────────────────────────────

/** Pages that share the top Header */
function MainLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

/** Auth pages — no header */
function AuthLayout({ children }) {
  return <>{children}</>;
}

// ─── Page Compositions ────────────────────────────────────────────────────────

function HomePage() {
  return (
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
  );
}


// ─── App ─────────────────────────────────────────────────────────────────────

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ── Auth routes (no header) ── */}
        <Route
          path="/login"
          element={
            <AuthLayout>
                   <LoginPage onRegisterClick={() => window.location.href = "/register"} />

            </AuthLayout>
          }
        />
        <Route
          path="/signup"
          element={
            <AuthLayout>
            <RegisterPage onLoginClick={() => window.location.href = "/login"} />

            </AuthLayout>
          }
        />
         <Route
          path="/profile"
          element={
            <AuthLayout>
            <Profile/>

            </AuthLayout>
          }
        />

        {/* ── Main routes (with shared header) ── */}
        <Route
          path="/"
          element={
            <MainLayout>
              <HomePage />
            </MainLayout>
          }
        />
        <Route
          path="/account-type"
          element={
            <MainLayout>
              <AccountType />
            </MainLayout>
          }
        />
        <Route
          path="/terms-conditions"
          element={
            <MainLayout>
              <TermsConditions />
            </MainLayout>
          }
        />
        <Route
          path="/why-us"
          element={
            <MainLayout>
              <WhyUs />
            </MainLayout>
          }
        />
        <Route
          path="/crypto"
          element={
            <MainLayout>
              <Market />
            </MainLayout>
          }
        />
        

        <Route
          path="/indices"
          element={
            <MainLayout>
              <Indices />
              <Footer />
              <ChatBox />
            </MainLayout>
          }
        />

        <Route
          path="/stocks"
          element={
            <MainLayout>
              <Stock />
              <Footer />
              <ChatBox />
            </MainLayout>
          }
        />

        <Route
          path="/privacy"
          element={
            <MainLayout>
              <Privacy />
              <Footer />
              <ChatBox />
            </MainLayout>
          }
        />

         <Route
          path="/deposit"
          element={
            <MainLayout>
              <Deposit />
              <Footer />
              <ChatBox />
            </MainLayout>
          }
        />

        
         <Route
          path="/promotions"
          element={
            <MainLayout>
              <Promotions />
              <Footer />
              <ChatBox />
            </MainLayout>
          }
        />
          

           <Route
          path="/forex"
          element={
            <MainLayout>
              <Forex />
              <Footer />
              <ChatBox />
            </MainLayout>
          }
        />

             <Route
          path="/faq"
          element={
            <MainLayout>
              <FAQ />
              <Footer />
              <ChatBox />
            </MainLayout>
          }
           />

          

        {/* ── Catch-all ── */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;