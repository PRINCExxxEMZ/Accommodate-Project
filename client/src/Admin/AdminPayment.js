import React from 'react'
import Navbar from './Navbar';
import { FiSearch } from "react-icons/fi";


const AdminPayment = () => {
  return (
    <>

                                                            {/* Navbar Component  */}
    <Navbar/>

                                                            {/* Payment Table  */}

        <section className='pt-[100px] mx-5 md:mx-10 lg:mx-10'> 
        <div className='md:flex md:justify-between'>
            <h1 className='font-semibold text-[#2b2d3a] text-[20px] md:text-[30px] mb-5'>Hostel Payment</h1>
              <div className='flex items-center gap-x-5 mb-5'>
                 <input type='text' placeholder='Form Number' className='bg-[#E7F6EE]  text-[#2b2d3a]  w-[250px] p-2 border-none rounded-md' />
                 <FiSearch className='text-[#CFA146] text-[25px]'/>
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
                    Form Number
                  </th>
                  <th className="px-5 py-5 border-gray-200 bg-[#E7F6EE] text-left text-xs font-semibold text-[#2b2d3a] uppercase tracking-wider">
                    Session
                  </th>
                  <th className="px-20 py-5 border-gray-200 bg-[#E7F6EE] text-left text-xs font-semibold text-[#2b2d3a] uppercase tracking-wider">
                    Hostel
                  </th>
                  <th className="px-5 py-3 border-gray-200 bg-[#E7F6EE] text-left text-xs font-semibold text-[#2b2d3a] uppercase tracking-wider">
                    Amount Paid
                  </th>
                  <th className="px-5 py-3 border-gray-200 bg-[#E7F6EE] text-left text-xs font-semibold text-[#2b2d3a] uppercase tracking-wider">
                    Accomodation Status
                  </th>
                  <th className="px-5 py-3 border-gray-200 bg-[#E7F6EE] text-left text-xs font-semibold text-[#2b2d3a] uppercase tracking-wider">
                    Receipt
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-5 py-5 border-2 border-gray-200 bg-white text-sm">
                    1
                  </td>
                  <td className="px-5 py-5 border-2 border-gray-200 bg-white text-sm">
                  Accommodate/12/3322
                  </td>
                  <td className="px-5 py-5 border-2 border-gray-200 bg-white text-sm">
                    2024
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
                  Download
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-5 border-2 border-gray-200 bg-white  text-sm">
                    2
                  </td>
                  <td className="px-5 py-5 border-2 border-gray-200 bg-white text-sm">
                  Accommodate/12/3329
                  </td>
                  <td className="px-5 py-5 border-2 border-gray-200 bg-white text-sm">
                    2024
                  </td>
                  <td className="px-5 py-5 border-2 border-gray-200 bg-white text-sm">
                  Hall C, Male Hostel, Room 13, Top-Buck2
                  </td>
                  <td className="px-5 py-5 border-2 border-gray-200 bg-white text-sm">
                  #50,000.00
                  </td>
                  <td className="px-5 py-5 border-2 border-gray-200 bg-white text-sm">
                  Admitted
                  </td>
                  <td className="px-5 py-5 border-2 border-gray-200 bg-white text-[#CFA146] text-sm hover:bg-[#1d623f] hover:text-white hover:cursor-default">
                  Download
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-5 border-2 border-gray-200 bg-white text-sm">
                    3
                  </td>
                  <td className="px-5 py-5 border-2 border-gray-200 bg-white text-sm">
                  Accommodate/12/1329
                  </td>
                  <td className="px-5 py-5 border-2 border-gray-200 bg-white text-sm">
                    2024
                  </td>
                  <td className="px-5 py-5 border-2 border-gray-200 bg-white text-sm">
                  Hall B, Female Hostel, Room 13, Top-Buck2
                  </td>
                  <td className="px-5 py-5 border-2 border-gray-200 bg-white text-sm">
                  #50,000.00
                  </td>
                  <td className="px-5 py-5 border-2 border-gray-200 bg-white text-sm">
                  Admitted
                  </td>
                  <td className="px-5 py-5 border-2 border-gray-200 bg-white text-[#CFA146] text-sm hover:bg-[#1d623f] hover:text-white hover:cursor-default">
                  Download
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-5 border-2 border-gray-200 bg-white text-sm">
                    4
                  </td>
                  <td className="px-5 py-5 border-2 border-gray-200 bg-white text-sm">
                  Accommodate/12/3429
                  </td>
                  <td className="px-5 py-5 border-2 border-gray-200 bg-white text-sm">
                    2024
                  </td>
                  <td className="px-5 py-5 border-2 border-gray-200 bg-white text-sm">
                  Hall D, Male Hostel, Room 13, Top-Buck2
                  </td>
                  <td className="px-5 py-5 border-2 border-gray-200 bg-white text-sm">
                  #50,000.00
                  </td>
                  <td className="px-5 py-5 border-2 border-gray-200 bg-white text-sm">
                  Admitted
                  </td>
                  <td className="px-5 py-5 border-2 border-gray-200 bg-white text-[#CFA146] text-sm hover:bg-[#1d623f] hover:text-white hover:cursor-default">
                  Download
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        </section>
    
    
    </>
  )
}

export default AdminPayment
