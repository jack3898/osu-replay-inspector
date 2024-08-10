import type { ReactElement } from "react";
import { H1 } from "../atomic/headings";

export function Header(): ReactElement {
  return (
    <header className="border-b border-black p-2">
      <H1 className="font-extrabold">Osu Replay Viewer</H1>
    </header>
  );
}
