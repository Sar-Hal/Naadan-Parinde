import React from "react";
import { FaArrowRight } from "react-icons/fa";

const DistrictList = ({ district }) => {
  return (
    <div className="flex flex-row px-6 items-center justify-between w-full py-6 rounded-2xl bg-[#653504] cursor-pointer hover:scale-105 transition-all ease-in-out duration-300 hover:shadow-lg hover:shadow-[#80471c] border-3 border-[#da9046] hover:bg-[#da9046] hover:border-[#653504] hover:text-[#4f3317]">
      <h1 className="font-bold text-2xl">{district.properties.dist_name}</h1>
      <FaArrowRight className="text-3xl" />
    </div>
  );
};

export default DistrictList;
