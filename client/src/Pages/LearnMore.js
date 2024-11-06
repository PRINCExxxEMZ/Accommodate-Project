import React from "react";
import { FaBuilding } from "react-icons/fa";
import { MdBedroomChild } from "react-icons/md";
import { MdOutlineBedroomChild } from "react-icons/md";
import { IoIosBed } from "react-icons/io";
import { Link } from "react-router-dom";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from "../Component/Navbar";
import img from "../Assest/Tour_Hero.jpg";
import user from "../Assest/User.png";
import hall from "../Assest/01 (6).jpg";
import Footer from "../Component/Footer";
import HostelHalls from "../Component/HostelHalls";

const LearnMore = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <Navbar />

      {/* hero section  */}
      <section
        className="relative h-screen bg-cover bg-center  md:bg-top lg:bg-top"
        style={{ backgroundImage: `url(${img})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

      
        {/* Content */}
        <div className="p-10 text-center top-1/2 transform -translate-y-1/2 absolute z-20 lg:p-[150px]">
          <h1 className="font-bold text-[25px] text-white lg:text-[35px]">
            Welcome to Bouesti Accommodation{" "}
          </h1>
          <p className="text-white text-[16px] lg:text-[20px]">
            Experience a vibrant community, cozy living spaces,and all the
            essentials for a great student life. Welcome to your home away from
            home.
          </p>
        </div>
      </section>

      {/* Points */}
      <section className=" items-center text-center">
        <h1 className="  lg:font-semibold text-[25px] mt-[70px]"> We offer </h1>
        <h2 className="px-5 mb-[20px]">
          At the institue of Bamila Univresity we prid ourself in
        </h2>
        <div className="text-white px-4 py-4 justify-center items-center lg:flex gap-x-3 lg:gap-x-[20px]">
          <div className="bg-white text-[#1d623f] rounded-[5px] justify-center items-center flex my-2 p-5 px-12 shadow-sm shadow-black">
            <div className="flex flex-col items-center">
              <FaBuilding className="text-[30px] mb-2" />
              <h2 className="text-[22px]">5</h2>
              <h2 className="text-[15px] font-bold">Hostel</h2>
            </div>
          </div>

          <div className="bg-white text-[#1d623f] rounded-[5px] justify-center items-center flex my-2 p-5 px-12 shadow-sm shadow-black">
            <div className="flex flex-col items-center">
              <FaBuilding className="text-[30px] mb-2" />
              <h2 className="text-[22px]">700+</h2>
              <h2 className="text-[15px] font-bold">Rooms</h2>
            </div>
          </div>

          <div className="bg-white text-[#1d623f] rounded-[5px] justify-center items-center flex my-2 p-5 px-12 shadow-sm shadow-black">
            <div className="flex flex-col items-center">
              <FaBuilding className="text-[30px] mb-2" />
              <h2 className="text-[22px]">2k</h2>
              <h2 className="text-[15px] font-bold">Capacity</h2>
            </div>
          </div>
        </div>
      </section>



      {/* hosel overview details */}

      {/* <section className=" mt-[100px] mx-6  items-center ">
        <div>
          <h2 className=" text-center lg:font-semibold text-[25px]">
            Hostels Halls
          </h2>
          <div className="lg:flex gap-x-2 mx-auto justify-center items-center grid grid-cols-3 ">
            <button className="text-white px-5 py-2 rounded-sm mt-7 bg-[#1d623f]">
              Hall A
            </button>
            <button className="text-[#1d623f] px-5 py-2 rounded-sm mt-7 border border-[#1d623f]">
              Hall B
            </button>
            <button className="text-[#1d623f] px-5 py-2 rounded-sm mt-7 border border-[#1d623f]">
              Hall C
            </button>
            <button className="text-[#1d623f] px-5 py-2 rounded-sm mt-7 border border-[#1d623f]">
              Hall D
            </button>
            <button className="text-[#1d623f] px-5 py-2 rounded-sm mt-7 border border-[#1d623f]">
              Hall E
            </button>
          </div>
          <div className="mt-[100px] items-center md:flex lg:flex lg:px-[130px] justify-between">
            <div className="">
              <h3 className="lg:font-bold text-[28px]">Hall A</h3>
              <p className="lg:w-[400px]">
                Experience a vibrant community, cozy living spaces,and all the
                essentials for a great student life. Welcome to your home away
                from home.
              </p>
              <div>
                <li>Easy access to Water Soucre</li>
                <li>Includes a Cooking Area</li>
                <li>4 bedspace per room</li>
                <li>Includes a Convinent Store</li>
              </div>

              <button className="border border-5 text-white px-5 py-2 my-5 rounded-sm mt-7 bg-[#1d623f] hover:translate-y-1 transition-transform">
                <Link to="/">Book Now</Link>
              </button>
            </div>
            <div>
              <img src={hall} className=" rounded-md" />
            </div>
          </div>
        </div>
      </section> */}

      <HostelHalls/>




      {/* Gallery */}

      <secton className="">
        <div className="mt-[100px]">
          <h2 className="text-center lg:font-semibold text-[25px]">
            {" "}
            Gallery{" "}
          </h2>
          <div className="max-w-[1240px] mx-auto px-4 py-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
            <img src={hall} className=" rounded-md" />
            <img src={hall} className=" rounded-md" />
            <img src={hall} className=" rounded-md" />
            <img src={hall} className=" rounded-md" />
            <img src={hall} className=" rounded-md" />
            <img src={hall} className=" rounded-md" />
          </div>
        </div>
      </secton>

      <h2 className=""></h2>
      <div className="my-40 mx-10 md:mx-[200px] shadow-black shadow-sm rounded-md">
      <Slider {...settings}>
                 <div className="p-10 md:p-14 text-center md:w-[200px]">

                      <div className='lg:justify-center'>
                          <img src={user} alt="user" className='mx-auto' />
                          <h1 className='text-[#CFA146] mt-3'>Blue Snow</h1>
                          <p className="font-semibold">Computer Science Department</p>
                      </div>

                      <div className='lg:text-center items-center'>
                          <p className='mt-5'>
                              Enrolling in Product Design was a game-changer for my expertise in Product Management. The course's comprehensive structure smoothly transitioned me from basics to advanced concepts. The instructor's clarity and practical approach made complex topics digestible. The up-to-date content and engaging projects ensured relevance and applicability. The supportive community and prompt assistance added immense value.
                          </p>
                      </div>
                 </div>
                 <div className="p-10 md:p-14 text-center md:w-[200px]">

                      <div className='lg:justify-center'>
                          <img src={user} alt="user" className='mx-auto' />
                          <h1 className='text-[#CFA146] mt-3'>Blue Snow</h1>
                          <p className="font-semibold">Computer Science Department</p>
                      </div>

                      <div className='lg:text-center items-center'>
                          <p className='mt-5'>
                              Enrolling in Product Design was a game-changer for my expertise in Product Management. The course's comprehensive structure smoothly transitioned me from basics to advanced concepts. The instructor's clarity and practical approach made complex topics digestible. The up-to-date content and engaging projects ensured relevance and applicability. The supportive community and prompt assistance added immense value.
                          </p>
                      </div>
                 </div>

                 <div className="p-10 md:p-14 text-center md:w-[200px]">

                      <div className='lg:justify-center'>
                          <img src={user} alt="user" className='mx-auto' />
                          <h1 className='text-[#CFA146] mt-3'>Blue Snow</h1>
                          <p className="font-semibold">Computer Science Department</p>
                      </div>

                      <div className='lg:text-center items-center'>
                          <p className='mt-5'>
                              Enrolling in Product Design was a game-changer for my expertise in Product Management. The course's comprehensive structure smoothly transitioned me from basics to advanced concepts. The instructor's clarity and practical approach made complex topics digestible. The up-to-date content and engaging projects ensured relevance and applicability. The supportive community and prompt assistance added immense value.
                          </p>
                      </div>
                 </div>

                 <div className="p-10 text-center md:w-[200px]">

                      <div className='lg:justify-center'>
                          <img src={user} alt="user" className='mx-auto' />
                          <h1 className='text-[#CFA146] mt-3'>Blue Snow</h1>
                          <p>Program Manager</p>
                      </div>

                      <div className='lg:text-center items-center'>
                          <p className='mt-5'>
                              Enrolling in Product Design was a game-changer for my expertise in Product Management. The course's comprehensive structure smoothly transitioned me from basics to advanced concepts. The instructor's clarity and practical approach made complex topics digestible. The up-to-date content and engaging projects ensured relevance and applicability. The supportive community and prompt assistance added immense value.
                          </p>
                      </div>
                 </div>
                 <div className="p-10 text-center md:w-[200px]">

                      <div className='lg:justify-center'>
                          <img src={user} alt="user" className='mx-auto' />
                          <h1 className='text-[#CFA146] mt-3'>Blue Snow</h1>
                          <p>Program Manager</p>
                      </div>

                      <div className='lg:text-center items-center'>
                          <p className='mt-5'>
                              Enrolling in Product Design was a game-changer for my expertise in Product Management. The course's comprehensive structure smoothly transitioned me from basics to advanced concepts. The instructor's clarity and practical approach made complex topics digestible. The up-to-date content and engaging projects ensured relevance and applicability. The supportive community and prompt assistance added immense value.
                          </p>
                      </div>
                 </div>

                 <div className="p-10 text-center md:w-[200px]">

                      <div className='lg:justify-center'>
                          <img src={user} alt="user" className='mx-auto' />
                          <h1 className='text-[#CFA146] mt-3'>Blue Snow</h1>
                          <p>Program Manager</p>
                      </div>

                      <div className='lg:text-center items-center'>
                          <p className='mt-5'>
                              Enrolling in Product Design was a game-changer for my expertise in Product Management. The course's comprehensive structure smoothly transitioned me from basics to advanced concepts. The instructor's clarity and practical approach made complex topics digestible. The up-to-date content and engaging projects ensured relevance and applicability. The supportive community and prompt assistance added immense value.
                          </p>
                      </div>
                 </div>

            </Slider>
    </div>

      <Footer />
    </>
  );
};

export default LearnMore;
