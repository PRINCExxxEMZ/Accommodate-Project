import React from 'react'
import hall from '../Assest/01 (6).jpg';
import { Link } from 'react-router-dom';
import { FiSearch } from "react-icons/fi";
import { GiBunkBeds } from "react-icons/gi";
import { FaBed } from "react-icons/fa6";

const AvailableHostel = () => {
  return (
   <>


                                                         {/* Available Hostel section  */}
      <section className='mx-5 md:mx-10 lg:mx-10 pt-20 lg:pt-40'>
        <div className='lg:flex lg:items-center lg:justify-between'>
          <h1 className='font-semibold text-[#2b2d3a] pb-5'>Avaliable Rooms</h1>
          <div className='flex gap-4 items-center'>
            <select
              id="dropdown"
              className="block bg-[#E7F6EE] text-[#2b2d3a] w-[90px]  py-2 px-3  border-none rounded-md shadow leading-tight focus:outline-none focus:shadow-outline"
            >
              <option>Hall A</option>
              <option>Hall B</option>
              <option>Hall C</option>
              <option>Hall D</option>
            </select>

            <input type='text' placeholder='Room Number' className='bg-[#E7F6EE]  text-[#2b2d3a]  w-[150px] p-2 border-none rounded-md' />

            <FiSearch className='text-[#CFA146] text-[25px]'/>
          </div>
        </div>
        <div className='mt-5 bg-[#CFA146] h-[0.7px]'/>
      </section>


      
                                                           {/* hostel cards  */}
    <div className='mx-5 md:mx-10 lg:mx-10 overflow-hidden'>

<section className=' mt-10 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-8'>

                                                            {/* CARD Design  */}
     <div className='bg-white shadow-md rounded-lg overflow-hidden lg:gap-x-5 p-5  hover:shadow-[#0BA75A]'>
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
             <button className='bg-[#0BA75A] text-[14px] text-white px-3 py-1 rounded-md mt-4 hover:bg-[#1d623f]  hover:cursor-pointer cursor-default'><Link to='/hosteldetails'>Book Hostel</Link></button>
         </div>
       </div>

     <div className='bg-white shadow-md rounded-lg overflow-hidden lg:gap-x-5 p-5  hover:shadow-[#0BA75A]'>
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
             <button className='bg-[#0BA75A] text-[14px] text-white px-3 py-1 rounded-md mt-4 hover:bg-[#1d623f]'><Link>Book Hostel</Link></button>
         </div>
       </div>

     <div className='bg-white shadow-md rounded-lg overflow-hidden lg:gap-x-5 p-5  hover:shadow-[#0BA75A]'>
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
             <button className='bg-[#0BA75A] text-[14px] text-white px-3 py-1 rounded-md mt-4 hover:bg-[#1d623f]'><Link>Book Hostel</Link></button>
         </div>
       </div>

     <div className='bg-white shadow-md rounded-lg overflow-hidden lg:gap-x-5 p-5  hover:shadow-[#0BA75A]'>
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
             <button className='bg-[#0BA75A] text-[14px] text-white px-3 py-1 rounded-md mt-4 hover:bg-[#1d623f]'><Link>Book Hostel</Link></button>
         </div>
       </div>

     <div className='bg-white shadow-md rounded-lg overflow-hidden lg:gap-x-5 p-5  hover:shadow-[#0BA75A]'>
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
             <button className='bg-[#0BA75A] text-[14px] text-white px-3 py-1 rounded-md mt-4 hover:bg-[#1d623f]'><Link>Book Hostel</Link></button>
         </div>
       </div>

     <div className='bg-white shadow-md rounded-lg overflow-hidden lg:gap-x-5 p-5  hover:shadow-[#0BA75A]'>
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
             <button className='bg-[#0BA75A] text-[14px] text-white px-3 py-1 rounded-md mt-4 hover:bg-[#1d623f]'><Link>Book Hostel</Link></button>
         </div>
       </div>    
</section>
                                                                    {/* see more link  */}
     <div className=' justify-center text-center mt-8 mb-10 lg:mt-20'>
      <button className='bg-[#E7F6EE] text-[14px] text-black px-3 py-1 rounded-md mt-4 hover:bg-black hover:text-[#E7F6EE]'><Link to ='/allavaliablehostel'>See More</Link></button>
     </div>
</div>



   </>
  )
}

export default AvailableHostel
