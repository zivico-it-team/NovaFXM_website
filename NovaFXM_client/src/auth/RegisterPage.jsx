import { useState } from "react";
import axios from "axios";
import logo from "../assets/images/logo.png";
import { FaEye, FaEyeSlash, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const COUNTRY_CODES = [
  { code: "+1",   flag: "🇺🇸", name: "US" },
  { code: "+1",   flag: "🇨🇦", name: "CA" },
  { code: "+44",  flag: "🇬🇧", name: "GB" },
  { code: "+61",  flag: "🇦🇺", name: "AU" },
  { code: "+91",  flag: "🇮🇳", name: "IN" },
  { code: "+94",  flag: "🇱🇰", name: "LK" },
  { code: "+92",  flag: "🇵🇰", name: "PK" },
  { code: "+880", flag: "🇧🇩", name: "BD" },
  { code: "+86",  flag: "🇨🇳", name: "CN" },
  { code: "+81",  flag: "🇯🇵", name: "JP" },
  { code: "+82",  flag: "🇰🇷", name: "KR" },
  { code: "+65",  flag: "🇸🇬", name: "SG" },
  { code: "+60",  flag: "🇲🇾", name: "MY" },
  { code: "+62",  flag: "🇮🇩", name: "ID" },
  { code: "+63",  flag: "🇵🇭", name: "PH" },
  { code: "+66",  flag: "🇹🇭", name: "TH" },
  { code: "+84",  flag: "🇻🇳", name: "VN" },
  { code: "+971", flag: "🇦🇪", name: "AE" },
  { code: "+966", flag: "🇸🇦", name: "SA" },
  { code: "+974", flag: "🇶🇦", name: "QA" },
  { code: "+973", flag: "🇧🇭", name: "BH" },
  { code: "+968", flag: "🇴🇲", name: "OM" },
  { code: "+49",  flag: "🇩🇪", name: "DE" },
  { code: "+33",  flag: "🇫🇷", name: "FR" },
  { code: "+39",  flag: "🇮🇹", name: "IT" },
  { code: "+34",  flag: "🇪🇸", name: "ES" },
  { code: "+7",   flag: "🇷🇺", name: "RU" },
  { code: "+55",  flag: "🇧🇷", name: "BR" },
  { code: "+52",  flag: "🇲🇽", name: "MX" },
  { code: "+27",  flag: "🇿🇦", name: "ZA" },
  { code: "+20",  flag: "🇪🇬", name: "EG" },
  { code: "+234", flag: "🇳🇬", name: "NG" },
  { code: "+254", flag: "🇰🇪", name: "KE" },
];

const RegisterPage = ({ onLoginClick }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [country, setCountry] = useState("");
  const [dialCode, setDialCode] = useState("+1");
  const [phone, setPhone] = useState("");
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    if (!agree) {
      setError("You must agree to the Terms of service and Privacy policies.");
      return;
    }
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5001/api/auth/register", {
        firstName,
        lastName,
        email,
        password,
        country,
        phone: dialCode + phone,
      });
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        window.location.href = "/profile";
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "Registration failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
      <section className="auth-card interactive-card relative w-full max-w-md rounded-2xl bg-white px-6 py-5 text-center shadow-xl sm:px-8">
        {/* Logo */}
        <div className="absolute -top-7 left-1/2 -translate-x-1/2 rounded-xl bg-white px-3 py-2 shadow-md">
          <img src={logo} alt="NOVAFX Logo" className="h-9 object-contain" />
        </div>

        <div className="mt-5">
          <h1 className="text-2xl font-semibold text-gray-900">
            Welcome to <span className="text-green-700">Novafxm!</span>
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Credentials are only used to authenticate. All saved data will be
            stored in your database.
          </p>
        </div>

        <form className="mt-7 space-y-4 text-left" onSubmit={handleSubmit}>
          {/* First + Last Name */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1.5 block text-xs font-medium text-gray-600">First Name</span>
              <input
                type="text"
                placeholder="First Name"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-700 outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-700/10"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-xs font-medium text-gray-600">Last Name</span>
              <input
                type="text"
                placeholder="Last Name"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-700 outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-700/10"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </label>
          </div>

          {/* Email */}
          <label className="block">
            <span className="mb-1.5 block text-xs font-medium text-gray-600">Email</span>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-700 outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-700/10"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          {/* Password */}
          <label className="block">
            <span className="mb-1.5 block text-xs font-medium text-gray-600">Password</span>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="********"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 pr-11 text-sm text-gray-700 outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-700/10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <FaEye size={14} /> : <FaEyeSlash size={14} />}
              </button>
            </div>
          </label>

          {/* Country */}
          <label className="block">
            <span className="mb-1.5 block text-xs font-medium text-gray-600">Country</span>
            <input
              type="text"
              placeholder="Country"
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-700 outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-700/10"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            />
          </label>

          {/* Phone Number with Dial Code */}
          <label className="block">
            <span className="mb-1.5 block text-xs font-medium text-gray-600">Phone Number</span>
            <div className="flex gap-2">
              {/* Dial Code Dropdown */}
              <div className="relative">
                <select
                  value={dialCode}
                  onChange={(e) => setDialCode(e.target.value)}
                  className="h-full appearance-none rounded-lg border border-gray-300 bg-gray-50 pl-3 pr-8 py-2.5 text-sm text-gray-700 outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-700/10 cursor-pointer"
                  style={{ minWidth: "90px" }}
                >
                  {COUNTRY_CODES.map((c, i) => (
                    <option key={i} value={c.code}>
                      {c.flag} {c.code}
                    </option>
                  ))}
                </select>
                {/* Custom arrow */}
                <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-xs">▾</span>
              </div>

              {/* Phone input */}
              <input
                type="tel"
                placeholder="7X XXX XXXX"
                className="flex-1 rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-700 outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-700/10"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                required
              />
            </div>
          </label>

          {/* Terms */}
          <label className="flex items-start gap-2 text-xs leading-relaxed text-gray-500">
            <input
              type="checkbox"
              className="mt-1 accent-green-700"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            />
            <span>
              I agree to the{" "}
              <span className="font-medium text-green-700">Terms of service</span>{" "}
              and Privacy policies
            </span>
          </label>

          {error && <div className="text-red-600 text-xs">{error}</div>}

          <button
            type="submit"
            className="button-shine w-full rounded-lg bg-green-800 py-2.5 text-sm font-semibold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-green-900 hover:shadow-lg active:translate-y-0 disabled:opacity-60"
            disabled={loading}
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-gray-300"></div>
          <span className="text-xs font-medium text-gray-500">or</span>
          <div className="h-px flex-1 bg-gray-300"></div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-5">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="transition-transform hover:-translate-y-1">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white">
              <FaInstagram size={18} />
            </div>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="transition-transform hover:-translate-y-1">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1877F2] text-white">
              <FaFacebookF size={18} />
            </div>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="transition-transform hover:-translate-y-1">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1DA1F2] text-white">
              <FaTwitter size={18} />
            </div>
          </a>
        </div>

        <p className="mt-6 text-sm text-gray-600">
          Already have an account?{" "}
          <button
            type="button"
            onClick={onLoginClick}
            className="font-semibold text-green-700 hover:text-green-800"
          >
            Login
          </button>
        </p>
      </section>
    </main>
  );
};

export default RegisterPage;