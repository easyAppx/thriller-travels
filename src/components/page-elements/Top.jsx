import React from 'react'
import Button from '../widgets/Button'

const Top = () => {
  return (
    <div className="w-fit items-center justify-center">
      <div className="bg-white rounded-[32px] shadow-md p-8 w-fit">
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1">
            <ul
              className="flex w-[350px] gap-3 justify-around bg-[#E1ECEB] capitalize
                text-[#3D5654] py-3 px-4 pr-8 leading-tight rounded-[42px]"
            >
              <li className="focus:border-gray-500">NEW YORK (JFK)</li>
              <li className="">MUMBAI (BOM)</li>
            </ul>
          </div>

          <div className="flex justify-around gap-4">
            <div className="col-span-1">
              <ul
                className="flex w-fit bg-[#E1ECEB] capitalize
                text-[#3D5654] py-3 px-6 leading-tight rounded-[42px]"
              >
                <li className="text-center flex justify-center">29 JULY 2019</li>
              </ul>
            </div>
            <div className="col-span-1">
              <ul
                className="flex w-fit bg-[#E1ECEB] capitalize
                text-[#3D5654] py-3 px-6 leading-tight rounded-[42px]"
              >
                <li className="text-center flex justify-center">2 Traveller</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="col-span-1">
            <ul
              className="flex w-[350px] gap-3 justify-around bg-[#E1ECEB] capitalize
                text-[#3D5654] py-3 px-4 pr-8 leading-tight rounded-[42px]"
            >
              <li className="bg-[#3D5654] text-[#FFF] bg-cover rounded-3xl py-[0.7rem] px-5 mt-[-0.7rem] absolute ml-[-15rem]">
                One Way
              </li>
              <li className="pl-20">Round Trip</li>
              <li className="">Multi City</li>
            </ul>
          </div>

          <div className="flex flex-wrap justify-around">
            <div className="col-span-1">
              <ul
                className="flex w-fit bg-[#E1ECEB] capitalize
                text-[#3D5654] py-3 px-6 leading-tight rounded-[42px]"
              >
                <li className="text-center flex justify-center">First Class</li>
              </ul>
            </div>

            <div className="col-span-1">
              <Button
                type="submit"
                variant="full"
                size="md"
                className="hover:shadow-light transition-all duration-300 ease-in-out bg-standout"
              >
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Top
