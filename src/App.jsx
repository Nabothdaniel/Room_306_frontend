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
import EmailVerification from "./pages/EmailVerification";
import EmailConfirm from "./components/EmailConfirm";

const App = () => {
  let useD = JSON.parse(localStorage.getItem("details"));
  let users = useD?.profile;
  const [image, setImage] = useState("");
  const pathname = useLocation().pathname;

  const [email, setEmail] = useState(users?.user?.is_emailverified);
  const [pop, setPop] = useState(true);

  const [day, setDay] = useState(9);
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
      if (users?.services?.length == 0 && pathname !== "/survey") {
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

    // useEffect(() => {
    //   if (users?.user?.user_type == "escort") {
    //     const birthDate = parseISO(
    //       users?.user?.createdAt,
    //       "yyyy-MM-dd",
    //       new Date()
    //     );
    //     const currentDate = new Date();
    //     setDay(differenceInDays(currentDate, birthDate));
    //     if (pay?.available_coin <= 0) {
    //       setPop(false);
    //     }
    //   }

    //   setEmail(users?.user?.is_emailverified);
    // }, [pay]);

    if (users) {
      const birthDate = parseISO(
        users?.user.createdAt,
        "yyyy-MM-dd",
        new Date()
      );

      setDay(differenceInDays("2024-07-25", birthDate));
    }
  }, [pay, pathname]);

  // useEffect(() => {
  //   if (users?.user?.user_type == "escort") {
  //     const birthDate = parseISO(
  //       users?.user?.createdAt,
  //       "yyyy-MM-dd",
  //       new Date()
  //     );
  //     const currentDate = new Date();
  //     setDay(differenceInDays(currentDate, birthDate));
  //     if (pay?.available_coin <= 0) {
  //       setPop(false);
  //     }
  //   }

  //   setEmail(users?.user?.is_emailverified);
  // }, [pay]);

  // const handlePop = () => {
  //   if (Math.abs(day) < 7) {
  //     setPop(true);
  //   } else {
  //     toast.error("Please make payment to activate your account");
  //   }
  // };

  return (
    <>
      <ScrollToTop />
      <div className="mt-[68px] md:-mt-4">
        <ImageContext.Provider value={{ image, setImage, filter, setFilter }}>
          <Outlet />
        </ImageContext.Provider>
      </div>
      {/* {users?.user?.user_type == "escort" && (
        <PopUp
          popMenu={handlePop}
          popClass={`${pop ? "-translate-y-[120vh]" : "translate-y-0"}`}
        />
      )} */}

      {/* <EmailConfirm
        emailClass={`${email ? "-translate-y-[120vh]" : "translate-y-0"}`}
      /> */}
      {day <= 0 && (
        <EmailVerification
          emailClass={`${email ? "-translate-y-[130vh]" : "translate-y-0"}`}
        />
      )}
    </>
  );
};

export default App;
