import type { ReactElement, ReactNode } from "react";

type LayoutProps = {
  header: ReactNode;
  children: ReactNode;
  footer: ReactNode;
};

export function Layout({
  header,
  children,
  footer,
}: LayoutProps): ReactElement {
  return (
    <div className="h-screen grid grid-cols-1 grid-rows-[auto_1fr_auto]">
      <div>{header}</div>
      <div>{children}</div>
      <div>{footer}</div>
    </div>
  );
}
