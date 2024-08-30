import React, { useState, useEffect } from "react";
import { GiBunkBeds } from "react-icons/gi";
import { FaBed } from "react-icons/fa6";
import Navbar from "../Component/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { useNavigate } from "react-router-dom";
import { PaystackButton } from "react-paystack";
import ReactLoading from "react-loading";


const Checkout = () => {
  const { email: emailParam } = useParams();
  const { user_id: user_idParam } = useParams();
  const { room_id: room_idParam} = useParams();
  const { bed_number: bed_numberParam } = useParams();
  const { hall_name: hallNameParam } = useParams();
  const { room_number: roomNumberParam } = useParams();
  const { price: priceParam } = useParams();
  const [loading, setLoading] = useState("");

  const navigate = useNavigate();


  
  const publicKey = "pk_test_22fcf5175bcc5c57ad1d8f8488223c55468f06f7"; // Replace with your Paystack public key

  const componentProps = {
    email: emailParam,
    amount: priceParam * 100, // converting to kobo
    metadata: {
      name: emailParam,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () => bookRoom(),
    onClose: () => alert("Payment closed!"),
  };

    //Book
    const bookRoom = () => {
        setLoading(true)
          axios
            .post("http://localhost:8000/api/book-room", {
              student_id: user_idParam,
              room_id: room_idParam,
              bed_number: bed_numberParam,
            })
            .then((response) => {
              toastr.success("Booked successfully");
              navigate(`/`);
            })
            .catch((error) => {
              toastr.error("Error booking room");
            })
            .finally(() => {
                setLoading(false);
              });
 
      };

  return (
    <>
      <Navbar />

      <section className=" mx-auto pt-40">

      {loading && (
          <div className=" z-50 absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <ReactLoading
              type={"bars"}
              color={"#ffffff"}
              height={100}
              width={100}
            />
          </div>
        )}

        <h1 className="text-[30px] font-bold">Check Out </h1>
        <div className="">
          <h1 className="text-[30px] text-white bg-[#0BA75A] px-6 py-4">

            Room Details
          </h1>
          <h1>{hallNameParam}</h1>
          <h2>{roomNumberParam}</h2>
          <div className="flex gap-x-5">
            <div className="flex gap-x-3 items-center">
              <GiBunkBeds className="text-[#CFA146] text-[27px]" />
              {/* <p className="text-[14px] font-light">{room.bunk_capacity}</p> */}
              <p className="text-[14px] font-light">5</p>
            </div>
            <div className="flex gap-x-3 items-center">
              <FaBed className="text-[#CFA146] text-[27px]" />
              {/* <p className="text-[14px] font-light">{room.bed_space}</p> */}
              <p className="text-[14px] font-light">{bed_numberParam}</p>
            </div>
          </div>
        </div>
        <h1 className="text-[#0BA75A]">
          Note: Top Bunks are Even Number While Low Bunks are Odd number
        </h1>

        <PaystackButton {...componentProps} />

      </section>
    </>
  );
};

export default Checkout;
