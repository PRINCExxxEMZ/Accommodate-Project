import React from "react";
import img from "../Assest/Hero-img.jpg";
import { Link } from "react-router-dom";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import AvailableHostel from "../Component/AvailableHostel";
import BookedHostel from "../Component/BookedHostel";

const Hero = () => {
  return (
    <>
      {/* Navbar Section  */}
      <Navbar />

      {/* hero section  */}
      <section
        className="relative h-screen bg-cover bg-center  md:bg-top lg:bg-top"
        style={{ backgroundImage: `url(${img})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-30"></div>

        {/* Content */}
        <div className="w-[316px] top-1/2 transform -translate-y-1/2 absolute z-20 md:w-[450px] mx-5 lg:mx-10 lg:w-[562px]">
          <h1 className="font-bold text-[25px] text-white lg:text-[35px]">
            Ease into University Life with Our Convenient Accommodation{" "}
          </h1>
          <p className="text-white text-[16px] lg:text-[20px]">
            Experience a vibrant community, cozy living spaces,and all the
            essentials for a great student life. Welcome to your home away from
            home.
          </p>
          <button className="bg-[#0BA75A] text-white px-5 py-3 rounded-md mt-7 hover:bg-[#1d623f] hover:translate-y-1 transition-transform">
            <Link to="/hostel">Book Hostel</Link>
          </button>
        </div>
      </section>

      {/* Available Hostel section  */}
      <AvailableHostel />

      {/* Booked section  */}
      <BookedHostel />

      {/* Footer Section  */}
      <Footer />
    </>
  );
};

export default Hero;
