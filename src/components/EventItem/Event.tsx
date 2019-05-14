import React from "react";
import { Link } from "react-router-dom";

interface IProps {
    id: string
    title: string
    startDate: string
}

const EventItem = (props: IProps) => (
    <Link to={"/event/" + props.id} className="text-black text-3xl cursor-pointer no-underline">
            <span className="text-xs leading-normal pr-4">{props.startDate}</span>
            <p className="text-xl inline leading-normal">{props.title}</p>
    </Link>
);


export default EventItem;