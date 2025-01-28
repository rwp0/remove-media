// ==UserScript==
// @name         Remove media
// @namespace    Personal
// @description  Remove images and videos
// @version      2025-01-27
// @author       Elvin Aslanov
// @icon         https://www.google.com/s2/favicons?sz=64&domain=wikimedia.org
// @grant        none
// @downloadURL  https://update.greasyfork.org/scripts/524069/Remove%20media.user.js
// @updateURL    https://update.greasyfork.org/scripts/524069/Remove%20media.meta.js
// @match        *://*/*
// @exclude      *.google.com
// ==/UserScript==

/* eslint no-return-assign: off */

(function() {
  'use strict';

document
  .querySelectorAll('img, video, figure, svg') // NodeList
    .forEach(element => element.remove());

document
  .querySelectorAll('*')
    .forEach( element =>
      element.style.backgroundImage = null
    ); // CSSStyleDeclaration


})();

// TODO: https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet
