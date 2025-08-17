import { defineConfig } from "@trigger.dev/sdk/v3";

export default defineConfig({
  project: "proj_ajkfujnvnedxkgvawqeb", // Use the same project ID as the root config
  runtime: "node",
  logLevel: "log",
  maxDuration: 60,
  experimental_processKeepAlive: true,
  retries: {
    enabledInDev: false,
    default: {
      maxAttempts: 3,
      minTimeoutInMs: 1000,
      maxTimeoutInMs: 10000,
      factor: 2,
      randomize: true,
    },
  },
  build: {
    external: ["sharp", "canvas"],
  },
  dirs: ["./src/tasks"],
});
