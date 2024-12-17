import { cn } from "@/lib/utils";
import React, { ButtonHTMLAttributes, ReactNode } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode };

const Button = ({ children, className, ...props }: Props) => {
  return (
    <button
      className={cn(
        "bg-primary text-primary-foreground hover:bg-primary/90",
        "h-10 px-4 py-2",
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-md font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
