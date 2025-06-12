// // src/sentry.ts
// import * as Sentry from "@sentry/react";

// Sentry.init({
//   dsn: "https://e468a4a7eaaef98972d61b0d5b972c77@o4509478717489152.ingest.us.sentry.io/4509483986124800",
//   release: import.meta.env.VITE_SENTRY_RELEASE || "my-app@1.0.0",
//   tracesSampleRate: 1.0,
//   sendDefaultPii: true,
// });

import * as Sentry from "@sentry/react";
import { browserTracingIntegration } from "@sentry/browser";

Sentry.init({
  dsn: "https://e468a4a7eaaef98972d61b0d5b972c77@o4509478717489152.ingest.us.sentry.io/4509483986124800", // Your DSN here
  release: "my-app@1.0.0", // Must match vite config
  integrations: [browserTracingIntegration(), Sentry.replayIntegration()],
  tracesSampleRate: 1.0,

  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
  // ... other options
});
