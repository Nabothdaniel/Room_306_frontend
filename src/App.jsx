import { Outlet } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <div className="mt-20 md:-mt-4">
        <Outlet />
      </div>
    </>
  );
};

export default App;
