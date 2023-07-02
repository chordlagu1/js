// File: sw.js
const CACHE_NAME = "your-cache-name";
const urlsToCache = [
  "/path-to-icon/icon-192x192.png",
  "/path-to-icon/icon-512x512.png",
  "/path-to-your-assets/your-asset-1.js",
  "/path-to-your-assets/your-asset-2.css",
  // Tambahkan daftar URL aset yang ingin Anda cache untuk offline access
];

self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log("Cache opened");
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});