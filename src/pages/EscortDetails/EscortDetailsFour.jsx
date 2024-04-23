import React from 'react'
import Navbar from '../../components/Navbar'
import SideBar from '../../components/SideBar'

const EscortDetailsFour = () => {
  return (
    <div className="block md:flex overflow-x-clip max-w-[1740px] mx-auto">
      <SideBar />

      <div className="flex-1 md:w-[80%] px-4 pt-6 md:pt-14 md:px-10">
        <Navbar
          Headervalue={"Welcome to Room 306"}
          textValue={"Explore our escort at your own pace"}
        />

        <div className="md:py-8">
          <div className="flex justify-between items-center pb-6 pt-8">
            <h2 className="text-white py-4 text-2xl font-semibold">
              Escort Details
            </h2>

            <p className="text-white md:text-4xl text-3xl font-semibold">
              <span className="text-[#B29A9A] text-xl md:text-2xl">
                Step <span>1/</span>
              </span>
              6
            </p>
          </div>
          <div className="rounded-xl lg:px-10 md:px-7 px-4 py-6 md:pl-12 md:py-14 bg-[#1E1E1E] ">
                  </div>
              </div>
              </div>
    </div>
  )
}

export default EscortDetailsFour
