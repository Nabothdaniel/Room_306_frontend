import React from "react";

const EscortBioEdit = ({ bioClass, formData, handleChange }) => {
  return (
    <div className={`bg-[#1E1E1E] ${bioClass} rounded-xl pb-8 py-5 px-7`}>
      <h2 className="md:text-2xl text-[18px] text-white font-semibold">
        Body Measurement
      </h2>

      <div className="grid md:grid-cols-2 pt-6 gap-4">
        <label className="text-white flex flex-col" htmlFor="Weight">
          <span className="font-semibold pb-1">
            Weight<span className="text-[#E9CB50]">*</span>
          </span>
          <div className=" w-[100%] placeholder-[#102127] bg-[#F0F2F5] text-[#102127] rounded-xl outline-none px-4">
            <select
              className="w-[100%] bg-[#F0F2F5] py-[10px] md:py-[14px] outline-none"
              name="Weight"
              id="Weight"
              value={formData.weight}
            >
              <option value=""></option>
              <option>HetroSexual(Straight)</option>
              <option>Bisexual</option>
              <option>Lesian</option>
              <option>Gay</option>
              <option>Trans-Sexual</option>
              <option>Mistress(Domination)</option>
              <option>Master(Domination)</option>
            </select>
          </div>
        </label>
        <label className="text-white flex flex-col" htmlFor="height">
          <span className="font-semibold pb-1">
            Height<span className="text-[#E9CB50]">*</span>
          </span>
          <div className=" w-[100%] placeholder-[#102127] bg-[#F0F2F5] text-[#102127] rounded-xl outline-none px-4">
            <select
              className="w-[100%] bg-[#F0F2F5] py-[10px] md:py-[14px] outline-none"
              name="height"
              id="height"
            >
              <option value=""></option>
              <option>HetroSexual(Straight)</option>
              <option>Bisexual</option>
              <option>Lesian</option>
              <option>Gay</option>
              <option>Trans-Sexual</option>
              <option>Mistress(Domination)</option>
              <option>Master(Domination)</option>
            </select>
          </div>
        </label>
        <label className="text-white flex flex-col" htmlFor="ethnicity">
          <span className="font-semibold pb-1 ">
            Ethnicity<span className="text-[#E9CB50]">*</span>
          </span>
          <div className=" w-[100%] placeholder-[#102127] bg-[#F0F2F5] text-[#102127] rounded-xl outline-none px-4">
            <select
              className="w-[100%] bg-[#F0F2F5] py-[10px] md:py-[14px] outline-none"
              name="ethnicity"
              id="ethnicity"
              value={formData.ethnicity}
            >
              <option value="">Your Ethnicity</option>
              <option>All</option>
              <option>Asian</option>
              <option>Black</option>
              <option>Indian</option>
              <option>Latino</option>
              <option>Mid Eastern</option>
              <option>Mix Race</option>
              <option>Other</option>
              <option>Others</option>
              <option>White</option>
            </select>
          </div>
        </label>
        <label className="text-white flex flex-col" htmlFor="bust-size">
          <span className="font-semibold pb-1">
            Bust Size<span className="text-[#E9CB50]">*</span>
          </span>
          <div className=" w-[100%] placeholder-[#102127] bg-[#F0F2F5] text-[#102127] rounded-xl outline-none px-4">
            <select
              className="w-[100%] bg-[#F0F2F5] py-[10px] md:py-[14px] outline-none"
              name="bust-size"
              id="bust-size"
              value={formData.bust_size}
            >
              <option value="">Choose here</option>
              <option>All</option>
              <option>Enormous(E+)</option>
              <option>Large(C-cup)</option>
              <option>Large(D-cup)</option>
              <option>Medium(B-cup)</option>
              <option>None</option>
              <option>Small A</option>
              <option>Very Large(DD-cup)</option>
              <option>Very Small</option>
            </select>
          </div>
        </label>
        <label className="text-white flex flex-col" htmlFor="looks">
          <span className="font-semibold pb-1">
            Looks<span className="text-[#E9CB50]">*</span>
          </span>
          <div className=" w-[100%] placeholder-[#102127] bg-[#F0F2F5] text-[#102127] rounded-xl outline-none px-4">
            <select
              className="w-[100%] bg-[#F0F2F5] py-[10px] md:py-[14px] outline-none"
              name="looks"
              id="looks"
              value={formData.looks}
            >
              <option value="">Choose here</option>
              <option>All</option>
              <option>Average</option>
              <option>Corporate type</option>
              <option>Dominatrix</option>
              <option>Eye Candy</option>
              <option>Goddess</option>
              <option>Naugthy Teacher</option>
              <option>PornStar</option>
              <option>Pretty Boy with Red lips</option>
              <option>Sexy</option>
              <option>Sexy Tranny</option>
              <option>Slutty Nurse</option>
              <option>Stripper</option>
            </select>
          </div>
        </label>
        <label className="text-white flex flex-col" htmlFor="build">
          <span className="font-semibold pb-1">
            Build<span className="text-[#E9CB50]">*</span>
          </span>
          <div className=" w-[100%] placeholder-[#102127] bg-[#F0F2F5] text-[#102127] rounded-xl outline-none px-4">
            <select
              className="w-[100%] bg-[#F0F2F5] py-[10px] md:py-[14px] outline-none"
              name="build"
              id="build"
              value={formData.build}
            >
              <option value="">Choose here</option>
              <option>All</option>
              <option>Athletic</option>
              <option>Chubby</option>
              <option>Curvy</option>
              <option>Elegant</option>
              <option>Fat</option>
              <option>Fluffy</option>
              <option>Gym Buddy</option>
              <option>Heavy</option>
              <option>Huge</option>
              <option>Muscular</option>
              <option>Regular</option>
              <option>Robust</option>
              <option>Skinny</option>
              <option>Slender</option>
              <option>Slim</option>
            </select>
          </div>
        </label>
      </div>
    </div>
  );
};

export default EscortBioEdit;
