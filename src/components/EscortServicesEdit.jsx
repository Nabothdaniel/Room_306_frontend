import React, { useEffect, useState } from "react";
import { useServicesQuery } from "../redux/ApiSlice";
import Loading from "./Loading";
import { useAddServicesMutation } from "../redux/EscortApi";
import toast, { LoaderIcon } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const EscortServicesEdit = ({ serviceClass }) => {
  const users = JSON.parse(localStorage.getItem("details"));
  const { data, isLoading } = useServicesQuery();

  const [formData, setFormData] = useState([]);
  const [addServices] = useAddServicesMutation();
  const [error, setError] = useState("");
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setFormData([...users?.profile?.services?.map((item) => item.id)]);
  }, [data]);

  if (isLoading) {
    return <Loading />;
  }

  // let services = Array(...users?.services?.map((item) => item.id));
  const handleChange = (e) => {
    if (!formData?.includes(Number(e.target.id))) {
      setFormData([...formData, Number(e.target.id)]);
      //console.log(services);
    } else {
      setFormData(formData?.filter((item) => item != Number(e.target.id)));
    }
  };

  const handleServices = async () => {
    if (formData.length >= 2) {
      setLoad(true);
      try {
        const res = await addServices({ services: formData }).unwrap();
        setLoad(false);
        toast.success(res.message);
        navigate("/profile");
        window.location.reload(true);
      } catch (err) {
        setLoad(false);

        console.log(err);
      }
      setError("");
    } else {
      setError("Select at least five services");
    }
  };

  return (
    <div
      className={`rounded-xl ${serviceClass} md:px-10 px-8 lg:px-14 pt-6 md:py-12 pb-8 bg-[#1E1E1E] `}
    >
      <h3 className="text-xl pb-6 font-semibold text-white">
        Services
        <p className="text-[15px] font-normal text-[#B29A9A]">
          Choose at least 5 or more services
        </p>
      </h3>

      <div className="grid md:grid-cols-2 text-white lg:grid-cols-3 gap-x-1 gap-y-3">
        {data?.map((item, index) => {
          return (
            <label key={index} className="checkContainer">
              {item.name}
              <input
                onChange={handleChange}
                type="checkbox"
                name="services"
                id={item.id}
                checked={formData?.includes(Number(item.id))}
              />
              <span className="checkmate"></span>
            </label>
          );
        })}
      </div>
      <p className="py-1 text-[12px] text-red-500">{error}</p>
      <div className="flex justify-end">
        <button
          onClick={handleServices}
          disabled={load}
          className="bg-[#E9CB50] mt-12 text-center block w-[100%] text-[#171717] py-[10px] md:w-[150px] font-medium rounded-xl"
        >
          {load ? <LoaderIcon className="mx-auto" /> : "Save Changes"}
        </button>
      </div>
    </div>
  );
};

export default EscortServicesEdit;
