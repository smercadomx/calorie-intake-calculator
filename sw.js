const cacheName = 'v1';
const cacheFiles = [
  './',
  './index.html',
  './src/css/styles.css',
  './dist_assets/js/calorieCalculator.js',
  './dist_assets/js/main.js'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(cacheFiles);
    })
  );
});

self.addEventListener('activate', e => {
  console.log(e);
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      if (response) {
        return response;
      }

      return fetch(e.request);
    })
  )
});
