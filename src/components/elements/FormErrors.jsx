import React from "react";

const validation = formErrors => {
  if (formErrors.length > 0) return <p>{formErrors.formErrors}</p>;
  return "";
};

export const FormErrors = formErrors => {
  return <div className="item__validation">{validation(formErrors)}</div>;
};
