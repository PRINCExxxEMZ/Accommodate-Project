import React, { useState, useEffect } from "react";
import hall from "../Assest/01 (6).jpg";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { FaNairaSign } from "react-icons/fa6";
import { GiBunkBeds } from "react-icons/gi";
import { FaBed } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import axios from "axios";
import ReactLoading from "react-loading";

const AvailableHostel = () => {
  const { hall_name: hallNameParam } = useParams();

  const [rooms, setRooms] = useState([]);
  const [hall_id, setHall_id] = useState("");
  const [hall_name, setHall_name] = useState("");
  const [halls, setHalls] = useState([]);
  const [loading, setLoading] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch Rooms
  useEffect(() => {
    async function fetchRooms() {
      try {
        setLoading(true);

        const response = await axios.get("http://localhost:8000/api/rooms");
        setRooms(response.data);
        setLoading(false);
      } catch (error) {
        toastr.error("Error retrieving Hostel");
        setLoading(false);
      }
    }

    fetchRooms();
  }, []);


  // Filter rooms based on search query
  const filteredRooms = rooms.filter(
    (room) =>
      room.hall_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      room.room_number.toString().includes(searchQuery)
  );

  return (
    <>
      {/* Available Hostel/Rooms section  */}
      <section className="mx-5 md:mx-10 lg:mx-10 pt-20 lg:pt-30">
        <div className="lg:flex lg:items-center lg:justify-between">
          <h1 className="font-semibold text-[#2b2d3a] pb-5">All Rooms</h1>

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

          <div className="flex gap-4 items-center">
            {/* <select
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
            </select> */}

            <div className="flex gap-4 items-center">
            <input
              type="text"
              placeholder="Search by Hall or Room Num"
              className="text-[#2b2d3a] w-[250px] p-2 border-2 rounded-md"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {/* <FiSearch className="text-[#CFA146] text-[35px]" /> */}
          </div>
       
          </div>
        </div>
        <div className="mt-5 bg-[#CFA146] h-[0.7px]" />
      </section>

      {/* Rooms cards  */}
     {/* Rooms cards  */}
     <div className="mx-5 md:mx-10 lg:mx-10 overflow-hidden">
        <section className=" mt-10 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-8">
          {/* CARD Design */}
          {filteredRooms.length > 0 ? (
            filteredRooms.map((room, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden lg:gap-x-5 p-5 pb-5  hover:shadow-[#0BA75A]"
              >
                <img src={room.room_image || hall} className="rounded-md" />
                <div>
                  <h1 className="font-semibold text-[14px] text-[#CFA146] mt-4 uppercase">
                    {room.hall_name}
                  </h1>
                  <h2 className="text-[13px] font-semibold uppercase">
                    Room {room.room_number}
                  </h2>
                  <h2 className="text-[13px] font-medium text-[#0BA75A]">
                    {room.gender}
                  </h2>
                  <div className="flex gap-x-5">
                    <div className="flex gap-x-3 items-center">
                      <GiBunkBeds className="text-[#CFA146] text-[27px]" />
                      <p className="text-[14px] font-light">
                        {room.bunk_capacity} Bunk Capacity
                      </p>
                    </div>
                    <div className="flex gap-x-3 items-center">
                      <FaBed className="text-[#CFA146] text-[27px]" />
                      <p className="text-[14px] font-light">
                        {room.bed_space} Bed Space
                      </p>
                    </div>
                  </div>
                  <span className="text-[#0BA75A] text-[13px]"> Amount </span>
                  <div className="flex gap-x-1">
                    <FaNairaSign className="mt-[4px]" />
                    <h2>{room.price}</h2>
                  </div>
                  <button
                    className={`text-[14px] text-white px-3 py-1 rounded-sm mt-4 ${
                      room.is_available
                        ? "bg-[#0BA75A] hover:bg-[#1d623f]"
                        : "bg-gray-400 cursor-not-allowed"
                    }`}
                    disabled={!room.is_available}
                  >
                    {room.is_available ? (
                      <Link to={`/hosteldetails/${room.room_id}`}>
                        Book Hostel
                      </Link>
                    ) : (
                      "Fully Booked"
                    )}
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No rooms found</p>
          )}
        </section>
      </div>
    </>
  );
};

export default AvailableHostel;
