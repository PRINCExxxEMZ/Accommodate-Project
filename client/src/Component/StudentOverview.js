import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

const StudentOverview = () => {
  const [users, setUsers] = useState([]);
  const [bookedRoom, setBookedRoom] = useState([]);
  const [roomId, setRoomId] = useState("");
  const [studentId, setStudentId] = useState("");
  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get("http://localhost:8000/api/profile");
      setUsers(response.data);
      console.log(response.data);
    };
    getUsers();
  }, []);

  useEffect(() => {
    const getBookedRoom = async () => {
      const response = await axios.get("http://localhost:8000/api/book-room");
      console.log(response.data);
      setBookedRoom(response.data);
    };
    getBookedRoom();
  }, []);

  useEffect(() => {
    const getHostel = () => {
      const room = bookedRoom.map((room) => room.room);
      console.log(room);
      setRoomId(room);
    };
    getHostel();
  }, []);

  useEffect(() => {
    const getStudent = async () => {
      const student = bookedRoom.map((room) => room.student_id);
      console.log(student);
      setStudentId(student);
    };
    getStudent();
  }, []);

  
  useEffect(() => {
    const getStudent = async () => {
      const response = await axios.get(`http://localhost:8000/api/profile/${studentId}`)
      console.log(response.data)
    };
    getStudent();
  }, []);

  useEffect(() => {
    const getRoom = async () => {
      const response = await axios.get(
        `http://localhost:8000/api/rooms/${roomId}`
      );
      console.log(response.data);
    };
    getRoom();
  }, [roomId]);



  return (
    <>
      <section className="pt-[100px] mx-5 md:mx-10 lg:mx-10">
        <div className="md:flex md:justify-between">
          <h1 className="font-semibold text-[#2b2d3a] text-[20px] md:text-[30px] mb-5">
            Student Overview
          </h1>
          <div className="flex items-center gap-x-5 mb-5">
            <input
              type="text"
              placeholder="Matric Number"
              className="bg-[#E7F6EE]  text-[#2b2d3a]  w-[250px] p-2 border-none rounded-md"
            />
            <FiSearch className="text-[#CFA146] text-[25px]" />
          </div>
        </div>
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-5 border-gray-200 bg-[#E7F6EE] text-left text-xs font-semibold text-[#2b2d3a] uppercase tracking-wider">
                    S/N
                  </th>
                  <th className="px-5 py-5 border-gray-200 bg-[#E7F6EE] text-left text-xs font-semibold text-[#2b2d3a] uppercase tracking-wider">
                    Student Matric Or Registration Number
                  </th>
                  <th className="px-5 py-5 border-gray-200 bg-[#E7F6EE] text-left text-xs font-semibold text-[#2b2d3a] uppercase tracking-wider">
                    Session
                  </th>
                  <th className="px-20 py-5 border-gray-200 bg-[#E7F6EE] text-left text-xs font-semibold text-[#2b2d3a] uppercase tracking-wider">
                    Hostel
                  </th>
                  <th className="px-5 py-3 border-gray-200 bg-[#E7F6EE] text-left text-xs font-semibold text-[#2b2d3a] uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-5 py-3 border-gray-200 bg-[#E7F6EE] text-left text-xs font-semibold text-[#2b2d3a] uppercase tracking-wider">
                    Accomodation Status
                  </th>
                  <th className="px-5 py-3 border-gray-200 bg-[#E7F6EE] text-left text-xs font-semibold text-[#2b2d3a] uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index}>
                    <td className="px-5 py-5 border-2 border-gray-200 bg-white text-sm">
                      {index}
                    </td>
                    <td className="px-5 py-5 border-2 border-gray-200 bg-white text-sm">
                      {user.registration_number}
                    </td>
                    <td className="px-5 py-5 border-2 border-gray-200 bg-white text-sm">
                      {user.level}
                    </td>
                    <td className="px-5 py-5 border-2 border-gray-200 bg-white text-sm">
                      Hall A, Female Hostel, Room 23, Top-Buck1
                    </td>
                    <td className="px-5 py-5 border-2 border-gray-200 bg-white text-sm">
                      #50,000.00
                    </td>
                    <td className="px-5 py-5 border-2 border-gray-200 bg-white text-sm">
                      Admitted
                    </td>
                    <td className="px-5 py-5 border-2 border-gray-200 bg-white text-[#CFA146] text-sm hover:bg-[#1d623f] hover:text-white hover:cursor-default">
                      <Link to="/studentdetails">View More</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default StudentOverview;
