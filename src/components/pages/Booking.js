import { useState } from "react";
import { submitAPI } from "../../api/booking";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function Booking(props) {
  const schema = yup
    .object({
      date: yup
        .string()
        .required()
        .default(() => new Date().toISOString().split("T")[0]),
      time: yup
        .string()
        .required()
        .default(props.availableTimes[0]),
      guests: yup
        .number()
        .required()
        .min(1, "At least one person.")
        .max(10, "Max 10 people.")
        .typeError("Value required.")
        .default(2),
      occasion: yup.string().required().default("Birthday"),
    })
    .required();

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "all",
    resolver: yupResolver(schema),
    defaultValues: schema.cast(),
  });

  const onSubmit = (data) => {
    console.log(data);
    submitAPI(data);
    navigate("/confirmation");
  };

  const onDateChange = (date) => {
    props.setAvailableTimes({ date });
  };
  return (
    <main className="booking">
      <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>
        <label for="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          {...register("date", {
            onChange: (e) => onDateChange(e.target.value),
          })}
        />
        <span>{errors.date?.message}</span>
        <label for="res-time">Choose time</label>
        <select id="res-time" {...register("time")}>
          {props.availableTimes.map((time) => (
            <option>{time}</option>
          ))}
        </select>
        <span>{errors.time?.message}</span>

        <label for="guests">Number of guests</label>
        <input type="number" id="guests" {...register("guests")} />
        <span>{errors.guests?.message}</span>
        <label for="occasion">Occasion</label>
        <select id="occasion" {...register("occasion")}>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input
          aria-label="Make Your reservation"
          type="submit"
          value="Make Your reservation"
          disabled={!isValid}
        />
      </form>
    </main>
  );
}
