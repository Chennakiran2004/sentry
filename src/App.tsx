import * as Sentry from "@sentry/react";

import { ButtonWithError } from "./components/ButtonWithError";

function App() {
  return (
    <Sentry.ErrorBoundary
      fallback={<div>An error has occurred</div>}
      showDialog
    >
      <h1>Sentry Source Map Demo</h1>
      {/* <ErrorThrower /> */}
      <ButtonWithError />
    </Sentry.ErrorBoundary>
  );
}

export default Sentry.withProfiler(App);
