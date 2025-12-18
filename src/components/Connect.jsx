import React from "react";
import { FaInstagram, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Connect = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      
      <h3 style={{ fontFamily: 'MyFont' }} className="text-lg font-semibold text-gray-800">
        Connect with me
      </h3>

      <div className="flex gap-5">
        
        <a
          href="https://instagram.com/0m_gojariya_"
          target="_blank"
          rel="noreferrer"
          className="p-3 rounded-full bg-white shadow-md 
          hover:bg-[#E1306C] hover:text-white transition"
        >
          <FaInstagram size={20} />
        </a>

        <a
          href="https://github.com/OmGojariya"
          target="_blank"
          rel="noreferrer"
          className="p-3 rounded-full bg-white shadow-md 
          hover:bg-[#24292e] hover:text-white transition"
        >
          <FaGithub size={20} />
        </a>

        <a
          href="https://linkedin.com/in/om-gojariya-0174962a0"
          target="_blank"
          rel="noreferrer"
          className="p-3 rounded-full bg-white shadow-md 
          hover:bg-[#0A66C2] hover:text-white transition"
        >
          <FaLinkedin size={20} />
        </a>

        <a
          href="https://x.com/"
          target="_blank"
          rel="noreferrer"
          className="p-3 rounded-full bg-white shadow-md 
          hover:bg-black hover:text-white transition"
        >
          <FaXTwitter size={20} />
        </a>

      </div>
    </div>
  );
};

export default Connect;
