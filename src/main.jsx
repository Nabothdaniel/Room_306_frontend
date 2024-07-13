import React, { Children, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./tailwind.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.jsx";
import ClientDetails from "./pages/ClientDetails.jsx";
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
import EditClient from "./pages/EditClient.jsx";
import EditEscort from "./pages/EditEscort.jsx";
import ChangePassword from "./pages/ChangePassword.jsx";
import MyFavorite from "./pages/MyFavorite.jsx";
import MyTour from "./pages/MyTour.jsx";
import NaughtyVideoView from "./pages/NaughtyVideoView.jsx";
import EventsView from "./pages/EventsView.jsx";
import MyEvents from "./pages/MyEvents.jsx";
import MyRoom from "./pages/MyRoom.jsx";
import AddEvents from "./pages/AddEvents.jsx";
import AddNaughty from "./pages/AddNaughty.jsx";
import RoomView from "./pages/RoomView.jsx";
import AddRoom from "./pages/AddRoom.jsx";
import Profile from "./pages/Profile.jsx";
import Booking from "./pages/Booking.jsx";
import { Toaster } from "react-hot-toast";
import TourView from "./pages/TourView.jsx";
import ResetPassword from "./pages/ResetPassword.jsx";
import PersonalChat from "./pages/PersonalChat.jsx";
import UpdateTours from "./pages/UpdateTour.jsx";
import UpdateRoom from "./pages/UpdateRoom.jsx";
import ClientView from "./pages/ClientView.jsx";
import Search from "./pages/Search.jsx";
import NotFound from "./pages/404.jsx";
import MyAdverts from "./pages/MyAdverts.jsx";
import WeatherApp from "./pages/WeatherApp.jsx";

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
        path: "/escort/:username",
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
        element: <App />,
        children: [
          {
            index: true,
            element: <Events />,
          },
          {
            path: ":id",
            element: <EventsView />,
          },
        ],
      },
      {
        path: "/faqs",
        element: <Faqs />,
      },
      {
        path: "/my-adverts",
        element: <MyAdverts />,
      },
      {
        path: "/search-escort",
        element: <Search />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },

      {
        path: "/reset-password",
        element: <ResetPassword />,
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
        element: <App />,
        children: [
          {
            index: true,
            element: <Tours />,
          },
          {
            path: ":id",
            element: <TourView />,
          },
        ],
      },
      {
        path: "/rooms",
        element: <App />,
        children: [
          {
            index: true,
            element: <Rooms />,
          },
          {
            path: ":id",
            element: <RoomView />,
          },
        ],
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
        path: "/client-register",
        element: <ClientDetails />,
      },
      {
        path: "/naughty-videos",
        element: <App />,
        children: [
          {
            index: true,
            element: <NaughtVideo />,
          },
          {
            path: ":id",
            element: <NaughtyVideoView />,
          },
        ],
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
            path: ":id",
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
        path: "/blogs/:slug",
        element: <SingleBlog />,
      },
      {
        path: "/my-booking",
        element: <Booking />,
      },
      {
        path: "/my-favourites",
        element: <MyFavorite />,
      },
      {
        path: "/my-tours",
        element: <MyTour />,
      },
      {
        path: "/my-events",
        element: <MyEvents />,
      },
      {
        path: "/my-room",
        element: <MyRoom />,
      },
      {
        path: "/add-event",
        element: <AddEvents />,
      },
      {
        path: "/add-naughty",
        element: <AddNaughty />,
      },
      {
        path: "/client/:username",
        element: <ClientView />,
      },
      {
        path: "/add-room",
        element: <AddRoom />,
      },
      {
        path: "/hellow",
        element: <WeatherApp />,
      },
      {
        path: "/update-tours",
        element: <UpdateTours />,
      },
      {
        path: "/update-rooms",
        element: <UpdateRoom />,
      },
      {
        path: "/chat/:id",
        element: <PersonalChat />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <Toaster position="top-right" />
    </Provider>
  </React.StrictMode>
);
