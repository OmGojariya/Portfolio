import React from 'react';

const SkillCard = ({ img }) => {
  return (
    <div className="w-28 h-28 bg-[#90AB8B] rounded-2xl flex items-center justify-center shadow-md shadow-gray-300 
                    transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-[#90AB8B] cursor-pointer">

        <img src={img} alt="skill" className="w-14 h-14 object-contain" />

    </div>
  );
};

export default SkillCard;
