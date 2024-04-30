// @ts-ignore
import React, { useEffect, useState } from "react";
import MasterLayout from "../components/MasterLayout";
import axios from "axios";
import Loader from "../components/Loader.jsx";
import { Link } from "react-router-dom";

const Homepage = () => {
  let [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      await readData();
    })();
  }, []);

  const readData = async () => {
    let res = await axios.get("/api/Read");
    setData(res.data.row);
  };

  const deleteData = async(id) => {
    await axios.get(`/api/Delete/${id}`);
    await readData()
  };

  return (
    <MasterLayout active="home">
      <div className="mt-20 min-h-screen p-12 w-10/12">
        <p className="font-poppins font-medium text-base">All Food List</p>
        <div className="flex flex-wrap">
          {data.length === 0 ? (
            <Loader />
          ) : (
            data.map((item, i) => (
              <div
                key={i}
                className="w-64 mt-10 border relative mr-12 border-gray-200 rounded-xl shadow-md"
              >
                <img
                  className="w-full h-32 object-center rounded-t-xl object-cover"
                  src={item.photoURL}
                  alt="Food-Image"
                />
                <p className="font-poppins font-medium text-xs text-white py-1 px-4 rounded-md bg-purple-500 inline-block absolute top-4 right-3">
                  TK: {item.price}
                </p>
                <div className="py-4 px-2.5">
                  <h1 className="font-poppins font-medium text-sm leading-5">
                    {item.foodName}
                  </h1>
                  <div className="mt-5">
                    <Link to={`/update/${item._id}`} className="py-2.5 px-6 rounded-md bg-[#F5F7FA] text-green-400 font-poppins font-normal text-sm hover:bg-green-400 hover:text-white duration-300 mr-5">
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteData(item._id)}
                      className="py-2.5 px-6 rounded-md bg-[#F5F7FA] text-red-500 font-poppins font-normal text-sm hover:bg-red-500 hover:text-white duration-300"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </MasterLayout>
  );
};

export default Homepage;
