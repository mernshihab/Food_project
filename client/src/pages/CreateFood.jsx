import React, { useState } from "react";
import MasterLayout from "../components/MasterLayout";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateFood = () => {
  let navigate = useNavigate();
  let [value, setValue] = useState("");
  let [qty, setQty] = useState("");

  const handlePrice = (event) => {
    const newValue = event.target.value;
    if (!isNaN(newValue)) {
      setValue(newValue);
    } else {
      setValue("");
    }
  };
  const handleQty = (event) => {
    const newValue = event.target.value;
    if (!isNaN(newValue)) {
        setQty(newValue);
    } else {
        setQty("");
    }
  };

  const foodCreate = async (event) => {
    event.preventDefault();
    let formData = new FormData(event.target);
    let foodName = formData.get("foodName");
    let foodCategory = formData.get("foodCategory");
    let foodCode = formData.get("foodCode");
    let photoURL = formData.get("photoURL");
    let qty = formData.get("QTY");
    let price = formData.get("Price");
    await axios
      .post("/api/Create", {
        foodName: foodName,
        foodCategory: foodCategory,
        foodCode: foodCode,
        price: parseInt(price),
        qty: parseInt(qty),
        photoURL: photoURL,
      })
      .then(() => {
        navigate("/");
      });
  };

  return (
    <MasterLayout active="create">
      <div className="mt-20 min-h-screen p-12 w-10/12">
        <p className="font-poppins font-medium text-lg">Create Food Item</p>
        <form onSubmit={foodCreate} className="mt-12">
          <div className="flex flex-wrap">
            <div className="flex flex-col mr-14">
              <label className="font-poppins font-normal text-lg">
                Food Name
              </label>
              <input
                name="foodName"
                className="w-80 py-4 rounded-md border border-gray-200 mt-2.5"
                type="text"
              />
            </div>
            <div className="flex flex-col mr-14">
              <label className="font-poppins font-normal text-lg">
                Food Code
              </label>
              <input
                name="foodCode"
                className="w-80 py-4 rounded-md border border-gray-200 mt-2.5"
                type="text"
              />
            </div>
            <div className="flex flex-col mr-14">
              <label className="font-poppins font-normal text-lg">
                Food Image
              </label>
              <input
                name="photoURL"
                className="w-80 py-4 rounded-md border border-gray-200 mt-2.5"
                type="text"
              />
            </div>
            <div className="flex flex-col mr-14">
              <label className="font-poppins font-normal text-lg">
                Food Category
              </label>
              <input
                name="foodCategory"
                className="w-80 py-4 rounded-md border border-gray-200 mt-2.5"
                type="text"
              />
            </div>
            <div className="flex flex-col mr-14">
              <label className="font-poppins font-normal text-lg">QTY</label>
              <input
                name="QTY"
                value={qty}
                onChange={handleQty}
                className="w-80 py-4 rounded-md border border-gray-200 mt-2.5"
                type="text"
              />
            </div>
            <div className="flex flex-col mr-14">
              <label className="font-poppins font-normal text-lg">Price</label>
              <input
                name="Price"
                value={value}
                onChange={handlePrice}
                className="w-80 py-4 rounded-md border border-gray-200 mt-2.5"
                type="text"
              />
            </div>
          </div>
          <button className="py-4 px-12 bg-[#5A67BA] text-white font-poppins font-bold text-base leading-6 rounded-lg mt-10">
            Submit
          </button>
        </form>
      </div>
    </MasterLayout>
  );
};

export default CreateFood;
