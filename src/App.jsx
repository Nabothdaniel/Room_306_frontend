import { Outlet, useNavigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Details from "./Hooks/Details";
import { useSelector } from "react-redux";

const App = () => {
  const token = useSelector((state) => state.Util.token);
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
