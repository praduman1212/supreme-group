import React, { useState } from 'react';
import useStoreFormData from '../hooks/useStoreFormData';

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const { storeFormData, isLoading, error } = useStoreFormData();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.fullName = formData.fullName ? "" : "Full Name is required.";
    tempErrors.email = /.+@.+\..+/.test(formData.email) ? "" : "Email is not valid.";
    tempErrors.subject = formData.subject ? "" : "Subject is required.";
    tempErrors.message = formData.message ? "" : "Message is required.";
    setErrors({
      ...tempErrors
    });

    return Object.values(tempErrors).every(x => x === "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      const success = await storeFormData(formData);
      if (success) {
        // Clear form after successful submission
        setFormData({
          fullName: '',
          email: '',
          subject: '',
          message: '',
        });
        alert('Message sent successfully!');
      } else {
        alert('Failed to send message. Please try again.');
      }
    } else {
      console.log("Form has errors.");
    }
  };

  return (
    <>
      <div className="get-in-touch-container z-20 min-h-screen flex items-center justify-center bg-[#0067B1] text-white py-12 px-5">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between">
          {/* Left Section: Contact Info */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-20">
            <h2 className="text-4xl font-semibold mb-8 leading-none align-middle">Get in touch</h2>
            <div className="h-0.5 w-[48px] bg-[#ffffff]"></div> {/* Underline */}
            <p className="text-2xl font-normal mb-10 mt-10 leading-tight align-middle">For general enquiries</p>
            <p className="mb-4"><strong className="font-semibold text-xl leading-4 align-middle">Address :</strong> <span className="mt-2 font-normal text-lg leading-4 align-middle whitespace-nowrap">110, 16th Road, Chembur, Mumbai - 400071</span></p>
            <p className="mb-4"><strong className="font-semibold text-xl leading-4 align-middle">Phone :</strong> <br /> <span className="mt-2 font-normal text-lg leading-4 align-middle">+91 22 25208822</span></p>
            <p className="mb-4"><strong className="font-semibold text-xl leading-4 align-middle">Email :</strong> <br /> <span className="mt-2 font-normal text-lg leading-4 align-middle">info@supremegroup.co.in</span></p>
          </div>

          {/* Right Section: Form */}
          <div className="w-full md:w-1/2 md:pl-20">
            <form onSubmit={handleSubmit} className="space-y-14">
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full border-b border-white bg-transparent text-white focus:outline-none font-lg leading-4 align-middle pb-2 placeholder-white placeholder-lg text-lg"
                />
                {errors.fullName && <p className="text-red-300 text-sm mt-1">{errors.fullName}</p>}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-b border-white bg-transparent text-white focus:outline-none font-lg leading-4 align-middle pb-2 placeholder-white placeholder-lg text-lg"
                />
                {errors.email && <p className="text-red-300 text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full border-b border-white bg-transparent text-white focus:outline-none font-lg leading-4 align-middle pb-2 placeholder-white placeholder-lg text-lg"
                />
                 {errors.subject && <p className="text-red-300 text-sm mt-1">{errors.subject}</p>}
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="1"
                  className="w-full border-b border-white bg-transparent text-white focus:outline-none font-lg leading-4 align-middle pb-2 placeholder-white placeholder-lg text-lg"
                ></textarea>
                 {errors.message && <p className="text-red-300 text-sm mt-1">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="bg-white text-[#000000] py-2 px-10 rounded-full hover:bg-gray-200"
                disabled={isLoading}
              >
                {isLoading ? 'Sending...' : 'Send'}
              </button>
              {error && <p className="text-red-300 text-sm mt-2">{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetInTouch; 