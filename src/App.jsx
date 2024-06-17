import { Outlet, useLocation, useNavigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Details from "./Hooks/Details";
import { useGetCountryQuery } from "./redux/CountryApi";
import { ImageContext } from "./Hooks/ImageContext";
import { useEffect, useState } from "react";
import { differenceInDays, parseISO } from "date-fns";
import PopUp from "./components/PopUp";
import toast from "react-hot-toast";
import { useWalletQuery } from "./redux/ApiSlice";
import { FilterApi } from "./Hooks/FilterApi";

const App = () => {
  let useD = JSON.parse(localStorage.getItem("details"));
  let users = useD?.profile;
  const [image, setImage] = useState("");
  const pathname = useLocation().pathname;
  const { data, isLoading } = useGetCountryQuery();
  const [pop, setPop] = useState(true);
  const [day, setDay] = useState("");
  const navigate = useNavigate();
  const { data: pay } = useWalletQuery(1, {
    skip: !users,
  });
  const [filter, setFilter] = useState({
    roomCountry: "",
    roomCity: "",
    tourCountry: "",
    tourCity: "",
    search: {
      display_name: "",
      country: "",
      city: "",
      state: "",
      gender: "",
      ethnicity: "",
      bust_size: "",
      looks: "",
      build: "",
      sexual_orientation: "",
      smoker: "",
      services: "",
    },
  });

  Details();

  useEffect(() => {
    if (users?.user?.user_type == "escort") {
      //setTimeout(() => {
      if (users?.services?.length == 0) {
        navigate("/services");
      } else if (pathname == "/services" && users?.services?.length > 0) {
        navigate("/survey");
      }
      //  }, 5000);
    }
    if (users?.user?.user_type !== "escort") {
      if (pathname == "/services") {
        navigate("/");
      }
    }
  }, [pay, pathname, data]);

  useEffect(() => {
    if (users?.user?.user_type == "escort") {
      const birthDate = parseISO(
        users?.user?.createdAt,
        "yyyy-MM-dd",
        new Date()
      );
      const currentDate = new Date();
      setDay(differenceInDays(currentDate, birthDate));
      if (pay?.available_coin <= 0) {
        setPop(false);
      }
    }
  }, [pay, data]);

  const handlePop = () => {
    if (day < 7) {
      setPop(true);
    } else {
      toast.error("Please make payment to activate your account");
    }
  };

  return (
    <>
      <ScrollToTop />
      <div className="mt-[68px] md:-mt-4">
        <ImageContext.Provider value={{ image, setImage, filter, setFilter }}>
          <Outlet />
        </ImageContext.Provider>
      </div>
      {users?.user?.user_type == "escort" && (
        <PopUp
          popMenu={handlePop}
          popClass={`${pop ? "-translate-y-[120vh]" : "translate-y-0"}`}
        />
      )}
    </>
  );
};

export default App;
