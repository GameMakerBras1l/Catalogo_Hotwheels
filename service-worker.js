const CACHE_NAME = "hotwheels-cache-v2";

const arquivosParaCache = [
    "./",
    "./index.html",
    "./manifest.json",
    "./css/style.css",
    "./js/script.js",
    "./js/gps.js",
    "./icons/icon-192.png",
    "./icons/icon-512.png"
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(arquivosParaCache);
            })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((resposta) => {
                return resposta || fetch(event.request);
            })
    );
});