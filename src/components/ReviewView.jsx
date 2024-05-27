import React from 'react'

const ReviewView = () => {
    

  return (
    <div className=" mt-12">
      <div className="flex text-white pt-10 pb-4">
        <img className="size-20 rounded-md" src={Blog} alt="" />
        <div className="ml-5">
          <h2 className="font-semibold md:text-xl text-base">Adam Fresh</h2>
          <p className="text-[12px] text-white/60">May 01, 2024 at 8:12 am</p>
          <p className="pt-2">The event is a great one</p>
        </div>
      </div>
    </div>
  );
}

export default ReviewView
