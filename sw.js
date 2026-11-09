const CACHE_NAME='adriano-v20-client-no-manual-calendar-20261109';
const ASSETS=['./','./index.html','./manifest.json','./config.js','./icon-192.png','./icon-maskable-512.png'];
self.addEventListener('install',e=>e.waitUntil(
  caches.open(CACHE_NAME)
    .then(c=>c.addAll(ASSETS.map(path=>new Request(path,{cache:'reload'}))))
    .then(()=>self.skipWaiting())
));
self.addEventListener('activate',e=>e.waitUntil(
  caches.keys()
    .then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k))))
    .then(()=>self.clients.claim())
));
self.addEventListener('fetch',e=>{
  const req=e.request,url=new URL(req.url);
  if(req.method!=='GET'||url.origin!==self.location.origin)return;
  const fresh=req.mode==='navigate'||url.pathname.endsWith('/index.html')||url.pathname.endsWith('/sw.js');
  const networkReq=fresh?new Request(req,{cache:'no-store'}):req;
  e.respondWith(fetch(networkReq).then(response=>{
    if(response.ok){
      const clone=response.clone();
      e.waitUntil(caches.open(CACHE_NAME).then(c=>c.put(req,clone)));
    }
    return response;
  }).catch(()=>caches.match(req)));
});
