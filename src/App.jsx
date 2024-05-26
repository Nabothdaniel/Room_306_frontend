import { Outlet } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Details from "./Hooks/Details";
import { useGetCountryQuery } from "./redux/CountryApi";

const App = () => {
  const { data, isLoading } = useGetCountryQuery();

  Details();

  return (
    <>
      <ScrollToTop />
      <div className="mt-[68px] md:-mt-4">
        <Outlet />
      </div>
    </>
  );
};

export default App;
