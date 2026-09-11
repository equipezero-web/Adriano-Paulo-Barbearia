const CACHE_NAME='adriano-barbearia-v5';
const ASSETS=['./','./index.html','./manifest.json','./logo.png'];

self.addEventListener('install',event=>{
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache=>{
      return cache.addAll(ASSETS);
    }).then(()=>{
      return self.skipWaiting();
    })
  );
});

self.addEventListener('activate',event=>{
  event.waitUntil(
    caches.keys().then(keys=>{
      return Promise.all(
        keys.filter(key=>key!==CACHE_NAME).map(key=>caches.delete(key))
      );
    }).then(()=>{
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET')return;
  
  event.respondWith(
    fetch(event.request).then(response=>{
      const copy=response.clone();
      caches.open(CACHE_NAME).then(cache=>{
        cache.put(event.request,copy);
      });
      return response;
    }).catch(()=>{
      return caches.match(event.request).then(response=>{
        return response||caches.match('./index.html');
      });
    })
  );
});