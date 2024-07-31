import { useState } from "react";
export default function Booking() {
  const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);

  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [time, setTime] = useState("17:00");
  const [guests, setGuests] = useState("2");
  const [occasion, setOccasion] = useState("Birthday");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Date:", date);
    console.log("Time:", time);
    console.log("Guests:", guests);
    console.log("Occasion:", occasion);
  };
  return (
    <main className="booking">
      <form
        style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
        onSubmit={onSubmit}
      >
        <label for="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <label for="res-time">Choose time</label>
        <select
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        >
          {availableTimes.map((time) => (
            <option>{time}</option>
          ))}
        </select>
        <label for="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        />
        <label for="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" />
      </form>
    </main>
  );
}
