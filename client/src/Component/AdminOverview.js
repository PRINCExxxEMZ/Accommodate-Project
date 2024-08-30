import { FaBuilding } from 'react-icons/fa'
import { MdBedroomChild } from 'react-icons/md'
import { MdOutlineBedroomChild } from 'react-icons/md'
import { IoIosBed } from 'react-icons/io'
import React, { useState, useEffect } from "react";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import axios from "axios";
import ReactLoading from "react-loading";

const AdminOverview = () => {

    const [halls, setHalls] = useState([]);
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState("");

      // Fetch Rooms
  useEffect(() => {
    async function hostels() {
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

    hostels();
  }, []);

      //Fetch Hostel
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
      <section className='mx-5 md:mx-10 lg:mx-10 pt-[100px] pb-10 lg:pt-[110px] '>
      <h1 className='font-semibold text-[#2b2d3a] '>Hostel Overview</h1>
      <div className='mt-5 bg-[#CFA146] h-[0.7px] mb-10'/>
      
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8 gap-x-8'>

                <div className=' gap-x-5 p-3 inline-flex items-center shadow focus:outline-none focus:shadow-outline hover:cursor-pointer cursor-default rounded-lg'>
                        <FaBuilding className='text-[35px] text-[#CFA146]'/>
                    <div>
                        <h1 className='text-[#2b2d3a] font-bold'>Number of Hostel</h1>
                        <h3 className='text-[#2b2d3a] text-[30px]'>{halls.length}</h3>
                    </div>
                </div>

                <div className=' gap-x-5 p-3 inline-flex items-center shadow focus:outline-none focus:shadow-outline  hover:cursor-pointer cursor-default rounded-lg'>
                        <IoIosBed className='text-[50px] p-3 text-[#2b2d3a] border-[#CFA146] border-4 rounded-full'/>
                    <div>
                        <h1 className='text-[#2b2d3a] font-bold'>Total Rooms Number</h1>
                        <h3 className='text-[#2b2d3a] text-[30px]'>{rooms.length}</h3>
                    </div>
                </div>

                <div className=' gap-x-5 p-3 inline-flex items-center shadow focus:outline-none focus:shadow-outline  hover:cursor-pointer cursor-default rounded-lg'>
                        <MdBedroomChild className='text-[50px] text-[#0BA75A]'/>
                    <div>
                        <h1 className='text-[#2b2d3a] font-bold'>Avaliable Rooms</h1>
                        <h3 className='text-[#2b2d3a] text-[30px]'>186</h3>
                    </div>
                </div>

                <div className=' gap-x-5 p-3 inline-flex items-center shadow focus:outline-none focus:shadow-outline  hover:cursor-pointer cursor-default rounded-lg'>
                        <MdOutlineBedroomChild className='text-[50px] text-[#d44540]'/>
                    <div>
                        <h1 className='text-[#2b2d3a] font-bold'>Booked Rooms</h1>
                        <h3 className='text-[#2b2d3a] text-[30px]'>264</h3>
                    </div>
                </div>

                </div>
        </section>
   
   </>
  )
}

export default AdminOverview
