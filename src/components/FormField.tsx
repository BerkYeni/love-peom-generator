import { cn } from "@/lib/utils";
import { ComponentProps, HTMLAttributes, ReactNode } from "react";

type Props = HTMLAttributes<HTMLDivElement> & { children: ReactNode };

export default function FormField({ children, className }: Props) {
  return <div className={cn("mb-5", className)}>{children}</div>;
}
