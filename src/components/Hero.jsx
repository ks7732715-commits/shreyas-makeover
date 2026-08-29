export default function Hero({ language }) {

  return (
    <section
      id="home"
      className="hero"
    >

      <div className="hero-content">

        <p className="eyebrow">
          BEAUTY • STYLE • CONFIDENCE
        </p>

        <h1>

          {language === "en"
            ? "Feel Beautiful."
            : "खूबसूरत महसूस करें।"}

          <br />

          <span>
            {language === "en"
              ? "Feel Confident."
              : "आत्मविश्वास से भरपूर रहें।"}
          </span>

        </h1>

        <p className="hero-description">

          {language === "en"
            ? "Professional beauty and makeover services for women in Rura, Uttar Pradesh."
            : "रूरा, उत्तर प्रदेश में महिलाओं के लिए प्रोफेशनल ब्यूटी और मेकओवर सेवाएं।"}

        </p>

        <div className="hero-buttons">

          <a
            href="#booking"
            className="primary-button"
          >
            {language === "en"
              ? "Book Appointment"
              : "अपॉइंटमेंट बुक करें"}
          </a>

          <a
            href="https://wa.me/917355930131"
            target="_blank"
            rel="noreferrer"
            className="whatsapp-button"
          >
            💬 WhatsApp
          </a>

        </div>

        <div className="hero-info">

          <div>
            🕐

            <strong>
              {language === "en"
                ? " Opening Hours"
                : " खुलने का समय"}
            </strong>

            <p>10:00 AM – 8:00 PM</p>
          </div>

          <div>
            📍

            <strong>
              {language === "en"
                ? " Location"
                : " स्थान"}
            </strong>

            <p>Rura, Uttar Pradesh</p>
          </div>

        </div>

      </div>

      <div className="hero-art">

        <div className="beauty-circle">

          <span>✦</span>

          <h2>SHREYA'S</h2>

          <p>MAKEOVER</p>

          <small>RURA</small>

        </div>

      </div>

    </section>
  );
}