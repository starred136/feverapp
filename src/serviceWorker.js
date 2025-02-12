const CACHE_NAME = "pwa-cache-v2";
const urlsToCache = ["/", "/index.html", "/manifest.json"];

self.addEventListener("install", (event) => {
  console.log("[Service Worker] Installation...");
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting(); // Active immédiatement
});

self.addEventListener("activate", (event) => {
  console.log("[Service Worker] Activation...");

  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log("[Service Worker] Suppression de l'ancien cache :", cacheName);
            return caches.delete(cacheName);
          }
        })
      )
    )
  );

  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

// Permet à l'application de demander une mise à jour forcée
self.addEventListener("message", (event) => {
  if (event.data === "SKIP_WAITING") {
    console.log("[Service Worker] Nouvelle version détectée, activation immédiate...");
    self.skipWaiting();
  }
});
