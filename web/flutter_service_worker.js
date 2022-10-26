'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "404de981718659fe1ab473c504b601ca",
"assets/assets/animations/error.json": "c0f2dd414a4b672cda45f4a382550130",
"assets/assets/animations/nodata.json": "fadb8b853ef5ef2e0a9cecc3dd57cd0e",
"assets/assets/animations/onBoardingOne.json": "38d8216c534c038070a6d4a73140e576",
"assets/assets/animations/onBoardingThree.json": "66017ca0e512a029f6ab5163490660f0",
"assets/assets/animations/onBoardingTwo.json": "cc1fdbd25940922bb964b0e5c0a9fdc2",
"assets/assets/fonts/contax.ttf": "da66142a7174cfa87efffef2a98f9ddd",
"assets/assets/icons/add_to_cart.svg": "91d2102e7b89fec10fcb816275041b0a",
"assets/assets/icons/back.svg": "6faa6d40f8e404d040b147b67d9bf16c",
"assets/assets/icons/bag_1.svg": "25dc761330863a4fc3123437787c95c9",
"assets/assets/icons/cart.svg": "2cc4f936dbb97ec3263d3d3c08a38290",
"assets/assets/icons/heart.svg": "fafdb8afc30748f259b6ff64d51e3088",
"assets/assets/icons/search.svg": "676863abb3dbd91d7139d3434c94736a",
"assets/assets/images/bag_1.png": "e9506b6861af2660221107684bbebd97",
"assets/assets/images/bag_2.png": "1d5fd0aaf3e6cbf6b8fa23aed72b0523",
"assets/assets/images/bag_3.png": "d069787fd88889b6d9c0d3b7a054e0bd",
"assets/assets/images/bag_4.png": "0d85b194c8a5c71c60f84d899de86c31",
"assets/assets/images/bag_5.png": "3144272695836710191b7f953cc6fb7e",
"assets/assets/images/bag_6.png": "c51f90dc78a7bc817fd14f20d6567d94",
"assets/assets/images/dummy_1.png": "26c19a2c04a9e9c5f9eaba6554a2f991",
"assets/assets/images/dummy_2.png": "c3b0dd9fb39a271458e722c7b7c22d18",
"assets/assets/images/dummy_3.png": "b88f9efda6a68420a5bed086cad32e7f",
"assets/assets/images/dummy_4.png": "15ae3853a260788f79206741cf2958fa",
"assets/assets/images/dummy_5.png": "7137a04df2ca4179aa422674ef16bcb5",
"assets/assets/images/dummy_6.png": "2b5d0bf2250fa267048ef604f98b8e46",
"assets/assets/images/dummy_7.png": "6a4659fb979eccc26d182360d1c9a0ef",
"assets/assets/images/dummy_8.png": "4bc92876494c287b539af62c617131c0",
"assets/assets/logo/brand.png": "a7d5a4a5abece84bd371bda5c871a41c",
"assets/assets/logo/logo.png": "9fb7ad437f82c6a6162ce16f8cc0244f",
"assets/assets/logo/logo2.png": "94c81251067708f25ffdcfd46313f4d5",
"assets/FontManifest.json": "567fdf28a53dea278edbe90e1e13ca32",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "b62121b0e099ccb41f734b4cc304bfc2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/eva_icons_flutter/lib/fonts/Eva-Icons.ttf": "a71dbd49ad4a52020638190e30ac52e0",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/shaders/ink_sparkle.frag": "572112ff9fdb68298e432d2e249fe7ea",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6891a1c61a76838af6b59becccd5f1c5",
"/": "6891a1c61a76838af6b59becccd5f1c5",
"main.dart.js": "99233257c61ca3ee88d4ed8e856b51ed",
"manifest.json": "5ede841afa2f25ae39a80a6e49d31f16",
"version.json": "4deaec1b17e3e3b5754e9d397eb36e4a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
