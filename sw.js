self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('fox-store').then((cache) => cache.addAll([
		'',
		'index.html',
		'main.js',
		'main.css',
		'sw.js',
		'favicon.png',
		'index.html',
		'logo_export_safari.png',
		'logo_export_safari.svg',
		'logo_export.png',
		'logo_export.svg',
		'Logo.svg',
		'main.css',
		'main.js',
		'manifest.webmanifest'
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});