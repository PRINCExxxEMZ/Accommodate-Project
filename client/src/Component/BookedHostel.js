import React from 'react'
import hall from '../Assest/01 (6).jpg'
import { Link } from 'react-router-dom'
import { GiBunkBeds } from "react-icons/gi";
import { FaBed } from "react-icons/fa6";

const BookedHostel = () => {
  return (
    <div>

                                                          {/* Booked section  */}

    <section className='mx-5 md:mx-10 lg:mx-10 lg:mt-10'>
      <h1 className='font-semibold text-[#2b2d3a]'>Booked Rooms</h1>
      <div className='mt-5 mb-10 lg:mb-20 bg-[#CFA146] h-[0.7px]'/>

                                                          {/* Booked Cards  */}
                                                          
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-8'> 

            <div className='bg-white shadow-md rounded-lg overflow-hidden lg:gap-x-5 p-5 hover:shadow-[#d44540]'>
              <img src={hall} className=' rounded-md'/>
              <div>
                  <h1 className='font-semibold text-[14px] text-[#CFA146] mt-4'>Hall A</h1>
                  <h2 className='text-[13px] font-semibold'>Room 26</h2>
                  <h2 className='text-[13px] font-medium text-[#0BA75A]'>Female Hostel</h2>
                  <div className='flex gap-x-5'>
                  <div className='flex gap-x-3 items-center'>
                    <GiBunkBeds  className='text-[#CFA146] text-[27px]'/>
                    <p className='text-[14px] font-light'>2 Bunk Capacity</p>
                  </div>
                  <div className='flex gap-x-3 items-center'>
                    <FaBed className='text-[#CFA146] text-[27px]'/>
                    <p className='text-[14px] font-light'>4 Bed Space</p>
                  </div>
                  </div>
                  <span className='text-[#0BA75A] text-[13px]'> Amount </span>
                  <h2>#50,000.00</h2>
                  <div className='bg-[#d44540] text-[14px] text-white px-3 py-1 rounded-md mt-4 text-center hover:cursor-pointer cursor-default'>Booked</div>
              </div>
            </div>    

            <div className='bg-white shadow-md rounded-lg overflow-hidden lg:gap-x-5 p-5 hover:shadow-[#d44540]'>
              <img src={hall} className=' rounded-md'/>
              <div>
                  <h1 className='font-semibold text-[14px] text-[#CFA146] mt-4'>Hall C</h1>
                  <h2 className='text-[13px] font-semibold'>Room 26</h2>
                  <h2 className='text-[13px] font-medium text-[#0BA75A]'>Male Hostel</h2>
                  <div className='flex gap-x-5'>
                  <div className='flex gap-x-3 items-center'>
                    <GiBunkBeds  className='text-[#CFA146] text-[27px]'/>
                    <p className='text-[14px] font-light'>2 Bunk Capacity</p>
                  </div>
                  <div className='flex gap-x-3 items-center'>
                    <FaBed className='text-[#CFA146] text-[27px]'/>
                    <p className='text-[14px] font-light'>4 Bed Space</p>
                  </div>
                  </div>
                  <span className='text-[#0BA75A] text-[13px]'> Amount </span>
                  <h2>#50,000.00</h2>
                  <div className='bg-[#d44540] text-[14px] text-white px-3 py-1 rounded-md mt-4 text-center  hover:cursor-pointer cursor-default'>Booked</div>
              </div>
              </div>

            <div className='bg-white shadow-md rounded-lg overflow-hidden lg:gap-x-5 p-5 hover:shadow-[#d44540]'>
              <img src={hall} className=' rounded-md'/>
              <div>
                  <h1 className='font-semibold text-[14px] text-[#CFA146] mt-4'>Hall B</h1>
                  <h2 className='text-[13px] font-semibold'>Room 26</h2>
                  <h2 className='text-[13px] font-medium text-[#0BA75A]'>Female Hostel</h2>
                  <div className='flex gap-x-5'>
                  <div className='flex gap-x-3 items-center'>
                    <GiBunkBeds  className='text-[#CFA146] text-[27px]'/>
                    <p className='text-[14px] font-light'>2 Bunk Capacity</p>
                  </div>
                  <div className='flex gap-x-3 items-center'>
                    <FaBed className='text-[#CFA146] text-[27px]'/>
                    <p className='text-[14px] font-light'>4 Bed Space</p>
                  </div>
                  </div>
                  <span className='text-[#0BA75A] text-[13px]'> Amount </span>
                  <h2>#50,000.00</h2>
                  <div className='bg-[#d44540] text-[14px] text-white px-3 py-1 rounded-md mt-4 text-center  hover:cursor-pointer cursor-default'>Booked</div>
              </div>
            </div>  

        </div>

                                          {/* see more link  */}
     <div className=' justify-center text-center mt-8 mb-10 lg:mt-20'>
      <button className='bg-[#E7F6EE] text-[14px] text-black px-3 py-1 rounded-md mt-4 hover:bg-black hover:text-[#E7F6EE]'><Link to ='/allbookedhostel'>See More</Link></button>
     </div>

    </section>
    </div>
  )
}

export default BookedHostel
