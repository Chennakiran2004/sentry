import React from "react";

export function ErrorThrower() {
  React.useEffect(() => {
    // This will throw on mount!
    throw new Error("Error thrown from ErrorThrower component!");
  }, []);

  return <div>Component that throws error on mount (see Sentry).</div>;
}
