(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2066:function(e,t,n){"use strict";function o(){window.absolutelyAwesomeYouFoundAHiddenCommand=function(){alert("Cool!")},window.goToGame=function(){window.location.href="/phaser-game"},window.goToSNPromptGenerator=function(){window.location.href="https://sn-prompt-generator.surge.sh"},window.goToCRPrep=function(){window.location.href="https://cr-prep.glitch.me"},window.skew=function(){document.body.style.transform="skewY(-10deg)",document.body.style.transformOrigin="150% top",document.body.style.background="black",setTimeout((function(){document.body.style.transform="",document.body.style.background="transparent",document.body.style.top="0"}),1e3)},window.slides=function(){location="https://simple-slides.surge.sh"},window.gamepadHardware=function(){window.location.href="/gamepad-hardware-test"},window.home=function(){window.location.href="/"},window.wowYouFoundAHiddenCommand=window.absolutelyAwesomeYouFoundAHiddenCommand,window.game=window.goToGame,window.snpg=window.goToSNPromptGenerator,window.cr=window.goToCRPrep,console.log("%c If you're online, \n all of these commands will work: %c\n  \n  %cskew()%c\n  \n  %cgame()%c\n  \n  %cslides()%c\n\n  %cgamepadHardware()%c\n  \n  %chome()%c\n  \n  You can see my auto-generated GitHub r\xe9sum\xe9 here: \n  %chttps://resume.github.io/?hchiam%c\n  ","color: blue; background: lightgrey;","","color: lime; background: black; padding: 5px 10px;","","color: lime; background: black; padding: 5px 10px;","","color: lime; background: black; padding: 5px 10px;","","color: lime; background: black; padding: 5px 10px;","","color: lime; background: black; padding: 5px 10px;","","color: lime;",""),function(){if(window.addEventListener){var e=[];window.addEventListener("keydown",(function(t){var n=t.which||t.keyCode;e.push(n),e.toString().indexOf("38,38,40,40,37,39,37,39,66,65")>=0&&(goToGame(),e=[])}),!0)}}()}n.d(t,{Z:function(){return o}})},8771:function(e,t,n){"use strict";var o=n(9713);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=function(e,t){var n=i.default,o={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};e instanceof Promise?o.loader=function(){return e}:"function"===typeof e?o.loader=e:"object"===typeof e&&(o=a(a({},o),e));var r=o=a(a({},o),t);if(r.suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");if(r.suspense)return n(r);o.loadableGenerated&&delete(o=a(a({},o),o.loadableGenerated)).loadableGenerated;if("boolean"===typeof o.ssr){if(!o.ssr)return delete o.ssr,c(n,o);delete o.ssr}return n(o)};s(n(7294));var i=s(n(4860));function s(e){return e&&e.__esModule?e:{default:e}}function c(e,t){return delete t.webpack,delete t.modules,e(t)}},1083:function(e,t,n){"use strict";var o;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var r=((o=n(7294))&&o.__esModule?o:{default:o}).default.createContext(null);t.LoadableContext=r},4860:function(e,t,n){"use strict";var o=n(4575),r=n(3913),a=n(9713);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var o=0,r=function(){};return{s:r,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){s=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(s)throw a}}}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var d,u=(d=n(7294))&&d.__esModule?d:{default:d},h=n(7161),m=n(1083);var f=[],p=[],b=!1;function x(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}var w=function(){function e(t,n){o(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return r(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"===typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),n.delay)),"number"===typeof n.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),n.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=s(s({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function g(e){return function(e,t){var n=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);n.suspense&&(n.lazy=u.default.lazy(n.loader));var o=null;function r(){if(!o){var t=new w(e,n);o={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return o.promise()}if(!b&&"function"===typeof n.webpack&&!n.suspense){var a=n.webpack();p.push((function(e){var t,n=c(a);try{for(n.s();!(t=n.n()).done;){var o=t.value;if(-1!==e.indexOf(o))return r()}}catch(i){n.e(i)}finally{n.f()}}))}var i=n.suspense?function(e,t){return u.default.createElement(n.lazy,s(s({},e),{},{ref:t}))}:function(e,t){r();var a=u.default.useContext(m.LoadableContext),i=h.useSubscription(o);return u.default.useImperativeHandle(t,(function(){return{retry:o.retry}}),[]),a&&Array.isArray(n.modules)&&n.modules.forEach((function(e){a(e)})),u.default.useMemo((function(){return i.loading||i.error?u.default.createElement(n.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:o.retry}):i.loaded?u.default.createElement(function(e){return e&&e.__esModule?e.default:e}(i.loaded),e):null}),[e,i])};return i.preload=function(){return!n.suspense&&r()},i.displayName="LoadableComponent",u.default.forwardRef(i)}(x,e)}function j(e,t){for(var n=[];e.length;){var o=e.pop();n.push(o(t))}return Promise.all(n).then((function(){if(e.length)return j(e,t)}))}g.preloadAll=function(){return new Promise((function(e,t){j(f).then(e,t)}))},g.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return b=!0,t()};j(p,e).then(n,n)}))},window.__NEXT_PRELOADREADY=g.preloadReady;var y=g;t.default=y},7836:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return T}});var o=n(5988);function r(){var e,t;return"localhost"===(null===(e=location)||void 0===e?void 0:e.hostname)||"127.0.0.1"===(null===(t=location)||void 0===t?void 0:t.hostname)}var a=n(7294),i=(n(3935),n(9008)),s=n(5893);function c(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("script",{src:"https://cdn.jsdelivr.net/gh/hchiam/_2DNote@1.12.3/_2DNote.min.js",integrity:"sha384-e0d2dNwg3F9WTJ3jZBF5iUeuVyAtx+zwMnCAvKMiCHtwO2l2dzo3cIMO4+Xqwn5p",crossOrigin:"anonymous"}),(0,s.jsx)("script",{src:"https://cdn.jsdelivr.net/gh/hchiam/draggable@3.4.4/makeElementDraggable.js",integrity:"sha384-qeMZYjNvssfC2HCZuLY1ouJRQOi+NnH8YnBQ1YWWQzv63aWXokJevcK+noP39Uhl",crossOrigin:"anonymous"}),(0,s.jsx)("script",{src:"https://unpkg.com/universal-tilt.js",integrity:"sha384-tZhf4CaqdH3Z6krNwpjhIxCHu1fs91yFeMFR/sR2qSRDr78wNeJT0F1ZrULDLg31",crossOrigin:"anonymous"}),(0,s.jsx)("script",{src:"https://cdn.jsdelivr.net/gh/hchiam/flying-focus@1.3.0/flying-focus.js",integrity:"sha384-R/GTkKePjxM+7NiHK3HnRFNqvOoCND50qZZgnhKN8NsT3cRIIrTRw1EdS61VgW3W",crossOrigin:"anonymous"}),(0,s.jsx)("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/three.js/r99/three.min.js"})]})}var l=n(4476),d=n.n(l),u=["#noscript.jsx-1412751374 p.jsx-1412751374{text-align:center !important;}","h1.jsx-1412751374{font-size:7vw;-webkit-letter-spacing:0.2ch;-moz-letter-spacing:0.2ch;-ms-letter-spacing:0.2ch;letter-spacing:0.2ch;}","button.jsx-1412751374{font-family:monospace;}","#hint.jsx-1412751374{font-size:xx-large;font-weight:bolder;color:rgb(50,50,50);margin-top:7rem;}","#hint.jsx-1412751374:hover{color:lime;}","#secret-button.jsx-1412751374{position:absolute;left:-100%;z-index:3;}","#secret-button.jsx-1412751374:focus{left:10% !important;}",".view-resize-animation.jsx-1412751374{margin:10px;}","#hint.jsx-1412751374,button.jsx-1412751374:hover,button.jsx-1412751374:focus,a.jsx-1412751374:hover,a.jsx-1412751374:focus{-webkit-animation:wobble-jsx-1412751374 forwards infinite 0.5s,rest-jsx-1412751374 forwards 3s;animation:wobble-jsx-1412751374 forwards infinite 0.5s,rest-jsx-1412751374 forwards 3s;}","@media (prefers-reduced-motion){#hint.jsx-1412751374,button.jsx-1412751374:hover,button.jsx-1412751374:focus,a.jsx-1412751374:hover,a.jsx-1412751374:focus{-webkit-animation-name:none;animation-name:none;}}","@-webkit-keyframes wobble-jsx-1412751374{0%{-webkit-transform:rotate(-5deg);-ms-transform:rotate(-5deg);transform:rotate(-5deg);}50%{-webkit-transform:rotate(5deg);-ms-transform:rotate(5deg);transform:rotate(5deg);}100%{-webkit-transform:rotate(-5deg);-ms-transform:rotate(-5deg);transform:rotate(-5deg);}}","@keyframes wobble-jsx-1412751374{0%{-webkit-transform:rotate(-5deg);-ms-transform:rotate(-5deg);transform:rotate(-5deg);}50%{-webkit-transform:rotate(5deg);-ms-transform:rotate(5deg);transform:rotate(5deg);}100%{-webkit-transform:rotate(-5deg);-ms-transform:rotate(-5deg);transform:rotate(-5deg);}}","@-webkit-keyframes rest-jsx-1412751374{100%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}}","@keyframes rest-jsx-1412751374{100%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}}","#draggable.jsx-1412751374{cursor:move;border-radius:1em;font-size:10px;-webkit-transition:none;transition:none;z-index:9001;margin-top:1rem;position:absolute;top:45%;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);}",".commandKey.jsx-1412751374{background:navy;}","#cover.jsx-1412751374{z-index:-1;position:fixed;background:var(--secondary-color);opacity:0.1;width:100%;height:100%;top:0;left:0;-webkit-clip-path:polygon(0% 0%,100% 30%,100% 100%,0% 80%);clip-path:polygon(0% 0%,100% 30%,100% 100%,0% 80%);}","#cursor-shadow.jsx-1412751374{position:absolute;box-shadow:0 0 50px 50px rgba(0,0,0,0.1);-webkit-transition:0s;transition:0s;}","#extra-info.jsx-1412751374{color:#808080;width:100%;position:fixed;top:80%;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);}",".tilt.jsx-1412751374{width:15ch;margin:auto;-webkit-transform-style:preserve-3d;-ms-transform-style:preserve-3d;transform-style:preserve-3d;border-radius:3px;box-shadow:0 0 10px 5px rgba(0,0,0,0.5);}",".tilt.jsx-1412751374:hover{background:lime;color:black;}",".tilt.jsx-1412751374>.tilt-element-inner-text.jsx-1412751374{-webkit-transform:translateZ(20px);-ms-transform:translateZ(20px);transform:translateZ(20px);color:white;text-align:center;border-radius:3px;box-shadow:0 0 10px 5px rgba(0,0,0,0.5);line-height:50px;font-family:avenir,arial,tahoma,monospace;position:absolute;width:50px;height:50px;}",".tilt.jsx-1412751374>.tilt-element-inner-text.middle.jsx-1412751374{top:10px;left:25px;background:rgba(0,0,255,0.75);}",".tilt.jsx-1412751374>.tilt-element-inner-text.top-right.jsx-1412751374{top:-30px;right:-10px;background:rgba(255,255,0,0.2);}","#link-to-github-profile.jsx-1412751374{padding:0;}","#button-notification.jsx-1412751374{position:absolute;left:-9999px;}",".draggable-offline.jsx-1412751374{width:26ch;border-radius:0 !important;}","#ascii-art.jsx-1412751374{display:none;}","#ascii-art.jsx-1412751374>p.jsx-1412751374{padding:0;margin:-1px;color:black !important;}",".sequence.jsx-1412751374{font-size:3.5vw;font-weight:500;margin:0.25em auto;width:33ch;border:none;-webkit-transition:0.25s;transition:0.25s;}",".sequence.jsx-1412751374 span.jsx-1412751374{padding-left:0;padding-right:0;border-radius:0;margin:0;}",".sequence.jsx-1412751374 span.jsx-1412751374:first-child{padding-left:10px;border-radius:10px 0 0 10px;}",".sequence.jsx-1412751374 span.jsx-1412751374:last-child{padding-right:10px;border-radius:0 10px 10px 0;}",".sequence.jsx-1412751374:hover span.jsx-1412751374{background:lime;color:black;}",".sequence.jsx-1412751374:hover span.jsx-1412751374:nth-child(1){-webkit-transition-delay:0.1s;transition-delay:0.1s;}",".sequence.jsx-1412751374:hover span.jsx-1412751374:nth-child(2){-webkit-transition-delay:0.2s;transition-delay:0.2s;}",".sequence.jsx-1412751374:hover span.jsx-1412751374:nth-child(3){-webkit-transition-delay:0.3s;transition-delay:0.3s;}",".sequence.jsx-1412751374:hover~#button-group.jsx-1412751374 button[id].jsx-1412751374{background:lime;color:black;}",".sequence.jsx-1412751374:hover~#button-group.jsx-1412751374 button[id].jsx-1412751374:nth-of-type(1){-webkit-transition-delay:0.4s;transition-delay:0.4s;}",".sequence.jsx-1412751374:hover~#button-group.jsx-1412751374 button[id].jsx-1412751374:nth-of-type(2){-webkit-transition-delay:0.5s;transition-delay:0.5s;}",".sequence.jsx-1412751374:hover~#button-group.jsx-1412751374 button[id].jsx-1412751374:nth-of-type(3){-webkit-transition-delay:0.6s;transition-delay:0.6s;}",".sequence.jsx-1412751374:hover~#button-group.jsx-1412751374 button[id].jsx-1412751374:nth-of-type(4){-webkit-transition-delay:0.7s;transition-delay:0.7s;}",".sequence.jsx-1412751374:hover~#button-group.jsx-1412751374 button[id].jsx-1412751374:nth-of-type(5){-webkit-transition-delay:0.8s;transition-delay:0.8s;}",".sequence.jsx-1412751374:hover~#button-group.jsx-1412751374 button[id].jsx-1412751374:nth-of-type(6){-webkit-transition-delay:0.9s;transition-delay:0.9s;}","@media only screen and (max-device-width:640px){button.jsx-1412751374{min-width:48px;min-height:48px;margin:10px;}#secret-button.jsx-1412751374{width:26ch;left:calc(50% - 14ch);bottom:-10vh;}.sequence.jsx-1412751374{font-size:medium;text-align:center;}}","#threejs-scene-container.jsx-1412751374{overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}"];u.__hash="1412751374";var h=u;function m(){var e=(0,a.useState)(!0),t=e[0],n=e[1],o=(0,a.useRef)();return(0,s.jsx)(s.Fragment,{children:t&&(0,s.jsx)("button",{className:"mystery-spawn-button",ref:o,onMouseOver:function(){o.current.style.color="transparent",o.current.style.width=0,o.current.style.height=0,o.current.style.padding=0,setTimeout((function(){n(!1)}),500)},children:"?"})})}function f(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o=(0,a.useState)(!1),r=o[0],i=o[1];function s(t){t.key===e&&i(!0)}function c(n){n.key===e&&(i(!1),t())}return(0,a.useEffect)((function(){return window.addEventListener("keydown",s),window.addEventListener("keyup",c),function(){window.removeEventListener("keydown",s),window.removeEventListener("keyup",c)}}),n),r}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,a=[],i=!0,s=!1;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(a.push(o.value),!t||a.length!==t);i=!0);}catch(c){s=!0,r=c}finally{try{i||null==n.return||n.return()}finally{if(s)throw r}}return a}}(e,t)||function(e,t){if(e){if("string"===typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e){var t=b(function(e){var t=document.querySelector(e).getBoundingClientRect(),n=t.left,o=t.top;return[n,o]}(e),2),n=t[0],o=t[1],r=function(e){var t=Math.max(document.documentElement.clientWidth,window.innerWidth||0);return w(e,0,t,150,400)}(n),a=function(e){var t=Math.max(document.documentElement.clientHeight,window.innerHeight||0);return w(e,0,t,0,.1)}(o),i=w(a,0,.5,0,100);i=Math.round(i);var s=w(r,150,400,0,359);s=Math.round(s);var c="hsl("+String(s)+","+String(i)+"%, 50%)";document.querySelector(e).style.background=c}function w(e,t,n,o,r){var a=(e-t)*((r-o)/(n-t))+o;return Math.min(Math.max(a,o),r)}function g(){window.scrollY>0&&(this.innerText="",document.removeEventListener("scroll",g))}function j(e,t){var n=t-e;return Math.floor(Math.random()*(n+1))+e}var y=n(2066);function v(e){return window.scrollTo(0,e.current.offsetTop)}function _(e){if("THREE"in window){var t,n=document.documentElement.clientWidth/document.documentElement.clientHeight,o=new window.THREE.PerspectiveCamera(100,n,.1,1e4),r=new window.THREE.Scene,a=new window.THREE.WebGLRenderer({antialias:!0,alpha:!0}),i=document.querySelector(e);!function(){var e=new window.THREE.MeshPhongMaterial({color:new window.THREE.Color("green"),emissive:new window.THREE.Color("green"),specular:new window.THREE.Color("#636363"),shininess:10,shading:window.THREE.FlatShading,opacity:.75});(t=new window.THREE.Mesh(new window.THREE.IcosahedronGeometry(50,1),e)).rotation.z=.5,t.position.z=-100}(),o.position.z=200,function(){r.add(o);var e=new window.THREE.PointLight(16777215,1);e.position.z=100,e.position.y=100,e.position.x=100,r.add(e);var n=new window.THREE.PointLight(16777215,.8);n.position.z=200,n.position.y=50,n.position.x=-100,r.add(n),r.add(t)}(),function(){function e(){requestAnimationFrame(e),a.render(r,o),t.rotation.x+=.02,t.rotation.y+=.03}a.setSize(window.innerWidth,window.innerHeight),e()}(),i.append(a.domElement)}}var k=n(5152),C=(0,k.default)((function(){return Promise.all([n.e(988),n.e(330)]).then(n.bind(n,8330))}),{loading:function(){return(0,s.jsx)("p",{children:"..."})},loadableGenerated:{webpack:function(){return[8330]},modules:["index.js -> ../components/WaymoDemo"]}}),E=(0,k.default)((function(){return Promise.all([n.e(988),n.e(72)]).then(n.bind(n,6072))}),{loading:function(){return(0,s.jsx)("p",{children:"..."})},loadableGenerated:{webpack:function(){return[6072]},modules:["index.js -> ../components/VerilyDemo"]}});function T(){var e=(0,a.useState)(!1),t=e[0],n=e[1],l=(0,a.useState)(!0),u=l[0],p=l[1],b=(0,a.useState)(!1),w=b[0],k=b[1],T=(0,a.useState)(!1),N=T[0],S=T[1],O=(0,a.useState)(!1),H=O[0],A=O[1],M=(0,a.useState)(""),P=(M[0],M[1]),I=(0,a.useState)(""),R=I[0],q=I[1],D=(0,a.useRef)(),L=(0,a.useRef)(null),z=(0,a.useRef)(null),B=(0,a.useState)(!1),W=B[0],G=B[1],Z=(0,a.useState)(!1),F=Z[0],K=Z[1],X=(0,a.useState)(0),Y=X[0],V=X[1],U=(0,a.useState)(!1),J=U[0],Q=U[1],$=(0,a.useState)(!1),ee=$[0],te=$[1],ne=(0,a.useState)(!1),oe=ne[0],re=ne[1],ae=(0,a.useState)(!1),ie=ae[0],se=ae[1],ce=(0,a.useState)(!0),le=ce[0],de=ce[1],ue=(0,a.useState)(!0),he=ue[0],me=ue[1];function fe(){xe(),A(!0),q("To stop audio, click off or stop dragging."),x("#draggable")}function pe(){A(!1),q("")}function be(){xe(),A(!0),x("#draggable")}function xe(){document.documentElement.clientWidth<640||(G(!0),function(){G(!0);var e=document.getElementById("a");e.innerText=" A ",e.setAttribute("role","button");var t=document.getElementById("s");t.innerText=" S ",t.setAttribute("role","button");var n=document.getElementById("d");n.innerText=" D ",n.setAttribute("role","button");var o=document.getElementById("f");o.innerText=" F ",o.setAttribute("role","button");var r=document.getElementById("c");r.innerText=" C ",r.setAttribute("role","button");var a=document.getElementById("space");a.innerText=" SPACE ",a.setAttribute("role","button")}())}function we(){W&&V(Y+1)}function ge(){W&&V(Y-1)}function je(){W&&V(0)}function ye(){W&&V(Y+30)}function ve(){K(!F),G(!0)}function _e(){W&&(S(!0),q("Hint: refresh the page."),Q(!0),document.querySelectorAll("button, img, #hint, h1, p, span").forEach((function(e){var t=e.clientWidth,n=e.clientHeight,o=j(0,window.innerWidth-t),r=j(0,window.innerHeight-n);e.style.position="absolute",e.style.left=o+"px",e.style.top=r+"px"})),te(!0))}return f("a",we,[Y,W,F]),f("s",ge,[Y,W,F]),f("d",je,[Y,W,F]),f("f",ye,[Y,W,F]),f("c",ve,[W,F]),f(" ",_e,[W,F]),function(){var e=console.warn;console.warn=function(){r()&&e.apply(void 0,arguments)}}(),function(){var e=console.log;console.log=function(){(r()||"THREE.WebGLRenderer"!==arguments[0])&&e.apply(void 0,arguments)}}(),(0,a.useEffect)((function(){var e;document.addEventListener("mousemove",(function(e){var t=document.getElementById("cursor-shadow");t.style.left=e.pageX+"px",t.style.top=e.pageY+"px"})),setTimeout((function(){var e;n(!0),e=document.getElementById("extra-info"),navigator.serviceWorker&&(e.innerText="(BTW: This page works offline!)",document.addEventListener("scroll",g.bind(e)))}),10),setTimeout((function(){!function(){for(var e=Array.prototype.slice.call(document.querySelectorAll("button")),t=0;t<e.length;t++)e[t].classList.add("view-resize-animation")}(),document.getElementById("button-notification").innerText="Within scrolling view, there are six buttons in a group."}),1e3),setTimeout((function(){!function(){window.screen.availWidth>640?(q("Hint: hit Tab, or Shift + Tab a few times."),P("Hit Enter or Spacebar!")):(q("Hint: scroll down"),P("Secret button!"));S(!0)}()}),2e3),setTimeout((function(){_("#threejs-scene-container")}),3e3),(0,y.Z)(),function(e,t,n,o,r,a){var i={left:n.offsetLeft+"px",top:n.offsetTop+"px"};e.setAs2DArea(n,o,!1),t(n,{mouseUpCallback:r,keyboardMoveCallback:a}),n.style.left=i.left,n.style.top=i.top,document.body.addEventListener("mouseup",(function(){e.stop()}))}(_2DNote,makeElementDraggable,document.getElementById("draggable"),fe,pe,be),null===(e=UniversalTilt)||void 0===e||e.init({elements:document.querySelectorAll(".tilt"),settings:{},callbacks:{}}),function(e){if(window.history){var t=window.location.origin+"/?"+e;window.history.pushState({path:t},"",t)}}("can-you-find-all-the-hidden-features?"),window.disableTabbableChildren=function(e){var t,n=null===(t=document.querySelector(e))||void 0===t?void 0:t.querySelectorAll('button, a, [tabindex="0"]');n&&Array.from(n).forEach((function(e){e.tabIndex=-1}))},window.enableTabbableChildren=function(e){var t,n=null===(t=document.querySelector(e))||void 0===t?void 0:t.querySelectorAll('[tabindex="-1"]:not(.always-tabindex-1)');n&&Array.from(n).forEach((function(e){e.tabIndex=0}))},setTimeout((function(){window.disableTabbableChildren("#waymo-demo"),window.disableTabbableChildren("#verily-demo")}),1e3)}),[Y]),(0,s.jsxs)("div",{className:"jsx-".concat(h.__hash)+" "+(d().container||""),children:[(0,s.jsxs)(i.default,{children:[(0,s.jsx)("title",{className:"jsx-".concat(h.__hash),children:"Howard Chiam"}),(0,s.jsx)("meta",{name:"description",content:"Howard's Portfolio Central",className:"jsx-".concat(h.__hash)}),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1",className:"jsx-".concat(h.__hash)}),(0,s.jsx)("meta",{name:"theme-color",content:"rgb(32,32,32)",className:"jsx-".concat(h.__hash)}),(0,s.jsx)("link",{rel:"shortcut icon",href:"htc.png",className:"jsx-".concat(h.__hash)}),(0,s.jsx)(c,{})]}),(0,s.jsxs)("main",{className:"jsx-".concat(h.__hash),children:[(0,s.jsx)("noscript",{className:"jsx-".concat(h.__hash),children:(0,s.jsxs)("div",{id:"noscript",className:"jsx-".concat(h.__hash),children:[(0,s.jsx)("p",{className:"jsx-".concat(h.__hash),children:"Please enable JavaScript to learn more about Howard"}),(0,s.jsxs)("p",{className:"jsx-".concat(h.__hash),children:["Or visit",(0,s.jsx)("a",{id:"link-to-github-profile",href:"https://github.com/hchiam",target:"_blank",className:"jsx-".concat(h.__hash),children:"Howard's GitHub profile"})]})]})}),u&&(0,s.jsx)("button",{id:"secret-button",onClick:function(){return k(!0),p(!1),S(!1),void setTimeout((function(){var e;S(!0),null===D||void 0===D||null===(e=D.current)||void 0===e||e.focus(),q("Hint: drag the icon to move things around.")}),100)},"aria-label":"Hit Enter or Spacebar to reveal a hidden button!",className:"jsx-".concat(h.__hash),children:"Hit Enter or Spacebar!"}),(0,s.jsxs)("section",{id:"main",className:"jsx-".concat(h.__hash)+" "+"center ".concat(d().mainStart," ").concat(t&&d().mainSlideIn),children:[(0,s.jsx)("div",{id:"cover","aria-hidden":"true",className:"jsx-".concat(h.__hash)}),(0,s.jsx)("h1",{"data-tilt":"","data-scale":"1.2","data-shine":"true","data-shine-opacity":"0.5","data-shine-save":"true","tilt-change":"",title:"This is my name.",className:"jsx-".concat(h.__hash)+" tilt",children:"Howard Chiam"}),(0,s.jsxs)("p",{className:"jsx-".concat(h.__hash)+" sequence",children:[(0,s.jsx)("span",{role:"presentation",className:"jsx-".concat(h.__hash),children:"Learning. "}),(0,s.jsx)("span",{role:"presentation",className:"jsx-".concat(h.__hash),children:"Languages. "}),(0,s.jsx)("span",{role:"presentation",className:"jsx-".concat(h.__hash),children:"Other stuff."})]}),(0,s.jsxs)("div",{id:"button-group",className:"jsx-".concat(h.__hash),children:[(0,s.jsx)("div",{id:"button-notification",role:"status","aria-live":"polite",className:"jsx-".concat(h.__hash)}),(0,s.jsxs)("button",{role:"link",id:"a",onClick:function(){return W?we():window.open("https://github.com/hchiam","_blank")},className:"jsx-".concat(h.__hash)+" "+((J?"commandKey":"")||""),children:["GitHub",(0,s.jsx)("svg",{"view-box":"0 0 200 200",className:"jsx-".concat(h.__hash),children:(0,s.jsx)("path",{transform:"translate(100 100)",d:"M17.7,-34C26.3,-25.7,38.9,-27.7,51.1,-23.8C63.2,-19.8,74.8,-9.9,79.8,2.9C84.8,15.7,83.1,31.4,72.9,38.7C62.7,46,44,44.9,30.5,53.1C16.9,61.2,8.4,78.6,-4,85.4C-16.3,92.3,-32.7,88.6,-37.8,75.6C-43,62.6,-36.9,40.2,-43,26C-49.1,11.9,-67.4,5.9,-67.7,-0.2C-68.1,-6.3,-50.5,-12.7,-39.7,-18.7C-28.9,-24.8,-24.9,-30.5,-19.4,-40.6C-14,-50.7,-7,-65.2,-1.2,-63.1C4.6,-61,9.1,-42.3,17.7,-34Z",className:"jsx-".concat(h.__hash)})})]}),(0,s.jsxs)("button",{role:"link",id:"s",onClick:function(){return W?ge():window.open("https://codepen.io/hchiam","_blank")},className:"jsx-".concat(h.__hash)+" "+((J?"commandKey":"")||""),children:["CodePen",(0,s.jsx)("svg",{"view-box":"0 0 200 200",className:"jsx-".concat(h.__hash),children:(0,s.jsx)("path",{transform:"translate(100 100)",d:"M27.3,-47.1C39.9,-40.1,57.7,-41.8,68.6,-35.4C79.5,-29,83.6,-14.5,82.8,-0.5C82,13.6,76.3,27.2,68.3,38.8C60.4,50.4,50.3,60,38.6,59.3C26.8,58.6,13.4,47.5,1.4,45.2C-10.6,42.8,-21.3,49,-33.1,49.8C-44.9,50.5,-57.9,45.7,-67.3,36.5C-76.7,27.3,-82.5,13.6,-76.1,3.7C-69.7,-6.3,-51.1,-12.5,-42.3,-22.7C-33.4,-32.9,-34.4,-47,-28.9,-58.1C-23.5,-69.2,-11.8,-77.4,-2.2,-73.6C7.4,-69.8,14.8,-54.1,27.3,-47.1Z",className:"jsx-".concat(h.__hash)})})]}),(0,s.jsxs)("button",{role:"link",id:"d",onClick:function(){return W?je():window.open("https://glitch.com/@hchiam","_blank")},className:"jsx-".concat(h.__hash)+" "+((J?"commandKey":"")||""),children:["Glitch",(0,s.jsx)("svg",{"view-box":"0 0 200 200",className:"jsx-".concat(h.__hash),children:(0,s.jsx)("path",{transform:"translate(100 100)",d:"M31.5,-61.6C38.3,-50.6,39.6,-37.1,41.2,-26.4C42.7,-15.8,44.5,-7.9,49.7,3C54.8,13.8,63.3,27.6,61.3,37.6C59.4,47.7,47.1,53.9,35.1,57.1C23.1,60.4,11.6,60.7,-1.2,62.8C-14,64.9,-28.1,68.9,-34.5,62.5C-41,56.1,-39.9,39.3,-45.7,27.1C-51.6,15,-64.2,7.5,-64.9,-0.4C-65.6,-8.3,-54.3,-16.5,-45.3,-23.2C-36.3,-29.8,-29.7,-34.9,-22.5,-45.6C-15.4,-56.4,-7.7,-72.8,2.3,-76.8C12.3,-80.8,24.7,-72.5,31.5,-61.6Z",className:"jsx-".concat(h.__hash)})})]}),(0,s.jsxs)("button",{role:"link",id:"f",onClick:function(){return W?ye():window.open("https://ca.linkedin.com/in/howardchiam","_blank")},className:"jsx-".concat(h.__hash)+" "+((J?"commandKey":"")||""),children:["LinkedIn",(0,s.jsx)("svg",{"view-box":"0 0 200 200",className:"jsx-".concat(h.__hash),children:(0,s.jsx)("path",{transform:"translate(100 100)",d:"M21.1,-36.2C26.2,-33.7,28.4,-25.6,31,-18.7C33.5,-11.7,36.6,-5.9,43.6,4.1C50.6,14,61.6,28,59.4,35.5C57.1,43.1,41.6,44.2,29.5,49.2C17.4,54.2,8.7,63.2,-1.5,65.9C-11.8,68.6,-23.6,65,-28.5,55.8C-33.4,46.6,-31.4,31.8,-40.5,21.6C-49.6,11.3,-69.7,5.7,-69,0.4C-68.3,-4.8,-46.7,-9.7,-37.2,-19C-27.6,-28.4,-30,-42.3,-25.8,-45.3C-21.6,-48.4,-10.8,-40.6,-1.4,-38.2C8,-35.8,16,-38.7,21.1,-36.2Z",className:"jsx-".concat(h.__hash)})})]}),(0,s.jsxs)("button",{role:"link",id:"c",onClick:function(){return W?ve():window.open("https://hchiam.blogspot.com","_blank")},className:"jsx-".concat(h.__hash)+" "+((J?"commandKey":"")||""),children:["Blog",(0,s.jsx)("svg",{"view-box":"0 0 200 200",className:"jsx-".concat(h.__hash),children:(0,s.jsx)("path",{transform:"translate(100 100)",d:"M43.8,-77.3C55,-69.4,61.1,-54.1,67,-40C72.8,-25.9,78.5,-12.9,79.1,0.3C79.7,13.6,75.2,27.2,66.5,36.5C57.8,45.7,44.9,50.6,33.2,50.2C21.4,49.7,10.7,43.9,-2.8,48.8C-16.3,53.6,-32.6,69.2,-40,67.1C-47.3,65,-45.7,45.2,-46.7,31.1C-47.7,17,-51.3,8.5,-53.7,-1.3C-56,-11.2,-57,-22.3,-55.2,-35.2C-53.5,-48,-49,-62.6,-39.4,-71.4C-29.7,-80.2,-14.9,-83.2,0.7,-84.5C16.3,-85.8,32.6,-85.2,43.8,-77.3Z",className:"jsx-".concat(h.__hash)})})]}),(0,s.jsxs)("button",{role:"link",id:"space",onClick:function(){return W?_e():window.open("https://www.memrise.com/user/hchiam/courses/learning","_blank")},className:"jsx-".concat(h.__hash)+" "+((J?"commandKey":"")||""),children:["Memrise",(0,s.jsx)("svg",{"view-box":"0 0 200 200",className:"jsx-".concat(h.__hash),children:(0,s.jsx)("path",{transform:"translate(100 100)",d:"M23.1,-40.7C33.5,-33.9,48.1,-35,55.1,-29.6C62.2,-24.1,61.7,-12.1,58.7,-1.7C55.8,8.6,50.3,17.3,45.2,26C40.1,34.8,35.2,43.6,27.7,51.8C20.2,60,10.1,67.4,1.1,65.6C-8,63.8,-16,52.7,-30,48.3C-44.1,43.9,-64.2,46.3,-72.9,39.4C-81.5,32.4,-78.8,16.2,-72.5,3.7C-66.1,-8.9,-56.2,-17.8,-48.1,-25.8C-40,-33.7,-33.8,-40.8,-26.1,-49.1C-18.4,-57.5,-9.2,-67.1,-1.4,-64.6C6.3,-62.1,12.6,-47.4,23.1,-40.7Z",className:"jsx-".concat(h.__hash)})})]}),(0,s.jsx)("img",{id:"draggable",src:"htc.png",alt:"Howard signature icon",width:"100px",onMouseLeave:function(){if(!F){G(!1);var e=document.getElementById("a");e.innerText=" GitHub ",e.setAttribute("role","link");var t=document.getElementById("s");t.innerText=" CodePen ",t.setAttribute("role","link");var n=document.getElementById("d");n.innerText=" Glitch ",n.setAttribute("role","link");var o=document.getElementById("f");o.innerText=" LinkedIn ",o.setAttribute("role","link");var r=document.getElementById("c");r.innerText=" Blog ",r.setAttribute("role","link");var a=document.getElementById("space");a.innerText=" Memrise ",a.setAttribute("role","link")}},tabIndex:0,className:"jsx-".concat(h.__hash)+" shake"}),(0,s.jsx)("div",{id:"game-container",className:"jsx-".concat(h.__hash),children:function(){for(var e=[],t=0;t<Y;t++)e.push((0,s.jsx)(m,{},t));return e}()})]}),N&&(0,s.jsx)("div",{id:"hint",role:"status","aria-live":"polite",style:{color:H?"lime":""},className:"jsx-".concat(h.__hash),children:R}),(0,s.jsx)("p",{id:"extra-info",className:"jsx-".concat(h.__hash)}),w&&(0,s.jsx)("div",{id:"learning-link",className:"jsx-".concat(h.__hash),children:(0,s.jsxs)("p",{className:"jsx-".concat(h.__hash),children:["Here are things I've been learning and working on:\xa0",(0,s.jsx)("button",{role:"link",id:"go-to-learning",ref:D,"aria-label":"link to my learning repo",onClick:function(){return window.open("https://github.com/hchiam/learning#--","_blank")},className:"jsx-".concat(h.__hash),children:"https://github.com/hchiam/learning"})]})})]}),(0,s.jsxs)("section",{id:"demos",className:"jsx-".concat(h.__hash)+" "+("transparent-background "+(ee?"d-none ":"")||0),children:[(0,s.jsx)("h2",{className:"jsx-".concat(h.__hash)+" m-1 transparent-background text-center",children:"Mock dashboards:"}),(0,s.jsxs)("section",{className:"jsx-".concat(h.__hash)+" demo transparent-background text-center",children:[(0,s.jsx)("p",{className:"jsx-".concat(h.__hash)+" "+("my-0 "+(oe?"waymo-blue-to-green ":"")||0),children:(0,s.jsx)("button",{role:"checkbox","aria-checked":!!oe,"aria-label":"Show AV fleet panel mock",id:"waymo",onClick:function(){return function(e){e?(de(!1),me(!0),se(!1),disableTabbableChildren("#verily-demo"),setTimeout((function(){v(L)}),100),setTimeout((function(){re(!0),enableTabbableChildren("#waymo-demo")}),400)):(me(!0),re(!1),disableTabbableChildren("#waymo-demo"),setTimeout((function(){v(L)}),100),setTimeout((function(){de(!0)}),400))}(!oe)},className:"jsx-".concat(h.__hash)+" white-text waymo-blue-to-green black-text-outline",children:"AV fleet panel (MOCK)"})}),(0,s.jsx)("div",{ref:L,className:"jsx-".concat(h.__hash)+" "+("collapsible "+(oe?"showWaymoDemo ":"collapse ")+(le?"deferred ":"")||0),children:(0,s.jsx)(C,{showWaymoDemo:oe})})]}),(0,s.jsxs)("section",{className:"jsx-".concat(h.__hash)+" demo transparent-background text-center",children:[(0,s.jsx)("p",{className:"jsx-".concat(h.__hash)+" "+("my-0 "+(ie?"verily-red-to-blue ":"")||0),children:(0,s.jsx)("button",{role:"checkbox","aria-checked":!!ie,"aria-label":"Show EMR dashboard mock",id:"verily",onClick:function(){return function(e){e?(me(!1),de(!0),re(!1),disableTabbableChildren("#waymo-demo"),setTimeout((function(){v(z)}),100),setTimeout((function(){se(!0),enableTabbableChildren("#verily-demo")}),400)):(de(!0),se(!1),disableTabbableChildren("#verily-demo"),setTimeout((function(){v(z)}),100),setTimeout((function(){me(!0)}),400))}(!ie)},className:"jsx-".concat(h.__hash)+" white-text verily-red-to-blue black-text-outline",children:"EMR dashboard (MOCK)"})}),(0,s.jsx)("div",{ref:z,className:"jsx-".concat(h.__hash)+" "+("collapsible "+(ie?"showVerilyDemo ":"collapse ")+(he?"deferred ":"")||0),children:(0,s.jsx)(E,{showVerilyDemo:ie})})]})]}),(0,s.jsx)("div",{id:"cursor-shadow",className:"jsx-".concat(h.__hash)})]}),(0,s.jsx)("div",{id:"threejs-scene-container",className:"jsx-".concat(h.__hash)}),(0,s.jsx)(o.default,{id:h.__hash,children:h})]})}},8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(7836)}])},4476:function(e){e.exports={mainStart:"Home_mainStart__XJBE0",mainSlideIn:"Home_mainSlideIn__1Xp4m"}},5152:function(e,t,n){e.exports=n(8771)}},function(e){e.O(0,[774,12,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);