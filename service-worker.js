"use strict";var precacheConfig=[["/index.html","f134c9241873d37b8be3c0c79643b359"],["/static/css/main.5beb2db0.css","6031e81a2adb49ec9b91bd8b4fdae512"],["/static/js/main.127906f7.js","c1e3be96c77449361b88879923fad3b0"],["/static/media/animepicpicker-1.d5a2adf5.png","d5a2adf5806a2b6828980a00e602227f"],["/static/media/animepicpicker-2.c33006b0.png","c33006b06427796843c7048dd61a85c9"],["/static/media/gameofpawns-1.41981f8f.png","41981f8f9f257345b48a5a537f6d9c89"],["/static/media/gameofpawns-2.95238e46.png","95238e4661b40cc083f3187291008b4a"],["/static/media/helloworld-1-featured.971df373.png","971df373db54d323d2dd2fa685709291"],["/static/media/helloworld-1.50d6a979.png","50d6a979c8da13770a3802d549ebe317"],["/static/media/helloworld-2-featured.3544602c.png","3544602ca72bbaab8c0f16271e988409"],["/static/media/helloworld-2.7fab7a02.png","7fab7a02d2d6297e7922e8f725a281b9"],["/static/media/me.6837a94c.jpg","6837a94ce45148cb6cf16515378f2ef9"],["/static/media/steamredux-1.1946bef6.png","1946bef6faae80ab9fd28b79c6b2d9c8"],["/static/media/steamredux-2.4dbcbb82.png","4dbcbb827a89b198dc8c24b76696744c"],["/static/media/thankheaven-1.666eb860.png","666eb860ba1712cdd1b9bb962436ca6c"],["/static/media/thankheaven-2.a86c4325.png","a86c43258bca15075c19a7cb1ac90d6c"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),t=urlsToCacheKeys.has(a));var r="/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(r,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});