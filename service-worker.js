const CACHE_NAME = "bwh-cache-v1";
const ASSETS_TO_CACHE = [
  "./",
  "./index.html",
  "./style.css",
  "./app.js",
  "./knowledge.js",
  "./manifest.json",
  "./icon.svg"
];

// 1. تثبيت Service Worker وحفظ الملفات في الذاكرة المؤقتة
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Caching assets...");
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// 2. تفعيل Service Worker وحذف الإصدارات القديمة من الذاكرة
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log("Clearing old cache...");
            return caches.delete(cache);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// 3. اعتراض الطلبات: جلب الملف من الذاكرة المؤقتة أولاً، وإذا لم يوجد يجليه من الشبكة
self.addEventListener("fetch", (event) => {
  // تجاهل الطلبات التي ليست من نوع GET (مثل طلبات Firebase لاحقاً)
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request).then((networkResponse) => {
        // حفظ أي ملفات جديدة يتم تحميلها في الذاكرة المؤقتة
        return caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });
      });
    }).catch(() => {
      // في حال انقطاع الإنترنت ولم يوجد الملف في الذاكرة
      if (event.request.mode === "navigate") {
        return caches.match("./index.html");
      }
    })
  );
});