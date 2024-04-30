import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdListBox } from "react-icons/io";
import { Link } from "react-router-dom";

const Slidebar = ({ active }) => {
  return (
    <div className="h-auto bg-[#F1F2F7] w-2/12 p-5">
      <div className="flex items-center">
        <img className="w-6 h-6 mr-2" src="logo.svg" alt="Logo" />
        <h2 className="font-poppins font-bold text-sm text-[#5A67BA]">
          Crud Food
        </h2>
      </div>
      <div className="mt-16">
        <h5 className="font-poppins font-normal text-sm mb-4 ml-5">MENU</h5>
        <Link
          to="/create"
          className={`flex items-center rounded-lg py-4 pl-5 ${
            active == "create" && "bg-[#E4E7F5]"
          }`}
        >
          <FaCartShopping className="text-[#A6ABC8]" />
          <h3 className="font-poppins font-normal text-sm ml-3 text-[#A6ABC8]">
            Create Food
          </h3>
        </Link>
        <Link
          to="/"
          className={`flex items-center mt-3 rounded-lg py-4 pl-5 ${
            active == "home" && "bg-[#E4E7F5]"
          }  `}
        >
          <IoMdListBox className="text-[#A6ABC8]" />
          <h3 className="font-poppins font-normal text-sm ml-3 text-[#A6ABC8]">
            All Foods
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default Slidebar;
