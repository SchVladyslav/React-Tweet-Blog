import React from "react";

export const Input = props => {
  return (
    <React.Fragment>
      {/* <label htmlFor={props.name} className="input-label">
        {props.title}
      </label> */}
      <input
        className={`input ${props.className}`}
        name={props.name}
        type={props.type}
        value={props.value}
        onChange={props.handleChange}
        placeholder={props.placeholder}
      />
    </React.Fragment>
  );
};
