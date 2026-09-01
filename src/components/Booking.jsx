import { useState } from "react";
import { supabase } from "../supabase";

const services = [
  { category: "Manicure & Pedicure", name: "Classic Manicure", price: "₹300" },
  { category: "Manicure & Pedicure", name: "Pedicure", price: "₹400" },
  { category: "Manicure & Pedicure", name: "French Manicure", price: "₹500" },
  { category: "Manicure & Pedicure", name: "Advance Pedicure", price: "₹600" },

  { category: "Nail Extension", name: "Gel Extension", price: "Starting from ₹1,000" },
  { category: "Nail Extension", name: "Acrylic Extension", price: "Starting from ₹1,000" },
  { category: "Nail Extension", name: "Soft Gel Extension", price: "Starting from ₹1,000" },
  { category: "Nail Extension", name: "Extension + Nail Art", price: "Starting from ₹1,000" },

  { category: "Waxing", name: "Full Arms", price: "₹200" },
  { category: "Waxing", name: "Full Legs", price: "₹350" },
  { category: "Waxing", name: "Underarms", price: "₹200" },

  { category: "Hair", name: "Hair Trimming", price: "₹70" },
  { category: "Hair", name: "Hair Wash + Cut", price: "₹150" },
  { category: "Hair", name: "Hair Spa", price: "₹400" },
  { category: "Hair", name: "Full Feather Cut", price: "₹250" },

  { category: "Makeup", name: "Party Makeup", price: "₹1,500" },
  { category: "Makeup", name: "HD Makeup", price: "₹3,500" },
  { category: "Makeup", name: "Bridal Makeup", price: "₹7,000" },
  { category: "Makeup", name: "Engagement Makeup", price: "₹5,000" },
  { category: "Makeup", name: "HD Bridal Makeup", price: "₹11,000" },
  { category: "Makeup", name: "Airbrush Bridal Makeup", price: "₹15,000" },
  { category: "Makeup", name: "Shreya's Signature Makeup", price: "₹20,000" },

  { category: "Facial", name: "Cleanup", price: "₹250–₹700" },
  { category: "Facial", name: "Basic Facial", price: "₹350–₹1,000" },
  { category: "Facial", name: "Gold Facial", price: "₹800" },
  { category: "Facial", name: "Hydrafacial", price: "₹600" },
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

    const selectedService = services.find(
      (service) => service.name === form.service
    );

    const servicePrice = selectedService?.price || "";

    setLoading(true);

    try {
      const { error } = await supabase.from("bookings").insert([
        {
          name: form.name,
          phone: form.phone,
          service: form.service,
          date: form.date,
          time: form.time,
          message: form.message || "",
        },
      ]);

      if (error) {
        console.error("Supabase booking error:", error);
        alert(
          language === "en"
            ? "Booking could not be saved. Please try again."
            : "बुकिंग सेव नहीं हो सकी। कृपया दोबारा कोशिश करें।"
        );
        return;
      }

      const whatsappMessage = `Hello Shreya's Makeover!

I would like to book an appointment.

Name: ${form.name}
Phone: ${form.phone}
Service: ${form.service}
Price: ${servicePrice}
Date: ${form.date}
Time: ${form.time}
Message: ${form.message || "No special request"}

Please confirm my appointment.

Thank you.`;

      const whatsappNumber = "917355930131";

      const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=` +
        encodeURIComponent(whatsappMessage);

      window.location.href = whatsappURL;
    } catch (error) {
      console.error(error);

      alert(
        language === "en"
          ? "Something went wrong. Please try again."
          : "कुछ गलत हो गया। कृपया दोबारा कोशिश करें।"
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

        <div className="form-group full-width">
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
              <option key={service.name} value={service.name}>
                {service.category} — {service.name} — {service.price}
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
            {language === "en" ? "Message (Optional)" : "मैसेज (वैकल्पिक)"}
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