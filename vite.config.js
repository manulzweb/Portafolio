import { defineConfig } from "vite";

// Vite se usa como servidor de desarrollo y build opcional.
// El deploy en GitHub Pages sigue siendo estático (sin build).
export default defineConfig({
    publicDir: false,
    build: {
        rollupOptions: {
            input: {
                main: "index.html",
                mascotas: "mascotas.html",
            },
        },
    },
});
