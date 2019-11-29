var CACHE_NAME = 'version_03';

var URLS = [
  'htc.png',
  'index.html',
  'offline-page.html',
  'script.js',
  'style.css',
  'jquery.min.js',
  'jquery-ui.min.js',
  '/public/',
];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE_NAME)
    .then(function (cache) {
      console.log('Service worker installing.')
      return cache.addAll(URLS);
    })
  );
});

self.addEventListener('fetch', function (e) {
  if (e.request.mode === 'navigate') {
    e.respondWith(fetch(e.request)
      .catch(function (err) {
        return caches.open(CACHE_NAME)
          .then(function (cache) {
            console.log('Service worker working even though you are offline.')
            // return cache.match('offline-page.html');
            return cache.matchAll('/public/');
          });
      })
    );
  }
});
