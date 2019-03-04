/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _make_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./make-filter.js */ "./src/make-filter.js");
/* harmony import */ var _make_film_card_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./make-film-card.js */ "./src/make-film-card.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/utils.js");



const filters = document.querySelector(`.main-navigation`);
const filmCardsContainer = document.querySelector(`.films-list__container`);
const mostRatedContainer = document.querySelector(`.films-list--extra .films-list__container`);
const mostCommentedContainer = document.querySelector(`.films-list--extra:last-of-type .films-list__container`);

const renderCards = (dist, count, hasControls = true, hasDescription = true) => {
  const cards = new Array(count).fill().map(() => Object(_make_film_card_js__WEBPACK_IMPORTED_MODULE_1__["default"])(hasControls, hasDescription));
  dist.insertAdjacentHTML(`beforeend`, cards.join(``));
};

const switchFilter = evt => {
  let target = evt.target;
  const activeFilter = document.querySelector(`.main-navigation__item--active`);
  const stats = document.querySelector(`.main-navigation__item--additional`);
  const allFilms = document.querySelectorAll(`.films-list .films-list__container .film-card`);

  while (target !== filters) {
    if (target.tagName === `A` && target !== activeFilter && target !== stats) {
      activeFilter.classList.remove(`main-navigation__item--active`);
      target.classList.add(`main-navigation__item--active`);
      Array.prototype.forEach.call(allFilms, node => node.parentNode.removeChild(node));
      renderCards(filmCardsContainer, Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getRandomNumber"])(1, 10));
      return;
    }

    target = target.parentNode;
  }
};

filters.insertAdjacentHTML(`afterbegin`, Object(_make_filter_js__WEBPACK_IMPORTED_MODULE_0__["default"])(`#favorites`, `Favorites`, 5355));
filters.insertAdjacentHTML(`afterbegin`, Object(_make_filter_js__WEBPACK_IMPORTED_MODULE_0__["default"])(`#history`, `History`, 222));
filters.insertAdjacentHTML(`afterbegin`, Object(_make_filter_js__WEBPACK_IMPORTED_MODULE_0__["default"])(`#watchlist`, `Watchlist`, 23));
filters.insertAdjacentHTML(`afterbegin`, Object(_make_filter_js__WEBPACK_IMPORTED_MODULE_0__["default"])(`#all`, `All movies`, 0, true));
renderCards(filmCardsContainer, 7);
renderCards(mostRatedContainer, 2, false, false);
renderCards(mostCommentedContainer, 2, false, false);
filters.addEventListener(`click`, switchFilter);

/***/ }),

/***/ "./src/make-film-card.js":
/*!*******************************!*\
  !*** ./src/make-film-card.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((hasControls, hasDescription) => `<article 
    class="${hasControls ? `film-card` : `film-card film-card--no-controls`}">

    <h3 class="film-card__title">The Assassination Of Jessie James By The Coward Robert Ford</h3>
    <p class="film-card__rating">9.8</p>
    <p class="film-card__info">
      <span class="film-card__year">2018</span>
      <span class="film-card__duration">1h&nbsp;13m</span>
      <span class="film-card__genre">Comedy</span>
    </p>
    <img src="./images/posters/three-friends.jpg" alt="" class="film-card__poster">
    
    ${hasDescription ? `<p class="film-card__description">A priest with a haunted past and a novice on the threshold of her final
     vows are sent by the Vatican to investigate the death of a young nun in Romania 
     and confront a malevolent force in the form of a demonic nun.
    </p>` : ``}
    
    <button class="film-card__comments">13 comments</button>
  
    ${hasControls ? `<form class="film-card__controls">
      <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist"><!--Add to watchlist--> WL</button>
      <button class="film-card__controls-item button film-card__controls-item--mark-as-watched"><!--Mark as watched-->WTCHD</button>
      <button class="film-card__controls-item button film-card__controls-item--favorite"><!--Mark as favorite-->FAV</button>
    </form>` : ``}
    
  </article>`);

/***/ }),

/***/ "./src/make-filter.js":
/*!****************************!*\
  !*** ./src/make-filter.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((link, caption, count = 0, active = false) => `<a
  href=${link}
  class="${active ? `main-navigation__item main-navigation__item--active` : `main-navigation__item`}">
  
  ${caption}
   
  ${count > 0 ? `<span class="main-navigation__item-count">${count}</span>` : ``}
  </a>`);

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: getRandomNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomNumber", function() { return getRandomNumber; });
function getRandomNumber(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map