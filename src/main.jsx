import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./tailwind.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import ClientProfile from "./pages/ClientProfile.jsx";
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
import Testimonials from "./pages/Testimonials.jsx";
import Events from "./pages/Events.jsx";
import Faqs from "./pages/Faqs.jsx";
import EscortDetailsThree from "./pages/EscortDetails/EscortDetailsThree.jsx";
import EscortDetailsFour from "./pages/EscortDetails/EscortDetailsFour.jsx";
import Tours from "./pages/Tours.jsx";
import Rooms from "./pages/Rooms.jsx";
import AddTours from "./pages/AddTours.jsx";
import Adverts from "./pages/Adverts.jsx";
import AddAdverts from "./pages/AddAdverts.jsx";
import ProfileView from "./pages/ProfileView.jsx";
import Wallet from "./pages/Wallet.jsx";
import SingleBlog from "./pages/SingleBlog.jsx";
import NaughtVideo from "./pages/NaughtVideo.jsx";
import Channels from "./pages/Channels.jsx";
import NaughtyRoom from "./pages/NaughtyRoom.jsx";
import Blacklisted from "./pages/Blacklisted.jsx";
import BlacklistedView from "./pages/BlacklistedView.jsx";
import EscortProfile from "./pages/EscortProfile.jsx";
import EditClient from "./pages/EditClient.jsx";
import EditEscort from "./pages/EditEscort.jsx";
import ChangePassword from "./pages/ChangePassword.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/my-wallet",
        element: <Wallet />,
      },
      {
        path: "/blacklisted",
        element: <App />,
        children: [
          {
            index: true,
            element: <Blacklisted />,
          },
          {
            path: ":id",
            element: <BlacklistedView />,
          },
        ],
      },
      {
        path: "/adverts",
        element: <Adverts />,
      },
      {
        path: "/profile-view",
        element: <ProfileView />,
      },
      {
        path: "/new-tours",
        element: <AddTours />,
      },
      {
        path: "/new-adverts",
        element: <AddAdverts />,
      },
      {
        path: "/blogs",
        element: <Blog />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/faqs",
        element: <Faqs />,
      },
      {
        path: "/profile",
        element: <ClientProfile />,
      },
      {
        path: "/escort-profile",
        element: <EscortProfile />,
      },
      {
        path: "/edit-client",
        element: <EditClient />,
      },
      {
        path: "/change-password",
        element: <ChangePassword />,
      },
      {
        path: "/edit-escort",
        element: <EditEscort />,
      },
      {
        path: "/tours",
        element: <Tours />,
      },
      {
        path: "/rooms",
        element: <Rooms />,
      },
      {
        path: "/testimonials",
        element: <Testimonials />,
      },
      {
        path: "/signup",
        element: <RegisterCard />,
      },
      {
        path: "/clients",
        element: <ClienDetails />,
      },
      {
        path: "/naughty-videos",
        element: <NaughtVideo />,
      },
      {
        path: "/channels",
        element: <App />,
        children: [
          {
            index: true,
            element: <Channels />,
          },
          {
            path: "naughty-room",
            element: <NaughtyRoom />,
          },
        ],
      },
      {
        path: "/escort-details",
        element: <EscortDetailsOne />,
      },
      {
        path: "/additional-details",
        element: <EscortDetailsTwo />,
      },
      {
        path: "/services",
        element: <EscortDetailsThree />,
      },
      {
        path: "/rates",
        element: <EscortDetailsFour />,
      },
      {
        path: "/profile-upload",
        element: <EscortDetailsFive />,
      },
      {
        path: "/verification",
        element: <EscortDetailsSecFive />,
      },
      {
        path: "/survey",
        element: <EscortSurvey />,
      },
      {
        path: "/:title",
        element: <SingleBlog />,
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
