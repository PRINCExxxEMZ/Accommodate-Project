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
  const { room_id: room_idParam } = useParams();
  const { bed_number: bed_numberParam } = useParams();
  const { hall_name: hallNameParam } = useParams();
  const { room_number: roomNumberParam } = useParams();
  const { bunk_capacity: bunkCapacityParam } = useParams();
  const { price: priceParam } = useParams();
  const [loading, setLoading] = useState("");

  const navigate = useNavigate();

  //Paystack public key
  const publicKey = "pk_test_22fcf5175bcc5c57ad1d8f8488223c55468f06f7"; 

  // converting to kobo
  const componentProps = {
    email: emailParam,
    amount: priceParam * 100, 
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
    setLoading(true);
    axios
      .post("http://localhost:8000/api/book-room", {
        student_id: user_idParam,
        room_id: room_idParam,
        bed_number: bed_numberParam,
        price: priceParam,
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

      <section className=" mx-auto pt-30">
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
          <h1 className="text-[30px] text-white bg-[#0BA75A] px-5 lg:px-[105px] py-[50px] font-bold">
            Room Details
          </h1>
          <h1 className="mx-5 py-5 lg:px-[88px]">
            {" "}
            Hall Name: <span className="font-semibold"> {hallNameParam} </span>
          </h1>
          <h2 className="mx-5 lg:px-[88px]">
            {" "}
            Room Number:{" "}
            <span className="font-semibold"> {roomNumberParam} </span>
          </h2>
        
          <div className="flex-col gap-x-5 mx-5 py-5 lg:px-[88px]">
            <div className="flex gap-x-3 items-center">
              <h3>Number Of Bunks: </h3>
              <GiBunkBeds className="text-[#CFA146] text-[27px]" />
              <p className="text-[14px] font-light">{bunkCapacityParam}</p>
            </div>
            <div className="flex gap-x-3 items-center py-5">
            <h3>Number Of Bed Space: </h3>
              <FaBed className="text-[#CFA146] text-[27px]" />
              {/* <p className="text-[14px] font-light">{room.bed_space}</p> */}
              <p className="text-[14px] font-light">{bed_numberParam}</p>
            </div>
            <div className="">
              <h3 className="text-sm text-[#CFA146]">Amount:</h3>
              <h2 className="text-[30px] font-semibold mb-10">{priceParam}</h2>
            </div>
          </div>
        </div>

        <h1 className="text-[#CFA146] mx-5 lg:px-[88px]">
          Note: Top Bunks are Even Number While Low Bunks are Odd number
        </h1>

        <PaystackButton
          className="text-white bg-[#0BA75A] mx-5 rounded-sm mt-5 px-10 py-2 lg:mx-[105px]"
          {...componentProps}
        />
      </section>
    </>
  );
};

export default Checkout;
