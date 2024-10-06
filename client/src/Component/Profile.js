import React, { useState, useEffect } from "react";
import ReactLoading from "react-loading";


const Profile = () => {
  const [loading, setLoading] = useState("");
  const [password, setPassword] = useState("");
  const [conpassword, setConpassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  

  const handleSubmit = (event) => {
    event.preventDefault();
    Profile();
  };



  

  
    // setLoading(true);

  return (
    <>
      <section className="mx-5 md:mx-10 lg:mx-[100px] pt-[100px] md:gap-x-10 md:items-center lg:items-center">
        <div>
            <h1 className="text-[20px] font-bold my-5">Account Details</h1>
          <div className="flex justify-between items-center my-5">
          <h2 className="my-2 text-[#0BA75A]">Personal Information</h2>
                 <button className="my-5 py-2 w-[90px] bg-[#0BA75A] text-white font-semibold text-sm rounded-[5px] text-center hover:bg-[#1d623f]">
                  Edit
                </button>
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

          <div className="my-8">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <p className="text-[14px] text-[#425466]">First Name </p>
                  <h2 className="w-full px-4 py-2 placeholder-sm border-b-2 border-gray-300">John</h2>
                </div>

                <div className="flex flex-col gap-2">
                  <p className="text-[14px] text-[#425466]">Middle Name </p>
                  <h2 className="w-full px-4 py-2 placeholder-sm border-b-2 border-gray-300">James</h2>
                </div>

                <div className="flex flex-col gap-2">
                  <p className="text-[14px] text-[#425466]">Last Name </p>
                  <h2 className="w-full px-4 py-2 placeholder-sm border-b-2 border-gray-300">Jam</h2>
                </div>

                <div className="flex flex-col gap-2">
                  <p className="text-[14px] text-[#425466]">School email </p>
                  <h2 className="w-full px-4 py-2 placeholder-sm border-b-2 border-gray-300">emmm</h2>
                </div>

                <h2 className="my-2 pt-10 text-[#0BA75A]">Acadamia Information</h2>

                <div className="flex flex-col gap-2">
                  <p className="text-[14px] text-[#425466]">
                    Matric number Or Registration number
                  </p>
                  <h2 className="w-full px-4 py-2 placeholder-sm border-b-2 border-gray-300">John</h2>
                </div>

                <div className="flex flex-col gap-2">
                  <p className="text-[14px] text-[#425466]">Department </p>
                  <h2 className="w-full px-4 py-2 placeholder-sm border-b-2 border-gray-300">John</h2>
                </div>

                <div className="flex flex-col gap-2">
                  <p className="text-[14px] text-[#425466]">Level </p>
                  <h2 className="w-full px-4 py-2 placeholder-sm border-b-2 border-gray-300">John</h2>
                </div>


                <h2 className="my-2 pt-10 text-[#0BA75A]">Change Password</h2>



                <div className="flex flex-col gap-2">
                      <p className="text-[14px] text-[#425466]">Password</p>
                      <input
                        type="password"
                        placeholder="*****************"
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
                        className="w-full  px-4 py-2 placeholder-sm rounded-md shadow outline-none"
                        value={conpassword}
                        onChange={(event) => setConpassword(event.target.value)}
                      />
                    </div>

                <button className="my-5 py-3 bg-[#0BA75A] text-white font-semibold text-sm rounded-[5px] text-center hover:bg-[#1d623f]  hover:translate-y-2 hover:transition-transform">
                  Save Changes
                </button>
               
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
