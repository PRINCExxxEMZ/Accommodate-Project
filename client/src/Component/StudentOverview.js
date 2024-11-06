import React from 'react'
import { FiSearch } from "react-icons/fi";
import { Link } from 'react-router-dom';

const StudentOverview = () => {
  return (
      <>
      
      <section className='pt-[100px] mx-5 md:mx-10 lg:mx-10'> 
        <div className='md:flex md:justify-between'>
            <h1 className='font-semibold text-[#2b2d3a] text-[20px] md:text-[30px] mb-5'>Student Overview</h1>
              <div className='flex items-center gap-x-5 mb-5'>
                 <input type='text' placeholder='Matric Number' className='bg-[#E7F6EE]  text-[#2b2d3a]  w-[250px] p-2 border-none rounded-md' />
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
                    Stdent Matric Or Registration Number
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
                <tr>
                  <td className="px-5 py-5 border-2 border-gray-200 bg-white text-sm">
                    1
                  </td>
                  <td className="px-5 py-5 border-2 border-gray-200 bg-white text-sm">
                  SLT/12/3322
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
                  <Link to= '/studentdetails'>View More</Link> 
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-5 border-2 border-gray-200 bg-white  text-sm">
                    2
                  </td>
                  <td className="px-5 py-5 border-2 border-gray-200 bg-white text-sm">
                  Acc/12/3329
                  </td>
                  <td className="px-5 py-5 border-2 border-gray-200 bg-white text-sm">
                    2024
                  </td>
                  <td className="px-5 py-5 border-2 border-gray-200 bg-white text-sm">
                  None
                  </td>
                  <td className="px-5 py-5 border-2 border-gray-200 bg-white text-sm">
                  60,000.00
                  </td>
                  <td className="px-5 py-5 border-2 border-gray-200 bg-white text-sm">
                  No Action
                  </td>
                  <td className="px-5 py-5 border-2 border-gray-200 bg-white text-[#CFA146] text-sm hover:bg-[#1d623f] hover:text-white hover:cursor-default">
                  View More
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-5 border-2 border-gray-200 bg-white text-sm">
                    3
                  </td>
                  <td className="px-5 py-5 border-2 border-gray-200 bg-white text-sm">
                  COM/12/1329
                  </td>
                  <td className="px-5 py-5 border-2 border-gray-200 bg-white text-sm">
                    2024
                  </td>
                  <td className="px-5 py-5 border-2 border-gray-200 bg-white text-sm">
                  Hall B, Female Hostel, Room 13, Top-Buck2
                  </td>
                  <td className="px-5 py-5 border-2 border-gray-200 bg-white text-sm">
                  60,000.00
                  </td>
                  <td className="px-5 py-5 border-2 border-gray-200 bg-white text-sm">
                  Reserved
                  </td>
                  <td className="px-5 py-5 border-2 border-gray-200 bg-white text-[#CFA146] text-sm hover:bg-[#1d623f] hover:text-white hover:cursor-default">
                  View Moree
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-5 border-2 border-gray-200 bg-white text-sm">
                    4
                  </td>
                  <td className="px-5 py-5 border-2 border-gray-200 bg-white text-sm">
                  MCB/12/3429
                  </td>
                  <td className="px-5 py-5 border-2 border-gray-200 bg-white text-sm">
                    2024
                  </td>
                  <td className="px-5 py-5 border-2 border-gray-200 bg-white text-sm">
                  Hall D, Male Hostel, Room 13, Top-Buck2
                  </td>
                  <td className="px-5 py-5 border-2 border-gray-200 bg-white text-sm">
                  60,000.00
                  </td>
                  <td className="px-5 py-5 border-2 border-gray-200 bg-white text-sm">
                  Booked
                  </td>
                  <td className="px-5 py-5 border-2 border-gray-200 bg-white text-[#CFA146] text-sm hover:bg-[#1d623f] hover:text-white hover:cursor-default">
                  Veiw More
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

export default StudentOverview
