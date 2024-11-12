import img from "../Assest/01 (6).jpg";
import React, { useState, useEffect } from "react";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import axios from "axios";
import ReactLoading from "react-loading";
import { Link } from "react-router-dom";

const HostelHall = () => {
  const [halls, setHalls] = useState([]);
  const [loading, setLoading] = useState("");

  // Fetch Hostel
  useEffect(() => {
    async function hostels() {
      try {
        setLoading(true);

        const response = await axios.get("http://localhost:8000/api/halls");
        setHalls(response.data);
        setLoading(false);
      } catch (error) {
        toastr.error("Error retrieving Hostel");
        setLoading(false);
      }
    }

    hostels();
  }, []);
  return (
    <>
      <section className="pt-[100px] mx-5 md:mx-10 lg:mx-10">
        <h2 className="text-[18px] font-semibold mb-5">Hostel Halls</h2>

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

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-8 gap-x-8">
          {/* Hall cards  */}
          {halls.map((hall, index) => (
            <div className="bg-white shadow-md rounded-lg overflow-hidden lg:gap-x-5 p-5 hover:shadow-[#0BA75A]">
              <img src={hall.hall_image || img} className=" rounded-md" />
              <div>
                <h1 className="font-semibold text-[14px] text-[#CFA146] mt-4 uppercase">
                  {hall.name}
                </h1>
                <h2 className="text-[13px] font-medium text-[#0BA75A] uppercase">
                  {hall.gender}
                </h2>
                <button className="bg-[#0BA75A] text-[14px] text-white px-3 py-1 rounded-sm mt-4 hover:bg-[#1d623f]  hover:cursor-pointer cursor-default">
                  <Link to={`/rooms/${hall.hall_id}/${hall.name}`}>
                    Book Hostel
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HostelHall;
