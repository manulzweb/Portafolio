import { defineConfig } from "vite";
import { cpSync, existsSync } from "node:fs";

// El sitio usa rutas con prefijo `public/` literal (p. ej. public/img/…)
// y varias de ellas se referencian de forma dinámica desde JS/JSON, así que
// Vite no las reescribe. Con `publicDir: false` evitamos que Vite trate esa
// carpeta de forma especial, y este plugin la copia tal cual al build (dist/)
// junto con los estáticos sueltos de la raíz. Así el build de Vercel conserva
// las mismas rutas que el deploy estático de GitHub Pages.
function copyStaticAssets(outDir = "dist") {
    // Ficheros de la raíz que no pasan por el pipeline de Vite pero deben
    // existir en producción (SW, SEO, página 404, iconos PWA sueltos…).
    const rootFiles = ["sw.js", "robots.txt", "sitemap.xml", "404.html"];

    return {
        name: "copy-static-assets",
        apply: "build",
        closeBundle() {
            if (existsSync("public")) {
                cpSync("public", `${outDir}/public`, { recursive: true });
            }
            for (const file of rootFiles) {
                if (existsSync(file)) cpSync(file, `${outDir}/${file}`);
            }
        },
    };
}

// Vite se usa como servidor de desarrollo y para el build de producción
// (Vercel). El deploy en GitHub Pages sigue siendo estático (sin build).
export default defineConfig({
    publicDir: false,
    plugins: [copyStaticAssets()],
    build: {
        outDir: "dist",
        rollupOptions: {
            input: {
                main: "index.html",
                mascotas: "mascotas.html",
            },
        },
    },
});
