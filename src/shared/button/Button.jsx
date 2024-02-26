import React from "react";
import "./Button.scss";
import { Link } from "react-router-dom";

export const Button = ({ text, link }) => {
  return (
    <div className="wrapper-button">
      <Link id="button" to={link}>
        <span>{text}</span>
      </Link>
    </div>
  );
};
