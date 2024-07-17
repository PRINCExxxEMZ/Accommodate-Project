import React from 'react'
import img from '../Assest/01 (6).jpg'

const HostelHall = () => {
  return (
    <>
    <section className='pt-[100px] mx-5 md:mx-10 lg:mx-10'>
      <h2 className='text-[18px] font-semibold mb-5'>Hostel Halls</h2>
      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-8 gap-x-8'>

                                                                
                                                             
                                                                 {/* Hall cards  */}
      <div className='bg-white shadow-md rounded-lg overflow-hidden lg:gap-x-5 p-5 hover:shadow-[#0BA75A]'>
              <img src={img} className=' rounded-md'/>
              <div>
                  <h1 className='font-semibold text-[14px] text-[#CFA146] mt-4'>Hall A</h1>
                  <h2 className='text-[13px] font-medium text-[#0BA75A]'>Male Hostel</h2>
                  <div className='bg-[#0BA75A] text-[14px] text-white px-3 py-1 rounded-md mt-4 text-center  hover:cursor-pointer cursor-default'>Book Now</div>
              </div>
            </div>  

      <div className='bg-white shadow-md rounded-lg overflow-hidden lg:gap-x-5 p-5  hover:shadow-[#0BA75A]'>
              <img src={img} className=' rounded-md'/>
              <div>
                  <h1 className='font-semibold text-[14px] text-[#CFA146] mt-4'>Hall B</h1>
                  <h2 className='text-[13px] font-medium text-[#0BA75A]'>Male Hostel</h2>
                  <div className='bg-[#0BA75A] text-[14px] text-white px-3 py-1 rounded-md mt-4 text-center hover:cursor-pointer cursor-default'>Book Now</div>
              </div>
            </div>  

      <div className='bg-white shadow-md rounded-lg overflow-hidden lg:gap-x-5 p-5  hover:shadow-[#0BA75A]'>
              <img src={img} className=' rounded-md'/>
              <div>
                  <h1 className='font-semibold text-[14px] text-[#CFA146] mt-4'>Hall C</h1>
                  <h2 className='text-[13px] font-medium text-[#0BA75A]'>Female Hostel</h2>
                  <div className='bg-[#0BA75A] text-[14px] text-white px-3 py-1 rounded-md mt-4 text-center hover:cursor-pointer cursor-default'>Book Now</div>
              </div>
            </div>  

      <div className='bg-white shadow-md rounded-lg overflow-hidden lg:gap-x-5 p-5  hover:shadow-[#0BA75A]'>
              <img src={img} className=' rounded-md'/>
              <div>
                  <h1 className='font-semibold text-[14px] text-[#CFA146] mt-4'>Hall D</h1>
                  <h2 className='text-[13px] font-medium text-[#0BA75A]'>Female Hostel</h2>
                  <div className='bg-[#0BA75A] text-[14px] text-white px-3 py-1 rounded-md mt-4 text-center hover:cursor-pointer cursor-default'>Book Now</div>
              </div>
            </div>  

      <div className='bg-white shadow-md rounded-lg overflow-hidden lg:gap-x-5 p-5  hover:shadow-[#0BA75A]'>
              <img src={img} className=' rounded-md'/>
              <div>
                  <h1 className='font-semibold text-[14px] text-[#CFA146] mt-4'>Hall E</h1>
                  <h2 className='text-[13px] font-medium text-[#0BA75A]'>Female Hostel</h2>
                  <div className='bg-[#0BA75A] text-[14px] text-white px-3 py-1 rounded-md mt-4 text-center hover:cursor-pointer cursor-default'>Book Now</div>
              </div>
            </div>  

      </div>
    </section>
    </>
  )
}

export default HostelHall
