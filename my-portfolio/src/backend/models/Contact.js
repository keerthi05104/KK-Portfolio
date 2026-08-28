import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("");
    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setStatus(data.message);
        setLoading(false);
        return;
      }

      setStatus(
        "Thank you. Your message has been sent successfully."
      );

      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });

    } catch (error) {
      setStatus(
        "Unable to send your message. Please try again."
      );
    }

    setLoading(false);
  };

  return (
    <main className="contact-page">

      <div className="contact-page-inner">

        <p className="section-eyebrow">
          CONTACT
        </p>

        <h1>
          Let's connect.
        </h1>

        <p className="contact-page-description">
          Have a project, opportunity, or idea you'd
          like to discuss? I'd be glad to hear from you.
        </p>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <div className="form-group">

            <label htmlFor="name">
              Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />

          </div>


          <div className="form-group">

            <label htmlFor="phone">
              Contact Number
            </label>

            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+91 XXXXX XXXXX"
              value={formData.phone}
              onChange={handleChange}
              required
            />

          </div>


          <div className="form-group">

            <label htmlFor="email">
              Email Address
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />

          </div>


          <div className="form-group">

            <label htmlFor="message">
              Regards / Message
            </label>

            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Tell me about your project or opportunity..."
              value={formData.message}
              onChange={handleChange}
              required
            />

          </div>


          <button
            type="submit"
            disabled={loading}
          >
            {loading
              ? "Sending..."
              : "Send Message ↗"}
          </button>


          {status && (
            <p className="form-status">
              {status}
            </p>
          )}

        </form>

      </div>

    </main>
  );
}

export default Contact;