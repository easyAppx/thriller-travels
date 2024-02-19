import React from 'react'
import { Link } from 'react-router-dom'
import { DASHBOARD } from '../../routes/CONSTANTS'
import dp from '../../assets/images/dp.png'
import { dpImages } from '../../assets/utility'
import coordinates from '../../assets/images/thriller_travels_cordinates.png'

const sidebar = () => {

  return (
    <div>
      <div className="bg-[#3D5654] text-white items-center mx-auto justify-center grid w-64 h-fit rounded-l-3xl rounded-[40px] px-4 py-6">

        <div className='py-4 bg-[#3D5654] border-[#3D5654] border-b-[1px] justify-center items-center grid'>
          <div className="items-center justify-center flex">
            <img src={dp} alt={dp} className="w-full h-full object-contain rounded-xl" />
          </div>

          <div className="ml-3 text-2xl font-bold">ALEX JOHNSON</div>
          <div className="ml-3 text-white-400 mb-4">alex.johnson@gmail.com</div>
        </div>

        <ul className='mt-4 items-center justify-center grid mb-3'>
          <li className="mb-4">
            <Link to={DASHBOARD} className="block text-white px-6 py-1 rounded">
              DASHBOARD
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/flights" className="block text-[#3D5654] hover:text-white bg-[#E1ECEB] px-8 py-3 rounded-full">
              FLIGHTS
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/wallet" className="block text-white px-6 py-1 rounded">
              WALLET
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/reports" className="block text-white px-6 py-1 rounded">
              REPORTS
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/statistics" className="block text-white px-6 py-1 rounded">
              STATISTICS
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/settings" className="block text-white px-6 py-1 rounded">
              SETTINGS
            </Link>
          </li>
          <li className='ml-[1.5rem]'>
            <div className="text-[#D6A217] text-sm">ACTIVE USERS</div>
          </li>
          <li className="items-center justify-center flex py-8 ml-1 relative">
            {dpImages.map((image, index) => (
              <img key={index} src={image.image} alt={coordinates} 
                className="rounded-full w-12 h-12 border-[2px] border-[#3D5654] ml-[-1rem] gap-2"
              />
            ))}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default sidebar
