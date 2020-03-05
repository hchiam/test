// http -> https
if (!String(window.location).startsWith('http://localhost') && window.location.protocol !== 'https:') {
  window.location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
}

setTimeout(() => {
  slideIn();
  advertiseOfflineAbility();
}, 10);

setTimeout(() => {
  expandButtons();
  document.getElementById('button-notification').innerText = 'Within scrolling view, there are six buttons in a group.';
}, 1000);

setTimeout(() => {
  if (!onDesktop()) {
    document.getElementById('hint').innerText = 'Hint: scroll down';
    document.getElementById('secret-button').innerText = 'Secret button!';
  } else {
    document.getElementById('hint').innerText = 'Hint: hit Tab, or Shift + Tab a few times.';
    document.getElementById('secret-button').innerText = 'Hit Enter or Spacebar!';
  }
  showHint();
}, 2000);

setUpGame();

function slideIn() {
  $('section').css({position: 'relative', top: '-100%'});
  $('section').animate({top: 0});
}

function advertiseOfflineAbility() {
  if (navigator.serviceWorker) {
    $('#extra-info').text('(BTW: This page works offline!)');
  }
}

function expandButtons() {
  var btns = Array.prototype.slice.call(document.querySelectorAll('button'));
  for (var i=0; i<btns.length; i++) {
    btns[i].classList.add('view-resize-animation');
  }
}

function onDesktop() {
  return (window.screen.availWidth > 640);
}

function showHint() {
  document.getElementById('hint').style.visibility = 'visible';
}

function hideHint() {
  document.getElementById('hint').style.visibility = 'hidden';
}

function hideSecretButton() {
  document.getElementById('secret-button').style.visibility = 'hidden';
}

function focusOnLearningLink() {
  // a skip link. https://classroom.udacity.com/courses/ud891/lessons/7962031279/concepts/79590516900923
  document.querySelector('#learning-link button').focus();
}

function surprise() {
  document.getElementById('learning-link').style.visibility = 'visible';
  hideSecretButton();
  hideHint();
  setTimeout(() => {
    showHint();
    focusOnLearningLink();
    // do this last in case jQuery is unavailable:
    $('#hint').text('Hint: drag the icon to move things around.');
  }, 100);
}

function getRandomNumber(start, stop) {
  return Math.floor((Math.random() * stop) + start);
}

// silly game
let gameOn = false;
let turnedGameOnOnce = false;
let continueGame = false;
function setUpGame() {
  $(document).ready(function() {
    // game controls on:
    document.getElementById('draggable-handle').onmouseenter = function() {
      if (turnedGameOnOnce || onDesktop()) {
        $('#draggable').draggable();
        hideHint();
        if (turnedGameOnOnce) {
          showGameButtons();
        }
      }
    }
    // game controls off:
    document.getElementById('draggable-handle').onmouseleave = function() {
      if (onDesktop() && !continueGame) {
        $('#draggable').draggable('destroy');
        resetGameButtons();
        gameOn = false;
      }
    }
  });
}

function showGameButtons() {
  var hasSmallScreen = (document.documentElement.clientWidth < 640);
  if (hasSmallScreen) return;

  setUpGameButtons();
  gameOn = true;
  turnedGameOnOnce = true;
}

function setUpGameButtons() {
  $('button:contains("GitHub")').text(' A ')
    .attr('onclick', "jQuery.event.trigger({ type : 'keydown', keyCode : 65 });");
  $('button:contains("CodePen")').text(' S ')
    .attr('onclick', "jQuery.event.trigger({ type : 'keydown', keyCode : 83 });");
  $('button:contains("Glitch")').text(' D ')
    .attr('onclick', "jQuery.event.trigger({ type : 'keydown', keyCode : 68 });");
  $('button:contains("LinkedIn")').text(' F ')
    .attr('onclick', "jQuery.event.trigger({ type : 'keydown', keyCode : 70 });");
  $('button:contains("Blog")').text(' C ')
    .attr('onclick', "jQuery.event.trigger({ type : 'keydown', keyCode : 67 });");
  $('button:contains("Memrise")').text(' SPACE ')
    .attr('onclick', "jQuery.event.trigger({ type : 'keydown', keyCode : 32 });");
}

function resetGameButtons() {
  $('button:contains(" A ")').text('GitHub')
    .attr('onclick', "window.open('https:\/\/github.com/hchiam', '_blank');");
  $('button:contains(" S ")').text('CodePen')
    .attr('onclick', "window.open('https:\/\/codepen.io/hchiam', '_blank');");
  $('button:contains(" D ")').text('Glitch')
    .attr('onclick', "window.open('https:\/\/glitch.com/@hchiam', '_blank');");
  $('button:contains(" F ")').text('LinkedIn')
    .attr('onclick', "window.open('https:\/\/ca.linkedin.com/in/howardchiam', '_blank');");
  $('button:contains(" C ")').text('Blog')
    .attr('onclick', "window.open('https:\/\/hchiam.blogspot.com', '_blank');");
  $('button:contains(" SPACE ")').text('Memrise')
    .attr('onclick', "window.open('https:\/\/www.memrise.com/user/hchiam/courses/learning', '_blank');");
}

