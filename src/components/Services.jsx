const serviceCategories = [
  {
    title: "Manicure & Pedicure",
    icon: "💅",
    items: [
      { name: "Classic Manicure", price: "₹300" },
      { name: "Pedicure", price: "₹400" },
      { name: "French Manicure", price: "₹500" },
      { name: "Advance Pedicure", price: "₹600" },
    ],
  },
  {
    title: "Nail Extension",
    icon: "💎",
    note: "Starting from ₹1,000",
    items: [
      { name: "Gel Extension" },
      { name: "Acrylic Extension" },
      { name: "Soft Gel Extension" },
      { name: "Extension + Nail Art" },
    ],
  },
  {
    title: "Waxing",
    icon: "🧖",
    items: [
      { name: "Full Arms", price: "₹200" },
      { name: "Full Legs", price: "₹350" },
      { name: "Underarms", price: "₹200" },
    ],
  },
  {
    title: "Hair",
    icon: "💇",
    items: [
      { name: "Hair Trimming", price: "₹70" },
      { name: "Hair Wash + Cut", price: "₹150" },
      { name: "Hair Spa", price: "₹400" },
      { name: "Full Feather Cut", price: "₹250" },
    ],
  },
  {
    title: "Makeup",
    icon: "💄",
    items: [
      { name: "Party Makeup", price: "₹1,500" },
      { name: "HD Makeup", price: "₹3,500" },
      { name: "Bridal Makeup", price: "₹7,000" },
      { name: "Engagement Makeup", price: "₹5,000" },
      { name: "HD Bridal Makeup", price: "₹11,000" },
      { name: "Airbrush Bridal Makeup", price: "₹15,000" },
      { name: "Shreya's Signature Makeup", price: "₹20,000" },
    ],
  },
  {
    title: "Facial",
    icon: "✨",
    items: [
      { name: "Cleanup", price: "₹250–₹700" },
      { name: "Basic Facial", price: "₹350–₹1,000" },
      { name: "Gold Facial", price: "₹800" },
      { name: "Hydrafacial", price: "₹600" },
    ],
  },
];

export default function Services({ language }) {
  const isHindi = language === "hi";

  return (
    <section id="services" className="services-section">
      <div className="section-title">
        <p className="eyebrow">
          {isHindi ? "हमारी सेवाएं" : "OUR SERVICES"}
        </p>

        <h2>
          {isHindi ? "ब्यूटी और मेकअप सेवाएं" : "Beauty & Makeup Services"}
        </h2>

        <p>
          {isHindi
            ? "अपनी पसंद की सेवा चुनें और अपॉइंटमेंट बुक करें।"
            : "Choose from our beauty, hair, nail, facial and makeup services."}
        </p>
      </div>

      <div className="services-grid">
        {serviceCategories.map((category) => (
          <div className="service-card" key={category.title}>
            <div className="service-card-header">
              <span className="service-icon">{category.icon}</span>

              <div>
                <h3>{category.title}</h3>

                {category.note && (
                  <p className="service-note">
                    {category.note}
                  </p>
                )}
              </div>
            </div>

            <div className="service-list">
              {category.items.map((item) => (
                <div className="service-item" key={item.name}>
                  <span>{item.name}</span>

                  {item.price && (
                    <strong>{item.price}</strong>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}