self.addEventListener('install', (event) => {
  console.log('[ServiceWorker] Installed');
});

self.addEventListener('fetch', async (event) => {
  console.log('[ServiceWorker] Fetching:', event.request.url);

  // Check if the request is for a specific resource
  if (event.request.url.includes('example-resource')) {
    // Respond with a custom response
    event.respondWith(
      new Response('This is a custom response for example-resource', {
        headers: { 'Content-Type': 'text/plain' }
      })
    );
  } else {
    // Default fetch handling
    event.respondWith(fetch(event.request));
  } 
});