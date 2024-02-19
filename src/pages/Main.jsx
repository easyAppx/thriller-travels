import React from 'react'
import { Sidebar, Top, FlightCard } from '../components/page-elements'
import { FlightsInfo } from '../assets/utility'
import Flights from '../components/layouts/Flights'
import Button from '../components/widgets/Button'

const Main = () => {
  return (
    <div className="w-[80%] mx-auto py-[4rem] px-[6rem]"
    // style={{
    //   background: `
    //     radial-gradient(circle, transparent 40%, #ffed4b 40%, #ffed4b 45%, blue 45%, blue 55%, transparent 55%),
    //     radial-gradient(circle, transparent 40%, #ffed4b 40%, #ffed4b 45%, blue 45%, blue 55%, transparent 55%)
    //   `,
    // }}
    >
      <div
        className="w-[30rem] h-[30rem] top-[-8rem] left-[-5rem] rounded-full fixed"
        style={{
          background: `linear-gradient(135deg, #D6A217 0%, #D6A217 30%)`,
          zIndex: 0,
        }}
      />
      <div className="relative bg-[#E1ECEB] py-6 px-3 rounded-3xl w-fit mx-auto">
        <div className="items-center z-50 relative grid" style={{ zIndex: 100 }}>
          <div className="w-full flex px-4 gap-6">

            <div className="mt-[-1.5rem] ml-[-1.7rem]">
              <Sidebar />
            </div>

            <Top />
          </div>

          <div className="max-w-full mt-[-35rem] grid grid-cols-4">
            <div className="ml-2 mr-4 col-start-2 col-span-3">
              <div className='mb-2 flex justify-between'>
                <h2 className='text-lg text-[#3D5654] text-left font-semibold p-2'>
                  RESULT ({FlightsInfo.length})
                </h2>

                <div className="flex gap-3 mb-3">
                  <Button
                    type="submit"
                    variant="full"
                    size="sm"
                    className="text-[#3D5655] bg-[#FFFFFF] py-0"
                  >
                    Filter
                  </Button>

                  <Button
                    type="submit"
                    variant="full"
                    size="sm"
                    className="text-[#3D5655] bg-[#FFFFFF] py-0"
                  >
                    Ticket of Class

                    <div className="text-2xl pl-4 flex text-[#3D5654] cursor-pointer items-center">
                      <ion-icon name={'chevron-down-outline'}></ion-icon>
                    </div>
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-3 justify-between gap-5">
                <div className="grid grid-cols-1 col-span-2">
                  {FlightsInfo.map((flightsInfo, index) => (
                    <Flights key={index} flightsInfo={flightsInfo} isLast={index === FlightsInfo.length - 1} />
                  ))}
                </div>

                <div className="col-span-1">
                  <FlightCard
                    from="JFK"
                    via="NON-STOP"
                    to="BOM"
                    price={500}
                    pricetwo={2500}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main