import { defineConfig } from "@playwright/test";

export default defineConfig({
    testDir: "tests",
    timeout: 30_000,
    retries: process.env.CI ? 1 : 0,
    use: {
        baseURL: "http://localhost:4173",
        // Permite apuntar a un Chromium ya instalado (p. ej. en sandbox)
        launchOptions: process.env.CHROMIUM_PATH
            ? { executablePath: process.env.CHROMIUM_PATH }
            : {},
    },
    webServer: {
        command: "python3 -m http.server 4173",
        url: "http://localhost:4173",
        reuseExistingServer: true,
        timeout: 15_000,
    },
});
