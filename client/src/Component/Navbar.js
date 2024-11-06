import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import axios from "axios";
import ReactLoading from "react-loading";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userId, setUserId] = useState("");
  const [profile, setProfile] = useState("");
  let user = JSON.parse(localStorage.getItem("User"));

  const [isOOpen, setIsOOpen] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsOOpen(!isOOpen);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (user) {
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setUserId(user.user_id);
    }
    console.log(user);
  }, []);

  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get(
        `http://localhost:8000/api/profile/${userId}`
      );
      console.log(response.data);
      setProfile(response.data);
    };
    if (userId) getUser();
  }, [userId]);

  // // Fetch Hostel
  // useEffect(() => {
  //   async function loginDetails() {
  //     try {
  //       setLoading(true);

  //       const response = await axios.get("http://localhost:8000/api/halls");
  //       setFirstN(response.data);
  //       setLastN(response.data);
  //       setLoading(false);

  //     } catch (error) {
  //       toastr.error("Error retrieving Hostel");
  //       setLoading(false);

  //     }

  //   }

  //   loginDetails();
  // }, []);

  // const history = useHistory();
  // history.push('/login');

  //   const handleLogout = () => {
  //     // Send logout request to the backend
  //     axios
  //       .post('http://localhost:8000/api/logout') // Adjust the URL to your actual backend route
  //       .then((response) => {
  //         console.log(response.data.message); // Optional: Handle any message from the backend

  //         // Remove JWT token from localStorage or wherever it's stored
  //         localStorage.removeItem('token');

  //         // Redirect the user to the login page or another page
  //         history.push('/login'); // Redirect after successful logout
  //       })
  //       .catch((error) => {
  //         console.error('Error logging out:', error);
  //       });
  //   };

  const handleLogout = () => {
    // Clear localStorage, tokens, etc.
    localStorage.removeItem("token");

    // Redirect to login page
    navigate("/login");
  };

  return (
    <nav className="bg-[#162029] p-5 fixed z-50 w-full">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0 text-white w-auto lg:w-[350px]">
          <span className="font-semibold text-xl tracking-tight">
            <Link to="/">Accommodate</Link>
          </span>
        </div>

        {/* Menu Button */}
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="flex items-center px-3 py-2 border rounded text-gray-400 border-gray-400 hover:text-white hover:border-white"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}

        <div
          className={`w-full flex-grow lg:flex items-center text-center lg:items-center lg:w-auto ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="text-sm lg:flex-grow text-center lg:text-left">
            <Link
              to="/"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-[#0BA75A] mx-4 active:text-[#0BA75A]"
            >
              Home{" "}
            </Link>
            <Link
              to="/hostel"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-[#0BA75A] mx-4 active:text-[#0BA75A]"
            >
              Hostel{" "}
            </Link>
            <Link
              to="/payment"
              className="block mt-4 pb-2 lg:inline-block lg:mt-0 text-white hover:text-[#0BA75A] mx-4 active:text-[#0BA75A]"
            >
              Payment{" "}
            </Link>
          </div>
          {/* User Account and Sign up/In section */}

          {user ? (
            <h2 className=" text-white pr-4 hover:cursor-pointer">
              Welcome
              <div className="relative inline-block">
                <button
                  className="flex items-center text-white hover:text-[#1d623f] pl-1"
                  onClick={handleToggle}
                >
                  {profile.first_name} {profile.last_name} <IoIosArrowDown />
                </button>
                <div
                  className={`absolute right-0 top-full ${
                    isOOpen ? "block" : "hidden"
                  } w-48 bg-white rounded-lg shadow-md py-2`}
                >
                  <h2 className=" text-gray-800 py-3 px-5 font-light flex items-center pl-5 hover:bg-gray-800 hover:text-white">
                    {" "}
                    <CgProfile className="mr-2 text-[20px]" />{" "}
                    <Link to={`/profilepage/${userId}`}>Profile</Link>{" "}
                  </h2>
                  <h2
                    onClick={handleLogout}
                    className=" text-gray-800 py-3 px-5 font-light flex items-center pl-5  hover:bg-gray-800 hover:text-white"
                  >
                    {" "}
                    <RiLogoutCircleRLine className="mr-2 text-[20px]" /> Logout
                  </h2>
                </div>
              </div>
            </h2>
          ) : (
            <div className="text-center space-x-5 lg:text-right mt-4 lg:mt-0">
              <Link
                to="/register"
                className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-white hover:bg-[#1d623f]"
              >
                Sign up{" "}
              </Link>
              <Link
                to="/login"
                className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-white hover:bg-[#1d623f]"
              >
                Login{" "}
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
