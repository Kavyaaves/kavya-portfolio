import React, { useState } from 'react';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    // client.create(contact)
    //   .then(() => {
    //     setLoading(false);
    //     setIsFormSubmitted(true);
    //   })
    //   .catch((err) => console.log(err));
  };

  return (
    <div className="h-screen relative">
      {!isFormSubmitted ? (
        <form className="px-8 py-12 -mt-20">
          <div className="text-center w-full">
          </div>
          <div
            className="max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-transparent border-2 border-white text-dark font-bold rounded-lg shadow-lg">
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-3xl text-light lg:text-4xl font-bold leading-tight">Let's get started! 🚀</h2>
                <div className="mt-2 text-light">
                  or send an email to
                  <br />
                  kavyamuralioff@gmail.com
                </div>
              </div>
              <div className="mt-8 text-center">
              </div>
            </div>
            <div className="">
              <div>
                <span className="uppercase text-sm text-light font-bold">Name</span>
                <input className="w-full bg-gray-200 text-dark font-bold mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text" name="username" placeholder="Name" value={username} onChange={handleChangeInput} />
              </div>
              <div className="mt-8">
                <span className="uppercase text-sm text-light font-bold">Email</span>
                <input className="w-full bg-gray-200 text-dark font-bold mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  name="email" type="email" value={email} placeholder="Email" onChange={handleChangeInput} />
              </div>
              <div className="mt-8">
                <span className="uppercase text-sm text-light font-bold">Message</span>
                <textarea placeholder="Message"
                  value={message}
                  name="message"
                  onChange={handleChangeInput}
                  className="w-full h-32 bg-gray-200 text-dark font-bold mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
              </div>
              <div className="mt-8">
                <button
                  onClick={handleSubmit}
                  className="uppercase text-sm font-bold tracking-wide bg-gray-200 text-dark p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                  {!loading ? 'Send' : 'Sending...'}
                </button>
              </div>
            </div>
          </div>
        </form>) : <h2>Thanks for getting back to me !!</h2>}
    </div>
  );
};

export default Footer