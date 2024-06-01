import { Outlet } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Details from "./Hooks/Details";
import { useGetCountryQuery } from "./redux/CountryApi";
import { ImageContext } from "./Hooks/ImageContext";
import { useState } from "react";

const App = () => {
  const [image, setImage] = useState("");
  const { data, isLoading } = useGetCountryQuery();
  Details();

  return (
    <>
      <ScrollToTop />
      <div className="mt-[68px] md:-mt-4">
        <ImageContext.Provider value={{ image, setImage }}>
          <Outlet />
        </ImageContext.Provider>
      </div>
    </>
  );
};

export default App;
