import React from 'react'
import Navbar from '../Component/Navbar'
import AvailableHostel from '../Component/AvailableHostel'
import Footer from '../Component/Footer'
import BookedHostel from '../Component/BookedHostel'
import HostelHall from '../Component/HostelHall'


const Hostel = () => {
  return (

    <>
                                                              {/* Navbar section  */}
    <Navbar/>


                                                             {/* Hostel section  */}
     <HostelHall/>


                                                            {/* Avaliable section  */}
      <AvailableHostel/>


                                                             {/* Booked section   */}
      {/* <BookedHostel/> */}


                                                              {/* Footer section  */}
      <Footer/>



    </>
  )
}

export default Hostel
