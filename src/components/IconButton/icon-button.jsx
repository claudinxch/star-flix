import React from "react";
import "./icon-button.css";

export function IconButton({ transparent, ...props }) {
  return (
    <button
      {...props}
      className={`icon-button ${transparent ? "transparent" : ""} ${
        props.disabled ? "disabled" : ""
      }`}
    />
  );
}
