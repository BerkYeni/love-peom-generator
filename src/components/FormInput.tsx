import React, { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement>;

const FormInput = (props: Props) => {
  return <input {...props} />;
};

export default FormInput;
