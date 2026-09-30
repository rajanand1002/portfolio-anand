import { useState } from "react";
import emailjs from "@emailjs/browser";
import { emailjs as emailjsConfig, contactEmail } from "../data";

export default function Contact() {
  const [formData, setFormData] = useState({
    from_name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [copied, setCopied] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          from_name: formData.from_name,
          email: formData.email,
          message: formData.message,
        },
        emailjsConfig.publicKey
      )
      .then(() => {
        setStatus("Message sent!");
        setFormData({ from_name: "", email: "", message: "" });
      })
      .catch(() => {
        setStatus("Failed to send. Try again!");
      });
  }

  function copyEmail() {
    navigator.clipboard?.writeText(contactEmail).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <section id="contact">
      <span className="section-index">05 / CONTACT</span>
      <h2>Hire Me</h2>
      <p className="contact-subtitle">Lets Work Together</p>

      <p className="contact-description">
        Have a project in mind or just want to say hi? Feel free to reach
        out. I'm always open to new opportunities.
        <br />
        <br />
        Email:{" "}
        <button type="button" className="copy-email-btn" onClick={copyEmail}>
          {contactEmail}
          <i className={copied ? "bx bx-check" : "bx bx-copy"}></i>
          <span className="copy-email-tooltip">
            {copied ? "Copied!" : "Click to copy"}
          </span>
        </button>
        <br />
        <br />
        Location: India
      </p>

      <form id="contact-form" onSubmit={handleSubmit}>
        <input
          id="namex"
          name="from_name"
          placeholder="Name"
          required
          value={formData.from_name}
          onChange={handleChange}
        />
        <input
          id="emailsx"
          name="email"
          type="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          id="messagex"
          name="message"
          placeholder="Message"
          required
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button className="btn primary-btn" type="submit">
          Send
        </button>
      </form>
      <div id="form-status">{status}</div>
    </section>
  );
}
