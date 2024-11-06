import React from "react";
import Navbar from "./Navbar";
import Footer from "../Component/Footer";

const AdminStudentsDetails = () => {
  return (
    <>
      {/* Navbar Sction */}
      <Navbar />

      {/* Student Details  */}
      <section className="pt-[100px] mx-5 md:mx-10 lg:mx-10">
        <div>
          <h1 className="text-[20px] font-bold my-5">Student Details</h1>
          <div className="flex justify-between items-center my-5">
            <h2 className="my-2 text-[#0BA75A]">Personal Information</h2>
          </div>

          {/* loader Section */}
          {/* {loading && (
            <div className="z-50 absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
              <ReactLoading
                type={"bars"}
                color={"#ffffff"}
                height={100}
                width={100}
              />
            </div>
          )} */}

          <div className="flex flex-col gap-2 my-5">
            <p className="text-[14px] text-[#425466]">First Name </p>
            <h2 className="w-full px-4 py-2 placeholder-sm border-b-2 border-gray-300"
            //   value={profileForm.middle_name}
            //   onChange={(e) =>
            //     setProfileForm({
            //       ...profileForm,
            //       middle_name: e.target.value,
            //     })
            //   }
            > David </h2>
          </div>

          <div className="flex flex-col gap-2 my-5">
            <p className="text-[14px] text-[#425466]">Middle Name </p>
            <h2 className="w-full px-4 py-2 placeholder-sm border-b-2 border-gray-300"
            //   value={profileForm.middle_name}
            //   onChange={(e) =>
            //     setProfileForm({
            //       ...profileForm,
            //       middle_name: e.target.value,
            //     })
            //   }
            > David </h2>
          </div>

          <div className="flex flex-col gap-2 my-5">
            <p className="text-[14px] text-[#425466]">Last Name </p>
            <h2 className="w-full px-4 py-2 placeholder-sm border-b-2 border-gray-300"
            //   value={profileForm.middle_name}
            //   onChange={(e) =>
            //     setProfileForm({
            //       ...profileForm,
            //       middle_name: e.target.value,
            //     })
            //   }
            > David </h2>
          </div>

          <div className="flex flex-col gap-2 my-5">
            <p className="text-[14px] text-[#425466]">Email Adress </p>
            <h2 className="w-full px-4 py-2 placeholder-sm border-b-2 border-gray-300"
            //   value={profileForm.middle_name}
            //   onChange={(e) =>
            //     setProfileForm({
            //       ...profileForm,
            //       middle_name: e.target.value,
            //     })
            //   }
            > David </h2>
          </div>


        </div>

        <h2 className="my-2 pt-10 text-[#0BA75A]">Academic Information</h2>

        <div className="flex flex-col gap-2 my-5">
            <p className="text-[14px] text-[#425466]">Department</p>
            <h2 className="w-full px-4 py-2 placeholder-sm border-b-2 border-gray-300"
            //   value={profileForm.middle_name}
            //   onChange={(e) =>
            //     setProfileForm({
            //       ...profileForm,
            //       middle_name: e.target.value,
            //     })
            //   }
            > David </h2>
          </div>

        <div className="flex flex-col gap-2 my-5">
            <p className="text-[14px] text-[#425466]">Matric or Registraction Number</p>
            <h2 className="w-full px-4 py-2 placeholder-sm border-b-2 border-gray-300"
            //   value={profileForm.middle_name}
            //   onChange={(e) =>
            //     setProfileForm({
            //       ...profileForm,
            //       middle_name: e.target.value,
            //     })
            //   }
            > David </h2>
          </div>

        <div className="flex flex-col gap-2 my-5">
            <p className="text-[14px] text-[#425466]">Level</p>
            <h2 className="w-full px-4 py-2 placeholder-sm border-b-2 border-gray-300"
            //   value={profileForm.middle_name}
            //   onChange={(e) =>
            //     setProfileForm({
            //       ...profileForm,
            //       middle_name: e.target.value,
            //     })
            //   }
            > David </h2>
          </div>


          <h2 className="my-2 pt-10 text-[#0BA75A]">Accommodation Information</h2>

          <div className="flex flex-col gap-2 my-5">
            <p className="text-[14px] text-[#425466]">Hall Name</p>
            <h2 className="w-full px-4 py-2 placeholder-sm border-b-2 border-gray-300"
            //   value={profileForm.middle_name}
            //   onChange={(e) =>
            //     setProfileForm({
            //       ...profileForm,
            //       middle_name: e.target.value,
            //     })
            //   }
            > David </h2>
          </div>

          <div className="flex flex-col gap-2 my-5">
            <p className="text-[14px] text-[#425466]">Room Number</p>
            <h2 className="w-full px-4 py-2 placeholder-sm border-b-2 border-gray-300"
            //   value={profileForm.middle_name}
            //   onChange={(e) =>
            //     setProfileForm({
            //       ...profileForm,
            //       middle_name: e.target.value,
            //     })
            //   }
            > David </h2>
          </div>

          <div className="flex flex-col gap-2 my-5">
            <p className="text-[14px] text-[#425466]">Bed Space</p>
            <h2 className="w-full px-4 py-2 placeholder-sm border-b-2 border-gray-300"
            //   value={profileForm.middle_name}
            //   onChange={(e) =>
            //     setProfileForm({
            //       ...profileForm,
            //       middle_name: e.target.value,
            //     })
            //   }
            > David </h2>
          </div>

          <div className="flex flex-col gap-2 my-5">
            <p className="text-[14px] text-[#425466]">Amount Paid</p>
            <h2 className="w-full px-4 py-2 placeholder-sm border-b-2 border-gray-300"
            //   value={profileForm.middle_name}
            //   onChange={(e) =>
            //     setProfileForm({
            //       ...profileForm,
            //       middle_name: e.target.value,
            //     })
            //   }
            > David </h2>
          </div>

      </section>

      {/* Fotter Section  */}
      <Footer />
    </>
  );
};

export default AdminStudentsDetails;
