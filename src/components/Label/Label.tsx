import React from "react";

interface IProps {
    text: string
}

const Label = (props: IProps) => (
    <label className="block eboks-text-red text-sm font-bold pb-2">
        {props.text}
    </label>
);


export default Label;