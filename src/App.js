import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import Booking from "./components/pages/Booking";

function App() {
  return <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/booking" element={<Booking />} />
    </Routes>
    <Footer />
  </>
}

export default App;
