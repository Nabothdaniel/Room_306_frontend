import React, { useContext, useState } from "react";
import Close from "../images/close-icon.svg";
import { useGetCountryQuery } from "../redux/CountryApi";
import Loading from "./Loading";
import { roomDetails } from "../redux/UtilSlice";
import { useDispatch } from "react-redux";
import { ImageContext } from "../Hooks/ImageContext";

const RoomFilter = ({ RoomClass, Filter }) => {
  const { setFilter } = useContext(ImageContext);
  const { data, isLoading } = useGetCountryQuery();
  const [getState, setGetState] = useState([]);
  const [getCities, setGetCities] = useState([]);
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const dispatch = useDispatch();

  if (isLoading) {
    return (
      <div className={`${RoomClass}`}>
        <Loading />;
      </div>
    );
  }

  let states;
  const handleCountry = (e) => {
    states = data.filter((state) => state.name === e.target.value);

    states = states.map((item) => item.states);

    states.sort();
    setGetState(states[0]);
  };

  const handleState = (e) => {
    let city = getState.filter((item) => item.name === e.target.value);
    city = city.map((item) => item);

    setGetCities(city);
  };

  let newCities = [];

  getCities.forEach((childArray) => {
    childArray.cities.forEach((item) => {
      newCities.push(item);
    });
  });

  const handleSearch = () => {
    setFilter({ roomCountry: country, roomCity: city });
    Filter();
  };

  return (
    <div
      className={`bg-black/40 duration-500 ${RoomClass} fixed top-0 z-[999999] flex left-0 w-[100%] h-screen  justify-center`}
    >
      <div className="bg-white w-[80%] md:w-[600px] h-fit mt-28 py-4 rounded-xl">
        <div className="flex items-center justify-between border-b-2 px-6 pb-2 border-[#F1D6D6]">
          <h2 className="md:text-3xl font-semibold text-xl">Filter Room</h2>
          <img
            onClick={Filter}
            className="size-5 cursor-pointer"
            src={Close}
            alt=""
          />
        </div>

        <div className="px-8 pb-8">
          <label
            className="text-[#475367] pt-2 flex flex-col"
            htmlFor="country"
          >
            <span className="font-semibold text-white pb-1">Country</span>
            <div className=" w-[100%] placeholder-[#102127] bg-[#F0F2F5] text-[#102127] rounded-xl outline-none px-4">
              <select
                className="w-[100%] bg-[#F0F2F5] py-[14px] outline-none"
                name="country"
                id="country"
                onChange={(e) => {
                  handleCountry(e);
                  setCountry(e.target.value);
                }}
              >
                <option value="">All Country</option>
                {data.map((item) => {
                  return (
                    <option key={item.id} value={item.name}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </label>

          <label className="text-[#475367] flex flex-col" htmlFor="state">
            <span className="font-semibold text-white pb-1">State</span>
            <div className=" w-[100%] placeholder-[#102127] bg-[#F0F2F5] text-[#102127] rounded-xl outline-none px-4">
              <select
                className="w-[100%] bg-[#F0F2F5] py-[14px] outline-none"
                name="state"
                id="state"
                onChange={(e) => {
                  handleState(e);
                  setState(e.target.value);
                }}
              >
                <option value="">State(Optional)</option>
                {getState.map((item, index) => {
                  return (
                    <option key={item.id} value={item.name}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </label>
          <label className="text-[#475367] flex flex-col" htmlFor="city">
            <span className="font-semibold text-white pb-1">City</span>
            <div className=" w-[100%] placeholder-[#102127] bg-[#F0F2F5] text-[#102127] rounded-xl outline-none px-4">
              <select
                className="w-[100%] bg-[#F0F2F5] py-[14px] outline-none"
                name="cities"
                id="cities"
                onChange={(e) => setCity(e.target.value)}
              >
                <option value="">City(Optional)</option>

                {newCities.map((item) => {
                  return (
                    <option key={item.id} value={item.name}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </label>
          <button
            onClick={handleSearch}
            className="text-center hover:bg-[#ffdc4e] duration-500  bg-[#E9CB50] w-[100%] py-3 md:py-4  font-semibold mt-12 rounded-xl"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomFilter;
