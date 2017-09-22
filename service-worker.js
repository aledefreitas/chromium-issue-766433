self.addEventListener("install", function(event) {
    console.log("SW Installed");
    self.skipWaiting();
});

self.addEventListener("activate", function(event) {
    console.log("SW Activated");
    event.waitUntil(
        self.clients.claim()
    );
});

self.addEventListener("fetch", function(event) {
    console.log("Intercepted request to '"+event.request.url+"' inside the Service Worker");
    event.respondWith(fetch(event.request));
});
