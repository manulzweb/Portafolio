/* Service worker mínimo: cachea los estáticos del shell y sirve
   HTML con network-first para no quedarse nunca con una versión vieja. */

const VERSION = "v1";
const CACHE = `manulzweb-${VERSION}`;

const SHELL = [
    "src/css/fonts.css",
    "src/css/animated-border.css",
    "src/css/portfolio.css",
    "public/fonts/nunito-latin-300-normal.woff2",
    "public/fonts/nunito-latin-400-normal.woff2",
    "public/fonts/nunito-latin-700-normal.woff2",
    "public/fonts/nunito-latin-800-normal.woff2",
    "public/fonts/jetbrains-mono-latin-400-normal.woff2",
    "public/fonts/jetbrains-mono-latin-600-normal.woff2",
    "public/img/ManuelVasquezPhoto.webp",
];

self.addEventListener("install", (e) => {
    e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)));
    self.skipWaiting();
});

self.addEventListener("activate", (e) => {
    e.waitUntil(
        caches.keys().then((keys) =>
            Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
        )
    );
    self.clients.claim();
});

self.addEventListener("fetch", (e) => {
    const req = e.request;
    if (req.method !== "GET" || !req.url.startsWith(self.location.origin)) return;

    // HTML: red primero, caché como respaldo (offline)
    if (req.mode === "navigate" || req.headers.get("accept")?.includes("text/html")) {
        e.respondWith(
            fetch(req)
                .then((res) => {
                    const copy = res.clone();
                    caches.open(CACHE).then((c) => c.put(req, copy));
                    return res;
                })
                .catch(() => caches.match(req))
        );
        return;
    }

    // Estáticos: caché primero, red como respaldo
    e.respondWith(
        caches.match(req).then(
            (hit) =>
                hit ||
                fetch(req).then((res) => {
                    const copy = res.clone();
                    caches.open(CACHE).then((c) => c.put(req, copy));
                    return res;
                })
        )
    );
});
