'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"index.html": "96f8db00cc2336220e699b0179e86f0f",
"/": "96f8db00cc2336220e699b0179e86f0f",
"flutter_bootstrap.js": "c6cb9f18dc0684998b7d7ce87b5b74b2",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"version.json": "30db83abc66603fe72deac86c8d763c6",
"assets/NOTICES": "1e6f965730372bae6967971691e78e57",
"assets/fonts/MaterialIcons-Regular.otf": "844e3bba254ac8fb0f16ad602f7fb67e",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/AssetManifest.bin.json": "6500b26193265885f9f65d9a68385965",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/assets/images/discount_tag.png": "31a9727da0f10098905e9e8c5dba501e",
"assets/assets/images/notification_order_open.png": "d588b573f8ea11a3d49719425e2446f3",
"assets/assets/images/logo.png": "80d9c63d11ec47ebaa869de5d7bccbae",
"assets/assets/images/icon_subscription_expired.png": "25522bdf94ce791bd8d5fefdd2d24b94",
"assets/assets/images/notification_news.png": "2e9e15988e0551ec15ab8aa23ee2a4a3",
"assets/assets/images/ic_excel.png": "11e0be5fe421bd50e41125fea4e9bbbf",
"assets/assets/images/new_tag.png": "42b8dd523b8ccc604a4cc600cea13b8c",
"assets/assets/images/ic_word.png": "fa372ffa2482dc07b0e8f2fe9a6f32b1",
"assets/assets/images/place_holder.png": "838ad6c456f28011d236bcc2946c7d8e",
"assets/assets/images/gmail_icon.png": "eabc1a70245f1384e30960f25f9b2784",
"assets/assets/images/news_attachment_other.png": "a2e2ed6ca73e0447c4c1deb0a6732a3a",
"assets/assets/images/india_flag.png": "3340a4f8662c1a9a8571147c848f7a79",
"assets/assets/images/news_attachment_audio.png": "9244d8b946b3167972acb351cebf2535",
"assets/assets/images/notification_order_dispatch.png": "7c43fddc44509a0d5b29affe16567e41",
"assets/assets/images/us_flag.png": "3098306d01fc764979177a81db1e61a1",
"assets/assets/images/notification_order_close.png": "154df173b28f929b4800c31da0bfd767",
"assets/assets/images/image_placeholder.png": "9ac48edcda2bbee65d7ebca5df5be46c",
"assets/assets/images/notification_order_cancel.png": "959f1a37881f8145b80ab1adb24833f4",
"assets/assets/images/news_attachment_video.png": "0f2079e8506795839d9c7fcc1774b553",
"assets/assets/images/notification_order_new.png": "6c394127852cbdc53db64a6c4c63ae02",
"assets/assets/images/news_attachment_zip.png": "bc2576634a2212b7e1bcd32cc78ddf57",
"assets/assets/images/notification_order_edit.png": "f3a98fc1c138717883b74934c34d7bb8",
"assets/assets/images/ic_ppt.png": "2451a8d5684e6d4efa018100901c2e7e",
"assets/assets/images/ic_pdf.png": "6ce89c14680f9a6252bc317aa5582ab2",
"assets/assets/images/icon_maintenance.png": "79f20a8a50928d310e8248616c45fcc3",
"assets/assets/images/ic_txt.png": "4e962a8ef3b39d998e103b9b2629929d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "28d683ef79eec95baea2efc9c3447535",
"assets/AssetManifest.json": "9ab57cc7e85bdbe6af7e899120f96379",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.wasm": "cf9a17f0622e7d92729eba8ca927e53d",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/chromium/canvaskit.wasm": "016acebab4373bfdeee288e1ed2a7d75",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"main.dart.js": "c00a151d17da968c39145a09da51f2ac",
"manifest.json": "fc75572ef758dbb5ef8437354610fab8",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
