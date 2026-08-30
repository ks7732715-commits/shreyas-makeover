import { useState } from "react";
import { supabase } from "../supabase";

const services = [
  { en: "Hair Cut", hi: "हेयर कट" },
  { en: "Manicure", hi: "मैनिक्योर" },
  { en: "Pedicure", hi: "पेडीक्योर" },
  { en: "Facial", hi: "फेशियल" },
  { en: "Eyebrows", hi: "आइब्रो" },
  { en: "Nail Extension", hi: "नेल एक्सटेंशन" },
  { en: "Hair Spa", hi: "हेयर स्पा" },
  { en: "Makeup", hi: "मेकअप" },
];

const timeSlots = [
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
  "7:00 PM",
];

export default function Booking({ language }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (
      !form.name ||
      !form.phone ||
      !form.service ||
      !form.date ||
      !form.time
    ) {
      alert(
        language === "en"
          ? "Please fill all required fields."
          : "कृपया सभी जरूरी जानकारी भरें।"
      );
      return;
    }

    if (!/^[0-9]{10}$/.test(form.phone)) {
      alert(
        language === "en"
          ? "Please enter a valid 10-digit phone number."
          : "कृपया सही 10 अंकों का फोन नंबर डालें।"
      );
      return;
    }

    setLoading(true);
    setSuccess(false);

    try {
      // 1. SAVE BOOKING TO SUPABASE
      const { error } = await supabase.from("bookings").insert([
        {
          name: form.name,
          phone: form.phone,
          service: form.service,
          appointment_date: form.date,
          appointment_time: form.time,
          message: form.message || "",
          status: "pending",
        },
      ]);

      if (error) {
        console.error("Supabase booking error:", error);
        alert(
          language === "en"
            ? `Booking could not be saved: ${error.message}`
            : `बुकिंग सेव नहीं हो सकी: ${error.message}`
        );
        setLoading(false);
        return;
      }

      // 2. SHOW SUCCESS
      setSuccess(true);

      // 3. CREATE WHATSAPP MESSAGE
      const message = `Hello Shreya's Makeover!

I would like to book an appointment.

Name: ${form.name}
Phone: ${form.phone}
Service: ${form.service}
Date: ${form.date}
Time: ${form.time}
Message: ${form.message || "No special request"}

Please confirm my appointment.

Thank you.`;

      const whatsappNumber = "917355930131";

      const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=` +
        encodeURIComponent(message);

      // Small delay so user sees confirmation
      setTimeout(() => {
        window.location.href = whatsappURL;
      }, 500);

      // 4. RESET FORM
      setForm({
        name: "",
        phone: "",
        service: "",
        date: "",
        time: "",
        message: "",
      });
    } catch (error) {
      console.error("Booking error:", error);

      alert(
        language === "en"
          ? "Something went wrong. Please try again."
          : "कुछ गलत हो गया। कृपया फिर से कोशिश करें।"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="booking" className="booking-section">
      <div className="section-title">
        <p className="eyebrow">
          {language === "en" ? "APPOINTMENT" : "अपॉइंटमेंट"}
        </p>

        <h2>
          {language === "en"
            ? "Book Your Appointment"
            : "अपना अपॉइंटमेंट बुक करें"}
        </h2>

        <p>
          {language === "en"
            ? "Fill the form and send your appointment request on WhatsApp."
            : "फॉर्म भरें और अपनी अपॉइंटमेंट रिक्वेस्ट WhatsApp पर भेजें।"}
        </p>
      </div>

      {success && (
        <div className="booking-success">
          {language === "en"
            ? "✓ Booking saved! Opening WhatsApp..."
            : "✓ बुकिंग सेव हो गई! WhatsApp खोला जा रहा है..."}
        </div>
      )}

      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            {language === "en" ? "Your Name *" : "आपका नाम *"}
          </label>

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder={
              language === "en" ? "Enter your name" : "अपना नाम लिखें"
            }
            required
          />
        </div>

        <div className="form-group">
          <label>
            {language === "en" ? "Phone Number *" : "फोन नंबर *"}
          </label>

          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="10 digit mobile number"
            maxLength="10"
            inputMode="numeric"
            required
          />
        </div>

        <div className="form-group">
          <label>
            {language === "en" ? "Select Service *" : "सेवा चुनें *"}
          </label>

          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            required
          >
            <option value="">
              {language === "en" ? "Choose a service" : "सेवा चुनें"}
            </option>

            {services.map((service) => (
              <option key={service.en} value={service.en}>
                {language === "en" ? service.en : service.hi}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>
            {language === "en" ? "Preferred Date *" : "पसंदीदा तारीख *"}
          </label>

          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            min={new Date().toISOString().split("T")[0]}
            required
          />
        </div>

        <div className="form-group">
          <label>
            {language === "en" ? "Preferred Time *" : "पसंदीदा समय *"}
          </label>

          <select
            name="time"
            value={form.time}
            onChange={handleChange}
            required
          >
            <option value="">
              {language === "en" ? "Choose a time" : "समय चुनें"}
            </option>

            {timeSlots.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group full-width">
          <label>
            {language === "en"
              ? "Message (Optional)"
              : "मैसेज (वैकल्पिक)"}
          </label>

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder={
              language === "en"
                ? "Any special request?"
                : "कोई विशेष अनुरोध?"
            }
          />
        </div>

        <button
          type="submit"
          className="submit-booking"
          disabled={loading}
        >
          {loading
            ? language === "en"
              ? "Saving Booking..."
              : "बुकिंग सेव हो रही है..."
            : language === "en"
            ? "Book on WhatsApp"
            : "WhatsApp पर बुक करें"}
        </button>
      </form>
    </section>
  );
}