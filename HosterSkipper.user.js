// ==UserScript==
// @name        HosterSkipper
// @namespace   BSHosterHacks
// @description Entfernt nervige Werbung von Video-Hostern und startet die Videos automatisch.
// @include     http://voodaith7e.com/*
// @include     http://vidto.me/*.html
// @include     https://www.flashx.tv/embed.php?c=*
// @include     https://www.flashx.tv/playvid-*.html?playvid
// @version     1
// @icon        https://bs.to/favicon.ico
// @grant       none
// ==/UserScript==
if(window.location.host == "voodaith7e.com") {
  setTimeout(function() {
    window.adblocktest.present = 0;
    window.$("#" + window.onplayspotid).remove();
    player_start();
  },1000);
  setInterval(function() {
    window.adsShowPopup1 = false;
  },1000);
}else if(window.location.host == "vidto.me") {
  window.countDown = function() {
    num = parseInt( window.$$('cxc').innerHTML )-1;
    if(num<=0) {
      window.$$('btn_download').disabled=false;
      window.$$('countdown_str').style.display='none';
      document.getElementById('btn_download').parentNode.submit();
    }else{
      window.$$('cxc').innerHTML = num;
      setTimeout(window.countDown,1000);
    }
  }
  setTimeout(function() {
    jwplayer().play();
  },1500);
}else if(window.location.host == "flashx.tv" || window.location.host == "www.flashx.tv") {
  if(window.location.href.indexOf("embed") > -1) {
    window.location.href = 'https://www.flashx.tv/playvid-' + window.location.href.substr(window.location.href.lastIndexOf("=")+1) + '.html?playvid'
  }else{
    setTimeout(function() {
      jwplayer().play();
    },1500);
  }
}