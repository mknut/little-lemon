import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import Booking from "./components/pages/Booking";
import { useReducer, useState } from "react";
import { fetchAPI } from "./api/booking";
import Confirmation from "./components/pages/Confirmation";
export const updateTimes = (action) => {
  return fetchAPI(new Date(action.date));
};
export const initializeTimes = () => {
  return fetchAPI(new Date());
};
function App() {
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
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="*" element={<><hr/><main className="default-page"><img src="https://www.littlelemon.ie/wp-content/uploads/Little-Lemon-Logo-small.png" alt="little lemon"/></main><hr/></>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
