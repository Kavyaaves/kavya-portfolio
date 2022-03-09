import React, { useState } from 'react';
import { client } from "../client"
import { motion } from "framer-motion"
const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name] && value && value != "") {
      setErrors({ ...errors, [name]: null })
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData
    if (name?.length > 0 && email?.length > 0 && message?.length > 0) {
      setLoading(true);

      const contact = {
        _type: 'contact',
        name: formData.name,
        email: formData.email,
        message: formData.message,
      };

      client.create(contact)
        .then(() => {
          setLoading(false);
          setIsFormSubmitted(true);
        })
        .catch((err) => console.log(err));
    } else {
      setErrors({ name: (!name || name == "") ? "Please provide your name" : null, email: (!email || email == "") ? "Please provide an email address" : null, message: (!message || message == "") ? "Please provide your message" : null });
    }
  };

  return (
    <div className=" relative">
      <div className="py-5"></div>
      <div className="md:mx-10 mx-5" m-5>
        <div
          className="max-w-screen-lg skew-90 px-10 pt-10 border-striped text-center md:text-left mb-0  grid gap-8 grid-cols-1  py-16 mx-auto  bg-transparent text-dark font-bold rounded-lg shadow-lg">
          <div>
            <h2 className="text-3xl text-light lg:text-4xl px-5 md:px-10 text-center font-bold leading-tight">Get In Touch ! 🚀</h2>
          </div>
          <div className="flex items-center justify-center px-5 md:px-40" >
            {isFormSubmitted ? (
              <div className="w-full text-start">
                <div>
                  <p className="uppercase text-sm text-light text-left font-bold">Name</p>
                  <input
                    className={(errors.name == "" || errors.name == null) ? "w-full border-2 focus:ring-3 border-white bg-transparent text-light font-semibold tracking-wide mt-2 p-2 md:p-3 rounded-lg focus:outline-none focus:shadow-outline" : "w-full focus:ring-3 border-white bg-transparent text-light font-semibold tracking-wide mt-2 p-2 md:p-3 rounded-lg focus:outline-none focus:shadow-outline border-2 border-red-500"}
                    type="text" name="name" placeholder="Name" value={name} onChange={handleChangeInput} />
                  {errors.name != "" && <div className="text-red-600 mt-2">{errors.name}</div>}
                </div>
                <div className="mt-6">
                  <p className="uppercase text-sm text-light font-bold text-left">Email</p>
                  <input
                    className={(errors.email == "" || errors.email == null) ? "w-full border-2 focus:ring-3 border-white bg-transparent text-light font-semibold tracking-wide mt-2 p-2 md:p-3 rounded-lg focus:outline-none focus:shadow-outline" : "w-full focus:ring-3 border-white bg-transparent text-light font-semibold tracking-wide mt-2 p-2 md:p-3 rounded-lg focus:outline-none focus:shadow-outline border-2 border-red-500"}
                    name="email" type="email" value={email} placeholder="Email" onChange={handleChangeInput} />
                  {errors.email != "" && <div className="text-red-600 mt-2">{errors.email}</div>}
                </div>
                <div className="mt-8">
                  <p className="uppercase text-sm text-light font-bold text-left">Message</p>
                  <textarea placeholder="Leave your message here..."
                    value={message}
                    name="message"
                    rows={4}
                    onChange={handleChangeInput}
                    className={(errors.message == "" || errors.message == null) ? "w-full border-2 focus:ring-3 border-white bg-transparent text-light font-semibold tracking-wide mt-2 p-2 md:p-3 rounded-lg focus:outline-none focus:shadow-outline" : "w-full focus:ring-3 border-white bg-transparent text-light font-semibold tracking-wide mt-2 p-2 md:p-3 rounded-lg focus:outline-none focus:shadow-outline border-2 border-red-500"}
                  ></textarea>
                  {errors.message != "" && <div className="text-red-600 mt-2">{errors.message}</div>}
                </div>
                <div className="mt-8">
                  <button
                    onClick={handleSubmit}
                    className="uppercase text-sm font-bold tracking-wide hover:opacity-90 opacity-100 bg-light shadow-white shadow-lg hover: text-dark p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                    {!loading ? 'Send' : 'Sending...'}
                  </button>
                </div>
              </div>
            ) :
              <motion.div style={{ minHeight: 400 }}>
                <div className="mt-20"></div>
                <h2 className="text-light text-3xl font-bold text-center m-auto items-center">Thank you for filling the form!!</h2><br />
                <h2 className="text-light text-xl font-bold text-center m-auto items-center">Will get back to you soon ✌</h2><br />
              </motion.div>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer