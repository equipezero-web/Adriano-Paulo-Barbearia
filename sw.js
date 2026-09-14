const CACHE_NAME = 'barbearia-cache-v2';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json'
];

// Instalação do Service Worker e salvamento dos arquivos básicos
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Ativação e remoção de caches antigos (como o v1)
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Estratégia de busca: Tenta a rede primeiro; se estiver offline, busca no cache
self.addEventListener('fetch', (event) => {
  // Não intercepta chamadas para o Google Apps Script nem WhatsApp
  if (event.request.url.includes('script.google.com') || event.request.url.includes('wa.me')) {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Atualiza o cache dinamicamente com a versão da rede
        const responseClone = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseClone);
        });
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
