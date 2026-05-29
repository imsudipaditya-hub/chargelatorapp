const CACHE_NAME = 'chargelator-v3-cache';
const ASSETS_TO_CACHE = [
  '/chargelatorapp/',
  '/chargelatorapp/index.html',
  '/chargelatorapp/manifest.json',
  '/chargelatorapp/sw.js',
  '/chargelatorapp/icon.png'
];

// Keep the rest of your existing sw.js fetch/install logic exactly the same!

// Install Event: Cache local system resources
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Activate Event: Sweep up legacy application caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch Event: Cache intercept strategy for network resilience
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        // Asynchronously update cache from network in background
        fetch(event.request).then((networkResponse) => {
          if (networkResponse.status === 200) {
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, networkResponse));
          }
        }).catch(() => {/* Handle network drop silently */});
        
        return cachedResponse;
      }
      return fetch(event.request);
    })
  );
});