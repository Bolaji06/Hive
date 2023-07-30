import logo from "../Hive/src/assets/android-chrome-192x192.png"
export default function serviceWorker(){

self.addEventListener("install",e=>{
    e.waitUntil(
      caches.open("v1").then(cache=>{
        return cache.addAll(["/", logo]);
      })
    );
  });
  
  // Fetch resources and match cache
  self.addEventListener("fetch",e=>{
    e.respondWith(
      caches.match(e.request).then(response=>{
        return response || fetch(e.request);
      })
    );
  });
}