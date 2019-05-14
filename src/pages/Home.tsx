import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";

import Event from "../components/EventItem";
import { getEvents, getNextDateWithEvents } from "../providers/events/events.provider";
import { IEvent } from "../providers/events/events.interface";
import moment from "moment";
import Button, { ButtonLabel } from "../components/Button";
import { Link } from "react-router-dom";

const Home = () => {
  const [events, setEvents] = useState<IEvent[]>([]);
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [isNextEventAvailable, setIsNextEventAvailable] = useState(false);

  useEffect(() => {
    getEvents(currentDate).then(newEvents => {
      setEvents(newEvents);
    });

    getNextDateWithEvents(currentDate).then(date => {
      setIsNextEventAvailable(!!date);
    });
  }, [currentDate]);

  const onChange = (date: Date[] | Date) => {
    if (Array.isArray(date)) {
      return setCurrentDate(date[0]);
    } else {
      return setCurrentDate(date);
    }
  }

  const nextDateWithEvent = () => {
    getNextDateWithEvents(currentDate).then(date => {
      if (date !== null) {
        setCurrentDate(date);
      }
    })
  }

  return (
    <div className="flex flex-col">
      <div className="align-bottom bg-white my-4 overflow-hidden" style={{height: "44vh", margin: "1vh 0"}}>
        <Calendar
          className="w-full border-transparent"
          locale="en-US"
          calendarType="ISO 8601"
          onChange={onChange}
          value={currentDate}
          showNavigation
          view="month"
          next2Label=""
          prev2Label=""
        />
      </div>

      <div className="bg-white py-2">
        <div className="bg-white px-2 overflow-y-auto" style={{height: "44vh"}}>
          {events.length > 0 && <ul className="list-reset">
            {events.map(event =>
              <li key={event.id} className="p-2 block w-full">
                <Event
                  id={event.id}
                  startDate={moment(event.startDate).format("HH:mm")}
                  title={event.title}
                />
              </li>
            )}
          </ul>}

          {events.length === 0 && <div className="mx-auto" style={{width: "180px"}}>
            <p className="text-center my-10 font-medium text-grey-dark">
              You've got no events or appointments today
            </p>

            <Link to="/event" className="no-underline">
              <Button type="button" className="text-center mx-auto">Add new</Button>
            </Link>

            {isNextEventAvailable &&
            <ButtonLabel
              type="button"
              className="text-center mx-auto my-4"
              onClick={() => nextDateWithEvent()}
            >Jump to next event</ButtonLabel>}
          </div>}
          {events.length > 0 && (<div className="my-10">
            <Link to="/event" className="no-underline">
              <Button type="button" className="text-center mx-auto">Add new</Button>
            </Link>
          </div>)}
        </div>
      </div>
    </div>
  )
};

export default Home;
