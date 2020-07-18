function setListeners(){document.body.addEventListener("mouseup",stopNotes),document.getElementById("preferred-icon")&&document.getElementById("preferred-icon").addEventListener("error",imageFallback),document.getElementById("secret-button").addEventListener("click",surprise),document.getElementById("a").addEventListener("click",(function(){window.open("https://github.com/hchiam","_blank")})),document.getElementById("s").addEventListener("click",(function(){window.open("https://codepen.io/hchiam","_blank")})),document.getElementById("d").addEventListener("click",(function(){window.open("https://glitch.com/@hchiam","_blank")})),document.getElementById("f").addEventListener("click",(function(){window.open("https://ca.linkedin.com/in/howardchiam","_blank")})),document.getElementById("c").addEventListener("click",(function(){window.open("https://hchiam.blogspot.com","_blank")})),document.getElementById("space").addEventListener("click",(function(){window.open("https://www.memrise.com/user/hchiam/courses/learning","_blank")})),document.getElementById("go-to-learning").addEventListener("click",(function(){window.open("https://github.com/hchiam/learning#learning","_blank")})),$(document).ready((function(){$("#draggable").draggable({start:function(n,t){showGameButtons(),playNotes()},drag:function(){adjustNotes()},stop:function(){stopNotes()}})}))}function slideIn(){$("section").css({position:"relative",top:"-100%"}),$("section").animate({top:0})}function advertiseOfflineAbility(){navigator.serviceWorker&&$("#extra-info").text("(BTW: This page works offline!)")}function expandButtons(){for(var n=Array.prototype.slice.call(document.querySelectorAll("button")),t=0;t<n.length;t++)n[t].classList.add("view-resize-animation")}function onDesktop(){return window.screen.availWidth>640}function showHint(){document.getElementById("hint").style.visibility="visible"}function hideHint(){document.getElementById("hint").style.visibility="hidden"}function hideSecretButton(){document.getElementById("secret-button").style.visibility="hidden"}function focusOnLearningLink(){document.querySelector("#learning-link button").focus()}function surprise(){document.getElementById("learning-link").style.visibility="visible",hideSecretButton(),hideHint(),setTimeout(()=>{showHint(),focusOnLearningLink(),$("#hint").text("Hint: drag the icon to move things around.")},100)}function getRandomNumber(n,t){return Math.floor(Math.random()*t+n)}String(window.location).startsWith("http://localhost")||"https:"===window.location.protocol||(window.location.href="https:"+window.location.href.substring(window.location.protocol.length)),navigator.serviceWorker&&navigator.serviceWorker.register("service-worker.js",{scope:""}),setListeners(),setTimeout(()=>{slideIn(),advertiseOfflineAbility()},10),setTimeout(()=>{expandButtons(),document.getElementById("button-notification").innerText="Within scrolling view, there are six buttons in a group."},1e3),setTimeout(()=>{onDesktop()?(document.getElementById("hint").innerText="Hint: hit Tab, or Shift + Tab a few times.",document.getElementById("secret-button").innerText="Hit Enter or Spacebar!"):(document.getElementById("hint").innerText="Hint: scroll down",document.getElementById("secret-button").innerText="Secret button!"),showHint()},2e3),setUpGame();let gameOn=!1,turnedGameOnOnce=!1,continueGame=!1;function setUpGame(){$(document).ready((function(){document.getElementById("draggable").onmouseenter=function(){(turnedGameOnOnce||onDesktop())&&(hideHint(),turnedGameOnOnce&&showGameButtons())},document.getElementById("draggable").onmouseleave=function(){onDesktop()&&!continueGame&&(resetGameButtons(),gameOn=!1)}}))}function showGameButtons(){document.documentElement.clientWidth<640||(setUpGameButtons(),gameOn=!0,turnedGameOnOnce=!0)}function setUpGameButtons(){$('button:contains("GitHub")').text(" A ").off("click").on("click",(function(){})),$('button:contains("CodePen")').text(" S ").off("click").on("click",(function(){})),$('button:contains("Glitch")').text(" D ").off("click").on("click",(function(){})),$('button:contains("LinkedIn")').text(" F ").off("click").on("click",(function(){})),$('button:contains("Blog")').text(" C ").off("click").on("click",(function(){})),$('button:contains("Memrise")').text(" SPACE ").off("click").on("click",(function(){}))}function resetGameButtons(){$('button:contains(" A ")').text("GitHub").off("click").on("click",(function(){})),$('button:contains(" S ")').text("CodePen").off("click").on("click",(function(){})),$('button:contains(" D ")').text("Glitch").off("click").on("click",(function(){})),$('button:contains(" F ")').text("LinkedIn").off("click").on("click",(function(){})),$('button:contains(" C ")').text("Blog").off("click").on("click",(function(){})),$('button:contains(" SPACE ")').text("Memrise").off("click").on("click",(function(){}))}const mysterySpawnButton="<button class='mystery-spawn-button'>?</button>";function childrenExodus(n){let t=$(n+" *").detach();$("body").append(t),$(n).remove()}function makeCommandKeysConspicuous(){$('button:contains(" A ")').addClass("commandKey"),$('button:contains(" S ")').addClass("commandKey"),$('button:contains(" D ")').addClass("commandKey"),$('button:contains(" F ")').addClass("commandKey"),$('button:contains(" C ")').addClass("commandKey"),$('button:contains(" SPACE ")').addClass("commandKey")}$(document).on("click",".mystery-spawn-button",(function(){$(this).text("").css({width:0,height:0,padding:0});var n=this;setTimeout((function(){n.parentNode.removeChild(n)}),500)})),$(document).keydown((function(n){if(gameOn)if(65===n.keyCode)$("#game-container").append(mysterySpawnButton);else if(83===n.keyCode)$("#game-container *:last-child").remove();else if(68===n.keyCode)$("#game-container *").remove();else if(70===n.keyCode){$("#game-container *").remove();for(let n=0;n<30;n++)$("#game-container").append(mysterySpawnButton)}else 67===n.keyCode&&(continueGame=!continueGame,continueGame||($("#draggable").draggable("destroy"),resetGameButtons(),gameOn=!1));turnedGameOnOnce&&32===n.keyCode&&(showHint(),$("#hint").text("Hint: refresh the page."),childrenExodus("section"),childrenExodus("#draggable"),makeCommandKeysConspicuous(),scatterSpace())}));let scatteredSpace=!1;function scatterSpace(){$("button, img, #hint, h1, p, span").each((function(){const n=$(this).width(),t=$(this).height(),e=getRandomNumber(0,window.innerWidth-n),o=getRandomNumber(0,window.innerHeight-t);$(this).css({position:"absolute"}).animate({left:e+"px",top:o+"px"},"fast","swing")})),scatteredSpace=!0}function imageFallback(){$("img").remove(),$("#ascii-art").show()}function disableOldStyles(){$('link[href="style.css"]').prop("disabled",!0),$('link[href="/style.css"]').prop("disabled",!0),$('link[href="minified-style.css"]').prop("disabled",!0)}const tilt=UniversalTilt.init({elements:document.querySelectorAll(".tilt"),settings:{},callbacks:{}}),wowYouFoundAHiddenCommand=absolutelyAwesomeYouFoundAHiddenCommand;function absolutelyAwesomeYouFoundAHiddenCommand(){alert("Cool!")}function goToGame(){window.location.href="/phaser-game/index.html"}function goToSNPromptGenerator(){window.location.href="https://sn-prompt-generator.surge.sh"}function goToCRPrep(){window.location.href="https://cr-prep.glitch.me"}function skew(){$("body").css({transform:"skewY(-10deg)","transform-origin":"150% top",background:"black"}),setTimeout((function(){$("body").css({transform:"",background:"transparent",top:"0"})}),1e3)}function home(){location.reload()}const game=goToGame,snpg=goToSNPromptGenerator,cr=goToCRPrep;console.log("%cIf you have an internet connection,\nyou can enter these commands:%c\n\n%cskew()%c\n\n%cgame()%c\n\n%chome()%c\n\nYou can see my auto-generated GitHub résumé here: \n%chttps://resume.github.io/?hchiam%c\n","color: blue; background: lightgrey;","","color: lime; background: black; padding: 5px 10px;","","color: lime; background: black; padding: 5px 10px;","","color: lime; background: black; padding: 5px 10px;","","color: lime;","");
let audioCtx=new AudioContext,notes=[];function playNotes(){document.documentElement.clientWidth<640||($("#hint").text("To stop audio, click off or stop dragging.").show().css("color","lime"),showHint(),playNoteOfId("draggable"))}function adjustNotes(){if(!(document.documentElement.clientWidth<640))for(let t in notes){const[e,o]=getCoordinates("draggable"),n=getFrequencyFromX(e),i=getVolumeFromY(o);notes[t].volumeSetup.gain.value=i,notes[t].oscillator.frequency.value=n,indicateNoteWithColour("#draggable",i,n)}}function indicateNoteWithColour(t,e,o){let n=normalize(e,0,.5,0,100);n=Math.round(n);let i=normalize(o,150,400,0,359);i=Math.round(i);let u="hsl("+String(i)+","+String(n)+"%, 50%)";document.querySelector(t).style.background=u}function stopNotes(){for(let t in notes){notes[t].oscillator.stop(audioCtx.currentTime)}notes=[],$("#hint").hide()}function playNoteOfId(t,e){const[o,n]=getCoordinates(t);playNote([o,n],e)}function getCoordinates(t){const e=document.getElementById(t).getBoundingClientRect();return[e.left,e.top]}function playNote([t,e],o=4){const n=getFrequencyFromX(t),i=getVolumeFromY(e),u=audioCtx.createGain();u.connect(audioCtx.destination),u.gain.value=i;const l=audioCtx.createOscillator();l.type="sine",l.frequency.value=n,l.connect(u),l.start();notes.push({oscillator:l,volumeSetup:u})}function getFrequencyFromX(t){return normalize(t,0,Math.max(document.documentElement.clientWidth,window.innerWidth||0),150,400)}function getVolumeFromY(t){return normalize(t,0,Math.max(document.documentElement.clientHeight,window.innerHeight||0),0,.1)}function normalize(t,e,o,n,i){return(t-e)*((i-n)/(o-e))+n}
$(document).on("mousemove",(function(o){$("#cursor-shadow").css({left:o.pageX,top:o.pageY})}));
"use strict";!function(){let e=null,t=null,n=null,o=0;function l(){t&&(clearTimeout(t),t=null,e.classList.remove("flying-focus_visible"),n.classList.remove("flying-focus_target"),n=null)}document.documentElement.addEventListener("keydown",(function(e){const t=e.which||e.keyCode;(9===t||t>36&&t<41)&&(o=Date.now())}),!1),document.documentElement.addEventListener("focus",(function(c){const i=c.target;if("flying-focus-ring-element"===i.id)return;let s=!1;e||(s=!0,e=document.createElement("div"),e.id="flying-focus-ring-element",e.style.transitionDuration=e.style.WebkitTransitionDuration="0.4s",document.body.appendChild(e));const d=function(e){const t=e.getBoundingClientRect(),n=document.documentElement.clientLeft||document.body.clientLeft,o=document.documentElement.clientTop||document.body.clientTop,l=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft,c=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,i=t.left+l-n;return{top:t.top+c-o||0,left:i||0}}(i);e.style.left=d.left+"px",e.style.top=d.top+"px",e.style.width=i.offsetWidth+"px",e.style.height=i.offsetHeight+"px",!s&&Date.now()-o<42&&(l(),i.classList.add("flying-focus_target"),e.classList.add("flying-focus_visible"),n=i,t=setTimeout(l,400))}),!0),document.documentElement.addEventListener("blur",(function(){l()}),!0)}();
