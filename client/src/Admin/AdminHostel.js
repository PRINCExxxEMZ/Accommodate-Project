import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import AvailableHostel from '../Component/AvailableHostel'
import Footer from '../Component/Footer'
import BookedHostel from '../Component/BookedHostel'
import { IoIosAddCircle } from "react-icons/io";
import AdminOverview from '../Component/AdminOverview'
import HostelHall from '../Component/HostelHall'


const AdminHostel = () => {
  return (

    <>
                                                                 {/* Navbar Section  */}
    <Navbar/>



                                                                  {/* Hostel Overview  */}
    <AdminOverview/>


                                                                  {/* Hostel Section  */}

    <section>
    

                                                                  {/* Create CTA btn  */}
        <div className='flex gap-x-10 float-right mt-[95px] mx-5 lg:mx-10'>
            <div className='bg-[#0BA75A] text-white rounded-md hover:bg-[#1d623f]  inline-flex items-center gap-x-1 px-2 py-1'>
                <Link to='/createhostel'>Create Hostel</Link>
                <IoIosAddCircle className='text-[20px]' />
            </div>

            <div className='bg-[#CFA146] text-white rounded-md hover:bg-[#c39538] inline-flex items-center gap-x-1 px-2 py-1'>
                <Link to='/createroom'>Create Room</Link>
                <IoIosAddCircle className='text-[20px]' />
            </div>
        </div>

    
   
                                                                   {/* Hostel Cards  */}
     <HostelHall/>

    </section>

                                                                {/* Avaliable Component  */}
      
      <AvailableHostel/>

      
                                                                  {/* Booked Component   */}
      <BookedHostel/>

     
                                                                  {/* Footer Component   */}
      <Footer/>



    </>
  )
}

export default AdminHostel
