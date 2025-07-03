const CACHE_NAME = 'cache-v1';
console.log('v8 worker.js loaded');
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
  );
});

self.addEventListener('activate', (event) => {
  console.log('worker activate');
  event.waitUntil(
    clients.claim()
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.url.startsWith('ws://') || event.request.url.startsWith('wss://')) {
    return; // Skip WebSocket requests
  }
  
  console.log('worker fetch:', event.request.url, event.request.method);
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        console.log('from cache:', event.request.url);
        return cachedResponse;
      }

      return fetch(event.request).then(networkResponse => {
        console.log(')::', event.request.url);
        return caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });
      }).catch(() => {
        return new Response('Offline', { status: 503 });
      });
    })
  );
});