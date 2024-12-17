import { cn } from "@/lib/utils";
import { LabelHTMLAttributes, ReactNode } from "react";

type Props = LabelHTMLAttributes<HTMLLabelElement> & {
  children: ReactNode;
};

const FormLabel = ({ children, className, ...rest }: Props) => {
  return (
    <label
      className={cn(
        "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
        className
      )}
      {...rest}
    >
      {children}
    </label>
  );
};

export default FormLabel;
