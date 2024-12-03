import img from "../Assest/01 (6).jpg";
import React, { useState, useEffect } from "react";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import axios from "axios";
import ReactLoading from "react-loading";
import { Link } from "react-router-dom";

const AdminHostelHall = () => {
    const [halls, setHalls] = useState([]);
    const [loading, setLoading] = useState(false);
  
    // Fetch Hostel
    useEffect(() => {
      async function hostels() {
        try {
          setLoading(true);
          const response = await axios.get("http://localhost:8000/api/halls");
          setHalls(response.data);
        } catch (error) {
          toastr.error("Error retrieving Hostel");
        } finally {
          setLoading(false);
        }
      }
      hostels();
    }, []);
  
    // Delete Function
    const handleDelete = async (hall_id) => {
      try {
        setLoading(true);
        await axios.delete(`http://localhost:8000/api/halls/${hall_id}`);
        setHalls((prevHalls) => prevHalls.filter((hall) => hall.hall_id !== hall_id));
        toastr.success("Hostel deleted successfully");
      } catch (error) {
        console.error("Error deleting hostel:", error.response?.data || error.message);
        toastr.error("Failed to delete hostel");
      } finally {
        setLoading(false);
      }
    };

  return (
    <>
    <section className="pt-[100px] mx-5 md:mx-10 lg:mx-10">
      <h2 className="text-[18px] font-semibold mb-5">Hostel Halls</h2>

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

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-8 gap-x-8">
        {halls.map((hall) => (
          <div
            key={hall.hall_id}
            className="bg-white shadow-md rounded-lg overflow-hidden lg:gap-x-5 p-5 hover:shadow-[#0BA75A]"
          >
            <img src={hall.hall_image || img} className="rounded-md" alt="Hostel" />
            <div>
              <h1 className="font-semibold text-[14px] text-[#CFA146] mt-4 uppercase">
                {hall.name}
              </h1>
              <div className="flex justify-between mt-2">
              <h2 className="text-[13px] font-medium text-[#0BA75A] uppercase">
                {hall.gender}
              </h2>
              <h2 className="text-[13px] font-medium text-[#0BA75A] uppercase">
                {hall.rooms} Rooms
              </h2>
              </div>
              <div className="flex gap-2">
                <button className="bg-[#0BA75A] text-[14px] text-white px-2 py-1 rounded-sm mt-4 hover:bg-[#1d623f]">
                  <Link to={`/rooms/${hall.hall_id}/${hall.name}`}>
                    Book Hostel
                  </Link>
                </button>
                <button className="bg-[#CFA146] text-[14px] text-white px-3 py-1 rounded-sm mt-4 hover:bg-[#1d623f]">
                  <Link to={`/EditHostel/${hall.hall_id}`}>Edit</Link>
                </button>
                <button
                  onClick={() => handleDelete(hall.hall_id)}
                  className="bg-[#863e21] text-[14px] text-white px-3 py-1 rounded-sm mt-4 hover:bg-[#1d623f]"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  </>
  )
}

export default AdminHostelHall
