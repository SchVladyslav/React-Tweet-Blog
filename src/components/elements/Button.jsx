import React from "react";

export const Button = (props, { buttonState }) => {
  return (
    <React.Fragment>
      <button
        className={props.className}
        type={props.type}
        disabled={!buttonState}
      >
        {props.name}
      </button>
    </React.Fragment>
  );
};
