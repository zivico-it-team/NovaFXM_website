
import { useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from "../assets/images/logo.png";
import axios from "axios";


const LoginPage = ({ onSignUpClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        // Optionally redirect or update UI here
        window.location.reload();
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "Login failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
      <section className="auth-card interactive-card relative w-full max-w-md rounded-2xl bg-white px-6 py-8 text-center shadow-xl sm:px-8">
        <div className="absolute -top-7 left-1/2 -translate-x-1/2 rounded-xl bg-white px-3 py-2 shadow-md">
          <img src={logo} alt="NOVAFX Logo" className="h-9 object-contain" />
        </div>

        <div className="mt-5">
          <h1 className="text-2xl font-semibold text-gray-900">
            Hello,
            <br />
            Welcome Back
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Login to continue to your account
          </p>
        </div>

        <form
          className="mt-7 space-y-4 text-left"
          onSubmit={handleSubmit}
        >
          <label className="block">
            <span className="mb-1.5 block text-xs font-medium text-gray-600">
              Email
            </span>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-700 outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-700/10"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          <label className="block">
            <span className="mb-1.5 block text-xs font-medium text-gray-600">
              Password
            </span>
            <input
              type="password"
              placeholder="********"
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-700 outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-700/10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>

          <div className="flex items-center justify-between gap-3 text-sm text-gray-600">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-green-700" />
              Remember me
            </label>
            <a href="#" className="font-medium text-green-700 hover:underline">
              Forgot password?
            </a>
          </div>

          {error && (
            <div className="text-red-600 text-xs mb-2">{error}</div>
          )}

          <button
            type="submit"
            className="button-shine w-full rounded-lg bg-green-700 py-2.5 text-sm font-semibold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-green-800 hover:shadow-lg active:translate-y-0"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-gray-300"></div>
          <span className="text-xs font-medium text-gray-500">or</span>
          <div className="h-px flex-1 bg-gray-300"></div>
        </div>

        <div className="flex justify-center gap-5">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:-translate-y-1"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white">
              <FaInstagram size={18} />
            </div>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:-translate-y-1"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1877F2] text-white">
              <FaFacebookF size={18} />
            </div>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:-translate-y-1"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1DA1F2] text-white">
              <FaTwitter size={18} />
            </div>
          </a>
        </div>

        <p className="mt-6 text-sm text-gray-600">
          Don't have an account?{" "}
          <button
            type="button"
            onClick={onSignUpClick}
            className="font-semibold text-green-700 hover:text-green-800"
          >
            Sign up
          </button>
        </p>
      </section>
    </main>
  );
};

export default LoginPage;
