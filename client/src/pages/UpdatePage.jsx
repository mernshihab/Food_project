import React, { useEffect, useState } from "react";
import MasterLayout from "../components/MasterLayout";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdatePage = () => {
  let navigate = useNavigate();
  let { id } = useParams();
  // let [value, setValue] = useState("");
  // let [qty, setQty] = useState("");
  let [existing, setExisting] = useState([]);

  // const handlePrice = (event) => {
  //   const newValue = event.target.value;
  //   if (!isNaN(newValue)) {
  //     setValue(newValue);
  //   } else {
  //     setValue("");
  //   }
  // };
  // const handleQty = (event) => {
  //   const newValue = event.target.value;
  //   if (!isNaN(newValue)) {
  //     setQty(newValue);
  //   } else {
  //     setQty("");
  //   }
  // };

  const existingData = async (id) => {
    let res = await axios.get(`/api/ReadbyID/${id}`);
    setExisting(res.data.row[0]);
  };

  useEffect(() => {
    (async () => {
      await existingData(id);
    })();
  }, []);

  const foodUpdate = async (event) => {
    event.preventDefault();
    let formData = new FormData(event.target);
    console.log(formData.get("QTY"));
    let foodName = formData.get("foodName");
    let foodCategory = formData.get("foodCategory");
    let foodCode = formData.get("foodCode");
    let photoURL = formData.get("photoURL");
    let qty = formData.get("QTY");
    let price = formData.get("Price");
    await axios
      .post(`/api/Update/${id}`, {
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
        <p className="font-poppins font-medium text-lg">Update Food Item</p>
        <form onSubmit={foodUpdate} className="mt-12">
          <div className="flex flex-wrap">
            <div className="flex flex-col mr-14">
              <label className="font-poppins font-normal text-lg">
                Food Name
              </label>
              <input
                defaultValue={existing && existing.foodName}
                name="foodName"
                className="w-80 py-4 rounded-md border font-medium pl-4 border-gray-200 mt-2.5"
                type="text"
              />
            </div>
            <div className="flex flex-col mr-14">
              <label className="font-poppins font-normal text-lg">
                Food Code
              </label>
              <input
                defaultValue={existing && existing.foodCode}
                name="foodCode"
                className="w-80 py-4 rounded-md border font-medium pl-4 border-gray-200 mt-2.5"
                type="text"
              />
            </div>
            <div className="flex flex-col mr-14">
              <label className="font-poppins font-normal text-lg">
                Food Image
              </label>
              <input
                defaultValue={existing && existing.photoURL}
                name="photoURL"
                className="w-80 py-4 rounded-md border font-medium pl-4 border-gray-200 mt-2.5"
                type="text"
              />
            </div>
            <div className="flex flex-col mr-14">
              <label className="font-poppins font-normal text-lg">
                Food Category
              </label>
              <input
                defaultValue={existing && existing.foodCategory}
                name="foodCategory"
                className="w-80 py-4 rounded-md border font-medium pl-4 border-gray-200 mt-2.5"
                type="text"
              />
            </div>
            <div className="flex flex-col mr-14">
              <label className="font-poppins font-normal text-lg">QTY</label>
              <input
                defaultValue={existing && existing.qty}
                name="QTY"
                // onChange={handleQty}
                className="w-80 py-4 rounded-md border font-medium pl-4 border-gray-200 mt-2.5"
                type="text"
              />
            </div>
            <div className="flex flex-col mr-14">
              <label className="font-poppins font-normal text-lg">Price</label>
              <input
                name="Price"
                defaultValue={existing && existing.price}
                // onChange={handlePrice}
                className="w-80 py-4 rounded-md border font-medium pl-4 border-gray-200 mt-2.5"
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

export default UpdatePage;
