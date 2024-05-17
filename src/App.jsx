import { Outlet, useNavigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Details from "./Hooks/Details";

const App = () => {
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
