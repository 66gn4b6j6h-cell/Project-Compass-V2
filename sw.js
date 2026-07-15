const CACHE='project-compass-s1-v1';
const ASSETS=['./','./index.html','./styles.css','./app.js','./manifest.webmanifest','./assets/kamakura-hero.jpg','./assets/hotel.jpg','./assets/ramen.jpg','./assets/osaka.jpg','./assets/concierge.jpg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
