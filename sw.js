var CACHE_NAME = 'mpw-dry-v1';
var urlsToCache = [
    '/',
    'index.html',
    'css',
    'css/main.css',
    'css/semantic.min.css',
    'js',
    'js/vendor',
    'js/vendor/jquery.min.js',
    'js/vendor/semantic.min.js',
    'js/vendor/clipboard.min.js',
    'js/dependencies.js',
    'js/main.js',
    'https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic&subset=latin',
    'https://fonts.gstatic.com/s/lato/v14/S6uyw4BMUTPHjx4wXg.woff2',
    'https://fonts.gstatic.com/s/lato/v14/S6u9w4BMUTPHh6UVSwiPGQ.woff2',
    'js/setImmediate-polyfill.js',
    'js/mpw-js/pbkdf2.js',
    'js/mpw-js/scrypt.js',
    'js/mpw-js/mpw.js',
    'img/glider.png'
];

self.addEventListener('install', function(event) {
  // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function(cache) {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            // Cache hit - return response
            if (response) {
                return response;
            }
    
            // IMPORTANT: Clone the request. A request is a stream and
            // can only be consumed once. Since we are consuming this
            // once by cache and once by the browser for fetch, we need
            // to clone the response.
            var fetchRequest = event.request.clone();
    
            return fetch(fetchRequest).then(
                function(response) {
                // Check if we received a valid response
                if(!response || response.status !== 200 || response.type !== 'basic') {
                    return response;
                }
    
                // IMPORTANT: Clone the response. A response is a stream
                // and because we want the browser to consume the response
                // as well as the cache consuming the response, we need
                // to clone it so we have two streams.
                var responseToCache = response.clone();
    
                caches.open(CACHE_NAME).then(function(cache) {
                    cache.put(event.request, responseToCache);
                });
    
                return response;
                }
            );
        })
    );
});