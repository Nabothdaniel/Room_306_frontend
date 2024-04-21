import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./tailwind.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import Profile from "./pages/Profile.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.jsx";
import ClienDetails from "./pages/ClientDetails.jsx";
import EscortDetailsOne from "./pages/EscortDetails/EscortDetailsOne.jsx";
import EscortDetailsTwo from "./pages/EscortDetails/EscortDetailsTwo.jsx";
import EscortDetailsFive from "./pages/EscortDetails/EscortDetailsFive.jsx";
import EscortSurvey from "./pages/EscortDetails/EscortSurvey.jsx";
import EscortDetailsSecFive from "./pages/EscortDetails/EscortDetailsSecFive.jsx";
import RegisterCard from "./pages/RegisterCard.jsx";
import Blog from "./pages/Blog.jsx";

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
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/blogs",
        element: <Blog />,
      },
      {
        path: "/signup",
        element: <App />,
        children: [
          {
            index: true,
            element: <RegisterCard />,
          },
          {
            path: "escort",
            element: <App />,
            children: [
              {
                index: true,
                element: <EscortDetailsOne />,
              },
              {
                path: "1",
                element: <EscortDetailsTwo />,
              },
              {
                path: "4",
                element: <EscortDetailsFive />,
              },
              {
                path: "5",
                element: <EscortDetailsSecFive />,
              },
              {
                path: "6",
                element: <EscortSurvey />,
              },
            ],
          },
          {
            path: "client",
            element: <ClienDetails />,
          },
        ],
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
