import React from "react";

interface IProps {
    type: string
    children?: any
    className?: string
    onClick?: (e: any) => void;
}

const Button = (props: IProps) => (
    <button
        className={"rounded-full eboks-bg-red text-white border-solid block py-3 px-5 font-bold " + props.className}
        onClick={props.onClick}
    >{props.children}</button>
)


export default Button;