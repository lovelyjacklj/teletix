var CACHE_NAME = 'pwa-task-manager';
var urlsToCache = [
  '/',
  '/completed'
];

// Install a service worker
self.addEventListener('install', event => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll([
         "fonts.googleapis.com/css2?family=Roboto:wght@100;300;500;700;900&display=swap",
         "pro.fontawesome.com/releases/v5.10.0/css/all.css",
         "/static/js/bundle.js",
         "/static/js/vendors~main.chunk.js",
         "/static/js/main.chunk.js",
         "/static/media/maincircle.9f1e6157.png",
         "index.html",


        ]);
      })
  );
});

// Cache and return requests
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        // return fetch(event.request);
        let requestUrl= event.request.clone();
        return fetch(requestUrl)

      })
  );
});

// Update a service worker
self.addEventListener('activate', event => {
  var cacheWhitelist = ['pwa-task-manager'];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );

});
