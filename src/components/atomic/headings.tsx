import type { ReactElement, ReactNode } from "react";
import { cn } from "../../utils/cn";

type H1Props = {
  children: ReactNode;
} & React.ComponentPropsWithoutRef<"h1">;

export function H1({ children, ...rest }: H1Props): ReactElement {
  return (
    <h1
      {...rest}
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        rest.className,
      )}
    >
      {children}
    </h1>
  );
}

H1.displayName = "H1";

type H2Props = {
  children: ReactNode;
} & React.ComponentPropsWithoutRef<"h2">;

export function H2({ children, ...rest }: H2Props): ReactElement {
  return (
    <h2
      {...rest}
      className={cn(
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        rest.className,
      )}
    >
      {children}
    </h2>
  );
}

H2.displayName = "H2";

type H3Props = {
  children: ReactNode;
} & React.ComponentPropsWithoutRef<"h3">;

export function H3({ children, ...rest }: H3Props): ReactElement {
  return (
    <h3
      {...rest}
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        rest.className,
      )}
    >
      {children}
    </h3>
  );
}

H3.displayName = "H3";

type H4Props = {
  children: ReactNode;
} & React.ComponentPropsWithoutRef<"h4">;

export function H4({ children, ...rest }: H4Props): ReactElement {
  return (
    <h4
      {...rest}
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        rest.className,
      )}
    >
      {children}
    </h4>
  );
}

H4.displayName = "H4";
