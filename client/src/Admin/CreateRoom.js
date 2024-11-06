import React, { useState, useEffect } from "react";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { IoIosAddCircle } from "react-icons/io";
import Navbar from "./Navbar";
import axios from "axios";
import ReactLoading from "react-loading";

const CreateRoom = () => {
  const [hall_id, setHall_id] = useState("");
  const [hall_name, setHall_name] = useState("");
  const [room_number, setRoom_number] = useState("");
  const [bunk_capacity, setBunk_capacity] = useState("");
  const [bed_space, setBed_space] = useState("");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [halls, setHalls] = useState([]);
  const [room_image, setRoom_image] = useState("");

  console.log(hall_name)
  console.log(hall_id)
  // Select many files(Images)
  const handleFileChange = (event) => {
    setSelectedFiles([...event.target.files]);
  };

  // Clear Form after input
  const clearForm = () => {
    setHall_id("");
    setRoom_number("");
    setBunk_capacity("");
    setBed_space("");
    setPrice("");
    setRoom_image("");
    // setSelectedFiles("");
  };

  //Post request from API
  const createrooms = () => {
    if (hall_id) {
      setLoading(true);

      const formData = new FormData();
      formData.append("hall_id", hall_id);
      formData.append("room_number", room_number);
      formData.append("bunk_capacity", bunk_capacity);
      formData.append("bed_space", bed_space);
      formData.append("price", price);
      formData.append("room_image", room_image);

      axios
        .post("http://localhost:8000/api/rooms", {
          hall_id: hall_id,
          hall_name: hall_name,
          room_number: room_number,
          bunk_capacity: bunk_capacity,
          bed_space: bed_space,
          price: price,
          bunk_capacity: bunk_capacity,
          room_image: room_image,
        })
        .then((response) => {
          toastr.success("Room Created Successfully");
          clearForm();
        })
        .catch((error) => {
          console.log(error)
          toastr.error("Room Already Exist");
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      toastr.error("Please fill in all required fields.");
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (!file.type.includes("image")) {
      toastr.error("Unsupported file format!");
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const result = reader.result;
      setRoom_image(result);
    };
  };


  //Submit Handler
  const handleSubmit = (event) => {
    event.preventDefault();
    createrooms();
  };

  // Fetch Hostel
  useEffect(() => {
    async function hostels() {
      try {
        const response = await axios.get("http://localhost:8000/api/halls");
        setHalls(response.data);
      } catch (error) {
        toastr.error("Error retrieving Hostel");
      }
    }

    hostels();
  }, []);

  console.log(hall_id);

  return (
    <>
      {/* Navbar section  */}
      <Navbar />

      {/* Create Rooms Section  */}
      <section className="pt-[100px] mx-5 md:mx-10 lg:mx-[100px]">
        <h1 className="font-semibold text-[#2b2d3a] text-[20px] md:text-[30px] mb-10">
          Create Room
        </h1>

        {loading && (
          <div className=" z-50 absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <ReactLoading
              type={"bars"}
              color={"#ffffff"}
              height={100}
              width={100}
            />
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div>
            <p className="text-[14px] text-[#425466] mb-2">Hostel</p>
            <select
              id="dropdown"
              className="block w-full text-[#2b2d3a] p-3 border-none rounded-md shadow leading-tight focus:outline-none focus:shadow-outline my-5"
              value={hall_id}
              onChange={(event) => {
                const selectedHall = halls.find(
                  (hall) => hall.hall_id === event.target.value
                );
                if (selectedHall) {
                  setHall_id(selectedHall.hall_id);
                  setHall_name(selectedHall.name);
                }
              }}
            >
              <option value="">Select Hostel</option>
              {halls.map((hall, index) => (
                <option key={index} value={hall.hall_id}>
                  {hall.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[14px] text-[#425466] mb-2">Room Number</p>
            <input
              type="text"
              placeholder="45"
              className="w-full mb-7  px-4 py-2 placeholder-sm rounded-md shadow outline-none"
              value={room_number}
              onChange={(event) => setRoom_number(event.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-[14px] text-[#425466] mb-2">Number of Bunks</p>
            <input
              type="number"
              placeholder="4"
              className="w-full mb-7  px-4 py-2 placeholder-sm rounded-md shadow outline-none"
              value={bunk_capacity}
              onChange={(event) => setBunk_capacity(event.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-[14px] text-[#425466] mb-2">
              Number of Bed Space
            </p>
            <input
              type="number"
              placeholder="4"
              className="w-full mb-7  px-4 py-2 placeholder-sm rounded-md shadow outline-none"
              value={bed_space}
              onChange={(event) => setBed_space(event.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-[14px] text-[#425466] mb-2">Room Cost</p>
            <input
              type="text"
              placeholder="60,000.00"
              className="w-full mb-7 px-4 py-2 placeholder-sm rounded-md shadow outline-none"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
            />
          </div>

          {/* Upload pic section   */}

          <div className="mt-10 mb-10 md:flex justify-between items-center">
            <div className="mb-10">
              <input
                type="file"
                className="pl-4 h-[40px] w-full rounded-md outline-none mt-1"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
            {/* <div className="mb-10">
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileChange}
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-sm cursor-pointer bg-gray-50"
              />
              {selectedFiles.length > 0 && (
                <div className="top">
                  <h2 className="text-lg font-semibold">Selected Images</h2>
                  <ul className="list-disc list-inside">
                    {selectedFiles.map((file, index) => (
                      <li key={index}>{file.name}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div> */}
            {/* Create Room  */}
            <div className="bg-[#0BA75A] text-white px-2 py-2 rounded-md hover:bg-[#1d623f] inline-flex items-center gap-x-4">
              <button>Create Room</button>
              <IoIosAddCircle className="text-[20px]" />
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default CreateRoom;
