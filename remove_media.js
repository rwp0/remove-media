// ==UserScript==
 
// @namespace    Personal
// @name         Remove media
// @description  Remove images and videos
// @version      2025-01-17
// @author       Elvin Aslanov
// @icon         https://www.google.com/s2/favicons?sz=64&domain=wikimedia.org
// @license      MIT
// @grant        none
 
// @match *://*/*
 
// ==/UserScript==
 
(function() {
  'use strict';
 
  for (var element of document.querySelectorAll('img, video, figure, svg')) { // NodeList
    element.remove();
  }
 
})();
