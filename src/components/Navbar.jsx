export default function Navbar({ language, setLanguage }) {
  return (
    <nav className="navbar">

      <div className="brand">
        <div className="brand-logo">SM</div>

        <div>
          <h2>SHREYA'S</h2>
          <small>MAKEOVER</small>
        </div>
      </div>

      <div className="nav-links">

        <a href="#home">
          {language === "en" ? "Home" : "होम"}
        </a>

        <a href="#services">
          {language === "en" ? "Services" : "सेवाएं"}
        </a>

        <a href="#about">
          {language === "en" ? "About" : "हमारे बारे में"}
        </a>

        <a href="#booking">
          {language === "en" ? "Booking" : "बुकिंग"}
        </a>

        <a href="#contact">
          {language === "en" ? "Contact" : "संपर्क"}
        </a>

      </div>

      <div className="nav-actions">

        <button
          onClick={() =>
            setLanguage(
              language === "en" ? "hi" : "en"
            )
          }
        >
          {language === "en" ? "हिंदी" : "English"}
        </button>

        <a
          href="#booking"
          className="nav-book"
        >
          {language === "en"
            ? "Book Now"
            : "अभी बुक करें"}
        </a>

      </div>

    </nav>
  );
}