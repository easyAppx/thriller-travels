import React from 'react'
import Button from '../widgets/Button';

const Flights = ({ flightsInfo, isLast }) => {

  const { image, flightName, price, duration, path, depart, departTime, arriveTime, arrive, } = flightsInfo;

  return (
    <div className="py-0">
      <div className="bg-white text-[#3D5654] px-5 py-3 w-full mx-auto items-center justify-between rounded-2xl shadow-lg flex">

        <div className="items-center justify-center">
          <img src={image} alt={flightName} className="w-16 h-14 object-contain rounded-xl" />
        </div>

        <div className='justify-between text-[#3D5654]'>
          <p className="text-lg text-secondary">{depart}</p>
          <p className="text-[12px] text-secondary font-extralight">{departTime}</p>
        </div>

        <div className='justify-between text-[#3D5654] pt-4'>
          <p className="text-[12px] text-secondary font-semibold">{flightName}</p>
          <p className="text-[12px] text-secondary font-extralight">{duration}</p>
          <p className="text-[13px] text-[#3D5654] mb-4">{path}</p>
        </div>

        <div className='justify-between text-[#3D5654]'>
          <p className="text-lg text-secondary">{arrive}</p>
          <p className="text-[12px] text-secondary font-extralight">{arriveTime}</p>
        </div>

        <div className='justify-between text-[#3D5654]'>
          <p className="text-[12px] font-semibold ml-[3rem] mb-2">{price}</p>

          <Button
            type="submit"
            variant="full"
            size="sm"
            className=""
          >
            Book Now
          </Button>
        </div>
      </div>

      {!isLast && (
        <div>
          <hr className="w-[95%] mx-auto border-dashed border-[1px] border-gray-400" />
          <div className="w-3 h-5 bg-[#E1ECEB] rounded-r-3xl absolute mt-[-0.7rem]"/>
          <div className="w-3 h-5 bg-[#E1ECEB] rounded-l-3xl absolute right-[17.3rem] mt-[-0.7rem]"/>
        </div>
      )}
    </div>
  )
}

export default Flights