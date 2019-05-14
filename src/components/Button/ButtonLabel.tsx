import React from "react";

interface IProps {
    type: string
    children?: any
    className?: string
    onClick?: (e: any) => void;
}

const ButtonLabel = (props: IProps) => (
    <button
        className={"eboks-text-red border-b-solid border-b border-red block mt-10 font-bold " + props.className}
        onClick={props.onClick}
    >{props.children}</button>
)


export default ButtonLabel;