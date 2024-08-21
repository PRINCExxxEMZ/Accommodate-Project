import React from 'react'
import Navbar from './Navbar';
import { IoIosAddCircle } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const CreateHostel = () => {
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleFileChange = (event) => {
      setSelectedFiles([...event.target.files]);
    };
  return (
   <>

                                                    {/* Navbar section  */}
   <Navbar/>

{/*----------------------------------------------------------- Create Hostel Section --------------------------------------------------------------------------------- */}
            <section className='pt-[100px] mx-5 md:mx-10 lg:mx-[100px]'>
            <h1 className='font-semibold text-[#2b2d3a] text-[20px] md:text-[30px] mb-10'>Create Hostel</h1>

                    <div className='flex flex-col gap-2'>
                        <p className='text-[14px] text-[#425466] mb-2'>Hostel Name</p>
                        <input type="text" placeholder='Hall A'  className='w-full mb-7  px-4 py-2 placeholder-sm rounded-md shadow outline-none'/>
                    </div>

                    <div>
                      <p className='text-[14px] text-[#425466] mb-2'>Gender</p>
                         <select
                            id="dropdown"
                            className="block w-full text-[#2b2d3a]  p-3 border-none rounded-md shadow leading-tight focus:outline-none focus:shadow-outline my-5">
                            <option value="" disabled selected hidden>Gender</option>
                            <option>Male Hostel</option>
                            <option>Female Hostel</option>
                            <option>Both</option>
                        </select>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <p className='text-[14px] text-[#425466] mb-2'>Number of Rooms</p>
                        <input type="number" placeholder='100'  className='w-full mb-7 px-4 py-2 placeholder-sm rounded-md shadow outline-none'/>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <p className='text-[14px] text-[#425466] mb-2'>Room Cost</p>
                        <input type="text" placeholder='60,000.00' className='w-full mb-7 px-4 py-2 placeholder-sm rounded-md shadow outline-none'/>
                    </div>

                                                            {/* Upload pic button  */}
                    <div className='mt-10 mb-10 md:flex justify-between items-center'>

                        <div className="mb-10">
                            <input
                                type="file"
                                multiple
                                accept="image/*"
                                onChange={handleFileChange}
                                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-sm cursor-pointer bg-gray-50"
                            />
                            {selectedFiles.length > 0 && (
                                <div className="top">
                                <h2 className="text-lg font-semibold">Selected Images</h2>
                                <ul className="list-disc list-inside">
                                    {selectedFiles.map((file, index) => (
                                    <li key={index}>{file.name}</li>
                                    ))}
                                </ul>
                                </div>
                            )}
                        </div>
                        
                        <div className='bg-[#0BA75A] text-white px-2 py-2  rounded-md hover:bg-[#1d623f] inline-flex items-center gap-x-4'>
                            <Link to='/adminhostel'>Create Hostel</Link>
                            <IoIosAddCircle className='text-[20px]' />
                        </div>

                    </div>
            </section>
   
   </>
  )
}

export default CreateHostel
