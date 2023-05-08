import React, { FC, useRef, useEffect, useState, LegacyRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import "./style.scss";
import { Container } from "@mui/system";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Calendar = (): JSX.Element => {
  const [isHovered, setIsHovered] = useState<string>("");


  const eventData = [
    {
      id: "2",
      title: "Munzee Mania 2023 - Friday Night",
      start: Date.now(),
      end: "2020-03-01",
      url: "/munzeemadness3/",
      mega: "0",
      monthly: "",
      className: ["region-a", "type-a"],
      location: "Yorba Regional Park, Anaheim California.",
      time: "11:00 am - 5:00 pm",
      attendants: "38",
    },
    {
      id: "3",
      title: "Munzee Mania 2023 - Friday Night",
      start: Date.now(),
      end: "2017-03-01",
      url: "/munzeemadness3/",
      mega: "0",
      monthly: "",
      className: ["region-b", "type-b"],
      location: "Yorba Regional Park, Anaheim California.",
      time: "11:00 am - 5:00 pm",
      attendants: "38",
    },
    {
      id: "4",
      title: "Munzee Madness 3",
      start: Date.now(),
      end: "2020-03-01",
      url: "/munzeemadness3/",
      mega: "0",
      monthly: "",
      className: ["region-a", "type-c"],
      location: "Yorba Regional Park, Anaheim California.",
      time: "11:00 am - 5:00 pm",
      attendants: "38",
    },
    {
      id: "5",
      title: "Munzee Madness 3",
      start: Date.now(),
      end: "2020-03-01",
      url: "/munzeemadness3/",
      mega: "0",
      monthly: "",
      className: "type-d",
      location: "Yorba Regional Park, Anaheim California.",
      time: "11:00 am - 5:00 pm",
      attendants: "38",
    },
  ];

  const eventContent = ({
    event,
    el,
  }: {
    event: any;
    el: LegacyRef<HTMLDivElement>;
  }) => {
    const handleMouseEnter = () => {
      setIsHovered(event.id);
    };
    const handleMouseLeave = () => {
      setIsHovered("");
    };
    const eventClassName = `event-title ${event.classNames.join(" ")}`;
    return (
      <div className="event-wrapper">
        <div
          className={eventClassName}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ref={el}
        >
          {event.title}
        </div>
        {isHovered === event.id && (
          <div className="popover">
            <h3 className="popover-header">DSM 2023 May Event</h3>
            <div className="popover-body">
              <ul>
                <li>
                  <LocationOnIcon className="icon MuiIcon-colorPrimary" />{" "}
                  location
                </li>
                <li>
                  {" "}
                  <LocationOnIcon className="icon" />
                  address
                </li>
                <li>
                  <LocationOnIcon className="icon" />
                  Saturday
                </li>
                <li>
                  <LocationOnIcon className="icon" />
                  12:00
                </li>
                <li>
                  <LocationOnIcon className="icon" />
                  61 Attendens
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    );
  };
  return (
    <Container>
      <div className="home-calendar">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin]}
          initialView="dayGridMonth"
          firstDay={1}
          headerToolbar={{
            left: "prev,title,next",
            center: "",
            right: "timeGridDay,dayGridMonth,timeGridWeek",
          }}
          views={{
            timeGridDay: {
              type: "timeGrid",
              buttonText: "today",
            },
          }}
          events={eventData}
          eventContent={eventContent}
        />
      </div>
    </Container>
  );
};

export default Calendar;
