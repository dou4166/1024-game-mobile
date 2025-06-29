const cacheName = "1024-cache-v1";
const assetsToCache = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",
  "./image0.jpg",
  "./image1.jpg",
  "./IMG_20250529_121154.jpg",
  "./image1 (1).jpg",
  "./image2.jpg",
  "./image2 (1).webp",
  "./image3.jpg",
  "./image4.jpg",
  "./IMG_2503.jpg",
  "./IMG_2844.jpg",
  "./IMG_3428.jpg",
  "./SPOILER_20250403_054119003_iOS.jpg"
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(assetsToCache);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      return res || fetch(e.request);
    })
  );
});
