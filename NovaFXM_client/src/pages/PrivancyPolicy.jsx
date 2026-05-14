import React from "react";

/* =========================
   SECTION DATA
========================= */
const sections = [
  {
    title: "1. Who we are",
    text: "Suggested text: Our website address is: https://a5markets.com.",
  },
  {
    title: "2. Comments",
    text: `Suggested text: When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection.

An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: https://automattic.com/privacy/. After approval of your comment, your profile picture is visible to the public in the context of your comment..`,
  },
  {
    title: "3. Media",
    text: `Suggested text: If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.`,
  },
  {
    title: "4. Cookies",
    text: `Suggested text:If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.
If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.
When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select "Remember Me", your login will persist for two weeks. If you log out of your account, the login cookies will be removed.
If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day..`,
  },
  {
    title: "5. Embedded content",
    text: `Suggested text: Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.
These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.`,
  },
  {
    title: "6. Data sharing",
    text: `Suggested text: If you request a password reset, your IP address will be included in the reset email..`,
  },
  {
    title: "7. Data retention",
    text: `Suggested text: If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.
For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information..`,
  },
  {
    title: "8. Your rights",
    text: `Suggested text:  If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.`,
  },
  {
    title: "9. Data sending",
    text: `Suggested text: Visitor comments may be checked through automated spam detection.`,
  },
];

/* =========================
   COMPONENT
========================= */
const PrivacyPolicy = () => {
  return (
    <div className="w-full bg-[#f5f5f5] overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[calc(100vh-72px)] w-full overflow-hidden rounded-b-[80px] sm:min-h-[calc(100vh-80px)] lg:min-h-[calc(100vh-84px)]">

        {/* Background Image with ANIMATION */}
        <img
          src="/privancy policy.png"
          alt="privacy"
          className="absolute inset-0 w-full h-full object-cover pulse-image"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 flex min-h-[calc(100vh-72px)] items-center px-6 py-16 sm:min-h-[calc(100vh-80px)] sm:px-12 lg:min-h-[calc(100vh-84px)] lg:px-20">
          <div className="max-w-[600px]">

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white leading-tight">
              <span className="text-[#00c853]">Privacy</span> Policy
            </h1>

            <div className="w-20 h-[3px] bg-[#d4a017] mt-6 mb-6"></div>

            <p className="text-white/90 text-base md:text-lg leading-relaxed">
              Your privacy is important to us. This Privacy Policy explains how we
              collect, use, and protect your information.
            </p>

          </div>
        </div>
      </section>

      {/* ================= CONTENT SECTION ================= */}
      <section className="w-full px-5 sm:px-10 md:px-16 lg:px-20 py-14 md:py-20">

        <div className="space-y-12">
          {sections.map((item, index) => (
            <div key={index}>
              <h2 className="text-[#0d5b37] text-[22px] md:text-[30px] font-semibold mb-5">
                {item.title}
              </h2>

              <p className="text-[#4a4a4a] text-sm md:text-[15px] leading-[30px] whitespace-pre-line">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </section>
    </div>
  );
};

export default PrivacyPolicy;
