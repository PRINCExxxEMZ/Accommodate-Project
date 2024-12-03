// import React from 'react'

// const Demo = () => {
//   return (
//    <>
//     <section>

//         <div className='bg-black text-white w-1/12 mt-10'>
//             Grid 1
//         </div>
//         <div className='bg-black text-white w-2/12 mt-10'>
//             Grid 2
//         </div>
//         <div className='bg-black text-white w-3/12 mt-10'>
//             Grid 3
//         </div>
//         <div className='bg-black text-white w-4/12 mt-10'>
//             Grid 4
//         </div>
//         <div className='bg-black text-white w-5/12 mt-10'>
//             Grid 5
//         </div>
//         <div className='bg-black text-white w-6/12 mt-10'>
//             Grid 6
//         </div>
//         <div className='bg-black text-white w-7/12 mt-10'>
//             Grid 7
//         </div>
//         <div className='bg-black text-white w-8/12 mt-10'>
//             Grid 8
//         </div>
//         <div className='bg-black text-white w-9/12 mt-10'>
//             Grid 9
//         </div>
//         <div className='bg-black text-white w-10/12 mt-10'>
//             Grid 10
//         </div>
//         <div className='bg-black text-white w-11/12 mt-10'>
//             Grid 11
//         </div>
//         <div className='bg-black text-white w-12/12 mt-10'>
//             Grid 12
//         </div>
       
//         <div className='bg-black text-white h-full w-1/12 mt-[150px] mb-[150px] p-2 m-4 hover:bg-red-200 hover:text-black hover:rounded-full hover:animate-bounce hover:translate-y-2 transition-transform'>
//             h
//         </div>

//     </section>
//                                                     {/* notification  */}

//     {/* switch (type) {
//         case 'info':
//           NotificationManager.info('Info message');
//           break;
//         case 'success':
//           NotificationManager.success('Success message', 'Title here');
//           break;
//         case 'warning':
//           NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
//           break;
//         case 'error':
//           NotificationManager.error('Error message', 'Click me!', 5000, () => {
//             alert('callback');
//           });
//           break; */}

















// import React, { useState, useEffect } from "react";
// import hall from "../Assest/01 (6).jpg";
// import { GiBunkBeds } from "react-icons/gi";
// import { FaBed } from "react-icons/fa6";
// import Navbar from "../Component/Navbar";
// import AvailableHostel from "../Component/AvailableHostel";
// import BookedHostel from "../Component/BookedHostel";
// import Footer from "../Component/Footer";
// import toastr from "toastr";
// import { useParams } from "react-router-dom";
// import "toastr/build/toastr.min.css";
// import axios from "axios";
// import ReactLoading from "react-loading";
// import { useNavigate } from "react-router-dom";
// import AdminRooms from "./AdminRooms";

// const AdminRoomDetails = () => {
//   const { room_id: roomIdParam } = useParams();
//   const { hall_name: hallNameParam } = useParams();

//   const [room, setRoom] = useState("");
//   const [loading, setLoading] = useState("");
//   const [bedNumber, setBedNumber] = useState("");
//   const [booked_room, setBookedRooms] = useState([]);

//   const [bookings, setBookings] = useState([]);
//   const [hall, setHall] = useState("");

//   const navigate = useNavigate();
//   let user = JSON.parse(localStorage.getItem("User"));
 
 
//  // Fetch Rooms Details
//  useEffect(() => {
//     async function fetchRoom() {
//       try {
//         setLoading(true);

//         const response = await axios.get(
//           `http://localhost:8000/api/rooms/${roomIdParam}`
//         );
//         setRoom(response.data);
//         setLoading(false);
//       } catch (error) {
//         toastr.error("Error retrieving Hostel");
//         setLoading(false);
//       }
//     }

//     fetchRoom();
//   }, []);


//   // Fetch Booked Room
//   useEffect(() => {
//     async function fetchBookedRoom() {
//       try {
//         setLoading(true);

//         const response = await axios.get(`http://localhost:8000/api/book-room`);
//         console.log(response.data);
//         setBookedRooms(response.data);
//         setLoading(false);
//       } catch (error) {
//         toastr.error("Error retrieving Hostel");
//         setLoading(false);
//       }
//     }

//     fetchBookedRoom();
//   }, []);
 

//     // Filter rooms based on roomParams
//     const filteredRoom = booked_room.filter((room) =>
//         room.room.includes(roomIdParam)
//       );


//  //Check availability
//  const checkAvailabilty = () => {
//     if (bedNumber) {
//       setLoading(true);

//       axios
//         .post("http://localhost:8000/api/book-room/check-availability", {
//           student_id: user.user_id,
//           room_id: room.room_id,
//           bed_number: bedNumber,
//         })
//         .then((response) => {
//           toastr.success("Room is Available");
//           navigate(
//             `/checkout/${user.email}/${room.hall_name}/${room.room_number}/${room.price}/${user.user_id}/${room.room_id}/${bedNumber}`
//           );
//         })
//         .catch((error) => {
//           toastr.error(error.response.data.error);
//         })
//         .finally(() => {
//           setLoading(false);
//         });
//     } else {
//       toastr.error("Select a Bed Number");
//     }
//   };

