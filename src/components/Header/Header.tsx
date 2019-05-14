import React from "react";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";


interface IProps {
  title: string
}

const Header = (props: IProps) => (
  <div className="bg-white mx-auto w-full overflow-hidden align-middle">
    <div className="flex items-center flex-row content-center justify-between p-4">
      <Link to="/" className="eboks-text-red text-lg cursor-pointer no-underline focus:outline-none">
        <FontAwesome name="chevron-left" /> Back
      </Link>

      <div className="eboks-text-red text-xl text-center">
        {props.title}
      </div>

      <div className="eboks-text-red text-xl cursor-pointer">
        <FontAwesome name="cog" />
      </div>
    </div>
  </div>
);

export default Header;
