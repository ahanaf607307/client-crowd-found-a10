import React, { useState } from "react";

function Contactus() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send to an API or email)
    console.log(formData);
  };

  return (
    <section className="py-20 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold text-purple-700 mb-8">Contact Us</h2>
      <div className="max-w-3xl mx-auto bg-white p-8 shadow-lg rounded-lg">
        <p className="text-lg text-gray-700 mb-6">
          We are here to help! If you have any questions or need assistance, please feel free to reach out to us.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
          <button type="submit" className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
            Send Message
          </button>
        </form>
      </div>
      <div className="mt-10 text-gray-700">
        <p>If you prefer to contact us directly, you can reach us at:</p>
        <p>Email: support@crowdfunding.com</p>
        <p>Phone: +1 800-123-4567</p>
        <p>Address: 123 Charity Street, City, Country</p>
      </div>
    </section>
  );
}

export default Contactus;
