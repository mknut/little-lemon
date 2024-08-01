import { render, screen } from "@testing-library/react";
import App from "./App";
import Booking from "./components/pages/Booking";
import { BrowserRouter } from "react-router-dom";
import { initializeTimes, updateTimes } from "./App";

test("Renders the BookingForm heading", () => {
  render(
    <BrowserRouter>
      <Booking availableTimes={["17:00"]} setAvailableTimes={() => {}} />
    </BrowserRouter>
  );
  const headingElement = screen.getByText("Make Your reservation");
  expect(headingElement).toBeInTheDocument();
});

test("initializeTimes", () => {
  const result = initializeTimes();
  expect(result.length).toBeGreaterThan(0);
});

test("updateTimes", () => {
  const result = updateTimes({date: "2021-10-10"});
  expect(result.length).toBeGreaterThan(0);
});
