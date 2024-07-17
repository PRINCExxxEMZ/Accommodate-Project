import React from 'react'
import hall from '../Assest/01 (6).jpg';
import { Link } from 'react-router-dom';
import { GiBunkBeds } from "react-icons/gi";
import { FaBed } from "react-icons/fa6";
import Navbar from '../Component/Navbar';
import AvailableHostel from '../Component/AvailableHostel';
import BookedHostel from '../Component/BookedHostel';
import Footer from '../Component/Footer';

const HostelDetails = () => {
  return (
        <>
                                                              {/* Navbar  */}

          <Navbar/>

                                                           {/* Hostel Details  */}
          <section className='mx-5 md:mx-10 lg:mx-20 pt-[100px] grid md:grid-cols-2 md:gap-x-10 md:items-center lg:items-center'>

              <div>
                  <img src={hall} className=' rounded-md' />
                  <div className='flex w-10 space-x-5 mt-5'>
                      <img src={hall} className=' rounded-md' />
                      <img src={hall} className=' rounded-md' />
                      <img src={hall} className=' rounded-md' />
                  </div>
              </div>

              <div className='mt-10 p-2'>
                    <h1 className=' text-[#CFA146] font-bold text-[20px] mb-2'> Hall A</h1>
                    <hr/>
                    <h2 className='bg-[#E7F6EE] p-3 rounded-md'>Room Details</h2>
                    <h2 className='font-semibold text-[15px] my-2'>Room 23</h2>
                  <div className='flex gap-x-5'>
                      <div className='flex gap-x-3 items-center'>
                          <GiBunkBeds className='text-[#CFA146] text-[27px]' />
                          <p className='text-[14px] font-light'>2 Bunk Capacity</p>
                      </div>
                      <div className='flex gap-x-3 items-center'>
                          <FaBed className='text-[#CFA146] text-[27px]' />
                          <p className='text-[14px] font-light'>4 Bed Space</p>
                      </div>
                  </div>

                                                                  {/* Bedspace Dropdown  */}

                  <select
                      id="dropdown"
                      className="block bg-[#E7F6EE] w-full text-[#2b2d3a]  p-3 border-none rounded-md shadow leading-tight focus:outline-none focus:shadow-outline my-5">
                      <option value="" disabled selected hidden>Bed Space Position</option>
                      <option>Top-Bunk1</option>
                      <option>Top-Bunk2</option>
                      <option>Low-Bunk1</option>
                      <option>Low-Bunk2</option> 
                  </select>

                  <span className='text-[#0BA75A] text-[13px]'> Amount </span>
                  <h2 className='text-[30px] font-semibold mb-10'>#50,000.00</h2>
                  <Link to='./payment' className='bg-[#0BA75A] text-[14px] text-white px-5 py-3 rounded-md text-center text-bold hover:bg-[#1d623f] hover:translate-y-1 transition-transform'>Book Now</Link>

              </div>

          </section>
                                                                        {/* Avaliable Hostel  */}
          <AvailableHostel/>

                                                                        {/* Booked Hostel  */}
          <BookedHostel/>


                                                                        {/* Footer section  */}
          <Footer/>
        
        </>
  )
}

export default HostelDetails
