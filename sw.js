const cacheName = 'v9';
const cacheFiles = [
  './',
  './index.html',
  './dist/css/main.css',
  './dist/js/main.js',
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(cacheFiles))
  );
});

self.addEventListener('activate', (e) => {
  console.log('activating');
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      if (response) {
        return response;
      }

      return fetch(e.request);
    })
  );
});
