import React from 'react'
import img from '../Assest/Login-img.jpg'
import { Link } from 'react-router-dom';

const Register = () => {
  return (
        <>

                                                              {/* Sign Up Section  */}
       <section className='w-full h-screen flex overflow-hidden'>
                                                                {/* Sign Up img  */}
            <div className='hidden md:w-6/12 md:block lg:visible '>
                <h2 className='text-white font-bold text-xl tracking-tight absolute z-50 m-10'>Accommdate</h2>
                <img src={img} className='w-full h-full object-cover overflow-hidden'/>
            </div>


                                                                {/* Sign Up Details  */}
            <div className='lg:w-5/12 visible md:w-5/12 md:visible  mx-auto'>
            <div className='w-full h-screen px-10 flex flex-col'>
                <div className='w-full h-[800px] flex justify-center items-center'>
                    <div className=' flex flex-col gap-[30px]'>    
                
                        <div className='flex flex-col gap-3'>
                            <Link to='/login' className='text-sm bg-[#0BA75A] py-1 px-2 rounded-full text-center text-white font-semibold w-[80px] mb-2  hover:translate-y-2 hover:transition-transform'>Login</Link>
                            <div class=" text-zinc-800 text-[25px] font-semibold font-['Inter'] leading-[38.09px]">Welcome back to School</div>
                        </div>
                        <div className='flex flex-col pt-[20px] gap-9'>
                            <div className='flex flex-col gap-2'>
                                <p className='text-[14px] text-[#425466]'>School email  </p>
                                <input type="text" placeholder='adminbouesti@gmail.com' className='w-[280px] px-4 py-2 placeholder-sm rounded-md shadow outline-none'/>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <p className='text-[14px] text-[#425466]'>Matric number</p>
                                <input type="password" placeholder='COM/22/0500'  className='w-full  px-4 py-2 placeholder-sm rounded-md shadow outline-none'/>
                            </div>

                            <div className='flex flex-col gap-2'>
                                <p className='text-[14px] text-[#425466]'>Password</p>
                                <input type="password" placeholder='*****************'  className='w-full  px-4 py-2 placeholder-sm rounded-md shadow outline-none'/>
                            </div>

                            <div className='flex flex-col gap-2'>
                                <p className='text-[14px] text-[#425466]'>Comfirm Password</p>
                                <input type="password" placeholder='*****************'  className='w-full  px-4 py-2 placeholder-sm rounded-md shadow outline-none'/>
                            </div>
                            <Link to='/fresher' className='text-sm text-[#0BA75A]'>Fresher register</Link>
                            <Link to='/' className='py-3 bg-[#0BA75A] text-white font-semibold text-sm rounded-[10px] text-center hover:bg-[#1d623f]  hover:translate-y-2 hover:transition-transform'>Register</Link>
                           
                        </div>
                      
                    </div>
                </div>
            </div>
        </div>
            </section>
        
        
        
        
        </>
  )
}

export default Register
