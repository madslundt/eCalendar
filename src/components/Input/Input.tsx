import React from "react";
import Label from "../Label";

interface IProps {
  type: "text" | "number" | "password" | "date" | "time" | "file";
  placeholder?: string;
  value?: string | number;
  label?: string;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
}

const Input = (props: IProps) => (
  <div className="p-3 w-full bg-white">
    {!!props.label && <Label text={props.label} />}
    <input
      className="appearance-none bg-white w-full leading-tight focus:outline-none"
      {...props}
    />
  </div>
);

export default Input;
