import React, { useState, useEffect } from 'react';
import hallAImage from '../Assest/01 (6).jpg'; 
import hallBImage from '../Assest/01 (6).jpg';
import hallCImage from '../Assest/01 (6).jpg';
import hallDImage from '../Assest/01 (6).jpg';
import hallEImage from '../Assest/01 (6).jpg';

const HostelHalls = () => {
  const [selectedHall, setSelectedHall] = useState('Hall A');
  const [hallDetails, setHallDetails] = useState({
    title: 'Hall A',
    description:
      'Experience a vibrant community, cozy living spaces, and all the essentials for a great student life. Welcome to your home away from home.',
    features: [
      'Easy access to Water Source',
      'Includes a Cooking Area',
      '4 bedspace per room',
      'Includes a Convenient Store',
    ],
    image: hallAImage, // Default image for Hall A
  });

  useEffect(() => {
    // Update the hall details when selectedHall changes
    switch (selectedHall) {
      case 'Hall A':
        setHallDetails({
          title: 'Hall A',
          description:
            'Experience a vibrant community, cozy living spaces, and all the essentials for a great student life. Welcome to your home away from home.',
          features: [
            'Easy access to Water Source',
            'Includes a Cooking Area',
            '4 bedspace per room',
            'Includes a Convenient Store',
          ],
          image: hallAImage,
        });
        break;
      case 'Hall B':
        setHallDetails({
          title: 'Hall B',
          description:
            'Modern amenities with spacious rooms and top-notch facilities. Ideal for students looking for comfort and convenience.',
          features: ['Access to study rooms', '24/7 security', '5 bedspace per room', 'Includes Gym access'],
          image: hallBImage,
        });
        break;
      case 'Hall C':
        setHallDetails({
          title: 'Hall C',
          description:
            'Affordable and friendly atmosphere, with all the necessary amenities for a pleasant student experience.',
          features: [
            'Access to public transportation',
            'WiFi included',
            '3 bedspace per room',
            'Nearby shopping centers',
          ],
          image: hallCImage,
        });
        break;
      case 'Hall D':
        setHallDetails({
          title: 'Hall D',
          description:
            'Luxury accommodation with private rooms, study areas, and easy access to university facilities.',
          features: ['Private rooms', 'Access to gym', 'Cafeteria inside', 'Parking lot available'],
          image: hallDImage,
        });
        break;
      case 'Hall E':
        setHallDetails({
          title: 'Hall E',
          description:
            'Designed for social and academic success, with all modern comforts in a collaborative environment.',
          features: ['Collaborative spaces', 'Common study areas', '4 bedspace per room', 'Nearby entertainment spots'],
          image: hallEImage,
        });
        break;
      default:
        break;
    }
  }, [selectedHall]); // Runs every time `selectedHall` changes

  return (
    <section className=" mt-[100px] mx-6  items-center ">
      <div>
        <h2 className=" text-center lg:font-semibold text-[25px]">Hostel Halls</h2>
        <div className="lg:flex gap-x-2 mx-auto justify-center items-center grid grid-cols-3 ">
          <button
            className={`px-5 py-2 rounded-sm mt-7 ${selectedHall === 'Hall A' ? 'text-white bg-[#1d623f]' : 'text-[#1d623f] border border-[#1d623f]'}`}
            onClick={() => setSelectedHall('Hall A')}
          >
            Hall A
          </button>
          <button
            className={`px-5 py-2 rounded-sm mt-7 ${selectedHall === 'Hall B' ? 'text-white bg-[#1d623f]' : 'text-[#1d623f] border border-[#1d623f]'}`}
            onClick={() => setSelectedHall('Hall B')}
          >
            Hall B
          </button>
          <button
            className={`px-5 py-2 rounded-sm mt-7 ${selectedHall === 'Hall C' ? 'text-white bg-[#1d623f]' : 'text-[#1d623f] border border-[#1d623f]'}`}
            onClick={() => setSelectedHall('Hall C')}
          >
            Hall C
          </button>
          <button
            className={`px-5 py-2 rounded-sm mt-7 ${selectedHall === 'Hall D' ? 'text-white bg-[#1d623f]' : 'text-[#1d623f] border border-[#1d623f]'}`}
            onClick={() => setSelectedHall('Hall D')}
          >
            Hall D
          </button>
          <button
            className={`px-5 py-2 rounded-sm mt-7 ${selectedHall === 'Hall E' ? 'text-white bg-[#1d623f]' : 'text-[#1d623f] border border-[#1d623f]'}`}
            onClick={() => setSelectedHall('Hall E')}
          >
            Hall E
          </button>
        </div>

        {/* Hostel Details Section  */}
        <div className="mt-[100px] items-center md:flex lg:flex lg:px-[130px] justify-between">
          <div>
            <h3 className="lg:font-bold text-[28px]">{hallDetails.title}</h3>
            <p className="lg:w-[400px]">{hallDetails.description}</p>
            <ul>
              {hallDetails.features.map((feature, index) => (
                <div className='flex items-center gap-x-2 py-2'>
                  <div className='w-2 h-2 rounded-md border  border-[#CFA146]'></div>
                  <li key={index}>{feature}</li>
                </div>
              ))}
            </ul>
            <button className="border border-5 text-white px-5 py-2 my-5 rounded-sm mt-7 bg-[#1d623f] hover:translate-y-1 transition-transform">
              <a href="/hostel">Book Now</a>
            </button>
          </div>
          <div>
            <img src={hallDetails.image} alt={hallDetails.title} className="rounded-md" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HostelHalls;
