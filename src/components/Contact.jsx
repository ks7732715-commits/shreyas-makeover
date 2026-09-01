export default function Contact({ language }) {
  return (
    <section
      id="contact"
      className="contact-section"
    >
      <div>
        <p className="eyebrow">
          CONTACT
        </p>

        <h2>
          {language === "en"
            ? "Come Visit Us"
            : "हमसे मिलने आएं"}
        </h2>

        <p>
          📍 Rura, Uttar Pradesh
        </p>

        <p>
          📞 7355930131
        </p>

        <p>
          🕐 10:00 AM – 8:00 PM
        </p>
      </div>

      <div>
        <a
          href="tel:7355930131"
          className="primary-button"
        >
          📞 Call Now
        </a>

        <a
          href="https://wa.me/917355930131"
          target="_blank"
          rel="noreferrer"
          className="whatsapp-large"
        >
          💬 WhatsApp
        </a>

        <a
          href="https://maps.app.goo.gl/E5CAdKAFboimFdPi6?g_st=ac"
          target="_blank"
          rel="noreferrer"
          className="primary-button"
        >
          📍 Get Directions
        </a>
      </div>
    </section>
  );
}