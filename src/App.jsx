import { Outlet, useNavigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { useProfileQuery } from "./redux/ApiSlice";
import Loading from "./components/Loading";

const App = () => {
  

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
