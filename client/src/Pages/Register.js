import React, { useState, useEffect } from "react";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import img from "../Assest/Login-img.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
import ReactLoading from "react-loading";

const Register = () => {
  const [firstN, setFirstN] = useState("");
  const [middleN, setMiddleN] = useState("");
  const [lastN, setLastN] = useState("");
  const [email, setEmail] = useState("");
  const [matric, setMatric] = useState("");
  const [department, setDepartment] = useState("");
  const [level, setLevel] = useState("");
  const [password, setPassword] = useState("");
  const [conpassword, setConpassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState("");
  
  // const navigate = useNavigate();
  // navigate('/login');

  const clearForm = () => {
    setFirstN("");
    setMiddleN("");
    setLastN("");
    setEmail("");
    setMatric("");
    setDepartment("");
    setLevel("");
    setPassword("");
    setConpassword("");
  };
  const register = () => {
    if (email) {
      setLoading(true);

      axios
        .post("http://localhost:8000/api/register", {
          first_name: firstN,
          middle_name: middleN,
          last_name: lastN,
          email: email,
          registration_number: matric,
          department: department,
          level:level,
          password:password,
        })
        .then((response) => {
          toastr.success("Register Successfully");
          clearForm();
          
        }
        
      )
        .catch((error) => {
          toastr.error("Failed Registration");
          console.error("Error details:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      toastr.error("Please fill in all required fields.");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    register();
  };

  return (
    <>
      {/* Sign Up Section  */}
      <section className="w-full h-screen flex overflow-hidden">
        {/* Sign Up img  */}
        <div className="hidden md:w-6/12 md:block lg:visible ">
          <h2 className="text-white font-bold text-xl tracking-tight absolute z-50 m-10">
            Accommdate
          </h2>
          <img
            src={img}
            className="w-full h-full object-cover overflow-hidden"
            alt="Student"
          />
        </div>

        {/* Sign Up Details  */}
        <div className="lg:w-5/12 visible md:w-5/12 md:visible  mx-auto">
          <div className="w-full h-screen px-10 flex flex-col">
            <div className="w-full h-[800px] flex justify-center items-center">
              <div className=" flex flex-col gap-[30px] overflow-y-auto h-[700px] pr-[100px] scroll-container">
                <div className="flex flex-col gap-3">
                  <Link
                    to="/login"
                    className="text-sm bg-[#0BA75A] py-1 px-2 rounded-full text-center text-white font-semibold w-[80px] mb-2  hover:translate-y-2 hover:transition-transform"
                  >
                    Login
                  </Link>
                  <div class=" text-zinc-800 text-[25px] font-semibold font-['Inter'] leading-[38.09px]">

                        
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

                    Welcome back to School
                  </div>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-col gap-6">

                    <div className="flex flex-col gap-2">
                      <p className="text-[14px] text-[#425466]">
                        First Name{" "}
                      </p>
                      <input
                        type="text"
                        placeholder="John"
                        required
                        className="w-[280px] px-4 py-2 placeholder-sm rounded-md shadow outline-none"
                        value={firstN}
                        onChange={(event) => setFirstN(event.target.value)}
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <p className="text-[14px] text-[#425466]">
                        Middle Name{" "}
                      </p>
                      <input
                        type="text"
                        placeholder="Wayne"
                        required
                        className="w-[280px] px-4 py-2 placeholder-sm rounded-md shadow outline-none"
                        value={middleN}
                        onChange={(event) => setMiddleN(event.target.value)}
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <p className="text-[14px] text-[#425466]">
                        Last Name{" "}
                      </p>
                      <input
                        type="text"
                        placeholder="Snow"
                        required
                        className="w-[280px] px-4 py-2 placeholder-sm rounded-md shadow outline-none"
                        value={lastN}
                        onChange={(event) => setLastN(event.target.value)}
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <p className="text-[14px] text-[#425466]">
                        School email{" "}
                      </p>
                      <input
                        type="text"
                        required
                        placeholder="adminbouesti@gmail.com"
                        className="w-[280px] px-4 py-2 placeholder-sm rounded-md shadow outline-none"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <p className="text-[14px] text-[#425466]">
                        Matric number Or Registration number
                      </p>
                      <input
                        type="text"
                        placeholder="COM/22/0500"
                        required
                        className="w-full  px-4 py-2 placeholder-sm rounded-md shadow outline-none"
                        value={matric}
                        onChange={(event) => setMatric(event.target.value)}
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <p className="text-[14px] text-[#425466]">
                        Department{" "}
                      </p>
                      <input
                        type="text"
                        placeholder="Computer Science"
                        required
                        className="w-[280px] px-4 py-2 placeholder-sm rounded-md shadow outline-none"
                        value={department}
                        onChange={(event) => setDepartment(event.target.value)}
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <p className="text-[14px] text-[#425466]">
                        Level{" "}
                      </p>
                      <input
                        type="text"
                        placeholder="300 level"
                        required
                        className="w-[280px] px-4 py-2 placeholder-sm rounded-md shadow outline-none"
                        value={level}
                        onChange={(event) => setLevel(event.target.value)}
                      />
                    </div>


                    <div className="flex flex-col gap-2">
                      <p className="text-[14px] text-[#425466]">Password</p>
                      <input
                        type="password"
                        placeholder="*****************"
                        required
                        className="w-full  px-4 py-2 placeholder-sm rounded-md shadow outline-none"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <p className="text-[14px] text-[#425466]">
                        Comfirm Password
                      </p>
                      <input
                        type="password"
                        placeholder="*****************"
                        required
                        className="w-full  px-4 py-2 placeholder-sm rounded-md shadow outline-none"
                        value={conpassword}
                        onChange={(event) => setConpassword(event.target.value)}
                      />
                    </div>

                    {/* <Link to="/fresher" className="text-sm text-[#0BA75A]">
                      Fresher register
                    </Link> */}
                    <button className="py-3 bg-[#0BA75A] text-white font-semibold text-sm rounded-[10px] text-center hover:bg-[#1d623f]  hover:translate-y-2 hover:transition-transform">
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
