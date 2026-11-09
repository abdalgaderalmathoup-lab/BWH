const CACHE_NAME = "bwh-cache-v20";
const ASSETS_TO_CACHE = [
  "./",
  "./index.html",
  "./style.css",
  "./app.js",
  "./knowledge.js",
  "./manifest.json",
  "./icon.svg"
];

// تثبيت الـ Service Worker وحفظ الملفات بشكل فردي (أكثر أماناً)
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // حفظ كل ملف على حدة حتى لا يفشل الكاش بالكامل إذا فشل ملف واحد
      return Promise.all(
        ASSETS_TO_CACHE.map((url) => {
          return cache.add(url).catch((err) => {
            console.warn("Failed to cache:", url, err);
          });
        })
      );
    })
  );
  self.skipWaiting();
});

// تفعيل الـ Service Worker وحذف الكاش القديم
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) return caches.delete(cache);
        })
      );
    })
  );
  self.clients.claim();
});

// استراتيجية الجلب: الكاش أولاً، ثم الشبكة
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // إذا وجد الملف في الكاش، قم بإرجاعه فوراً (حتى لو كان هناك إنترنت)
      if (cachedResponse) {
        return cachedResponse;
      }

      // إذا لم يوجد، اجلبه من الشبكة
      return fetch(event.request).then((networkResponse) => {
        // احفظ النسخة الجديدة في الكاش
        return caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });
      }).catch(() => {
        // إذا فشل الاتصال ولم يوجد في الكاش، لا نفعل شيئاً
        return new Response("Offline", { status: 503, statusText: "Offline" });
      });
    })
  );
});