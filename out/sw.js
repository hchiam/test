if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,t,n)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const i={uri:location.origin+s.slice(1)};return Promise.all(t.map((s=>{switch(s){case"exports":return r;case"module":return i;default:return e(s)}}))).then((e=>{const s=n(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-1ca495a9"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/server/middleware-manifest.json",revision:"F0Orl6uG-Au-3Yj3INoD4"},{url:"/_next/static/F0Orl6uG-Au-3Yj3INoD4/_buildManifest.js",revision:"F0Orl6uG-Au-3Yj3INoD4"},{url:"/_next/static/F0Orl6uG-Au-3Yj3INoD4/_middlewareManifest.js",revision:"F0Orl6uG-Au-3Yj3INoD4"},{url:"/_next/static/F0Orl6uG-Au-3Yj3INoD4/_ssgManifest.js",revision:"F0Orl6uG-Au-3Yj3INoD4"},{url:"/_next/static/chunks/12-977965a5394e5dfb.js",revision:"F0Orl6uG-Au-3Yj3INoD4"},{url:"/_next/static/chunks/139.c3793f6d086f63b7.js",revision:"F0Orl6uG-Au-3Yj3INoD4"},{url:"/_next/static/chunks/461.9018826897309215.js",revision:"F0Orl6uG-Au-3Yj3INoD4"},{url:"/_next/static/chunks/669.14bce77aae97640e.js",revision:"F0Orl6uG-Au-3Yj3INoD4"},{url:"/_next/static/chunks/framework-ff100329a956f214.js",revision:"F0Orl6uG-Au-3Yj3INoD4"},{url:"/_next/static/chunks/main-8ca6ea1b5873e3f8.js",revision:"F0Orl6uG-Au-3Yj3INoD4"},{url:"/_next/static/chunks/pages/_app-ca6aae25bc99a05f.js",revision:"F0Orl6uG-Au-3Yj3INoD4"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"F0Orl6uG-Au-3Yj3INoD4"},{url:"/_next/static/chunks/pages/gamepad-hardware-test-c861f86e9963642a.js",revision:"F0Orl6uG-Au-3Yj3INoD4"},{url:"/_next/static/chunks/pages/index-18eaa4fa12dbbabe.js",revision:"F0Orl6uG-Au-3Yj3INoD4"},{url:"/_next/static/chunks/pages/phaser-game-c0d0e98a8de58dda.js",revision:"F0Orl6uG-Au-3Yj3INoD4"},{url:"/_next/static/chunks/pages/slides-titler-e9110a9abcc50226.js",revision:"F0Orl6uG-Au-3Yj3INoD4"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"F0Orl6uG-Au-3Yj3INoD4"},{url:"/_next/static/chunks/webpack-d0b1297058aedd92.js",revision:"F0Orl6uG-Au-3Yj3INoD4"},{url:"/_next/static/css/2e622fb19a3b7ebc.css",revision:"F0Orl6uG-Au-3Yj3INoD4"},{url:"/_next/static/css/d571c8e11d059238.css",revision:"F0Orl6uG-Au-3Yj3INoD4"},{url:"/htc.png",revision:"4d30cc50eb6c217cf16eadeed3e50dbe"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
