import { defineConfig } from "@playwright/test";
import fs from "node:fs";

/**
 * Visual parity test infrastructure.
 *
 * Compares the new Next.js implementation against the read-only Framer
 * export in reference-site/public. See docs/parity-report.md for how to
 * run this and where screenshots land.
 *
 * Browser binaries: this environment pre-installs a Chromium build at
 * /opt/pw-browsers rather than relying on `playwright install` (which
 * would try to download browsers over the network and is unnecessary
 * here). We point launchOptions.executablePath directly at that build so
 * Playwright never attempts a download, regardless of which exact
 * revision the installed @playwright/test package expects.
 */
const LOCAL_CHROMIUM_PATH =
  process.env.PLAYWRIGHT_CHROMIUM_PATH ?? "/opt/pw-browsers/chromium";
const executablePath = fs.existsSync(LOCAL_CHROMIUM_PATH)
  ? LOCAL_CHROMIUM_PATH
  : undefined;

const IMPL_PORT = 3000;
const REFERENCE_PORT = 4001;

// Set SKIP_WEB_SERVER=1 if you'd rather start `npm run dev` and
// `npm run reference` yourself in separate terminals (see docs/parity-report.md).
const skipWebServer = process.env.SKIP_WEB_SERVER === "1";

export default defineConfig({
  testDir: "./tests",
  outputDir: "test-results",
  timeout: 60_000,
  fullyParallel: false,
  retries: 0,
  reporter: [["list"]],
  use: {
    launchOptions: executablePath ? { executablePath } : undefined,
  },
  projects: [
    {
      name: "chromium",
      use: {},
    },
  ],
  webServer: skipWebServer
    ? undefined
    : [
        {
          command: "npm run dev",
          url: `http://localhost:${IMPL_PORT}/`,
          reuseExistingServer: true,
          timeout: 120_000,
          stdout: "pipe",
          stderr: "pipe",
        },
        {
          command: "npm run reference",
          url: `http://localhost:${REFERENCE_PORT}/`,
          reuseExistingServer: true,
          timeout: 60_000,
          stdout: "pipe",
          stderr: "pipe",
        },
      ],
});
