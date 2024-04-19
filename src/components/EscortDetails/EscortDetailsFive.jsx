import React from "react";
import Avatar from "../../images/avatar2.png";

const EscortDetailsFive = () => {
  return (
    <div className="rounded-xl md:px-16 px-4 md:pl-12 pt-14 pb-10 bg-[#1E1E1E] ">
      <div className="pt-16">
        <img className="w-[190px] sm:w-[280px] mx-auto" src={Avatar} alt="" />

        <div className="text-white md:px-8 pt-20 font-semibold">
          <h3 className="md:text-lg pb-4">Female Escorts</h3>
          <ol className=" unorder list-disc pl-8 text-white font-semibold">
            <li>Upload At least x 4 photos</li>
            <li>
              Male Clients tend to like Pics of female escorts in pants and
              bras, holiday pictures, and nice casual picture in beautiful
              background.
            </li>
            <li>You can cover your face with a sticker.</li>
            <li>But the pics MUST BE OF YOU !!!- NO FAKE PIC!!</li>
            <li>
              We do NOT tolerate Fake pictures. That will result to instant
              disqualification and ban. Not even a second chance. Don't say you
              weren't warned⚠️.
            </li>
            <li>Do NOT use kids photo for face cover, use emoji😊 instead .</li>
          </ol>
          <div className="bg-[#676767]  mt-8 h-[280px] md:max-w-[300px]  rounded-xl "></div>
          <div className="mt-4 flex justify-between md:block">
            <button className="bg-[#CD2727] mr-5 w-[100%] py-4 md:w-[120px] font-medium rounded-xl">
              Delete
            </button>
            <button className="bg-[#E9CB50] w-[100%] text-[#171717] py-4 md:w-[120px] font-medium rounded-xl">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EscortDetailsFive;
