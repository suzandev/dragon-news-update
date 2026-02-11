import React from "react";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="flex justify-center flex-col items-center gap-3 ">
      <img className="w-75 md:w-96" src={logo} alt="Logo" />
      <p className="text-accent ">Journalism Without Fear or Favour</p>
      <p className="text-semibold text-accent ">
        {new Date().toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
    </div>
  );
};

export default Header;
