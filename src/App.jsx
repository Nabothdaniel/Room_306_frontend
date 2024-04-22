import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="mt-20 md:-mt-8">
        <Outlet />
      </div>
    </>
  );
};

export default App;
