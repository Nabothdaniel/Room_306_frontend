import { Outlet, useNavigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { useProfileQuery } from "./redux/ApiSlice";
import Loading from "./components/Loading";
import Details from "./Hooks/Details";

const App = () => {
  return (
    <>
      <Details />
      <ScrollToTop />
      <div className="mt-[68px] md:-mt-4">
        <Outlet />
      </div>
    </>
  );
};

export default App;
