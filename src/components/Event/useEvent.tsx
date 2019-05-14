import { useState } from "react";
import { IEvent } from "../../providers/events/events.interface";
import moment from "moment";

const useEvent = () => {
    const [title, setTitle] = useState<string>("");
    const [startDate, setStartDate] = useState<string>(moment().format("YYYY-MM-DD"));
    const [startTime, setStartTime] = useState<string>(moment().format("HH:mm"));
    const [recurring, setRecurring] = useState<boolean>(false);

    const changeTitle = (newTitle: string) => {
        setTitle(newTitle);
    }

    const changeStartDate = (newDate: string) => {
        const date = moment(newDate, "YYYY-MM-DD", true);
        if (date.isValid()) {
            setStartDate(date.format("YYYY-MM-DD"));
        }
    }

    const changeStartTime = (newTime: string) => {
        const date = moment(newTime, "HH:mm", true);
        if (date.isValid()) {
            setStartTime(date.format("HH:mm"));
        }
    }

    const changeEvent = (event: IEvent) => {
        setTitle(event.title);
        setStartDate(moment(event.startDate, "YYYY-MM-DD").format("YYYY-MM-DD"));
        setStartTime(moment(event.startDate, "HH:mm").format("HH:mm"));
    }

    const changeRecurring = (recur: boolean) => {
        setRecurring(recur);
    }

    return {
        title,
        startDate,
        startTime,
        recurring,
        changeTitle,
        changeStartDate,
        changeStartTime,
        changeEvent,
        changeRecurring,
    }
}


export default useEvent;