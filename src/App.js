import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import Booking from "./components/pages/Booking";
import { useReducer, useState } from "react";
import { fetchAPI } from "./api/booking";
import Confirmation from "./components/pages/Confirmation";

function App() {
  const updateTimes = (availableTimes, action) => {
    return fetchAPI(new Date(action.date));
  };
  const initializeTimes = () => {
    return fetchAPI(new Date());
  };

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/booking"
          element={
            <Booking
              availableTimes={availableTimes}
              setAvailableTimes={dispatch}
            />
          }
        />
        <Route path="/confirmation" element={<Confirmation/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