//   const handleEdit = () => {
//     navigate(`/EditRoom/${room.room_id}`);
//   };


// // Fetch Reserve Room Details
// useEffect(() => {
//     const fetchBookings = async () => {
//       try {
//         // console.log("Error_1")
//         const response = await axios.get("http://localhost:8000/api/bookings");
//         setBookings(response.data);
//         console.log(response.data);
//       } catch (error) {
//         toastr.error("Error fetching Reserve Details", error);
//         setLoading(false);
//       }
//     };

//     fetchBookings();
//   }, []);
 
//   return (
//     <>
//     {/* Navbar  */}

//     <Navbar />

//     {/* Hostel Details  */}
//     <section className="mx-5 md:mx-10 lg:mx-20 pt-[100px] grid md:grid-cols-2 md:gap-x-10 md:items-center lg:items-center">
//       {loading && (
//         <div className=" z-50 absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
//           <ReactLoading
//             type={"bars"}
//             color={"#ffffff"}
//             height={100}
//             width={100}
//           />
//         </div>
//       )}
//       <div>
//         <img src={room.room_image} className=" rounded-md" />
//       </div>

//       <div className="mt-10 p-2">
//         <h1 className=" text-[#CFA146] font-bold text-[20px] mb-2">
//           {hallNameParam}
//         </h1>
//         <hr />

//         <div className="flex gap-x-10">
//           {/* Booked Room indicator */}
//           <div className="flex items-center align-middle gap-5 my-5">
//             <h2>Booked Bed</h2>
//             <div className="flex gap-x-5">
//               {filteredRoom.map((room, index) => (
//                 <h1 className="h-8 w-8 pt-1 rounded-full mx-auto my-auto bg-[#d44540] text-white flex justify-center align-items-center">
//                   {room.bed_number}
//                 </h1>
//               ))}
//             </div>
//           </div>
//           {/* Reserved Room indicator */}
//           <div className="flex items-center align-middle gap-5 my-5">
//             <h2>Reserved Bed</h2>
//             <div className="flex gap-x-5">
//               {filteredRoom.map((room, index) => (
//                 <h1 className="h-8 w-8 pt-1 rounded-full mx-auto my-auto bg-[#CFA146] text-white flex justify-center align-items-center">
//                   {room.bed_number}
//                 </h1>
//               ))}
//             </div>
//           </div>
//         </div>
//         <h2 className="bg-[#E7F6EE] p-3 rounded-md">Room Details</h2>
//         <h2 className="font-semibold text-[15px] my-2">
//           Room {room.room_number}
//         </h2>
//         <div className="flex gap-x-5">
//           <div className="flex gap-x-3 items-center">
//             <GiBunkBeds className="text-[#CFA146] text-[27px]" />
//             <p className="text-[14px] font-light">
//               {room.bunk_capacity} Bunk Capacity
//             </p>
//           </div>
//           <div className="flex gap-x-3 items-center">
//             <FaBed className="text-[#CFA146] text-[27px]" />
//             <p className="text-[14px] font-light">
//               {room.bed_space} Bed Space
//             </p>
//           </div>
//         </div>

//         {/* Bedspace Dropdown  */}

//         <select
//           id="dropdown"
//           className="block bg-[#E7F6EE] w-full text-[#2b2d3a] p-3 border-none rounded-md shadow leading-tight focus:outline-none focus:shadow-outline my-5"
//           onChange={(event) => setBedNumber(event.target.value)} // Set bedNumber on change
//         >
//           <option value="" disabled selected hidden>
//             Bed Space Position
//           </option>

//           {Array.from({ length: room.bed_space }, (_, index) => (
//             <option key={index + 1} value={index + 1}>
//               {index + 1}
//             </option>
//           ))}
//         </select>

//         <h1 className="text-[#CFA146]">
//           Note: Top Bunks are Even Number While Low Bunks are Odd number
//         </h1>

//         <span className="text-[#0BA75A] text-[13px]"> Amount </span>
//         <h2 className="text-[30px] font-semibold mb-10">{room.price}</h2>
//         <button
//           onClick={checkAvailabilty}
//           className="bg-[#0BA75A] text-[14px] text-white px-5 py-3 rounded-sm text-center text-bold hover:bg-[#1d623f] hover:translate-y-1 transition-transform"
//         >
//           Book Now
//         </button>
//         <button
//           onClick={checkAvailabilty}
//           className="bg-[#CFA146] text-[14px] text-white px-5 py-3 rounded-sm text-center ml-5 text-bold hover:bg-[#3e3a14] hover:translate-y-1 transition-transform"
//         >
//           Reserve Now
//         </button>
//         <button
//           onClick={handleEdit}
//           className="bg-[#CFA146] text-[14px] text-white px-5 py-3 rounded-sm text-center ml-5 text-bold hover:bg-[#3e3a14] hover:translate-y-1 transition-transform"
//         >
//           Edit
//         </button>
//       </div>
//     </section>

//     {/* Avaliable Hostel  */}
    
//     <AdminRooms/>

//     {/* Booked Hostel  */}
//     <BookedHostel />

//     {/* Footer section  */}
//     <Footer />
//   </>
//   )
// }

// export default AdminRoomDetails


















   
//    </>
//   )
// }

// export default Demo