const mysterySpawnButton = '<button onclick="$(this).text(\'\').css({background:\'blue\',color:\'white\',width:0,height:0,padding:0});var t = this;setTimeout(function(){t.parentNode.removeChild(t)}, 500);">?</button>';

$(document).keydown(function(e) {
  if (gameOn) {
    if (e.keyCode === 65) { // a
      $('#game-container').append(mysterySpawnButton);
    } else if (e.keyCode === 83) { // s
      $('#game-container *:last-child').remove();
    } else if (e.keyCode === 68) { // d
      $('#game-container *').remove();
    } else if (e.keyCode === 70) { // f
      $('#game-container *').remove();
      for (let i=0; i<30; i++) {
        $('#game-container').append(mysterySpawnButton);
      }
    } else if (e.keyCode === 67) { // c
      continueGame = !continueGame;
      if (!continueGame) {
        // game controls off:
        $('#draggable').draggable('destroy');
        resetGameButtons();
        gameOn = false;
      }
    }
  }
  if (turnedGameOnOnce && e.keyCode === 32) { // space
    showHint();
    $('#hint').text('Hint: refresh the page.');
    childrenExodus('section');
    childrenExodus('#draggable');
    makeCommandKeysConspicuous();
    scatterSpace();
  }
});

function childrenExodus(parentSelector) {
  let children = $(parentSelector + ' *').detach();
  $('body').append(children);
  $(parentSelector).remove();
}

function makeCommandKeysConspicuous() {
  $('button:contains(" A ")').addClass('commandKey');
  $('button:contains(" S ")').addClass('commandKey');
  $('button:contains(" D ")').addClass('commandKey');
  $('button:contains(" F ")').addClass('commandKey');
  $('button:contains(" C ")').addClass('commandKey');
  $('button:contains(" SPACE ")').addClass('commandKey');
}

let scatteredSpace = false;
function scatterSpace() {
  $('button, img, #hint, h1, p').each(function() {
    const myWidth = $(this).width();
    const myHeight = $(this).height();
    const randomleft = getRandomNumber(0, window.innerWidth-myWidth);
    const randomtop = getRandomNumber(0, window.innerHeight-myHeight);
    $(this)
      .css({
        position: 'absolute',
      })
      .animate({
        left: randomleft + "px",
        top: randomtop + "px",
      }, 'fast', 'swing');
  });
  scatteredSpace = true;
}

function imageFallback() {
  $('img').remove();
  $('#ascii-art').show();
}

function disableOldStyles() {
  $('link[href="style.css"]').prop('disabled', true);
  $('link[href="/style.css"]').prop('disabled', true);
  $('link[href="minified-style.css"]').prop('disabled', true);
}

function goToGame() {
  window.location.href = "/phaser-game/index.html";
}

function goToSNPromptGenerator() {
  $(function(){
    $('body').load('https://cdn.jsdelivr.net/gh/hchiam/sn-prompt-generator@master/index.html', function() {
      disableOldStyles();
      $('head').append('<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/hchiam/sn-prompt-generator@master/style.css">');
      $('head').append('<script src="https://cdn.jsdelivr.net/gh/hchiam/sn-prompt-generator@master/script.js"></script>');
    });
  });
}

function goToCRPrep() {
  $(function(){
    $('body').load('https://cdn.jsdelivr.net/gh/hchiam/cr-prep@master/index.html #button-bar, #checkbox-box, #hover-info', function() {
      disableOldStyles();
      $('head').append('<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/hchiam/cr-prep@master/style.css">');
      $('head').append('<script src="https://cdn.jsdelivr.net/gh/hchiam/cr-prep@master/download-page-as-image.js"></script>');
      $('head').append('<script src="https://cdn.jsdelivr.net/gh/hchiam/cr-prep@master/script.js"></script>');
      $('head').append('<script src="https://html2canvas.hertzen.com/dist/html2canvas.min.js"></script>');
    });
  });
}

function skew() {
  $('body').css({
    'transform': 'skewY(-10deg)',
    'transform-origin': '150% top',
    'background': 'black',
  });
  setTimeout(function() {
    $('body').css({
      'transform': '',
      'background': 'transparent',
      'top': '0',
    })
  }, 1000);  
}

function home() {
  location.reload();
}

const game = goToGame;
const snpg = goToSNPromptGenerator;
const cr = goToCRPrep;
console.log(`%cIf you have an internet connection,
you can enter these commands:%c

%cgame()%c

%csnpg()%c

%ccr()%c

%cskew()%c

%chome()%c

`,
'color: blue; background: lightgrey;','',
'color: lime; background: black; padding: 5px 10px;','',
'color: lime; background: black; padding: 5px 10px;','',
'color: lime; background: black; padding: 5px 10px;','',
'color: lime; background: black; padding: 5px 10px;','',
'color: lime; background: black; padding: 5px 10px;','',
);
