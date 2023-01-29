import * as React from "react";
import "./Button.css";

const Button = ({ name, type, cssClass, onClick, disabled, loading }) => {
  return (
    <button
      type={type ?? "submit"}
      disabled={disabled || loading}
      className={"button accept-btn"}
      onClick={onClick ? onClick : () => {}}
    >
      <p className={loading ? "justify-left pl-3 m-0" : "justify-center m-0"}>
        {name}
      </p>
    </button>
  );
};

export default Button;
