import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GiBunkBeds } from "react-icons/gi";
import { FaBed } from "react-icons/fa6";
import axios from "axios";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const BookedRooms = () => {
  const { hall_id: hallIdParam, hall_name: hallNameParam } = useParams();
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch rooms
  useEffect(() => {
    async function fetchRooms() {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:8000/api/rooms");
        setRooms(response.data);
        setLoading(false);
      } catch (error) {
        toastr.error("Error retrieving hostel data");
        setLoading(false);
      }
    }
    fetchRooms();
  }, []);

  // Filter booked rooms
  const bookedRooms = rooms.filter(
    (room) => room.hall_id.includes(hallIdParam) && !room.is_available
  );

  return (
    <>
      <Navbar />
      <section className="mx-5 md:mx-10 lg:mx-10 pt-20 lg:pt-40">
        <h1 className="font-semibold text-[#2b2d3a] pb-5">Booked Rooms</h1>
        <div className="mt-5 bg-[#CFA146] h-[0.7px]" />
      </section>

      <div className="mx-5 my-5 md:mx-10 lg:mx-10 overflow-hidden">
        <section className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {bookedRooms.map((room, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-5">
              <img src={room.room_image} className="rounded-md" alt="Room" />
              <h1 className="font-semibold text-[#CFA146] mt-4">
                {hallNameParam}
              </h1>
              <h2>{room.room_number}</h2>
              <div className="flex gap-5">
                <div className="flex items-center">
                  <GiBunkBeds className="text-[#CFA146] text-[27px]" />
                  <p>{room.bunk_capacity}</p>
                </div>
                <div className="flex items-center">
                  <FaBed className="text-[#CFA146] text-[27px]" />
                  <p>{room.bed_space}</p>
                </div>
              </div>
              <h2>Amount: {room.price}</h2>
              <button
                disabled
                className="bg-gray-400 text-white px-3 py-1 mt-4 rounded cursor-not-allowed"
              >
                Fully Booked
              </button>
            </div>
          ))}
        </section>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default BookedRooms;
