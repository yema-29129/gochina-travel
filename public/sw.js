const CACHE_NAME = "gochina-v2";
const PRECACHE = [
  "/en",
  "/en/tools/rescue-cards",
  "/en/tools/taxi-card",
  "/en/tools/allergy-card",
  "/en/tools/phrasebook",
  "/en/tools/payment-fee-calculator",
  "/en/guides/arrival-immigration",
  "/en/guides/alipay-wechat-pay",
  "/en/guides/internet-esim",
  "/en/guides/high-speed-trains",
  "/en/guides/safety-health",
  "/en/guides/visa-free-countries",
  "/en/guides/hotels-in-china",
  "/en/guides/medications-customs-lost-phone",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      Promise.allSettled(PRECACHE.map((url) => cache.add(url)))
    )
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      const networkFetch = fetch(event.request)
        .then((res) => {
          if (res && res.status === 200) {
            const clone = res.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return res;
        })
        .catch(() => cached);
      return cached || networkFetch;
    })
  );
});
