import React from 'react'
import img from '../Assest/Admin.jpg'
import { Link } from 'react-router-dom'
import Navbar from './Navbar';
import Footer from '../Component/Footer';
import AvailableHostel from '../Component/AvailableHostel';
import BookedHostel from '../Component/BookedHostel';
import AdminOverview from '../Component/AdminOverview';


const AdminHero = () => {
  return (
    <>
                                                         {/* Navbar Section  */}
    <Navbar/>
    


                                                           {/* hero section  */}
                 <section
                      className="relative h-screen bg-cover bg-center  md:bg-top lg:bg-top"
                      style={{ backgroundImage: `url(${img})` }}>

                                                          {/* Dark overlay */}
                      <div className="absolute inset-0 bg-black opacity-30"></div>

                                                              {/* Content */}
                      <div className="w-[316px] top-1/2 transform -translate-y-1/2 absolute z-20 md:w-[450px] mx-5 lg:mx-10 lg:w-[562px]">
                      <h1 className='font-bold text-[25px] text-white lg:text-[35px]'>Accommodation <br/> Seamless Management</h1>
                      <p className='text-white text-[16px] lg:text-[20px]'>Simplify your accomodation management with our innovative solution. With easy room creation and automated fees management </p>
                      <button className='bg-[#0BA75A] text-white px-5 py-3 rounded-md mt-7 hover:bg-[#1d623f]'><Link to='/createhostel'>Create Hostel</Link></button>
                      <button className='bg-[#CFA146] text-white px-5 ml-5 py-3 rounded-md mt-7 hover:bg-[#8e6d2c]'><Link to='/createroom'>Create Room</Link></button>
                      </div>
                </section>
                
                                                       {/* Overview section  */}
    <AdminOverview/>

                                                    {/* Available Hostel section  */}
    <AvailableHostel/>

                                                          {/* Booked section  */}
    <BookedHostel/>

                                                           {/* Footer Section  */}
    <Footer/>
    
    
    </>
  )
}

export default AdminHero
