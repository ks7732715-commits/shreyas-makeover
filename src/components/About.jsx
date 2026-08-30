export default function About({ language }) {

  return (

    <section
      id="about"
      className="about-section"
    >

      <div className="about-art">

        <div className="about-circle">

          <div className="about-logo">
            SM
          </div>

          <h3>
            SHREYA'S
          </h3>

          <p>
            MAKEOVER
          </p>

        </div>

      </div>


      <div className="about-content">

        <p className="eyebrow">
          {language === "en"
            ? "ABOUT US"
            : "हमारे बारे में"}
        </p>

        <h2>
          {language === "en"
            ? "Your Beauty, Our Passion."
            : "आपकी खूबसूरती, हमारा जुनून।"}
        </h2>

        <p>
          {language === "en"
            ? "Welcome to SHREYA'S MAKEOVER, your local beauty and makeover destination in Rura."
            : "SHREYA'S MAKEOVER में आपका स्वागत है, रूरा में आपका अपना ब्यूटी और मेकओवर सेंटर।"}
        </p>

        <p>
          {language === "en"
            ? "We believe every woman deserves to feel beautiful, confident and special. We provide hair, skin, nail, makeup and beauty services with care."
            : "हमारा मानना है कि हर महिला को खूबसूरत, आत्मविश्वासी और खास महसूस करना चाहिए। हम हेयर, स्किन, नेल, मेकअप और ब्यूटी सेवाएं पूरी देखभाल के साथ प्रदान करते हैं।"}
        </p>

        <a
          href="#booking"
          className="primary-button"
        >
          {language === "en"
            ? "Book Your Visit"
            : "अपनी विजिट बुक करें"}
        </a>

      </div>

    </section>
  );
}