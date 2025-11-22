import React, { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!form.subject.trim()) newErrors.subject = "Subject is required";
    if (!form.message.trim()) newErrors.message = "Message cannot be empty";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const sendWhatsApp = () => {
    if (!validateForm()) return;

    const msg = `Name: ${form.name}%0AEmail: ${form.email}%0ASubject: ${form.subject}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/917904321487?text=${msg}`);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const mailLink = `mailto:siranjivikumar88@gmail.com?subject=${form.subject}&body=Name: ${form.name}%0AEmail: ${form.email}%0A%0A${form.message}`;
    window.location.href = mailLink;

    alert("📩 Message sent successfully!");
  };

  return (
    <section id="contact" className="w-full py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-4xl font-bold text-center mb-10">
          Contact <span className="text-blue-400">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Get In Touch</h3>

            <div className="flex items-center gap-4">
              <FaPhone className="text-blue-400 text-2xl" />
              <p className="text-lg">+91 79043 21487</p>
            </div>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-blue-400 text-2xl" />
              <p className="text-lg">siranjivikumar88@gmail.com</p>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-blue-400 text-2xl" />
              <p className="text-lg">Thoothukudi, Tamil Nadu</p>
            </div>
          </div>

          <form
            onSubmit={sendEmail}
            className="w-full bg-background/40 p-6 rounded-xl shadow-lg border border-blue-400/30 backdrop-blur-sm
                       flex flex-col gap-5"
          >
            <div>
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-background border border-gray-700 
                           focus:border-blue-400 outline-none text-white"
              />
              {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}
            </div>

            <div>
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-background border border-gray-700 
                           focus:border-blue-400 outline-none text-white"
              />
              {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}
            </div>

            <div>
              <input
                name="subject"
                type="text"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-background border border-gray-700 
                           focus:border-blue-400 outline-none text-white"
              />
              {errors.subject && <p className="text-red-400 text-sm">{errors.subject}</p>}
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-background border border-gray-700 
                           focus:border-blue-400 outline-none text-white"
              ></textarea>
              {errors.message && <p className="text-red-400 text-sm">{errors.message}</p>}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                className="flex-1 py-3 bg-blue-500 hover:bg-blue-600 transition rounded-md text-lg font-semibold"
              >
                Send Email
              </button>

              <button
                type="button"
                onClick={sendWhatsApp}
                className="flex-1 py-3 bg-green-500 hover:bg-green-600 transition rounded-md text-lg font-semibold 
                           flex items-center justify-center gap-2"
              >
                <FaWhatsapp className="text-xl" />
                WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
