import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./tailwind.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import Login from "./pages/Login.jsx";
import Profile from "./pages/Profile.jsx";
import SignUp from "./pages/SignUp.jsx";
import EscortDetails from "./pages/EscortDetails.jsx";
import RegisterCard from "./pages/RegisterCard.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.jsx";
import ClienDetails from "./pages/ClientDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/login",
        element: <Login />,
      },

      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/sign-up",
        element: <App />,
        children: [
          {
            index: true,
            element: <SignUp />,
          },
          {
            path: "escort",
            element: <EscortDetails />,
          },
          {
            path: "client",
            element: <ClienDetails />,
          },
        ],
      },
      {
        path: "/escort-details",
        element: <EscortDetails />,
      },
      {
        path: "/register-card",
        element: <RegisterCard />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
