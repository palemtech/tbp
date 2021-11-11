var APP_PREFIX = 'TBP_'     // Identifier for this app (this needs to be consistent across every cache update)
var VERSION = 'version_01'              // Version of the off-line cache (change this value everytime you want to update cache)
var CACHE_NAME = APP_PREFIX + VERSION
var URLS = ['/tbp/',
'/tbp/css/sab-stylesheet.css',
'/tbp/css/tooltipster.css',
'/tbp/fonts/GentiumPlusAm-R.ttf',
'/tbp/fonts/icomoon.ttf',
'/tbp/icons/apple-touch-icon.png',
'/tbp/icons/icon-144.png',
'/tbp/icons/icon-192.png',
'/tbp/icons/icon-36.png',
'/tbp/icons/icon-48.png',
'/tbp/icons/icon-512.png',
'/tbp/icons/icon-72.png',
'/tbp/icons/icon-96.png',
'/tbp/icons/icon-adaptive.png',
'/tbp/js/app-builder-audio.js',
'/tbp/js/app-builder-footnotes.js',
'/tbp/js/app-builder-menus.js',
'/tbp/js/app-builder-video.js',
'/tbp/js/book-names.js',
'/tbp/js/jquery-1.11.3.min.js',
'/tbp/js/jquery.tooltipster.min.js',
'/tbp/js/popcorn-complete.min.js',
'/tbp/Aktb-01-FRT-001.html',
'/tbp/Aktb-02-PPB-001.html',
'/tbp/Aktb-03-FRT-2-001.html',
'/tbp/Aktb-04-B001-001.html',
'/tbp/Aktb-04-B001-002.html',
'/tbp/Aktb-04-B001-003.html',
'/tbp/Aktb-04-B001-004.html',
'/tbp/Aktb-04-B001-005.html',
'/tbp/Aktb-04-B001-006.html',
'/tbp/Aktb-04-B001-007.html',
'/tbp/Aktb-04-B001-008.html',
'/tbp/Aktb-04-B001-009.html',
'/tbp/Aktb-04-B001-010.html',
'/tbp/Aktb-04-B001-011.html',
'/tbp/Aktb-04-B001-012.html',
'/tbp/Aktb-04-B001-013.html',
'/tbp/Aktb-04-B001-014.html',
'/tbp/Aktb-04-B001-015.html',
'/tbp/Aktb-04-B001-016.html',
'/tbp/Aktb-04-B001-017.html',
'/tbp/Aktb-04-B001-018.html',
'/tbp/Aktb-04-B001-019.html',
'/tbp/Aktb-04-B001-020.html',
'/tbp/Aktb-04-B001-021.html',
'/tbp/Aktb-04-B001-022.html',
'/tbp/Aktb-04-B001-023.html',
'/tbp/Aktb-04-B001-024.html',
'/tbp/Aktb-04-B001-025.html',
'/tbp/Aktb-04-B001-026.html',
'/tbp/Aktb-04-B001-027.html',
'/tbp/Aktb-04-B001-028.html',
'/tbp/Aktb-04-B001-029.html',
'/tbp/Aktb-04-B001-030.html',
'/tbp/Aktb-04-B001-031.html',
'/tbp/Aktb-04-B001-032.html',
'/tbp/Aktb-04-B001-033.html',
'/tbp/Aktb-04-B001-034.html',
'/tbp/Aktb-04-B001-041.html',
'/tbp/Aktb-04-B001-046.html',
'/tbp/Aktb-04-B001-047.html',
'/tbp/Aktb-04-B001-048.html',
'/tbp/Aktb-04-B001-051.html',
'/tbp/Aktb-04-B001-053.html',
'/tbp/Aktb-04-B001-054.html',
'/tbp/Aktb-04-B001-073.html',
'/tbp/Aktb-04-B001-084.html',
'/tbp/Aktb-04-B001-090.html',
'/tbp/Aktb-04-B001-091.html',
'/tbp/Aktb-04-B001-113.html',
'/tbp/Aktb-04-B001-114.html',
'/tbp/Aktb-04-B001-115.html',
'/tbp/Aktb-04-B001-116.html',
'/tbp/Aktb-04-B001-117.html',
'/tbp/Aktb-04-B001-118.html',
'/tbp/Aktb-04-B001-127.html',
'/tbp/Aktb-04-B001-128.html',
'/tbp/Aktb-04-B001-133.html',
'/tbp/Aktb-04-B001-134.html',
'/tbp/Aktb-04-B001-138.html',
'/tbp/Aktb-04-B001-139.html',
'/tbp/Aktb-04-B001-146.html',
'/tbp/Aktb-04-B001-148.html',
'/tbp/Aktb-05-JON-000.html',
'/tbp/Aktb-05-JON-001.html',
'/tbp/Aktb-05-JON-002.html',
'/tbp/Aktb-05-JON-003.html',
'/tbp/Aktb-05-JON-004.html',
'/tbp/Aktb-06-LUK-000.html',
'/tbp/Aktb-06-LUK-001.html',
'/tbp/Aktb-06-LUK-002.html',
'/tbp/Aktb-06-LUK-003.html',
'/tbp/Aktb-06-LUK-004.html',
'/tbp/Aktb-06-LUK-005.html',
'/tbp/Aktb-06-LUK-006.html',
'/tbp/Aktb-06-LUK-007.html',
'/tbp/Aktb-06-LUK-008.html',
'/tbp/Aktb-06-LUK-009.html',
'/tbp/Aktb-06-LUK-010.html',
'/tbp/Aktb-06-LUK-011.html',
'/tbp/Aktb-06-LUK-012.html',
'/tbp/Aktb-06-LUK-013.html',
'/tbp/Aktb-06-LUK-014.html',
'/tbp/Aktb-06-LUK-015.html',
'/tbp/Aktb-06-LUK-016.html',
'/tbp/Aktb-06-LUK-017.html',
'/tbp/Aktb-06-LUK-018.html',
'/tbp/Aktb-06-LUK-019.html',
'/tbp/Aktb-06-LUK-020.html',
'/tbp/Aktb-06-LUK-021.html',
'/tbp/Aktb-06-LUK-022.html',
'/tbp/Aktb-06-LUK-023.html',
'/tbp/Aktb-06-LUK-024.html',
'/tbp/Aktb-07-JHN-001.html',
'/tbp/Aktb-07-JHN-002.html',
'/tbp/Aktb-07-JHN-003.html',
'/tbp/Aktb-08-ACT-000.html',
'/tbp/Aktb-08-ACT-001.html',
'/tbp/Aktb-08-ACT-002.html',
'/tbp/Aktb-08-ACT-003.html',
'/tbp/Aktb-08-ACT-004.html',
'/tbp/Aktb-08-ACT-005.html',
'/tbp/Aktb-08-ACT-006.html',
'/tbp/Aktb-08-ACT-007.html',
'/tbp/Aktb-08-ACT-008.html',
'/tbp/Aktb-08-ACT-009.html',
'/tbp/Aktb-08-ACT-010.html',
'/tbp/Aktb-08-ACT-011.html',
'/tbp/Aktb-08-ACT-012.html',
'/tbp/Aktb-08-ACT-013.html',
'/tbp/Aktb-08-ACT-014.html',
'/tbp/Aktb-08-ACT-015.html',
'/tbp/Aktb-08-ACT-016.html',
'/tbp/Aktb-08-ACT-017.html',
'/tbp/Aktb-08-ACT-018.html',
'/tbp/Aktb-08-ACT-019.html',
'/tbp/Aktb-08-ACT-020.html',
'/tbp/Aktb-08-ACT-021.html',
'/tbp/Aktb-08-ACT-022.html',
'/tbp/Aktb-08-ACT-023.html',
'/tbp/Aktb-08-ACT-024.html',
'/tbp/Aktb-08-ACT-025.html',
'/tbp/Aktb-08-ACT-026.html',
'/tbp/Aktb-08-ACT-027.html',
'/tbp/Aktb-08-ACT-028.html',
'/tbp/Aktb-09-GLO-001.html',
'/tbp/Aktb-10-DBS-001.html',
'/tbp/index.html']

