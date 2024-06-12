import React, { useState } from "react";
import SideBar from "../../components/SideBar";
import Navbar from "../../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { details } from "../../redux/UtilSlice";
import { useNavigate } from "react-router-dom";
import { useServicesQuery } from "../../redux/ApiSlice";
import Loading from "../../components/Loading";
import { useAddServicesMutation } from "../../redux/EscortApi";
import toast from "react-hot-toast";

const EscortDetailsThree = () => {
  const [formData, setFormData] = useState([]);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const { data, isLoading } = useServicesQuery();
  const navigate = useNavigate();
  const [addServices] = useAddServicesMutation();

  let services = [];
  const handleChange = (e) => {
    if (e.target.checked) {
      services.push(Number(e.target.id));
    } else if (e.target.checked == false) {
      services = services.filter((item) => item != Number(e.target.id));
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  const handleEscortThree = async () => {
    if (services.length >= 5) {
      setError("");
      try {
        const res = await addServices({ services }).unwrap();
        toast.success(res.message);
        navigate("/survey");
        window.location.reload(true);
      } catch (err) {
        console.log(err);
      }
    } else {
      setError("Select at least five services");
    }
  };

  const handleDelete = () => {
    let text =
      "Pressing Delete will cancel your account Creation\nAre you sure? if so press OK.";
    if (confirm(text) == true) {
      navigate("/");
      window.location.reload(true);
    } else {
    }
  };

  return (
    <div className="block md:flex overflow-x-clip max-w-[1740px] mx-auto">
      <SideBar />

      <div className="flex-1 md:w-[80%] px-4 pt-6 md:pt-14 md:px-10">
        <Navbar
          Headervalue={"Welcome to Room 306"}
          textValue={"Explore our escort at your own pace"}
        />

        <div className="md:py-8 pb-10">
          <div className="flex justify-between items-center md:pb-6 py-2 md:pt-8">
            <h2 className="text-white md:py-4  md:text-2xl font-semibold">
              Escort Details
            </h2>

            <p className="text-white md:text-4xl text-3xl font-semibold">
              <span className="text-[#B29A9A] md:text-2xl text-xl">
                Step <span>6/</span>
              </span>
              7
            </p>
          </div>
          <div className="rounded-xl md:px-10 px-8 lg:px-14 pt-6 md:py-12 pb-8 bg-[#1E1E1E] ">
            <h3 className="text-xl pb-6 font-semibold text-white">
              Services
              <p className="text-[15px] font-normal text-[#B29A9A]">
                Choose at least 5 or more services
              </p>
            </h3>

            <div className="grid md:grid-cols-2 text-white lg:grid-cols-3 gap-x-1 gap-y-3">
              {data.map((item, index) => {
                return (
                  <label key={index} className="checkContainer">
                    {item.name}
                    <input
                      onChange={handleChange}
                      type="checkbox"
                      name="services"
                      id={item.id}
                    />
                    <span className="checkmate"></span>
                  </label>
                );
              })}

              
            </div>
            <p className="py-1 text-[12px] text-red-500">{error}</p>
            <div className="mt-8 flex gap-x-3">
              <button
                onClick={handleDelete}
                className="bg-[#CD2727] text-white mr-5 w-[100%] py-3 md:w-[120px] font-medium rounded-xl"
              >
                Delete
              </button>
              <button
                onClick={handleEscortThree}
                className="bg-[#E9CB50] text-center block w-[100%] text-[#171717] py-3 md:w-[120px] font-medium rounded-xl"
              >
                Next
              </button>
            </div>
          </div>
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-x-16 md:gap-x-6 gap-y-8"></div> */}
        </div>
      </div>
    </div>
  );
};

export default EscortDetailsThree;
