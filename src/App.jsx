import { Outlet } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { useProfileQuery } from "./redux/ApiSlice";
import Loading from "./components/Loading";

const App = () => {
  const token = JSON.parse(localStorage.getItem("token"));


  
  if (token) {
    const { data, isLoading } = useProfileQuery();

    if (isLoading) {
      return <Loading />;
    }

    if (data !== null) {
      localStorage.setItem("details", JSON.stringify(data));
    }
  }

  

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
