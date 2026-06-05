const APP_VERSION = "0.2.1";
const DEPLOY_BUILD = "20260605-1";
const CACHE_NAME = `daily-note-shell-v${APP_VERSION}-${DEPLOY_BUILD}`;
const APP_SHELL_FILES = [
  "./",
  "./index.html",
  `./manifest.webmanifest?v=${APP_VERSION}&build=${DEPLOY_BUILD}`,
  `./assets/styles.css?v=${APP_VERSION}&build=${DEPLOY_BUILD}`,
  `./assets/app.js?v=${APP_VERSION}&build=${DEPLOY_BUILD}`,
  "./icon-192.png",
  "./icon-512.png",
  "./apple-touch-icon.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL_FILES)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
          return Promise.resolve();
        })
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return;
  }

  const requestUrl = new URL(event.request.url);

  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put("./index.html", responseClone)).catch(() => {});
          return response;
        })
        .catch(() => caches.match("./index.html").then((cached) => cached || caches.match("./")))
    );
    return;
  }

  if (requestUrl.origin !== self.location.origin) {
    return;
  }

  const isVersionedAsset = requestUrl.pathname.endsWith("/assets/app.js")
    || requestUrl.pathname.endsWith("/assets/styles.css")
    || requestUrl.pathname.endsWith("/manifest.webmanifest");

  if (isVersionedAsset) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (!response || response.status !== 200) {
            return response;
          }

          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseClone)).catch(() => {});
          return response;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) {
        return cached;
      }

      return fetch(event.request).then((response) => {
        if (!response || response.status !== 200) {
          return response;
        }

        const responseClone = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseClone)).catch(() => {});
        return response;
      });
    })
  );
});
