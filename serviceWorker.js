const cacheNamea = '4s-v1';
const assets = [
  '/',
  '/index.html',
  '/css/style.css',
  '/images/1.jpg',
  '/js/prompts.js',
];

self.addEventListener('install', (installEvent) => {
  installEvent.waitUntil(
    caches.open(cacheNamea).then((cache) => {
      cache.addAll(assets);
    }),
  );
});
self.addEventListener('fetch', (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    }),
  );
});
