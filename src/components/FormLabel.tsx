import { LabelHTMLAttributes, ReactNode } from "react";

type Props = LabelHTMLAttributes<HTMLLabelElement> & {
  children: ReactNode;
};

const FormLabel = ({ children, ...rest }: Props) => {
  return <label {...rest}>{children}</label>;
};

export default FormLabel;
