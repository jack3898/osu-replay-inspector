import type { ReactElement, ReactNode } from "react";

type PProps = {
  children: ReactNode;
};

export function P({ children }: PProps): ReactElement {
  return <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>;
}
