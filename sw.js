if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return t[e]||(s=new Promise((async s=>{if("document"in self){const t=document.createElement("script");t.src=e,document.head.appendChild(t),t.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!t[e])throw new Error(`Module ${e} didn’t register its module`);return t[e]}))},s=(s,t)=>{Promise.all(s.map(e)).then((e=>t(1===e.length?e[0]:e)))},t={require:Promise.resolve(s)};self.define=(s,n,r)=>{t[s]||(t[s]=Promise.resolve().then((()=>{let t={};const a={uri:location.origin+s.slice(1)};return Promise.all(n.map((s=>{switch(s){case"exports":return t;case"module":return a;default:return e(s)}}))).then((e=>{const s=r(...e);return t.default||(t.default=s),t}))})))}}define("./sw.js",["./workbox-1ca495a9"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/LMKp_umjWh68BMUzE1DVV/_buildManifest.js",revision:"LMKp_umjWh68BMUzE1DVV"},{url:"/_next/static/LMKp_umjWh68BMUzE1DVV/_ssgManifest.js",revision:"LMKp_umjWh68BMUzE1DVV"},{url:"/_next/static/chunks/12-c73e8aabbb3cc2f65ef0.js",revision:"LMKp_umjWh68BMUzE1DVV"},{url:"/_next/static/chunks/330.7e251bee62d02fa05cd1.js",revision:"LMKp_umjWh68BMUzE1DVV"},{url:"/_next/static/chunks/72.faa1fba89e31098d5f1e.js",revision:"LMKp_umjWh68BMUzE1DVV"},{url:"/_next/static/chunks/988.c9ec6653dce4bb16848d.js",revision:"LMKp_umjWh68BMUzE1DVV"},{url:"/_next/static/chunks/framework-7fb170772c63cda258c7.js",revision:"LMKp_umjWh68BMUzE1DVV"},{url:"/_next/static/chunks/main-bb56d5c75bf9b88f6852.js",revision:"LMKp_umjWh68BMUzE1DVV"},{url:"/_next/static/chunks/pages/_app-8d5c45952c57a88c8863.js",revision:"LMKp_umjWh68BMUzE1DVV"},{url:"/_next/static/chunks/pages/_error-737a04e9a0da63c9d162.js",revision:"LMKp_umjWh68BMUzE1DVV"},{url:"/_next/static/chunks/pages/gamepad-hardware-test-2489a835b58fd372e64d.js",revision:"LMKp_umjWh68BMUzE1DVV"},{url:"/_next/static/chunks/pages/index-c9bd72cb6318ecd18295.js",revision:"LMKp_umjWh68BMUzE1DVV"},{url:"/_next/static/chunks/pages/phaser-game-ee0a8b161fa1c323aa25.js",revision:"LMKp_umjWh68BMUzE1DVV"},{url:"/_next/static/chunks/pages/slides-titler-d6eaf1deae31ed799f1f.js",revision:"LMKp_umjWh68BMUzE1DVV"},{url:"/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",revision:"LMKp_umjWh68BMUzE1DVV"},{url:"/_next/static/chunks/webpack-5cf9a42a8d7de5fbd0ed.js",revision:"LMKp_umjWh68BMUzE1DVV"},{url:"/_next/static/css/bb69e348766424f43134.css",revision:"LMKp_umjWh68BMUzE1DVV"},{url:"/_next/static/css/eeee692ec3b80739781b.css",revision:"LMKp_umjWh68BMUzE1DVV"},{url:"/htc.png",revision:"4d30cc50eb6c217cf16eadeed3e50dbe"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
