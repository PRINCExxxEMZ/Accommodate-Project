import React, { useState } from "react";
import img from '../Assest/Login-img.jpg'
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from "react-icons/fa";


const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");
  return (
        <>
                                                            {/* Login Section  */}
            <section className='w-full h-screen flex overflow-hidden'>
                                                                {/* Login img  */}
            <div className='hidden md:w-6/12 md:block lg:visible '>
                <h2 className='text-white font-bold text-xl tracking-tight absolute z-50 m-10'>Accommdate</h2>
                <img src={img} className='w-full h-full object-cover overflow-hidden'/>
            </div>


                                                                {/* Login Details  */}
            <div className='lg:w-5/12 visible md:w-5/12 md:visible  mx-auto'>
            <div className='w-full h-screen px-10 flex flex-col'>
                <div className='w-full h-[800px] flex justify-center items-center'>
                    <div className=' flex flex-col gap-[30px]'>    
                
                        <div className='flex flex-col gap-3'>
                            <Link to='/register' className='text-sm bg-[#0BA75A] py-1 px-2 rounded-full text-center text-white font-semibold w-[80px] mb-10  hover:translate-y-2 hover:transition-transform'>Sign Up</Link>
                            <div class=" text-zinc-800 text-[25px] font-semibold font-['Inter'] leading-[38.09px]">Welcome back to School</div>
                        </div>
                        <div className='flex flex-col pt-[20px] gap-9'>
                            <div className='flex flex-col gap-2'>
                                <p className='text-[14px] text-[#425466]'>Verified email / Matric number / Jamb number  </p>
                                <input type="text" placeholder='adminbouesti@gmail.com' className='w-[280px] px-4 py-2 placeholder-sm rounded-md shadow outline-none'/>
                            </div>
                                                               
                                                                {/* Password section  */}
                             <div className='flex flex-col gap-2'>
                                <p className='text-[14px] text-[#425466]'>Password</p>
                                <div className="relative">
                                     <input type={showPassword ? "text" : "password" }
                                        placeholder='*****************' 
                                        required 
                                        value={password}
                                        onChange={(ev) => setPassword(ev.target.value)}
                                        className='w-full  px-4 py-2 placeholder-sm rounded-md shadow outline-none' />
                                     
                                     <button type="button" 
                                         onClick={() => setShowPassword(!showPassword)}
                                         className="absolute right-2 top-4 text-gray-500 hover:text-gray-900">
                                                 {showPassword ? <FaEyeSlash /> : <FaEye />} 
                                    </button>
                                </div>
                            </div>
                            <Link to ='/adminlogin' className='text-sm text-[#0BA75A]'>Admin</Link>
                            <Link to='/' className='py-3 bg-[#0BA75A] text-white font-semibold text-sm rounded-[10px] text-center hover:bg-[#1d623f] hover:translate-y-2 hover:transition-transform'>Login</Link>
                           
                        </div>

                        <div className='flex flex-col items-center gap-[30px]'>
                            <div class="text-center text-slate-500 text-[10px] font-normal font-['Inter']">or do it via other accounts</div>
                            <div className='flex gap-5'>
                                <div className='w-[50px] h-[50px] shadow rounded-[5px] flex items-center justify-center cursor-pointer'>
                                    <FcGoogle size={24}/>
                                </div>
                                <div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
            </section>
        </>
  )
}

export default Login
