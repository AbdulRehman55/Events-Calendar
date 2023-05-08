import React from "react";
import { DayPicker } from "react-day-picker";
import { Modal } from "@mui/material";
import "react-day-picker/dist/style.css";
import "./style.scss";

const DatePicker = (): JSX.Element => {
  const footer = (
    <>
      <button className="btn" disabled={true}>
        Today
      </button>
      <button className="btn">Clear</button>
      <button className="btn">Close</button>
    </>
  );
  const disabledDates = [
    {
      to: new Date(2023, 4, 10), // May 10, 2023
      from: new Date(2023, 4, 1), // May 1, 2023
    },
  ];
  return (
    <div className="date-picker-box">
      <DayPicker
        footer={footer}
        showOutsideDays={true}
        disabled={disabledDates}
        mode="single"
      />
    </div>
  );
};

export default DatePicker;
