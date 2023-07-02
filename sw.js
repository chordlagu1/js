// File: sw.js
const CACHE_NAME = "your-cache-name";
const urlsToCache = [
  "https://blogger.googleusercontent.com/img/a/AVvXsEjbAa9Sif_LtljvGY6gLSp6YvaRkXugDw_02v-vtUMG0A6XHERU8nG62GIX2YOB6wSzU7EIzoVxZyGDra4Sopl1Nf-cQBu6qBnwRzgyGtFieDilxNoegCXjlqfdFdeE7X5mZYlgL2IeDEEory2mC3YqB7CHEG5fCMHhYRiWqbbeDw8rYCzIvIg43I0hIWI=s128",
  "https://blogger.googleusercontent.com/img/a/AVvXsEjbAa9Sif_LtljvGY6gLSp6YvaRkXugDw_02v-vtUMG0A6XHERU8nG62GIX2YOB6wSzU7EIzoVxZyGDra4Sopl1Nf-cQBu6qBnwRzgyGtFieDilxNoegCXjlqfdFdeE7X5mZYlgL2IeDEEory2mC3YqB7CHEG5fCMHhYRiWqbbeDw8rYCzIvIg43I0hIWI=s128",
  "https://github.com/chordlagu1/js/blob/main/shop-online.js",
  "https://cdn.statically.io/gh/chordlagu1/js/main/shop-style.css",
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