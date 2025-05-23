import { useState } from "react";
import FacePile from "./Facepile";
import usePresence from "../../src/react";
import { api } from "../convex/_generated/api";

export default function App(): JSX.Element {
  const [name] = useState(() => "User " + Math.floor(Math.random() * 10000));

  const httpActionHost = import.meta.env.VITE_CONVEX_URL.replace(".convex.cloud", ".convex.site");
  const disconnectUrl = `${httpActionHost}/presence/disconnect`;

  const presenceState = usePresence(
    api.presence.list,
    api.presence.heartbeat,
    api.presence.disconnect,
    disconnectUrl,
    "my-chat-room",
    name
  );

  return (
    <main>
      <FacePile presenceState={presenceState ?? []} />
    </main>
  );
}
