import React from 'react';
import flightImg from "../../assets/images/flightImg.png";

const FlightCard = ({ from, to, price, pricetwo, via }) => {

  return (
    <div className="bg-[#3D5654] rounded-2xl shadow-md p-4 py-3 text-white text-md">
      <div className="flex justify-between items-center mb-6 mt-3">
        <div className="text-lg mr-4">
          <p className='text-[12px]'>FROM</p>
          {from}
        </div>
        <div className="text-white text-[10px]">{via}</div>

        <div className="text-lg ml-4">
          <p className='text-[12px]'>TO</p>
          {to}
        </div>
      </div>

      <div className='w-full'>
        <img src={flightImg} alt="flightImg" />
      </div>

      <div className="flex justify-between text-white mb-6 text-[12px]">
        <h6 className='py-1 px-3 rounded-2xl bg-[#D6A217]'>NON STOP</h6>
        <h6 className='py-1 px-1'>ONE STOP</h6>
        <h6 className='py-1 px-1'>MORE STOP</h6>
      </div>

      <div className="mt-2">
        <div className="text-white text-[12px]">PRICE</div>

        <div className='justify-around gap-10 my-4 relative'>
          <p className='border-gray-400 border-b w-full h-[0.1px]' />
          <div className='w-3 h-3 rounded-full bg-[#D6A217] absolute top-[-5px] left-5'></div>
          <div className='w-3 h-3 rounded-full bg-[#D6A217] absolute top-[-5px] right-8'></div>
        </div>
      </div>

      <div className='justify-around gap-10 my-4 relative'>
        <div className='w-0 h-0 bg-[#D6A217] border-[5px] border-solid border-transparent border-t-[10px] border-r-[10px] transform rotate-45 absolute top-[5px] left-5'></div>
        <div className='w-0 h-0 bg-[#D6A217] border-[5px] border-solid border-transparent border-t-[10px] border-r-[10px] transform -rotate-45 absolute top-[5px] right-7'></div>
      </div>


      <div className="flex items-center justify-between mb-10 mt-[25px] z-20 relative">
        <div className="text-[12px] ml-1 mt-1 px-3 rounded-2xl bg-[#D6A217]">${price}</div>
        <div className="text-[12px] mr-2 mt-1 px-3 rounded-2xl bg-[#D6A217]">${pricetwo}</div>
      </div>
    </div>
  );
};

export default FlightCard;