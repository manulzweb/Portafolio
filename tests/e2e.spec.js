import { test, expect } from "@playwright/test";

test.describe("Portafolio", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/");
        // Espera a que la pantalla de boot desaparezca
        await page.waitForSelector(".boot--done", { state: "attached" });
    });

    test("carga con título y hero", async ({ page }) => {
        await expect(page).toHaveTitle(/Manuel Vasquez/);
        await expect(page.locator(".hero__name")).toHaveText("Manuel Vasquez");
    });

    test("la terminal responde a help", async ({ page }) => {
        await page.click("#terminal-body");
        await page.keyboard.type("help");
        await page.keyboard.press("Enter");
        await expect(page.locator("#terminal-output")).toContainText("commands:");
        await expect(page.locator("#terminal-output")).toContainText("sudo hire-me");
    });

    test("autocompletado con Tab", async ({ page }) => {
        await page.click("#terminal-body");
        await page.keyboard.type("neof");
        await page.keyboard.press("Tab");
        await expect(page.locator("#terminal-input")).toHaveText("neofetch");
    });

    test("los proyectos se renderizan desde datos", async ({ page }) => {
        const cards = page.locator("#projects-grid .project");
        await expect(cards).toHaveCount(3);
        await expect(cards.first().locator(".project__title")).toHaveText("Portafolio personal");
    });

    test("la trayectoria se renderiza", async ({ page }) => {
        await expect(page.locator("#timeline-list .timeline__item")).not.toHaveCount(0);
    });

    test("el cambio de idioma re-renderiza contenido", async ({ page }) => {
        await page.click("#lang-toggle");
        await expect(page.locator(".hero__hello")).toHaveText("Hi, I'm");
        await expect(
            page.locator("#projects-grid .project__title").first()
        ).toHaveText("Personal portfolio");
    });

    test("el cambio de tema aplica data-theme", async ({ page }) => {
        await page.click("#theme-toggle");
        await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
        await page.click("#theme-toggle");
        await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
    });

    test("comando desconocido muestra error", async ({ page }) => {
        await page.click("#terminal-body");
        await page.keyboard.type("comando-inventado");
        await page.keyboard.press("Enter");
        await expect(page.locator("#terminal-output")).toContainText("command not found");
    });
});
