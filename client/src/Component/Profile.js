import axios from "axios";
import React, { useState, useEffect } from "react";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import ReactLoading from "react-loading";
import { useParams } from "react-router-dom";

const Profile = () => {
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [conpassword, setConpassword] = useState("");
  const [user, setUser] = useState({});
  const { id } = useParams();
  const [profileForm, setProfileForm] = useState({
    first_name: "",
    last_name: "",
    middle_name: "",
    department: "",
    level: "",
    registration_number: "",
  });

  useEffect(() => {
    const getUser = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:8000/api/profile/${id}`
        );
        setUser(response.data);
      } catch (error) {
        toastr.error("Failed to fetch user data.");
        console.error("Error details:", error);
      } finally {
        setLoading(false);
      }
    };
    getUser();
  }, [id]);

  useEffect(() => {
    if (user) {
      setProfileForm({
        first_name: user.first_name || "",
        last_name: user.last_name || "",
        middle_name: user.middle_name || "",
        department: user.department || "",
        level: user.level || "",
        registration_number: user.registration_number || "",
      });
    }
  }, [user]);

  const handleEdit = async (e) => {
    e.preventDefault();

    // Simple validation to check if passwords match
    if (password && password !== conpassword) {
      toastr.error("Passwords do not match.");
      return;
    }

    setLoading(true);
    try {
      await axios.put(`http://localhost:8000/api/profile/${id}`, {
        ...profileForm,
        password: password || undefined, // Only update password if it's provided
      });
      toastr.success("Profile updated successfully!");
    } catch (error) {
      toastr.error("Failed to update profile.");
      console.error("Error details:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="mx-5 md:mx-10 lg:mx-[100px] pt-[100px] md:gap-x-10 md:items-center lg:items-center">
        <div>
          <h1 className="text-[20px] font-bold my-5">Account Details</h1>
          <div className="flex justify-between items-center my-5">
            <h2 className="my-2 text-[#0BA75A]">Personal Information</h2>
          </div>

          {loading && (
            <div className="z-50 absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
              <ReactLoading
                type={"bars"}
                color={"#ffffff"}
                height={100}
                width={100}
              />
            </div>
          )}

          <div className="my-8">
            <form onSubmit={handleEdit}>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <p className="text-[14px] text-[#425466]">First Name </p>
                  <input
                    className="w-full px-4 py-2 placeholder-sm border-b-2 border-gray-300"
                    value={profileForm.first_name}
                    onChange={(e) =>
                      setProfileForm({
                        ...profileForm,
                        first_name: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-[14px] text-[#425466]">Middle Name </p>
                  <input
                    className="w-full px-4 py-2 placeholder-sm border-b-2 border-gray-300"
                    value={profileForm.middle_name}
                    onChange={(e) =>
                      setProfileForm({
                        ...profileForm,
                        middle_name: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <p className="text-[14px] text-[#425466]">Last Name </p>
                  <input
                    className="w-full px-4 py-2 placeholder-sm border-b-2 border-gray-300"
                    value={profileForm.last_name}
                    onChange={(e) =>
                      setProfileForm({
                        ...profileForm,
                        last_name: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <p className="text-[14px] text-[#425466]">School email</p>
                  <input
                    className="w-full px-4 py-2 placeholder-sm border-b-2 border-gray-300"
                    value={user.email || ""}
                    readOnly
                  />
                </div>

                <h2 className="my-2 pt-10 text-[#0BA75A]">Academic Information</h2>

                <div className="flex flex-col gap-2">
                  <p className="text-[14px] text-[#425466]">
                    Matric number Or Registration number
                  </p>
                  <input
                    className="w-full px-4 py-2 placeholder-sm border-b-2 border-gray-300"
                    value={profileForm.registration_number}
                    onChange={(e) =>
                      setProfileForm({
                        ...profileForm,
                        registration_number: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <p className="text-[14px] text-[#425466]">Department</p>
                  <input
                    className="w-full px-4 py-2 placeholder-sm border-b-2 border-gray-300"
                    value={profileForm.department}
                    onChange={(e) =>
                      setProfileForm({
                        ...profileForm,
                        department: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <p className="text-[14px] text-[#425466]">Level</p>
                  <input
                    className="w-full px-4 py-2 placeholder-sm border-b-2 border-gray-300"
                    value={profileForm.level}
                    onChange={(e) =>
                      setProfileForm({
                        ...profileForm,
                        level: e.target.value,
                      })
                    }
                  />
                </div>

                <h2 className="my-2 pt-10 text-[#0BA75A]">Change Password</h2>

                <div className="flex flex-col gap-2">
                  <p className="text-[14px] text-[#425466]">Password</p>
                  <input
                    type="password"
                    placeholder="*****************"
                    className="w-full px-4 py-2 placeholder-sm rounded-md shadow outline-none"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <p className="text-[14px] text-[#425466]">Confirm Password</p>
                  <input
                    type="password"
                    placeholder="*****************"
                    className="w-full px-4 py-2 placeholder-sm rounded-md shadow outline-none"
                    value={conpassword}
                    onChange={(event) => setConpassword(event.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  className="my-5 py-3 bg-[#0BA75A] text-white font-semibold text-sm rounded-[5px] text-center hover:bg-[#1d623f] hover:translate-y-2 hover:transition-transform"
                >
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
