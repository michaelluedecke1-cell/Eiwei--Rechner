const CACHE_NAME = 'protein-tracker-v1';
const ASSETS = [
  'Eiweiß.html',
  'manifest.json'
];

// Installieren und Dateien in den Cache laden
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Anfragen abfangen und aus dem Cache bedienen
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});


