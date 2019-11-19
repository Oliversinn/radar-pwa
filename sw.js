var urlsToCache = [
    '/',
    '/index.html',,
    '/src/',
    '/src/radar/radar.css',
    '/src/radar/radar.jsx',
    '/js/main.js'
  ];
  
  
  
  self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('my-first-cache-v1')
        .then(function(cache) {
          console.log('Opened cache');
          return cache.addAll(urlsToCache);
        })
    )
  })
  
  
  /* Serve cached content when offline */
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          // Cache hit - return response
          if (response) {
            return response;
          }
          return fetch(event.request);
        }
      )
    )
  })