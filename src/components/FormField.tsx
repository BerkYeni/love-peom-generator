import { ReactNode } from "react";

type Props = { children: ReactNode };

export default function FormField({ children }: Props) {
  return <div>{children}</div>;
}