// Respond with cached resources
self.addEventListener('fetch', function (e) {
  console.log('fetch request : ' + e.request.url)
  e.respondWith(
	caches.match(e.request).then(function (request) {
	  if (request) { // if cache is available, respond with cache
		console.log('responding with cache : ' + e.request.url)
		return request
	  } else {       // if there are no cache, try fetching request
		console.log('file is not cached, fetching : ' + e.request.url)
		return fetch(e.request)
	  }

	  // You can omit if/else for console.log & put one line below like this too.
	  // return request || fetch(e.request)
	})
  )
})

// Cache resources
self.addEventListener('install', function (e) {
  e.waitUntil(
	caches.open(CACHE_NAME).then(function (cache) {
	  console.log('installing cache : ' + CACHE_NAME)
	  return cache.addAll(URLS)
	})
  )
})

// Delete outdated caches
self.addEventListener('activate', function (e) {
  e.waitUntil(
	caches.keys().then(function (keyList) {
	  // `keyList` contains all cache names under your username.github.io
	  // filter out ones that has this app prefix to create white list
	  var cacheWhitelist = keyList.filter(function (key) {
		return key.indexOf(APP_PREFIX)
	  })
	  // add current cache name to white list
	  cacheWhitelist.push(CACHE_NAME)

	  return Promise.all(keyList.map(function (key, i) {
		if (cacheWhitelist.indexOf(key) === -1) {
		  console.log('deleting cache : ' + keyList[i] )
		  return caches.delete(keyList[i])
		}
	  }))
	})
  )
})
    