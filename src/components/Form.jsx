import React from "react";

const Form = () => {
  return (
    <div className="bg-[#90AB84] rounded-2xl shadow-lg p-8">
      
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        Contact Me
      </h2>

      <form className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Your Name
          </label>
          <input type="text" placeholder="Enter your name" className="w-full px-4 py-2 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#90AB8B]"/>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Your Email
          </label>
          <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#90AB8B]"/>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Your Message
          </label>
          <textarea rows="4" placeholder="Enter your message" className="w-full px-4 py-2 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#90AB8B]"/>
        </div>

        <button type="submit" className="w-full bg-[#3B4953] text-white py-2 rounded-lg hover:bg-[#2c3a45] transition duration-300">
          Send Message
        </button>

      </form>
    </div>
  );
};

export default Form;
