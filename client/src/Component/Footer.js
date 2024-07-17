import React from 'react'
import { Link } from 'react-router-dom'
import img from '../Assest/School-Logo.png'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GiWorld } from "react-icons/gi";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaGooglePlusG } from "react-icons/fa6";
import { TiSocialLinkedin } from "react-icons/ti";

const Footer = () => {
  return (
      <>
                                                                {/*  Footer section  */}

        <section className='mt-20 bg-[#162029] text-gray-400 p-5 lg:p-10 '>
            <div className='grid lg:grid-cols-3 lg:gap-x-20'>
            
            <div className=''>
                    <div>
                        <img src={img} className='mt-20'/>
                    </div>

                <div  className='mt-10 flex space-x-3 items-center mb-3'>
                    <FaLocationDot className='text-[#0BA75A]'/>
                     <h2>Igbara Odo Road, P.M.B 250 Iker Ekiti.</h2>
                </div>
                <div  className='flex space-x-3 items-center mb-3'>
                    <FaPhoneAlt  className='text-[#0BA75A]'/>
                    <h2>+234 806 6341 739</h2>
                </div>

                <div  className='flex space-x-3 items-center mb-3'>
                    <MdEmail className='text-[#0BA75A]' />
                    <h2>info@bouesti.edu.ng</h2>
                </div>

                <div className='flex space-x-3 items-center mb-3'>
                    <GiWorld className='text-[#0BA75A]'/>
                    <h2>portal.bouesti.edu.ng</h2>
                </div>

                <div className='flex space-x-5 mt-8'>
                     <FaFacebookF className='text-[35px] p-2 border-2 rounded-full hover:bg-white hover:text-[#0BA75A]'/>
                     <FaXTwitter className='text-[35px] p-2 border-2 rounded-full hover:bg-white hover:text-[#0BA75A]'/>
                     <TiSocialLinkedin className='text-[35px] p-2 border-2 rounded-full hover:bg-white hover:text-[#0BA75A]'/>
                     <RiInstagramFill className='text-[35px] p-2 border-2 rounded-full hover:bg-white hover:text-[#0BA75A]'/>
                     <FaGooglePlusG className='text-[35px] p-2 border-2 rounded-full hover:bg-white hover:text-[#0BA75A]'/>
                </div>


            </div>

            <div className='mt-20'>
                    <h2 className='text-[22px] text-white mb-5'>Useful Links</h2>
                    <div>
                        <div className='mb-3'>
                            <Link>Home Page</Link>
                            <hr  className='mt-2'/>
                        </div>

                        <div className='mb-3'>
                            <Link>Student Login</Link>
                            <hr  className='mt-2'/>
                        </div>

                        <div className='mb-3'>
                            <Link>Staff Login</Link>
                            <hr className='mt-2'/>
                        </div>
                        <div className='mb-3'>
                            <Link>Admission</Link>
                            <hr  className='mt-2'/>
                        </div>
                        <div className='mb-3'>
                            <Link>FAQ</Link>
                            <hr  className='mt-2'/>
                        </div>
                    </div>
            </div>
            
            <div className='mt-20 mb-20'>
                <h2 className='text-white text-[22px] mb-5'> Opening Hours</h2>
                <div className='flex justify-between'>
                    <h2>Mon - Sun</h2>
                    <h2>12:00am - 11:59pm</h2>
                </div>
                <hr className='mt-3'/>
            </div>

            </div>                                            
        </section>

                                                                  {/* Footer Bottom  */}
                                                                  
            <section className='bg-[#2b2d3a] text-gray-400 p-5 lg:p-10'>

                <div className='text-center mb-2'>
                    <h2 className=''>Power by University ICT</h2>
                </div>

                <div className='flex space-x-5 justify-center'>
                    <Link>FAQ</Link>
                    <Link>Help Desk</Link>
                    <Link>Support</Link>
                </div>

            </section>
    </>                                           
  )
}

export default Footer
