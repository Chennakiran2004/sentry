// import { sentryVitePlugin } from "@sentry/vite-plugin";
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(), sentryVitePlugin({
//     org: "nxtwave-fw",
//     project: "sentry"
//   })],

//   build: {
//     sourcemap: true
//   }
// })

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { sentryVitePlugin } from "@sentry/vite-plugin";

export default defineConfig({
  plugins: [
    react(),
    sentryVitePlugin({
      org: "nxtwave-fw",
      project: "javascript-react",
      authToken: "sntryu_xxxxxx",
      release: { name: "my-app@1.0.0" },

      reactComponentAnnotation: {
        enabled: true,
      },
    }),
  ],
  build: { sourcemap: true },
});
