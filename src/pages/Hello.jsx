import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { details } from "../redux/UtilSlice";

const Hello = () => {
  const open = useSelector((state) => state.Util.userDetails);
  const dispatch = useDispatch();

  console.log(open);
  const he = "jakakak";
  const hel = "jsjsjs";
  const hh = "hhhh";
  const h = "jjj";
  const hl = "jaaja";

  return (
    <>
      <div
        onClick={() => dispatch(details({ he, hel, hh }))}
        className="bg-white w-[300px] hove mx-auto mt-32 rounded-xl h-[300px]"
      ></div>

      <div></div>

      <div
        onClick={() => dispatch(details({ h, hl, hh }))}
        className="bg-white w-[300px] hove mx-auto mt-32 rounded-xl h-[300px]"
      ></div>
    </>
  );
};

export default Hello;
