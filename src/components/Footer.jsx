import React from "react";

const logoSrc = "C:/Users/Annew/Desktop/logo.png";
const qrSrc = "C:/Users/Annew/Desktop/qr.png";

const EmailIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: 1 }}>
    <path d="M2 6a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" stroke="#2e7d32" strokeWidth="1.5" />
    <path d="M2 7l10 7 10-7" stroke="#2e7d32" strokeWidth="1.5" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: 1 }}>
    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" stroke="#2e7d32" strokeWidth="1.5" />
  </svg>
);

const LocationIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: 1 }}>
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="#2e7d32" strokeWidth="1.5" />
    <circle cx="12" cy="9" r="2.5" stroke="#2e7d32" strokeWidth="1.5" />
  </svg>
);

const TwitterIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.912-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const styles = {
  footer: {
    background: "#f5f5f0",
    borderTop: "3px solid #c8b96e",
    padding: "32px 40px 0",
    fontFamily: "Arial, sans-serif",
  },
  topGrid: {
    display: "grid",
    gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
    gap: 24,
    paddingBottom: 24,
  },
  desc: {
    fontSize: 12.5,
    color: "#555",
    lineHeight: 1.6,
    margin: "10px 0 12px",
  },
  colTitle: {
    fontSize: 13.5,
    fontWeight: 700,
    color: "#1a1a1a",
    marginBottom: 14,
  },
  linkList: { listStyle: "none", padding: 0, margin: 0 },
  linkItem: { marginBottom: 9 },
  link: { fontSize: 12.5, color: "#555", textDecoration: "none" },
  contactItem: { display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 10 },
  contactText: { fontSize: 12.5, color: "#555", textDecoration: "none", lineHeight: 1.4 },
  socials: { display: "flex", gap: 7, marginTop: 12 },
  socialBtn: {
    width: 28,
    height: 28,
    borderRadius: 5,
    background: "#2e7d32",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
  },
  bottom: {
    borderTop: "1px solid #d0cfc7",
    padding: "12px 0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 16,
  },
  copy: { fontSize: 11.5, color: "#666", whiteSpace: "nowrap" },
  risk: { fontSize: 11.5, color: "#666", textAlign: "right", maxWidth: "55%" },
};

export default function FXTradeFooter() {
  return (
    <footer style={styles.footer}>
      <div style={styles.topGrid}>

        {/* Brand */}
        <div>
          <img src={logoSrc} alt="FX Trade" style={{ height: 32, marginBottom: 8 }} />
          <p style={styles.desc}>
            Empowering traders globally with next-generation tools, tight spreads, and uncompromising security.
          </p>
          <img src={qrSrc} alt="QR Code" style={{ width: 72, height: 72, borderRadius: 4 }} />
        </div>

        {/* Quick Links */}
        <div>
          <div style={styles.colTitle}>Quick Links</div>
          <ul style={styles.linkList}>
            {["Home", "Market", "Trading Tools", "About Us"].map((item) => (
              <li key={item} style={styles.linkItem}>
                <a href="#" style={styles.link}>{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <div style={styles.colTitle}>Support</div>
          <ul style={styles.linkList}>
            {["FAQ", "Contact Us", "Privacy Policy", "Terms of Service"].map((item) => (
              <li key={item} style={styles.linkItem}>
                <a href="#" style={styles.link}>{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div style={styles.colTitle}>Contact</div>

          <div style={styles.contactItem}>
            <EmailIcon />
            <a href="mailto:support@fxtrade.com" style={styles.contactText}>support@fxtrade.com</a>
          </div>

          <div style={styles.contactItem}>
            <PhoneIcon />
            <a href="tel:+15551234567" style={styles.contactText}>+1 (555) 123-4567</a>
          </div>

          <div style={styles.contactItem}>
            <LocationIcon />
            <span style={styles.contactText}>Global Tech Hub, London</span>
          </div>

          <div style={styles.socials}>
            <a href="https://twitter.com" style={styles.socialBtn} title="Twitter" target="_blank" rel="noreferrer">
              <TwitterIcon />
            </a>
            <a href="https://instagram.com" style={styles.socialBtn} title="Instagram" target="_blank" rel="noreferrer">
              <InstagramIcon />
            </a>
            <a href="https://linkedin.com" style={styles.socialBtn} title="LinkedIn" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={styles.bottom}>
        <span style={styles.copy}>© 2024 FXTrade. All rights reserved.</span>
        <span style={styles.risk}>
          Risk Warning: Trading foreign exchange and CFDs on margin carries a high level of risk and may not be suitable for all investors.
        </span>
      </div>
    </footer>
  );
}