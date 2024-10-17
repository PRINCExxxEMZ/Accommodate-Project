import React, { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import Navbar from "./Navbar";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import axios from "axios";
import ReactLoading from "react-loading";

const CreateHostel = () => {
  const [hallName, setHallName] = useState("");
  const [gender, setGender] = useState("");
  const [numberOfRooms, setNumberOfRooms] = useState("");
  const [loading, setLoading] = useState(false);
  // const [hostelImage, setHostelImage] = useState(null);

  // const handleFileChange = (event) => {
  //   setSelectedFiles([...event.target.files]);
  // };

  const createHostel =  async () => {
    if (hallName && gender && numberOfRooms) {
      setLoading(true);

      const formData = new FormData();
      formData.append("name", hallName);
      formData.append("gender", gender);
      formData.append("rooms", numberOfRooms);
      // formData.append("hall_image", hostelImage);

      await axios
        .post("http://localhost:8000/api/halls", formData, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          toastr.success("Hostel Created Successfully");
          console.log("Server response:", response.data);
        })
        .catch((error) => {
          console.error(
            "Error response:",
            error.response?.data || error.message
          );
          toastr.error(
            error.response?.data?.message || "Hostel Already Exists"
          );
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      toastr.error("Please fill in all required fields.");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createHostel();
  };

  // const handleImageChange = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     setHostelImage(file);
  //   }
  // };

  return (
    <>
      {/* Navbar Section */}
      <Navbar />

      {/* Create Hostel Section */}
      <section className="pt-[100px] mx-5 md:mx-10 lg:mx-[100px]">
        <h1 className="font-semibold text-[#2b2d3a] text-[20px] md:text-[30px] mb-10">
          Create Hostel
        </h1>

        {/* Loading Spinner */}
        {loading && (
          <div className="z-50 absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <ReactLoading
              type={"bars"}
              color={"#ffffff"}
              height={100}
              width={100}
            />
          </div>
        )}

        {/* Hostel Creation Form */}
        <form onSubmit={handleSubmit}>
          {/* Hostel Name */}
          <div className="flex flex-col gap-2">
            <p className="text-[14px] text-[#425466] mb-2">Hostel Name</p>
            <input
              type="text"
              placeholder="Hall A"
              className="w-full mb-7 px-4 py-2 placeholder-sm rounded-md shadow outline-none"
              value={hallName}
              onChange={(event) => setHallName(event.target.value)}
            />
          </div>

          {/* Gender */}
          <div className="flex flex-col gap-2">
            <p className="text-[14px] text-[#425466] mb-2">Gender</p>
            <select
              className="block w-full text-[#2b2d3a] p-3 border-none rounded-md shadow focus:outline-none my-5"
              value={gender}
              onChange={(event) => setGender(event.target.value)}
            >
              <option value="" disabled hidden>
                Select Gender
              </option>
              <option value="Male">Male Hostel</option>
              <option value="Female">Female Hostel</option>
              <option value="Both">Both</option>
            </select>
          </div>

          {/* Number of Rooms */}
          <div className="flex flex-col gap-2">
            <p className="text-[14px] text-[#425466] mb-2">Number of Rooms</p>
            <input
              type="number"
              placeholder="100"
              className="w-full mb-7 px-4 py-2 placeholder-sm rounded-md shadow outline-none"
              value={numberOfRooms}
              onChange={(event) => setNumberOfRooms(event.target.value)}
            />
          </div>

          <div className="flex justify-between items-center">
            {/* Upload Hostel Image */}
            <div className="mt-10 mb-10">
              <label>Upload Hostel Image</label>
              <input
                type="file"
                className="pl-4 h-[40px] w-full rounded-md outline-none mt-1"
                accept="image/*"
                // onChange={handleImageChange}
              />
            </div>

            {/* Submit Button */}
            <div className="bg-[#0BA75A] h-10 text-white px-2 py-2 rounded-md hover:bg-[#1d623f] inline-flex items-center gap-x-4">
              <button type="submit">Create Hostel</button>
              <IoIosAddCircle className="text-[20px]" />
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default CreateHostel;
