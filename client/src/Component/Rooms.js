import React, { useState, useEffect } from "react";
import hall from "../Assest/01 (6).jpg";
import { Link } from "react-router-dom";
import { GiBunkBeds } from "react-icons/gi";
import { FaBed } from "react-icons/fa6";
import { useParams } from "react-router-dom"
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import axios from "axios";
import ReactLoading from "react-loading";
import Navbar from "./Navbar";
import Footer from "./Footer";


const Rooms = () => {
  const {hall_id: hallIdParam} = useParams();
  const {hall_name: hallNameParam} = useParams();
  const [rooms, setRooms] = useState([]);
  const [hall_id, setHall_id] = useState("");
  const [halls, setHalls] = useState([]);
  const [loading, setLoading] = useState("");

  // console.log(hallIdParam)


  // Fetch Rooms
    useEffect(() => {
     async function fetchRooms() {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:8000/api/rooms");
        setRooms(response.data);
        console.log(response.data)
        setLoading(false);
      } catch (error) {
        toastr.error("Error retrieving Hostel");
        setLoading(false);
      }
    }

    fetchRooms();

    }, []);



  // Filter rooms based on roomParams
  const filteredRooms = rooms.filter(room => room.hall_id.includes(hallIdParam));


  return (
    <>

    <Navbar/>
      {/* Available Room section  */}
      <section className="mx-5 md:mx-10 lg:mx-10 pt-20 lg:pt-40">
        <div className="lg:flex lg:items-center lg:justify-between">
          <h1 className="font-semibold text-[#2b2d3a] pb-5">Hostel Avaliable Rooms</h1>

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
                    <h1 className="text-[#CFA146] font-bold text-[30px] uppercase">{hallNameParam}</h1>
          </div>
        </div>
        <div className="mt-5 bg-[#CFA146] h-[0.7px]"/>
      </section>

      {/* Room cards  */}
      <div className="mx-5 my-5 md:mx-10 md:my-10 lg:mx-10 lg:my-10 overflow-hidden">
        <section className=" mt-10 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-8">
          {/* CARD Design  */}
          {filteredRooms && filteredRooms.map((room, index) => (
          <div className="bg-white shadow-md rounded-lg overflow-hidden lg:gap-x-5 p-5  hover:shadow-[#0BA75A]">
            <img src={room.room_image} className=" rounded-md" />
            <div>
              <h1 className="font-semibold text-[14px] text-[#CFA146] mt-4">
              {hallNameParam}
              </h1>
              <h2 className="text-[13px] font-semibold">{room.room_number}</h2>
              <h2 className="text-[13px] font-medium text-[#0BA75A]">
               {hall.gender}
              </h2>
              <div className="flex gap-x-5">
                <div className="flex gap-x-3 items-center">
                  <GiBunkBeds className="text-[#CFA146] text-[27px]" />
                  <p className="text-[14px] font-light">{room.bunk_capacity}</p>
                </div>
                <div className="flex gap-x-3 items-center">
                  <FaBed className="text-[#CFA146] text-[27px]" />
                  <p className="text-[14px] font-light">{room.bed_space}</p>
                </div>
              </div>
              <p className="text-[14px] font-light pt-2">
                      Available Beds: {room.bed_space - room.booked_space}
              </p>
              <span className="text-[#0BA75A] text-[13px]"> Amount </span>
              <h2>{room.price}</h2>

              <button
                  className={`text-[14px] text-white px-3 py-1 rounded-sm mt-4 ${
                    room.is_available
                      ? "bg-[#0BA75A] hover:bg-[#1d623f]"
                      : "bg-gray-400 cursor-not-allowed"
                  }`}
                  disabled={!room.is_available}
                >
                  {room.is_available ? (
                    <Link to={`/hosteldetails/${room.room_id}`}>Book Hostel</Link>
                  ) : (
                    "Fully Booked"
                  )}
                </button>
              {/* <button className="bg-[#0BA75A] text-[14px] text-white px-3 py-1 rounded-sm mt-4 hover:bg-[#1d623f]  hover:cursor-pointer cursor-default">
                <Link to={`/hosteldetails/${room.room_id}`}>Book Hostel</Link>
              </button> */}

            </div>
          </div>
       ))}
        </section>
      </div>

      <Footer/>
    </>
  );
};

export default Rooms;
