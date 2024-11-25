import React, { useState, useEffect } from "react";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { IoMdSave } from "react-icons/io";
import Navbar from "./Navbar";
import axios from "axios";
import ReactLoading from "react-loading";

const EditRoom = ({ roomId }) => {
  const [hall_id, setHall_id] = useState("");
  const [hall_name, setHall_name] = useState("");
  const [room_number, setRoom_number] = useState("");
  const [bunk_capacity, setBunk_capacity] = useState("");
  const [bed_space, setBed_space] = useState("");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(false);
  const [halls, setHalls] = useState([]);
  const [room_image, setRoom_image] = useState("");

  // Load room details
  useEffect(() => {
    const fetchRoomDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:8000/api/rooms/${roomId}`);
        const room = response.data;
        setHall_id(room.hall_id);
        setHall_name(room.hall_name);
        setRoom_number(room.room_number);
        setBunk_capacity(room.bunk_capacity);
        setBed_space(room.bed_space);
        setPrice(room.price);
        setRoom_image(room.room_image);
      } catch (error) {
        toastr.error("Failed to load room details.");
      } finally {
        setLoading(false);
      }
    };
    fetchRoomDetails();
  }, [roomId]);

  // Fetch hostels
  useEffect(() => {
    const fetchHostels = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/halls");
        setHalls(response.data);
      } catch (error) {
        toastr.error("Error retrieving hostel data.");
      }
    };
    fetchHostels();
  }, []);

  // Update room details
  const updateRoom = () => {
    if (hall_id) {
      setLoading(true);

      const updatedRoom = {
        hall_id,
        hall_name,
        room_number,
        bunk_capacity,
        bed_space,
        price,
        room_image,
      };

      axios
        .put(`http://localhost:8000/api/rooms/${roomId}`, updatedRoom)
        .then(() => {
          toastr.success("Room updated successfully!");
        })
        .catch((error) => {
          toastr.error("Failed to update room.");
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
      setRoom_image(reader.result);
    };
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateRoom();
  };

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Edit Room Section */}
      <section className="pt-[100px] mx-5 md:mx-10 lg:mx-[100px]">
        <h1 className="font-semibold text-[#2b2d3a] text-[20px] md:text-[30px] mb-10">
          Edit Room
        </h1>

        {loading && (
          <div className="z-50 absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <ReactLoading type={"bars"} color={"#ffffff"} height={100} width={100} />
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
              className="w-full mb-7 px-4 py-2 placeholder-sm rounded-md shadow outline-none"
              value={room_number}
              onChange={(event) => setRoom_number(event.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-[14px] text-[#425466] mb-2">Number of Bunks</p>
            <input
              type="number"
              placeholder="4"
              className="w-full mb-7 px-4 py-2 placeholder-sm rounded-md shadow outline-none"
              value={bunk_capacity}
              onChange={(event) => setBunk_capacity(event.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-[14px] text-[#425466] mb-2">Number of Bed Spaces</p>
            <input
              type="number"
              placeholder="4"
              className="w-full mb-7 px-4 py-2 placeholder-sm rounded-md shadow outline-none"
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

          <div className="mt-10 mb-10">
            <input
              type="file"
              className="pl-4 h-[40px] w-full rounded-md outline-none mt-1"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>

          <div className="bg-[#0BA75A] text-white px-2 py-2 rounded-md hover:bg-[#1d623f] inline-flex items-center gap-x-4">
            <button type="submit">Update Room</button>
            <IoMdSave className="text-[20px]" />
          </div>
        </form>
      </section>
    </>
  );
};

export default EditRoom;
