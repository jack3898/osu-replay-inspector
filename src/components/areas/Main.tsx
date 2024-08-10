import type { ReactElement } from "react";
import { OpenReplayForm } from "../common/forms/open-replay-form";

export function Main(): ReactElement {
  return (
    <main className="p-4">
      <OpenReplayForm />
    </main>
  );
}
