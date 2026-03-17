const CACHE_NAME = 'backlog-games-sw-v1.0.1';

const ASSETS_TO_CACHE = [
  '/backlog-games/favicon.ico',
  '/backlog-games/manifest.json',
  '/backlog-games/icons/icon-192.svg',
  '/backlog-games/icons/icon-512.svg',
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

self.addEventListener('activate', (event) => {
  console.log('SW version:', CACHE_NAME);
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Ignoring cross-origin requests
  if (url.origin !== self.location.origin) return;

  // Ignoring other base paths
  if (!url.pathname.startsWith('/backlog-games')) return;

  // For this app, the only cool usage is to cache EVERYTHING
  // since there are no dynamic API calls.
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;

      return fetch(event.request)
        .then((response) => {
          if (
            !response ||
            response.status !== 200 ||
            response.type !== 'basic'
          ) return response;

          const clone = response.clone();
          caches.open(CACHE_NAME)
            .then((cache) => {
              cache.put(event.request, clone);
            });
          return response;
        })
        .catch(() => cached);
    })
  );
});
