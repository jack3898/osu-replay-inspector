import type { ReactElement, ReactNode } from "react";
import { cn } from "../utils/cn";

type H1Props = {
  children: ReactNode;
} & React.ComponentPropsWithoutRef<"h1">;

export function H1({ children, ...rest }: H1Props): ReactElement {
  return (
    <h1 {...rest} className={cn("text-3xl", rest.className)}>
      {children}
    </h1>
  );
}

type H2Props = {
  children: ReactNode;
} & React.ComponentPropsWithoutRef<"h2">;

export function H2({ children, ...rest }: H2Props): ReactElement {
  return (
    <h2 {...rest} className={cn("text-2xl", rest.className)}>
      {children}
    </h2>
  );
}

type H3Props = {
  children: ReactNode;
} & React.ComponentPropsWithoutRef<"h3">;

export function H3({ children, ...rest }: H3Props): ReactElement {
  return (
    <h3 {...rest} className={cn("text-xl", rest.className)}>
      {children}
    </h3>
  );
}

type H4Props = {
  children: ReactNode;
} & React.ComponentPropsWithoutRef<"h4">;

export function H4({ children, ...rest }: H4Props): ReactElement {
  return (
    <h4 {...rest} className={cn("text-lg", rest.className)}>
      {children}
    </h4>
  );
}

type H5Props = {
  children: ReactNode;
} & React.ComponentPropsWithoutRef<"h5">;

export function H5({ children, ...rest }: H5Props): ReactElement {
  return (
    <h5 {...rest} className={cn("text-base", rest.className)}>
      {children}
    </h5>
  );
}

type H6Props = {
  children: ReactNode;
} & React.ComponentPropsWithoutRef<"h6">;

export function H6({ children, ...rest }: H6Props): ReactElement {
  return (
    <h6 {...rest} className={cn("text-sm", rest.className)}>
      {children}
    </h6>
  );
}
