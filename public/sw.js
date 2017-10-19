
self.addEventListener('install', function (event) {
  console.log('[Service worker] Installing SW...', event);
});

self.addEventListener('activate', function (event) {
  console.log('[Service worker] Activating SW...', event);

  // This ensures WS are activated correctly.
  return self.clients.claim();
});

self.addEventListener('fetch', function (event) {
  console.log('[Service worker] Fetching something...', event);
  event.respondWith(fetch(event.request));
});