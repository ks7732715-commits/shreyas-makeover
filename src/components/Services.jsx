const services = [
  {
    icon: "✂️",
    en: "Hair Cut",
    hi: "हेयर कट",
    price: "₹200",
  },
  {
    icon: "💅",
    en: "Manicure",
    hi: "मैनिक्योर",
    price: "₹300",
  },
  {
    icon: "🦶",
    en: "Pedicure",
    hi: "पेडीक्योर",
    price: "₹400",
  },
  {
    icon: "✨",
    en: "Facial",
    hi: "फेशियल",
    price: "₹500",
  },
  {
    icon: "🌸",
    en: "Eyebrows",
    hi: "आइब्रो",
    price: "₹50",
  },
  {
    icon: "💎",
    en: "Nail Extension",
    hi: "नेल एक्सटेंशन",
    price: "₹800",
  },
  {
    icon: "🧖‍♀️",
    en: "Hair Spa",
    hi: "हेयर स्पा",
    price: "₹600",
  },
  {
    icon: "💄",
    en: "Makeup",
    hi: "मेकअप",
    price: "₹1,500",
  },
];

export default function Services({ language }) {
  return (
    <section id="services" className="services-section">

      <div className="section-title">

        <p className="eyebrow">
          {language === "en"
            ? "OUR SERVICES"
            : "हमारी सेवाएं"}
        </p>

        <h2>
          {language === "en"
            ? "Beauty & Makeover Services"
            : "ब्यूटी और मेकओवर सेवाएं"}
        </h2>

        <p>
          {language === "en"
            ? "Professional beauty care to help you look and feel your best."
            : "आपको खूबसूरत और आत्मविश्वासी महसूस कराने के लिए प्रोफेशनल ब्यूटी केयर।"}
        </p>

      </div>


      <div className="services-grid">

        {services.map((service) => (

          <div
            className="service-card"
            key={service.en}
          >

            <div className="service-icon">
              {service.icon}
            </div>

            <h3>
              {language === "en"
                ? service.en
                : service.hi}
            </h3>

            <div className="service-price">
              {service.price}
            </div>

            <p>
              {language === "en"
                ? "Professional service"
                : "प्रोफेशनल सर्विस"}
            </p>

            <a
              href="#booking"
              className="service-book"
            >
              {language === "en"
                ? "Book Now"
                : "अभी बुक करें"}
            </a>

          </div>

        ))}

      </div>

    </section>
  );
}