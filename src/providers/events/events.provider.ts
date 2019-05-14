import { IEvent } from "./events.interface";
import { mockApiTime } from "../api";
import moment from "moment";


const getLocalEvents = () => {
    const result: IEvent[] = [
        {
            id: "1",
            title: "Dentist appointment",
            startDate: moment().add(1, "hours").toDate()
        },
        {
            id: "2",
            title: "Car service",
            startDate: moment().add(2, "hours").toDate()
        },
        {
            id: "3",
            title: "Pickup children",
            startDate: moment().add(3, "days").toDate()
        },
        {
            id: "4",
            title: "Doctor appointment",
            startDate: moment().add(20, "days").toDate()
        },
        {
            id: "5",
            title: "Conference",
            startDate: moment().add(5, "hours").toDate()
        },
        {
            id: "6",
            title: "Conference",
            startDate: moment().add(-2, "hours").toDate()
        },
        {
            id: "7",
            title: "Conference",
            startDate: moment().add(12, "days").toDate()
        },
        {
            id: "8",
            title: "Conference",
            startDate: moment().add(-3, "hours").toDate()
        },
        {
            id: "9",
            title: "Conference",
            startDate: moment().add(-6, "hours").toDate()
        },
        {
            id: "10",
            title: "Conference",
            startDate: moment().add(5, "hours").toDate()
        },
    ];

    return result.sort((a, b) => a.startDate.getTime() - b.startDate.getTime());
}

const getEvent = (id: string): Promise<IEvent | null> =>
    new Promise(resolve => {
        setTimeout(() => {
            const events = getLocalEvents();

            const result = events.find(event => event.id === id);

            resolve(result);
        }, mockApiTime);
    });

const getNextDateWithEvents = (date: Date): Promise<Date | null> =>
    new Promise(resolve => {
        setTimeout(() => {
            const events = getLocalEvents();

            const result = events.find(event => moment(event.startDate).isAfter(date));

            resolve(result ? result.startDate : null);
        }, mockApiTime);
    });


const getEvents = (date: Date): Promise<IEvent[]> =>
    new Promise(resolve => {
        setTimeout(() => {
            const events = getLocalEvents();
            const result = events.filter(event => moment(date).isSame(event.startDate, "date"));

            resolve(result);
        }, mockApiTime);
    });


export {
    getEvents,
    getEvent,
    getNextDateWithEvents,
}