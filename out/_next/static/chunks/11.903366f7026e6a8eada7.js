(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{W9MN:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return O}));var s=a("nKUr"),n=a("MX0m"),i=a.n(n),r=(a("i8i4"),['.collapsible.jsx-771461134:not(.collapse) .animated-text.jsx-771461134,.collapsible.jsx-771461134:not(.collapse) [class*="-before-chart-label"].jsx-771461134{-webkit-animation:animated-text-jsx-771461134 0.5s forwards;animation:animated-text-jsx-771461134 0.5s forwards;}',"@-webkit-keyframes animated-text-jsx-771461134{from{-webkit-clip-path:polygon(0 0,0 0,0 0,0 0);clip-path:polygon(0 0,0 0,0 0,0 0);}to{-webkit-clip-path:polygon(0 100%,100% 100%,100% 0,0 0);clip-path:polygon(0 100%,100% 100%,100% 0,0 0);}}","@keyframes animated-text-jsx-771461134{from{-webkit-clip-path:polygon(0 0,0 0,0 0,0 0);clip-path:polygon(0 0,0 0,0 0,0 0);}to{-webkit-clip-path:polygon(0 100%,100% 100%,100% 0,0 0);clip-path:polygon(0 100%,100% 100%,100% 0,0 0);}}"]);r.__hash="771461134";var o=r,c=a("cpVT"),m=[".slice.jsx-190641920{background-image:linear-gradient(var(--start),transparent 50%,white 50%), linear-gradient(calc(var(--end)),transparent 50%,var(--color) 50%);}",'.slice[style*="--over180"].jsx-190641920{background-image:linear-gradient( var(--start), var(--color) 50%, transparent 50% ), linear-gradient(calc(var(--end)),white 50%,var(--color) 50%);}',".pie.jsx-190641920,.slice.jsx-190641920{display:block;border-radius:50%;background-color:white;}",".pie.jsx-190641920{position:relative;width:180px;height:180px;aspect-ratio:1;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);margin:1rem;}",".slice.jsx-190641920{position:absolute;width:100%;height:100%;mix-blend-mode:multiply;}",".slice.jsx-190641920:after{content:var(--text);color:#fff;mix-blend-mode:difference;position:relative;left:var(--text-left,50%);top:var(--text-top,calc(50% - 0.5em));--have-left:var(--text-left,0);--have-top:var(--text-top,0);--not-manually-set-left:calc(1 - var(--have-left,0));--not-manually-set-top:calc(1 - var(--have-top,0));--no-manual-pos:calc( var(--not-manually-set-left,0) * var(--not-manually-set-top,0) );--mid:calc(var(--no-manual-pos) * (var(--start) + var(--end)) / 2);-webkit-transform:rotate(var(--mid,0)) translate( calc(1em * var(--no-manual-pos,1) + var(--text-start-adjust,0px)) );-ms-transform:rotate(var(--mid,0)) translate( calc(1em * var(--no-manual-pos,1) + var(--text-start-adjust,0px)) );transform:rotate(var(--mid,0)) translate( calc(1em * var(--no-manual-pos,1) + var(--text-start-adjust,0px)) );-webkit-transform-origin:left;-ms-transform-origin:left;transform-origin:left;display:block;}",".pie.jsx-190641920,.slice.jsx-190641920{-webkit-transition:-webkit-transform 0.2s,outline 0.2s;-webkit-transition:transform 0.2s,outline 0.2s;transition:transform 0.2s,outline 0.2s;}",".pie.jsx-190641920:hover,.pie.jsx-190641920:focus,.slice.jsx-190641920:focus{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}",".pie.jsx-190641920:hover,.pie.jsx-190641920:focus{outline:5px solid rgba(0,0,0,0.5);-webkit-transform:scale(1.1) rotate(-90deg);-ms-transform:scale(1.1) rotate(-90deg);transform:scale(1.1) rotate(-90deg);}"];m.__hash="190641920";var l=m;function x(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function j(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?x(Object(a),!0).forEach((function(e){Object(c.a)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):x(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var d=function(t){for(var e=t.id,a=t.pieChartData,n=t.hideTextLabels,r=0,o=[],c=0;c<a.length;c++){var m=a[c],x=j({start:r,end:r+m.number},m);r+=m.number,o.push(x)}return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{id:e,tabIndex:0,className:"jsx-".concat(l.__hash)+" pie",children:[o.map((function(t){var e=Math.round(t.start/r*360),a=Math.round(t.end/r*360),i={"--start":"".concat(e,"deg"),"--end":"".concat(a,"deg"),"--color":t.color};return a-e>180&&(i["--over180"]=1),t.text&&!n&&(i["--text"]="'".concat(t.text,"'")),t.textLeft&&(i["--text-left"]=t.textLeft),t.textTop&&(i["--text-top"]=t.textTop),t.textStartAdjust&&(i["--text-start-adjust"]=t.textStartAdjust),Object(s.jsx)("div",{style:i,tabIndex:0,"aria-label":"".concat(t.text,": ").concat(t.number),className:"jsx-".concat(l.__hash)+" slice"})})),Object(s.jsx)("div",{tabIndex:-1,className:"jsx-".concat(l.__hash)+" slice"})]}),Object(s.jsx)(i.a,{id:l.__hash,children:l})]})};function p(){return Object(s.jsxs)("div",{children:[Object(s.jsxs)("h3",{className:"waymo-dark-navy-text waymo-white-background my-0 p-0",children:["Online:"," ",Object(s.jsx)("span",{className:"animated-text waymo-dark-navy-text waymo-white-background px-0",children:"20589"}),"/20600"]}),Object(s.jsxs)("div",{className:"d-flex wrap justify-center",children:[Object(s.jsx)(d,{id:"avs-online",title:"Online: 20589",pieChartData:[{color:"var(--waymo-blue)",text:"\u29bf",number:14986,textStartAdjust:"1em"},{color:"var(--verily-red)",text:"\u25fc",number:4323,textStartAdjust:"2em"},{color:"var(--waymo-green)",text:"\u25b2",number:1280,textStartAdjust:"2em"}]}),Object(s.jsxs)("div",{style:{margin:"0 1rem"},children:[Object(s.jsx)("p",{className:"circle-before-chart-label white-text waymo-blue-background",children:"\xa0Allocated: 14986"}),Object(s.jsxs)("p",{className:"square-before-chart-label white-text verily-red-background",children:[" ","\xa0Charging: 4323"]}),Object(s.jsxs)("p",{className:"triangle-before-chart-label white-text waymo-green-background",children:["\xa0",Object(s.jsx)("span",{className:"black-text waymo-green-background",style:{paddingLeft:0},children:"Available: 1280"})]})]})]})]})}function h(){return Object(s.jsxs)("div",{children:[Object(s.jsxs)("h3",{className:"waymo-dark-navy-text waymo-white-background my-0 p-0",children:["Offline:"," ",Object(s.jsx)("span",{className:"animated-text waymo-dark-navy-text waymo-white-background px-0",children:"11"}),"/20600"]}),Object(s.jsxs)("div",{className:"d-flex wrap justify-center",children:[Object(s.jsx)(d,{id:"avs-offline",title:"Offline: 11",pieChartData:[{color:"var(--waymo-blue)",text:"\u25fc",number:10,textStartAdjust:"1em"},{color:"var(--verily-red)",text:"\u25b2",number:1,textStartAdjust:"2em"}]}),Object(s.jsxs)("div",{style:{margin:"0 1rem"},children:[Object(s.jsx)("p",{className:"square-before-chart-label white-text waymo-blue-background",children:"\xa0Repairing: 10"}),Object(s.jsx)("p",{className:"triangle-before-chart-label white-text verily-red-background",children:"\xa0Unaccounted: 1"})]})]})]})}function b(){return Object(s.jsxs)("div",{className:"d-flex wrap justify-center",children:[Object(s.jsx)(d,{id:"passengers",title:"Passengers: 14986",pieChartData:[{color:"var(--waymo-blue)",text:"\u29bf",number:112,textStartAdjust:"1em"},{color:"var(--verily-red)",text:"\u25b2",number:2,textStartAdjust:"3em"}]}),Object(s.jsxs)("div",{className:"my-0 mx-1",children:[Object(s.jsx)("p",{className:"circle-before-chart-label white-text waymo-blue-background",children:"\xa0Hailing: 112"}),Object(s.jsx)("p",{className:"triangle-before-chart-label white-text verily-red-background",children:"\xa0Requesting assistance: 2"})]})]})}var v=a("q1tI"),f=[".jsx-2175260206{--clip-path:polygon( 51px 2px, 20.51% 18.63%, 8.47% 15.46%, 12.36% 31.72%, 10.16% 38.24%, 20.28% 50.53%, 15.42% 56.42%, 15.46% 63.34%, 11.65% 71.36%, 16.42% 76.14%, 9.63% 82.81%, 57.2% 99.55%, 97.9% 100.4%, 99.22% 1.45% );}",".av-map.jsx-2175260206{display:inline-block;position:relative;width:230px;height:230px;background:gold;-webkit-clip-path:var(--clip-path);clip-path:var(--clip-path);-webkit-transition:-webkit-transform 0.2s;-webkit-transition:transform 0.2s;transition:transform 0.2s;}",'.av-map.jsx-2175260206:after{content:"";display:inline-block;width:230px;height:230px;background:var(--waymo-green);-webkit-transform:scale(0.9) translate(3px);-ms-transform:scale(0.9) translate(3px);transform:scale(0.9) translate(3px);-webkit-clip-path:var(--clip-path);clip-path:var(--clip-path);}',".av-map.jsx-2175260206:hover,.av-map.jsx-2175260206:focus{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}",'.av-map.jsx-2175260206 .hailing.jsx-2175260206:after{content:"\ud83d\udd35";}','.av-map.jsx-2175260206 .requesting-assistance.jsx-2175260206:after{content:"\ud83d\uded1";}','.av-map.jsx-2175260206 .av.jsx-2175260206:after{content:"\u2b1c";}','.av-map.jsx-2175260206 .charging-station.jsx-2175260206:after{content:"\ud83d\udd0b";}','.av-map.jsx-2175260206 .roadside-assistance.jsx-2175260206:after{content:"\u26a0\ufe0f";}',".av-map.jsx-2175260206>*.jsx-2175260206{position:absolute;z-index:1;background:transparent;width:0;height:0;-webkit-transform:translate(-0.5rem,-0.5rem);-ms-transform:translate(-0.5rem,-0.5rem);transform:translate(-0.5rem,-0.5rem);top:var(--top);left:var(--left);}",".av-map.jsx-2175260206>*.jsx-2175260206:after{position:absolute;top:0;left:0;}",".av-map.spread-out-map-icons.jsx-2175260206>*.jsx-2175260206{-webkit-animation:spread-out-map-icons-jsx-2175260206 0.2s forwards;animation:spread-out-map-icons-jsx-2175260206 0.2s forwards;}","@-webkit-keyframes spread-out-map-icons-jsx-2175260206{from{left:0;top:100%;}}","@keyframes spread-out-map-icons-jsx-2175260206{from{left:0;top:100%;}}",".av-map-container.jsx-2175260206{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}",'[class*="moving"].jsx-2175260206{-webkit-animation-duration:5s;animation-duration:5s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;}',".moving-1.jsx-2175260206{-webkit-animation-name:moving-1-jsx-2175260206;animation-name:moving-1-jsx-2175260206;}",'.moving-1.jsx-2175260206:after{content:"\u2b1cETA: 5m" !important;color:black;width:-webkit-max-content;width:-moz-max-content;width:max-content;font-size:small;}',"@-webkit-keyframes moving-1-jsx-2175260206{to{left:51%;top:47%;}}","@keyframes moving-1-jsx-2175260206{to{left:51%;top:47%;}}",".moving-2.jsx-2175260206{-webkit-animation-name:moving-2-jsx-2175260206;animation-name:moving-2-jsx-2175260206;}","@-webkit-keyframes moving-2-jsx-2175260206{to{left:30%;top:73%;}}","@keyframes moving-2-jsx-2175260206{to{left:30%;top:73%;}}",".moving-3.jsx-2175260206{-webkit-animation-name:moving-3-jsx-2175260206;animation-name:moving-3-jsx-2175260206;}","@-webkit-keyframes moving-3-jsx-2175260206{to{left:25%;top:34%;}}","@keyframes moving-3-jsx-2175260206{to{left:25%;top:34%;}}",".moving-4.jsx-2175260206{-webkit-animation-name:moving-4-jsx-2175260206;animation-name:moving-4-jsx-2175260206;}","@-webkit-keyframes moving-4-jsx-2175260206{to{left:80%;top:70%;}}","@keyframes moving-4-jsx-2175260206{to{left:80%;top:70%;}}",".moving-5.jsx-2175260206{-webkit-animation-name:moving-5-jsx-2175260206;animation-name:moving-5-jsx-2175260206;}","@-webkit-keyframes moving-5-jsx-2175260206{to{left:58%;top:79%;}}","@keyframes moving-5-jsx-2175260206{to{left:58%;top:79%;}}",".moving-6.jsx-2175260206{-webkit-animation-name:moving-6-jsx-2175260206;animation-name:moving-6-jsx-2175260206;}","@-webkit-keyframes moving-6-jsx-2175260206{to{left:59%;top:61%;}}","@keyframes moving-6-jsx-2175260206{to{left:59%;top:61%;}}",".moving-7.jsx-2175260206{-webkit-animation-name:moving-7-jsx-2175260206;animation-name:moving-7-jsx-2175260206;}","@-webkit-keyframes moving-7-jsx-2175260206{to{left:75%;top:25%;}}","@keyframes moving-7-jsx-2175260206{to{left:75%;top:25%;}}",".moving-8.jsx-2175260206{-webkit-animation-name:moving-8-jsx-2175260206;animation-name:moving-8-jsx-2175260206;}","@-webkit-keyframes moving-8-jsx-2175260206{to{left:48%;top:17%;}}","@keyframes moving-8-jsx-2175260206{to{left:48%;top:17%;}}",".moving-9.jsx-2175260206{-webkit-animation-name:moving-9-jsx-2175260206;animation-name:moving-9-jsx-2175260206;}","@-webkit-keyframes moving-9-jsx-2175260206{to{left:76%;top:86%;}}","@keyframes moving-9-jsx-2175260206{to{left:76%;top:86%;}}",'@media (prefers-reduced-motion){[class*="moving-"].jsx-2175260206{-webkit-animation-name:none;animation-name:none;}}'];f.__hash="2175260206";var u,g=f;!function(t){t.h="hailing",t.req="requesting-assistance",t.av="av",t.cs="charging-station",t.rds="roadside-assistance"}(u||(u={}));var w=[[u.h,35,72],[u.h,40,75],[u.h,30,73],[u.h,50,50],[u.h,37,67],[u.h,59,79],[u.h,30,32],[u.h,82,70],[u.cs,44,66],[u.cs,37,39],[u.cs,77,43],[u.req,60,60],[u.req,75,87],[u.rds,54,65,"moving-6"],[u.rds,70,76,"moving-9"],[u.av,29,62],[u.av,47,82],[u.av,64,86,"moving-5"],[u.av,35,49],[u.av,25,43,"moving-3"],[u.av,44,18,"moving-8"],[u.av,74,76,"moving-4"],[u.av,79,35,"moving-7"],[u.av,53,39,"moving-1"],[u.av,40,58],[u.av,33,81,"moving-2"]];function y(){var t=Object(v.useState)(!1),e=t[0],a=t[1];return Object(s.jsxs)("div",{children:[Object(s.jsxs)("h2",{className:"waymo-blue-text waymo-white-background mb-0 px-0",children:["Requests + AVs map: ",Object(s.jsx)("span",{className:"animated-text py-0",children:"20714"})]}),Object(s.jsxs)("div",{className:"jsx-".concat(g.__hash)+" av-map-container",children:[Object(s.jsx)("div",{onClick:function(){return a(!e)},tabIndex:0,className:"jsx-".concat(g.__hash)+" "+"av-map ".concat(e&&"spread-out-map-icons"),children:w.map((function(t){return Object(s.jsx)(k,{p:t[0],left:"".concat(t[1],"%"),top:"".concat(t[2],"%"),extraClasses:t[3]})}))}),Object(s.jsxs)("div",{className:"jsx-".concat(g.__hash)+" legend",children:[Object(s.jsx)("p",{className:"jsx-".concat(g.__hash)+" my-0 py-0 waymo-dark-navy-text",children:"\ud83d\udd35 = Hailing"}),Object(s.jsx)("p",{className:"jsx-".concat(g.__hash)+" my-0 py-0 waymo-dark-navy-text",children:"\ud83d\uded1 = Requesting Assistance"}),Object(s.jsx)("p",{className:"jsx-".concat(g.__hash)+" my-0 py-0 waymo-dark-navy-text",children:"\u2b1c = AV"}),Object(s.jsx)("p",{className:"jsx-".concat(g.__hash)+" my-0 py-0 waymo-dark-navy-text",children:"\ud83d\udd0b = Charging Station"}),Object(s.jsx)("p",{className:"jsx-".concat(g.__hash)+" my-0 py-0 waymo-dark-navy-text",children:"\u26a0\ufe0f = Roadside Assistance"})]}),Object(s.jsx)(i.a,{id:g.__hash,children:g})]})]})}function k(t){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("span",{style:{"--left":t.left,"--top":t.top},className:"jsx-".concat(g.__hash)+" "+(t.p+" "+t.extraClasses||"")}),Object(s.jsx)(i.a,{id:g.__hash,children:g})]})}function O(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("section",{id:"waymo-demo",className:"jsx-".concat(o.__hash)+" p-0 waymo-white-background",children:[Object(s.jsx)("p",{className:"jsx-".concat(o.__hash)+" waymo-white-text waymo-blue-background",children:"AV fleet infrastructure panel"}),Object(s.jsxs)("section",{id:"waymo-demo-main-content",className:"jsx-".concat(o.__hash)+" waymo-white-background",children:[Object(s.jsxs)("h2",{className:"jsx-".concat(o.__hash)+" waymo-blue-text waymo-white-background mb-0 px-0",children:["Autonomous Vehicles:"," ",Object(s.jsx)("span",{className:"jsx-".concat(o.__hash)+" animated-text py-0",children:"20600"})]}),Object(s.jsxs)("div",{className:"jsx-".concat(o.__hash)+" mb-1 waymo-demo-group",children:[Object(s.jsx)(p,{}),Object(s.jsx)(h,{})]}),Object(s.jsxs)("div",{className:"jsx-".concat(o.__hash)+" mb-1 waymo-demo-group",children:[Object(s.jsxs)("div",{className:"jsx-".concat(o.__hash),children:[Object(s.jsxs)("h2",{className:"jsx-".concat(o.__hash)+" waymo-blue-text waymo-white-background mb-0 px-0",children:["Passengers: ",Object(s.jsx)("span",{className:"jsx-".concat(o.__hash)+" animated-text py-0",children:"14986"})]}),Object(s.jsx)("div",{className:"jsx-".concat(o.__hash)+" d-flex wrap",children:Object(s.jsx)(b,{})})]}),Object(s.jsx)("div",{className:"jsx-".concat(o.__hash)+" mb-1 d-flex wrap",children:Object(s.jsx)(y,{})})]}),Object(s.jsxs)("h2",{className:"jsx-".concat(o.__hash)+" waymo-blue-text waymo-white-background mb-0 px-0",children:["Miles of XP: ",Object(s.jsx)("span",{className:"jsx-".concat(o.__hash)+" animated-text py-0",children:"20900913"})]}),Object(s.jsxs)("h2",{className:"jsx-".concat(o.__hash)+" waymo-blue-text waymo-white-background mb-0 px-0",children:["Incidences resolved: ",Object(s.jsx)("span",{className:"jsx-".concat(o.__hash)+" animated-text py-0",children:"47"})]})]}),Object(s.jsx)("small",{style:{textAlign:"right",display:"block"},className:"jsx-".concat(o.__hash)+" p-0",children:"(Note: this is a mock demo with simulated data.)"})]}),Object(s.jsx)(i.a,{id:o.__hash,children:o})]})}},cpVT:function(t,e,a){"use strict";function s(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}a.d(e,"a",(function(){return s}))}}]);