import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";

import Input from "../components/Input";
import { IEvent } from "../providers/events/events.interface";
import { getEvent } from "../providers/events/events.provider";
import { useEvent } from "../components/Event";
import Button, { ButtonLabel } from "../components/Button";

interface IParams {
  id: string
}

interface IProps extends RouteComponentProps<IParams> {
}

const Event = (props: IProps) => {
  const {
    title,
    startDate,
    startTime,
    changeTitle,
    changeStartDate,
    changeStartTime,
    changeEvent
  } = useEvent();

  const [hasFetch, setHasFetch] = useState(false);

  const id = props.match ? props.match.params ? props.match.params.id : null : null;

  useEffect(() => {
    if (!!id && !hasFetch) {
      setHasFetch(true);
      getEvent(id).then((newEvent: IEvent | null) => {
        if (newEvent !== null) {
          changeEvent(newEvent);
        }
      });
    }
  }, [id, hasFetch, changeEvent]);

  const save = (e: React.FormEvent) => {
    props.history.push("/");
    e.preventDefault();
  }

  return (
    <form style={{boxSizing: "border-box"}} className="pt-10" onSubmit={save}>
      <div>
        <Input
          value={title}
          label="Title"
          placeholder="Title"
          type="text"
          onChange={e => changeTitle(e.currentTarget.value)}
        />
      </div>

      <div className="bg-white">
        <div className="inline-block" style={{width: "50vw"}}>
          <Input
              placeholder="Date"
              label="Date"
              value={startDate}
              onChange={e => changeStartDate(e.currentTarget.value)}
              type="date"
          />
        </div>
        <div className="inline-block" style={{width: "50vw"}}>
          <Input
              placeholder="Time"
              label="Time"
              value={startTime}
              onChange={e => changeStartTime(e.currentTarget.value)}
              type="time"
          />
        </div>
      </div>

      <div className="mt-3">
        <Input
          label="Attachment"
          placeholder="Nothing uploaded yet"
          type="file"
        />
      </div>

      <div className="mv-4">
        <Input
          label="Notification"
          placeholder="None"
          type="text"
        />
      </div>

      {!!id && <div className="flex justify-between mt-10 px-10">
        <ButtonLabel
          type="button">Delete</ButtonLabel>
        <Button type="submit">Save</Button>
      </div>}
      {!id && <div className="flex justify-between mt-10 px-10 flex-row-reverse">
        <Button type="submit">Add</Button>
      </div>}

    </form>
  )
};

export default Event;
