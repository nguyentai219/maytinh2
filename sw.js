const CACHE_NAME = 'maytinh-v1';
const ASSETS = [
  '/maytinh2/',
  '/maytinh2/index.html',
  '/maytinh2/manifest.json',
  '/maytinh2/icons/icon-192.png',
  '/maytinh2/icons/icon-512.png',
  'https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;500;700&family=Be+Vietnam+Pro:wght@300;400;500;600;700&display=swap'
];

// Cài đặt: cache tất cả assets
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS).catch(err => {
        console.log('Cache addAll partial error:', err);
      });
    })
  );
  self.skipWaiting();
});

// Kích hoạt: xóa cache cũ
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

// Fetch: ưu tiên cache, fallback network
self.addEventListener('fetch', e => {
  // Bỏ qua các request không phải GET
  if (e.request.method !== 'GET') return;

  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(response => {
        // Cache response mới (chỉ cache same-origin và fonts)
        if (
          response.ok &&
          (e.request.url.startsWith(self.location.origin) ||
           e.request.url.includes('fonts.googleapis.com') ||
           e.request.url.includes('fonts.gstatic.com'))
        ) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
        }
        return response;
      }).catch(() => {
        // Offline fallback
        return caches.match('/maytinh2/index.html');
      });
    })
  );
});
