if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,i,t)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const c={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return n;case"module":return c;default:return e(s)}}))).then((e=>{const s=t(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-1ca495a9"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/00cd3a06f38bb833aaee7ab6a324ed2aae69e75d.9b1a6d28c21dd25fe1ad.js",revision:"yIevqnYch6eisYB8bHNzY"},{url:"/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.a86c81ff05b71fb1ba9b.js",revision:"yIevqnYch6eisYB8bHNzY"},{url:"/_next/static/chunks/framework.abffcf18e526b7c0dbcd.js",revision:"yIevqnYch6eisYB8bHNzY"},{url:"/_next/static/chunks/main-ca22c2c8b96855cfd21f.js",revision:"yIevqnYch6eisYB8bHNzY"},{url:"/_next/static/chunks/pages/_app-98b575607d4577674620.js",revision:"yIevqnYch6eisYB8bHNzY"},{url:"/_next/static/chunks/pages/_error-2acd157473c2704e5800.js",revision:"yIevqnYch6eisYB8bHNzY"},{url:"/_next/static/chunks/pages/index-fe183c87fb2029132fd0.js",revision:"yIevqnYch6eisYB8bHNzY"},{url:"/_next/static/chunks/pages/phaser-game-e8b434f1288462ff4bb0.js",revision:"yIevqnYch6eisYB8bHNzY"},{url:"/_next/static/chunks/pages/slides-titler-65d44e36c9df8fb746fe.js",revision:"yIevqnYch6eisYB8bHNzY"},{url:"/_next/static/chunks/polyfills-144e5fa6fafab6397d9c.js",revision:"yIevqnYch6eisYB8bHNzY"},{url:"/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js",revision:"yIevqnYch6eisYB8bHNzY"},{url:"/_next/static/css/abce1a242d7b27e5dde3.css",revision:"yIevqnYch6eisYB8bHNzY"},{url:"/_next/static/css/e7c890e9da2727302119.css",revision:"yIevqnYch6eisYB8bHNzY"},{url:"/_next/static/yIevqnYch6eisYB8bHNzY/_buildManifest.js",revision:"yIevqnYch6eisYB8bHNzY"},{url:"/_next/static/yIevqnYch6eisYB8bHNzY/_ssgManifest.js",revision:"yIevqnYch6eisYB8bHNzY"},{url:"/htc.png",revision:"4d30cc50eb6c217cf16eadeed3e50dbe"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
