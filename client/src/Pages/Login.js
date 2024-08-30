import React, { useState } from "react";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import img from "../Assest/Login-img.jpg";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import ReactLoading from "react-loading";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState("");
  const navigate = useNavigate();


  
  const login = () => {
    if (email) {
      setLoading(true);

      axios
        .post("http://localhost:8000/api/login", {
          email: email,
          password: password,
        })
        .then((response) => {
          toastr.success("Login Successful");
          localStorage.setItem(
            "User",
            JSON.stringify({
              user_id: response.data.user_id,
              token: response.data.token,
              email: email,
              role: response.data.role,
              firstName: response.data.first_name,
              lastName: response.data.last_name
            })
          )         
           navigate('/');
        })
        .catch((error) => {
          toastr.error("Invalid Details");
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
    login();
  };

  return (
    <>
      {/* Login Section  */}
      <section className="w-full h-screen flex overflow-hidden">
        {/* Login img  */}
        <div className="hidden md:w-6/12 md:block lg:visible ">
          <h2 className="text-white font-bold text-xl tracking-tight absolute z-50 m-10">
            Accommdate
          </h2>
          <img
            src={img}
            className="w-full h-full object-cover overflow-hidden"
          />
        </div>

        {/* Login Details  */}
        <div className="lg:w-5/12 visible md:w-5/12 md:visible  mx-auto">
          <div className="w-full h-screen px-10 flex flex-col">
            <div className="w-full h-[800px] flex justify-center items-center">
              <div className=" flex flex-col gap-[30px]">
                <div className="flex flex-col gap-3">
                  <Link
                    to="/register"
                    className="text-sm bg-[#0BA75A] py-1 px-2 rounded-full text-center text-white font-semibold w-[80px] mb-10  hover:translate-y-2 hover:transition-transform"
                  >
                    Sign Up
                  </Link>

                  <div class=" text-zinc-800 text-[25px] font-semibold font-['Inter'] leading-[38.09px]">
                    Welcome back to School
                  </div>
                </div>

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

                <form onSubmit={handleSubmit}>
                  <div className="flex flex-col pt-[20px] gap-9">
                    <div className="flex flex-col gap-2">
                      <p className="text-[14px] text-[#425466]">
                        Verified email / Matric number / Jamb number{" "}
                      </p>
                      <input
                        type="text"
                        placeholder="adminbouesti@gmail.com"
                        required
                        className="w-[280px] px-4 py-2 placeholder-sm rounded-md shadow outline-none"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                      />
                    </div>

                    {/* Password section  */}
                    <div className="flex flex-col gap-2">
                      <p className="text-[14px] text-[#425466]">Password</p>
                      <div className="relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          placeholder="*****************"
                          required
                          value={password}
                          onChange={(ev) => setPassword(ev.target.value)}
                          className="w-full  px-4 py-2 placeholder-sm rounded-md shadow outline-none"
                        />

                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-2 top-4 text-gray-500 hover:text-gray-900"
                        >
                          {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                      </div>
                    </div>

                    {/* <Link to="/adminlogin" className="text-sm text-[#0BA75A]">
                      Admin
                    </Link> */}
                    
                    <button  className="py-3 bg-[#0BA75A] text-white font-semibold text-sm rounded-[10px] text-center hover:bg-[#1d623f] hover:translate-y-2 hover:transition-transform">
                      Login
                    </button>
                  </div>
                </form>

                {/* <div className="flex flex-col items-center gap-[30px]">
                  <div class="text-center text-slate-500 text-[10px] font-normal font-['Inter']">
                    or do it via other accounts
                  </div>
                  <div className="flex gap-5">
                    <div className="w-[50px] h-[50px] shadow rounded-[5px] flex items-center justify-center cursor-pointer">
                      <FcGoogle size={24} />
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
