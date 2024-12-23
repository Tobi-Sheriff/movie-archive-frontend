/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/config/config.js":
/*!******************************!*\
  !*** ./src/config/config.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: () => (/* binding */ config)
/* harmony export */ });
var config = {
  devApiUrl: 'http://localhost:8000',
  prodApiUrl: 'https://tmaapi.tobisheriff.com.ng'
};

/***/ }),

/***/ "./src/utils/pageCreation.js":
/*!***********************************!*\
  !*** ./src/utils/pageCreation.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createElement: () => (/* binding */ createElement),
/* harmony export */   createMovie: () => (/* binding */ createMovie),
/* harmony export */   createNav: () => (/* binding */ createNav),
/* harmony export */   fetchAndRenderMovies: () => (/* binding */ fetchAndRenderMovies),
/* harmony export */   fetch_function: () => (/* binding */ fetch_function),
/* harmony export */   genres: () => (/* binding */ genres),
/* harmony export */   truncate: () => (/* binding */ truncate)
/* harmony export */ });
/* harmony import */ var _config_config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/config.js */ "./src/config/config.js");
/* harmony import */ var _images_TMA_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/TMA-logo.png */ "./src/images/TMA-logo.png");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }

var genres = [{
  "id": 28,
  "name": "Action"
}, {
  "id": 12,
  "name": "Adventure"
}, {
  "id": 16,
  "name": "Animation"
}, {
  "id": 35,
  "name": "Comedy"
}, {
  "id": 80,
  "name": "Crime"
}, {
  "id": 99,
  "name": "Documentary"
}, {
  "id": 18,
  "name": "Drama"
}, {
  "id": 10751,
  "name": "Family"
}, {
  "id": 14,
  "name": "Fantasy"
}, {
  "id": 36,
  "name": "History"
}, {
  "id": 27,
  "name": "Horror"
}, {
  "id": 10402,
  "name": "Music"
}, {
  "id": 9648,
  "name": "Mystery"
}, {
  "id": 10749,
  "name": "Romance"
}, {
  "id": 878,
  "name": "Science Fiction"
}, {
  "id": 10770,
  "name": "TV Movie"
}, {
  "id": 53,
  "name": "Thriller"
}, {
  "id": 10752,
  "name": "War"
}, {
  "id": 37,
  "name": "Western"
}];
var truncate = function truncate(words, maxLength) {
  return words.length > maxLength ? "".concat(words.slice(0, maxLength), "\u2026") : words;
};
var createElement = function createElement(tag) {
  var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var text = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var element = document.createElement(tag);
  Object.entries(attributes).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      key = _ref2[0],
      value = _ref2[1];
    return element.setAttribute(key, value);
  });
  if (text) element.textContent = text;
  return element;
};

var createNav = function createNav() {
  var nav = document.querySelector('.nav-container');
  var logoDiv = createElement('div', {
    'class': 'logo'
  });
  var logoLink = createElement('a', {
    'class': 'nav-link',
    'href': '/'
  });
  var logoImg = createElement('img', {
    'src': _images_TMA_logo_png__WEBPACK_IMPORTED_MODULE_1__,
    'alt': 'logo'
  });
  logoLink.appendChild(logoImg);
  logoDiv.appendChild(logoLink);
  var hamburgerDiv = createElement('div', {
    'class': 'hamburger'
  });
  for (var i = 0; i < 3; i++) {
    var bar = createElement('div', {
      'class': 'bar'
    });
    hamburgerDiv.appendChild(bar);
  }
  var menuUl = createElement('ul', {
    'class': 'menu-ul'
  });
  var menuLink = createElement('a', {
    'class': 'menu-link',
    'href': './search'
  });
  var menuItem = createElement('li', {
    'class': 'menu-list'
  }, 'Search Page');
  menuLink.appendChild(menuItem);
  hamburgerDiv.addEventListener('click', function () {
    hamburgerDiv.classList.toggle('active');
    menuUl.appendChild(menuLink);
    menuUl.classList.toggle('active');
    hamburgerDiv.append(menuUl);
  });

  // Create nav search
  var rightNavDiv = createElement('div', {
    'class': 'right-nav'
  });
  var searchLink = createElement('a', {
    'class': 'search-link',
    'href': './search'
  }, 'Browse Movies');
  var form = createElement('form', {
    'action': '/search',
    'class': 'nav-form',
    'role': 'search'
  });
  var input = createElement('input', {
    'class': 'nav-search',
    'type': 'search',
    'placeholder': 'search movies...',
    'autocomplete': 'off'
  });
  var ul = createElement('ul', {
    'class': 'suggestions'
  });
  form.appendChild(input);
  rightNavDiv.append(searchLink, form, ul);
  form.addEventListener('submit', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          localStorage.setItem('searchQuery', input.value);
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })));
  input.addEventListener("input", /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(event) {
      var query, searchApiUrl, data, filteredMovies;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            query = event.target.value.trim().toLowerCase(); // Clear previous suggestions
            ul.innerHTML = "";
            ul.style.display = "none";
            if (!(query.length === 0)) {
              _context2.next = 5;
              break;
            }
            return _context2.abrupt("return");
          case 5:
            if (true) {
              searchApiUrl = "".concat(_config_config_js__WEBPACK_IMPORTED_MODULE_0__.config.devApiUrl, "/v1/movies/search?q=").concat(query, "&page=1&limit=10");
            } else {}
            _context2.next = 8;
            return fetch_function(searchApiUrl);
          case 8:
            data = _context2.sent;
            // Filter suggestions
            filteredMovies = data.response.slice(0, 5); // Create list and  Populate dropdown
            filteredMovies.forEach(function (movie) {
              var listLink = createElement('a', {
                'href': "details/".concat(movie.id)
              });
              var listItem = createElement('li', {}, truncate(movie.title, 30));
              listLink.appendChild(listItem);

              // Handle selection
              listLink.addEventListener("click", function () {
                ul.innerHTML = ""; // Clear suggestions
                ul.style.display = "none";
              });
              ul.appendChild(listLink);
            });
            if (filteredMovies.length > 0) {
              ul.style.display = "block"; // Show suggestions
            }
          case 12:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function (_x) {
      return _ref4.apply(this, arguments);
    };
  }());

  // Hide suggestions if clicking outside
  document.addEventListener('click', function (e) {
    if (!document.querySelector(".right-nav").contains(e.target)) {
      ul.innerHTML = "";
      ul.style.display = "none";
    }
  });
  nav.append(logoDiv, hamburgerDiv, rightNavDiv);
};
var createMovie = function createMovie(row, movie) {
  var column = createElement('div', {
    'class': 'columns',
    'data-id': movie.id
  });
  var figure = createElement('figure', {
    'class': 'movie-figure'
  });

  // Image container
  var imageAnchor = createElement('a', {
    href: "details/".concat(movie.id)
  });
  var movieImage = createElement('img', {
    src: "https://image.tmdb.org/t/p/w200".concat(movie.poster),
    alt: movie.title
  });
  var movieGenre = [];
  movie.genres.forEach(function (id) {
    genres.forEach(function (genre) {
      if (id === genre.id) {
        movieGenre.push(genre.name);
      }
    });
  });

  // Hover text container
  var hoverText = createElement('div', {
    "class": 'hover-text'
  });
  var parsedRating = parseFloat(movie.ratings);
  var hoverTextData1 = createElement('p', {
    'class': 'hover-rating'
  }, "".concat(parsedRating.toFixed(1), " / 10"));
  hoverText.appendChild(hoverTextData1);
  movieGenre.forEach(function (genre) {
    hoverText.append(createElement('p', {
      'class': 'hover-genre'
    }, "".concat(genre)));
  });

  // Movie title and release year
  var figcaption = createElement('figcaption');
  var MAX_LENGTH = 25;
  var titleAnchor = createElement('a', {
    href: 'details'
  }, truncate(movie.title, MAX_LENGTH));
  var movieYear = movie.release_date.split("-");
  var releaseYear = createElement('p', {
    "class": 'movie-year'
  }, movieYear[0]);

  // Append elements
  imageAnchor.append(movieImage, hoverText);
  figcaption.append(titleAnchor, releaseYear);
  figure.append(imageAnchor, figcaption);
  column.appendChild(figure);
  row.appendChild(column);
  return row;
};
var topControlBtn = createElement('div', {
  'class': 'top-control-btn'
});
var backSkip = createElement('button', {
  'class': 'back-skip-btn'
}, '<<<');
var topPrev = createElement('button', {
  'class': 'prev-btn'
}, 'Prev');
var topNext = createElement('button', {
  'class': 'next-btn'
}, 'Next');
var forwardSkip = createElement('button', {
  'class': 'forward-skip-btn'
}, '>>>');
topControlBtn.append(backSkip, topPrev, topNext, forwardSkip);
var fetchAndRenderMovies = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(data, page) {
    var movieListing, row, movies;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          movieListing = document.querySelector('.movie-listing.container');
          row = document.querySelector('.movie-row');
          movieListing.appendChild(row);
          movies = [];
          movies.push.apply(movies, _toConsumableArray(data.response));
          row.innerHTML = '';
          movies.forEach(function (movie) {
            return createMovie(row, movie);
          });

          // Update button `data-value`
          topPrev.setAttribute('data-value', page);
          topNext.setAttribute('data-value', page);
          backSkip.setAttribute('data-value', page);
          forwardSkip.setAttribute('data-value', page);
          if (page <= 1) {
            topPrev.setAttribute('class', 'prev-btn disabled');
            topPrev.disabled = true;
            backSkip.setAttribute('class', 'back-skip-btn disabled');
            backSkip.disabled = true;
          } else if (page > 1 && page < 6) {
            topPrev.setAttribute('class', 'prev-btn');
            topPrev.disabled = false;
            backSkip.setAttribute('class', 'back-skip-btn disabled');
            backSkip.disabled = true;
          } else {
            topPrev.setAttribute('class', 'prev-btn');
            topPrev.disabled = false;
            backSkip.setAttribute('class', 'back-skip-btn');
            backSkip.disabled = false;
          }
          if (page >= data.pagination.totalPages) {
            topNext.setAttribute('class', 'next-btn disabled');
            topNext.disabled = true;
            forwardSkip.setAttribute('class', 'forward-skip-btn disabled');
            forwardSkip.disabled = true;
          } else if (page > data.pagination.totalPages - 5 && page < data.pagination.totalPages) {
            topNext.setAttribute('class', 'next-btn');
            topNext.disabled = false;
            forwardSkip.setAttribute('class', 'forward-skip-btn disabled');
            forwardSkip.disabled = true;
          } else {
            topNext.setAttribute('class', 'next-btn');
            topNext.disabled = false;
            forwardSkip.setAttribute('class', 'forward-skip-btn');
            forwardSkip.disabled = false;
          }
          document.body.insertBefore(topControlBtn, movieListing);
        case 14:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function fetchAndRenderMovies(_x2, _x3) {
    return _ref5.apply(this, arguments);
  };
}();
var baseApiUrl;
if (true) {
  baseApiUrl = "".concat(_config_config_js__WEBPACK_IMPORTED_MODULE_0__.config.devApiUrl, "/v1/movies");
} else {}
var callRenderMovies = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(currentPage) {
    var myApiUrl, data;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          myApiUrl = "".concat(baseApiUrl, "?page=").concat(currentPage, "&limit=12");
          _context4.next = 4;
          return fetch_function(myApiUrl);
        case 4:
          data = _context4.sent;
          _context4.next = 7;
          return fetchAndRenderMovies(data, currentPage);
        case 7:
          _context4.next = 12;
          break;
        case 9:
          _context4.prev = 9;
          _context4.t0 = _context4["catch"](0);
          console.error('Failed to fetch movies:', _context4.t0.message);
        case 12:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 9]]);
  }));
  return function callRenderMovies(_x4) {
    return _ref6.apply(this, arguments);
  };
}();

// Event listeners for Prev and Next buttons
topPrev.addEventListener('click', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
  var currentPage;
  return _regeneratorRuntime().wrap(function _callee5$(_context5) {
    while (1) switch (_context5.prev = _context5.next) {
      case 0:
        currentPage = parseInt(topPrev.getAttribute('data-value'));
        currentPage -= 1;
        _context5.next = 4;
        return callRenderMovies(currentPage);
      case 4:
      case "end":
        return _context5.stop();
    }
  }, _callee5);
})));
topNext.addEventListener('click', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
  var currentPage;
  return _regeneratorRuntime().wrap(function _callee6$(_context6) {
    while (1) switch (_context6.prev = _context6.next) {
      case 0:
        currentPage = parseInt(topNext.getAttribute('data-value'));
        currentPage += 1;
        _context6.next = 4;
        return callRenderMovies(currentPage);
      case 4:
      case "end":
        return _context6.stop();
    }
  }, _callee6);
})));

// Event listeners for back skip and forward skip buttons
backSkip.addEventListener('click', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
  var currentPage;
  return _regeneratorRuntime().wrap(function _callee7$(_context7) {
    while (1) switch (_context7.prev = _context7.next) {
      case 0:
        currentPage = parseInt(backSkip.getAttribute('data-value'));
        currentPage -= 5;
        _context7.next = 4;
        return callRenderMovies(currentPage);
      case 4:
      case "end":
        return _context7.stop();
    }
  }, _callee7);
})));
forwardSkip.addEventListener('click', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
  var currentPage;
  return _regeneratorRuntime().wrap(function _callee8$(_context8) {
    while (1) switch (_context8.prev = _context8.next) {
      case 0:
        currentPage = parseInt(forwardSkip.getAttribute('data-value'));
        currentPage += 5;
        _context8.next = 4;
        return callRenderMovies(currentPage);
      case 4:
      case "end":
        return _context8.stop();
    }
  }, _callee8);
})));
var fetch_function = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(my_api_url) {
    var results;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _context9.next = 3;
          return axios.get(my_api_url);
        case 3:
          results = _context9.sent;
          console.log(results);
          return _context9.abrupt("return", results.data);
        case 8:
          _context9.prev = 8;
          _context9.t0 = _context9["catch"](0);
          console.error("Failed to fetch page", _context9.t0.message);
        case 11:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 8]]);
  }));
  return function fetch_function(_x5) {
    return _ref11.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  box-sizing: border-box;
}

body {
  margin: 0;
  color: white;
  background-color: #1d1d1d;
  font-family: Arimo, Arial, Helvetica, lucida grande, sans-serif;
}

/* p,
h1,
h2,
h3,
h4,
h5,
h5 {
    margin: 0;
    padding: 0;
} */

a {
  text-decoration: none;
}

/* NAVBAR STYLING STARTS ===================================== */
header.navbar {
  background-color: #171717;
  height: 70px;
}

header .nav-container {
  display: flex;
  justify-content: space-between;
  margin: 0 50px;
}

header .nav-container .logo {
  height: inherit;
  display: flex;
  align-items: center;
}

header .nav-container .logo img {
  width: 100px;
}

header .nav-container .right-nav {
  display: flex;
  padding: 15px 0;
}

header .nav-container .search-link {
  margin: 11px 10px 0 0;
  color: grey;
  font-size: 15px;
}

header .nav-container .right-nav .nav-search {
  height: 40px;
  width: 250px;
  background-color: transparent;
  border-radius: 20px;
  border: 2px solid #333;
  color: white;
  padding-left: 10px;
}

header .nav-container .right-nav .nav-search::placeholder {
  color: grey;
}


ul.suggestions {
  list-style: none;
  margin: 43px 0 0 0;
  padding: 0;
  position: absolute;
  width: 250px;
  border: none;
  background-color: #171717;
  max-height: 200px;
  /* Optional: Limit height */
  /* overflow-y: auto; */
  z-index: 1;
  display: none;
  /* Hidden by default */
}

ul.suggestions a {
  text-decoration: none;
  color: #fff;
}

ul.suggestions li {
  padding: 8px;
  cursor: pointer;
  font-size: 13px;
  font-weight: bold;
}

ul.suggestions li:hover {
  box-shadow: 1px 1px 3px green;
}


/* NAVBAR SYLING ENDS ================================= */


/* --------------------------------------------------------------------------------------------------- */


/* HOMEPAGE BODY STYLING STARTS ========================= */
/* WELCOME HEAD MESSAGE STARTS =========================*/
.head.welcome-info {
  text-align: center;
  margin-top: 50px;
}

.head h1 {
  font-size: 45px;
  font-weight: 700;
  margin-bottom: 20px;
}

.head .download-info {
  font-size: 14px;
  color: #ccc;
  margin: 0 auto;
  line-height: 22px;
}

.head .download-info a {
  font-weight: 700;
}

.head a {
  color: #428bca;
}

.head a:hover {
  color: #428bcab7;
}

.head .links {
  margin-top: 10px;
}

/* WELCOME HEAD MESSAGE ENDS ==========================*/


/* -------------------------------------------------------------------------------------------------- */


/* MOVIE LISTING STARTS ==============================*/
.top-control-btn {
  display: flex;
  justify-content: center;
  margin: 5px 0;
}

.top-control-btn button {
  width: 70px;
  height: 35px;
  margin: 0 5px;
  cursor: pointer;
  background-color: transparent;
  color: #fff;
  border: 1px solid #777;
}

.top-control-btn .disabled {
  opacity: 0.5;
  cursor: default;
}

.container {
  margin: 0 10%;
  width: 80%;
}

.movie-listing .movie-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.movie-listing figure {
  padding-bottom: 0;
  margin: 10px 20px;
}

.movie-listing figure a {
  position: relative;
  display: inline-block;
  overflow: hidden;
}

.movie-listing figure .hover-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 25px;
  font-weight: bold;
  width: 220px;
  height: 315px;
  padding: 10px 20px;
  border-radius: 5px;
  text-align: center;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.movie-listing figure a:hover .hover-text {
  opacity: 1;
  visibility: visible;
}

.movie-listing figure .hover-rating {
  margin-top: 0;
}

.movie-listing figure .hover-genre {
  margin: 5px 0;
}

.movie-listing figure img {
  width: 220px;
  height: 315px;
  border: 5px #fff solid;
  border-radius: 5px;
}

.movie-listing figure a:hover img {
  border: 5px #6ac045 solid;
  opacity: 0.4;
}

.movie-listing figure figcaption a {
  font-weight: 700;
  font-size: 15px;
  color: #fff;
  line-height: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
}

.movie-listing figure figcaption a:hover {
  color: grey;
}

.movie-listing figure figcaption .movie-year {
  font-size: small;
  color: grey;
  line-height: 0.5;
}

/* MOVIE LISTING ENDS =================================*/


/* -------------------------------------------------------------------------------------------------- */


/* MOVIE DETAILS STARTS ===============================*/
.details-section .movie-info,
.trailer-section .trailer-row,
.summary-section .movie-summary,
.comments-section .movie-reviews {
  display: flex;
  justify-content: space-between;
}

.details-section .movie-info {
  margin-top: 20px;
  margin-bottom: 40px;
}


.details-section .movie-info img {
  width: 260px;
  height: 400px;
  border: 5px #fff solid;
  border-radius: 5px;
  object-fit: cover;
}

.details-section .movie-info .movie-details {
  width: 40%;
}

.details-section .movie-info .movie-details h1 {
  margin-bottom: 25px;
  font-size: 35px;
}

.details-section .movie-info .movie-details h2 {
  font-size: 22px;
}

.details-section .movie-info .movie-details p {
  margin: 8px 0;
  font-size: 16px;
  font-weight: 400;
}

.details-section .movie-info .movie-details h1,
.details-section .movie-info .similar-movies h1 {
  margin-top: 0;
}

.details-section .movie-info figure {
  margin-left: 0;
}

.details-section .movie-info img:hover {
  border: 5px #6ac045 solid;
}

.details-section .movie-info .similar-movies h1 {
  margin-bottom: 10px;
  font-size: 18px;
}

.details-section .similar-movies-box {
  width: 230px;
  height: 300px;
}

.details-section .similar-movies-box div {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.details-section .similar-movies-box img {
  width: 100px;
  height: 150px;
  object-fit: cover;
  margin-bottom: 10px;
}


.trailer-section .trailer-row iframe,
.trailer-section .trailer-row img {
  width: 100%;
  height: 100%;
}

.summary-section .movie-summary .plot-summary {
  width: 60%;
}

.summary-section .movie-summary p {
  opacity: 0.5;
}

.summary-section .movie-summary .movie-artists {
  width: 30%;
}

.summary-section .movie-summary .movie-artists .director .content,
.summary-section .movie-summary .movie-artists .top-cast .content {
  display: flex;
}

.summary-section .movie-summary .movie-artists img {
  width: 40px;
  height: 40px;
  border-radius: 50px;
  margin-right: 10px;
}

.comments-section .users-comments {
  width: 45%;
}

.comments-section .imdb-reviews {
  width: 50%;
}

.comments-section .users-comments .scrollable-comments {
  height: 600px;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 20px;
  background-color: #171717;
}

.comments-section .users-comments .scrollable-comments .comment-content {
  display: flex;
}

.comments-section .users-comments .scrollable-comments .comment-content .user-name {
  margin-top: 0;
  opacity: 0.5;
}

.comments-section .users-comments .scrollable-comments .comment-content img {
  width: 40px;
  height: 40px;
  border-radius: 50px;
  margin-right: 10px;
}

.comments-section .imdb-reviews .reviewd-by {
  display: flex;
}

.comments-section .imdb-reviews .reviewd-by .pre-span {
  opacity: 0.3;
}

.comments-section .imdb-reviews .reviewd-by p {
  margin: 0 10px;
}

.comments-section .imdb-reviews p {
  opacity: 0.5;
}

.comments-section .imdb-reviews .read-more {
  opacity: 0.5;
  ;
}

.comments-section .imdb-reviews hr {
  margin: 30px 0;
  opacity: 0.5;
}


/* MOVIE DETAILS ENDS ================================= */

/* HOMEPAGE BODY STYLING ENDS ========================= */



/* Search field ==================================================== */
.big-search {
  background-color: #171717;
  height: 200px;
  margin-top: 5px;
  padding-top: 50px;
}

.big-search form {
  width: 70%;
  margin: 0 auto;
  /* align-items: center; */
}

.big-search input {
  width: 85%;
  height: 50px;
  margin: 0 auto;
  color: white;
  background-color: #282828;
  border: none;
  border-radius: 5px;
  padding-left: 20px;
  font-size: 18px;
}

.big-search input::placeholder {
  font-size: 18px;
}

.big-search button {
  cursor: pointer;
  width: 13%;
  height: 50px;
  float: right;
  font-size: 100%;
  color: white;
  font-weight: 600;
  background-color: green;
  border: none;
  border-radius: 5px;
}

.big-search button:hover {
  background: rgb(0, 150, 0);
  border: 1px solid grey;
  box-shadow: 1px 1px 3px green;
}

/* --------------------------------------------------------------------------------------- */



/* COMMENT STARTS =========================== */
.users-comments .scrollable-comments .load-comment {
  margin: 0 auto;
  height: 40px;
  width: 100%;
  background-color: green;
  border-radius: 5px;
  border: none;
  color: white;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
}

.users-comments .comment-div {
  display: flex;
  justify-content: center;
  padding: 15px 0;
  background-color: #171717;
  margin-top: 5px;
}

.users-comments .comment-div .comment-form {
  display: flex;
  justify-content: space-around;
  width: 100%;
}

.comments-section .users-comments .comment-div .comment-input {
  height: 40px;
  width: 65%;
  background-color: transparent;
  border-radius: 5px;
  border: 2px solid #333;
  color: white;
}

.users-comments .comment-input::placeholder {
  color: grey;
  padding-left: 10px;
}

.comments-section .users-comments .comment-div .comment-btn {
  width: 25%;
  background-color: green;
  border: none;
  color: white;
  font-weight: bold;
  font-size: 100%;
}

/* ------------------------------------------------------------------------------------------------ */


/* FOOTER STARTS =========================== */
.footer {
  background-color: #171717;
  height: 100px;
  opacity: 0.5;
  padding-top: 30px;
  margin-top: 50px;
}

.footer .container p {
  text-align: center;
}

/* FOOTER ENDS =========================== */



.hamburger .menu-ul {
  display: none;
}

/* MEDIA QUERIES BEGINS */
@media (max-width: 767px) {
  header .nav-container .right-nav {
    display: none;
  }

  .hamburger {
    width: 30px;
    height: 31px;
    margin: 15px 0;
    position: relative;
    cursor: pointer;
  }

  .hamburger .bar {
    width: 100%;
    height: 3px;
    background-color: #fff;
    position: absolute;
    top: 50%;
    z-index: 2;
    transform: translateY(-50%);
    transition: all 0.3s ease;
  }

  .hamburger .bar:nth-child(1) {
    top: 25%;
  }

  .hamburger .bar:nth-child(3) {
    top: 75%;
  }

  /* Hamburger to X animation */
  .hamburger.active .bar:nth-child(1) {
    transform: translateY(-50%) rotate(45deg);
    top: 50%;
  }

  .hamburger.active .bar:nth-child(2) {
    opacity: 0;
  }

  .hamburger.active .bar:nth-child(3) {
    transform: translateY(-50%) rotate(-45deg);
    top: 50%;
  }

  .hamburger .menu-ul {
    display: none;
  }

  .hamburger .menu-ul.active {
    list-style: none;
    margin: 0;
    padding: 70px 0 0 0;
    position: absolute;
    top: -50%;
    right: -165%;
    width: 100px;
    height: 100vh;
    border: none;
    background-color: rgb(27, 36, 26);
    z-index: 1;
    display: block;
  }

  .hamburger .menu-ul .menu-link {
    text-decoration: none;
    color: #fff;
  }

  .hamburger .menu-ul .menu-list {
    padding: 8px;
    cursor: pointer;
    font-size: 13px;
    font-weight: bold;
  }

  .hamburger .menu-ul .menu-list:hover {
    color: orange;
  }

  .big-search form {
    width: 80%;
    margin: 0 auto;
    /* align-items: center; */
  }

  .big-search input {
    width: 100%;
    height: 50px;
    margin: 0 auto;
    color: white;
    background-color: #282828;
    border: none;
    border-radius: 5px;
    padding-left: 20px;
    font-size: 18px;
  }

  .big-search input::placeholder {
    font-size: 18px;
  }

  .big-search button {
    display: none;
  }

  .details-section .movie-info,
  .trailer-section .trailer-row,
  .summary-section .movie-summary,
  .comments-section .movie-reviews {
    flex-wrap: wrap;
    margin-top: 50px;
  }

  .details-section .movie-info .movie-image img {
    width: 150px;
    height: 250px;
    border: 5px #fff solid;
    border-radius: 5px;
    object-fit: cover;
  }

  .details-section .movie-info .movie-details {
    width: 40%;
  }

  .details-section .movie-info .movie-details h1 {
    margin-bottom: 15px;
    font-size: 28px;
  }

  .details-section .movie-info .movie-details h2 {
    margin-bottom: 5px;
    font-size: 15px;
  }

  .details-section .movie-info .movie-details p {
    margin-top: 0;
    margin-bottom: 15px;
    font-size: 15px;
    font-weight: 400;
  }

  .details-section .movie-info .similar-movies {
    margin-top: 30px;
    width: 100%;
  }

  .details-section .movie-info .similar-movies .similar-movies-box {
    width: inherit;
  }

  .details-section .movie-info .similar-movies .similar-movies-box div a {
    margin: 0 10px;
  }

  .details-section .movie-info .similar-movies .similar-movies-box div img {
    width: 120px;
  }

  .details-section .movie-info .movie-details h1,
  .details-section .movie-info .similar-movies h1 {
    margin-top: 0;
  }

  /* .details-section .movie-info .movie-image {
    
  } */

  .trailer-section .trailer-row .movie-trailer,
  .trailer-section .trailer-row .movie-image {
    width: 100%;
  }

  .trailer-section .trailer-row video,
  .trailer-section .trailer-row img {
    /* width: 100%;
    height: 100%; */
    padding-top: 30px;
  }

  .summary-section .movie-summary .plot-summary {
    width: 100%;
  }

  .summary-section .movie-summary .movie-artists {
    width: 100%;
  }

  .comments-section .users-comments {
    width: 100%;
  }

  .comments-section .users-comments .comment-div .comment-input {
    width: 65%;
  }

  .comments-section .users-comments .comment-div .comment-btn {
    width: 25%;
  }

  .comments-section .imdb-reviews {
    width: 100%;
  }
}

/* MINI */
@media (min-width: 768px) and (max-width: 900px) {

  .details-section .movie-info,
  .trailer-section .trailer-row,
  .summary-section .movie-summary,
  .comments-section .movie-reviews {
    flex-wrap: wrap;
  }

  .trailer-section .trailer-row,
  .trailer-section .trailer-row {
    justify-content: center;
    margin: 50px 0;
  }

  .trailer-section .trailer-row .movie-trailer,
  .trailer-section .trailer-row .movie-image {
    width: 80%;
  }

  .trailer-section .trailer-row video,
  .trailer-section .trailer-row img {
    width: 100%;
    height: 100%;
    padding: 10px 0;
  }
}

/* MEDIUM */
@media (min-width: 1200px) {
  /* .movie-listing .movie-row {
  } */
}

/* MEDIA QUERIES ENDS */`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  color: white;\r\n  background-color: #1d1d1d;\r\n  font-family: Arimo, Arial, Helvetica, lucida grande, sans-serif;\r\n}\r\n\r\n/* p,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh5 {\r\n    margin: 0;\r\n    padding: 0;\r\n} */\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\n/* NAVBAR STYLING STARTS ===================================== */\r\nheader.navbar {\r\n  background-color: #171717;\r\n  height: 70px;\r\n}\r\n\r\nheader .nav-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin: 0 50px;\r\n}\r\n\r\nheader .nav-container .logo {\r\n  height: inherit;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\nheader .nav-container .logo img {\r\n  width: 100px;\r\n}\r\n\r\nheader .nav-container .right-nav {\r\n  display: flex;\r\n  padding: 15px 0;\r\n}\r\n\r\nheader .nav-container .search-link {\r\n  margin: 11px 10px 0 0;\r\n  color: grey;\r\n  font-size: 15px;\r\n}\r\n\r\nheader .nav-container .right-nav .nav-search {\r\n  height: 40px;\r\n  width: 250px;\r\n  background-color: transparent;\r\n  border-radius: 20px;\r\n  border: 2px solid #333;\r\n  color: white;\r\n  padding-left: 10px;\r\n}\r\n\r\nheader .nav-container .right-nav .nav-search::placeholder {\r\n  color: grey;\r\n}\r\n\r\n\r\nul.suggestions {\r\n  list-style: none;\r\n  margin: 43px 0 0 0;\r\n  padding: 0;\r\n  position: absolute;\r\n  width: 250px;\r\n  border: none;\r\n  background-color: #171717;\r\n  max-height: 200px;\r\n  /* Optional: Limit height */\r\n  /* overflow-y: auto; */\r\n  z-index: 1;\r\n  display: none;\r\n  /* Hidden by default */\r\n}\r\n\r\nul.suggestions a {\r\n  text-decoration: none;\r\n  color: #fff;\r\n}\r\n\r\nul.suggestions li {\r\n  padding: 8px;\r\n  cursor: pointer;\r\n  font-size: 13px;\r\n  font-weight: bold;\r\n}\r\n\r\nul.suggestions li:hover {\r\n  box-shadow: 1px 1px 3px green;\r\n}\r\n\r\n\r\n/* NAVBAR SYLING ENDS ================================= */\r\n\r\n\r\n/* --------------------------------------------------------------------------------------------------- */\r\n\r\n\r\n/* HOMEPAGE BODY STYLING STARTS ========================= */\r\n/* WELCOME HEAD MESSAGE STARTS =========================*/\r\n.head.welcome-info {\r\n  text-align: center;\r\n  margin-top: 50px;\r\n}\r\n\r\n.head h1 {\r\n  font-size: 45px;\r\n  font-weight: 700;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.head .download-info {\r\n  font-size: 14px;\r\n  color: #ccc;\r\n  margin: 0 auto;\r\n  line-height: 22px;\r\n}\r\n\r\n.head .download-info a {\r\n  font-weight: 700;\r\n}\r\n\r\n.head a {\r\n  color: #428bca;\r\n}\r\n\r\n.head a:hover {\r\n  color: #428bcab7;\r\n}\r\n\r\n.head .links {\r\n  margin-top: 10px;\r\n}\r\n\r\n/* WELCOME HEAD MESSAGE ENDS ==========================*/\r\n\r\n\r\n/* -------------------------------------------------------------------------------------------------- */\r\n\r\n\r\n/* MOVIE LISTING STARTS ==============================*/\r\n.top-control-btn {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin: 5px 0;\r\n}\r\n\r\n.top-control-btn button {\r\n  width: 70px;\r\n  height: 35px;\r\n  margin: 0 5px;\r\n  cursor: pointer;\r\n  background-color: transparent;\r\n  color: #fff;\r\n  border: 1px solid #777;\r\n}\r\n\r\n.top-control-btn .disabled {\r\n  opacity: 0.5;\r\n  cursor: default;\r\n}\r\n\r\n.container {\r\n  margin: 0 10%;\r\n  width: 80%;\r\n}\r\n\r\n.movie-listing .movie-row {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n}\r\n\r\n.movie-listing figure {\r\n  padding-bottom: 0;\r\n  margin: 10px 20px;\r\n}\r\n\r\n.movie-listing figure a {\r\n  position: relative;\r\n  display: inline-block;\r\n  overflow: hidden;\r\n}\r\n\r\n.movie-listing figure .hover-text {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  color: white;\r\n  font-size: 25px;\r\n  font-weight: bold;\r\n  width: 220px;\r\n  height: 315px;\r\n  padding: 10px 20px;\r\n  border-radius: 5px;\r\n  text-align: center;\r\n  opacity: 0;\r\n  visibility: hidden;\r\n  transition: opacity 0.3s ease, visibility 0.3s ease;\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n}\r\n\r\n.movie-listing figure a:hover .hover-text {\r\n  opacity: 1;\r\n  visibility: visible;\r\n}\r\n\r\n.movie-listing figure .hover-rating {\r\n  margin-top: 0;\r\n}\r\n\r\n.movie-listing figure .hover-genre {\r\n  margin: 5px 0;\r\n}\r\n\r\n.movie-listing figure img {\r\n  width: 220px;\r\n  height: 315px;\r\n  border: 5px #fff solid;\r\n  border-radius: 5px;\r\n}\r\n\r\n.movie-listing figure a:hover img {\r\n  border: 5px #6ac045 solid;\r\n  opacity: 0.4;\r\n}\r\n\r\n.movie-listing figure figcaption a {\r\n  font-weight: 700;\r\n  font-size: 15px;\r\n  color: #fff;\r\n  line-height: 2;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  display: block;\r\n}\r\n\r\n.movie-listing figure figcaption a:hover {\r\n  color: grey;\r\n}\r\n\r\n.movie-listing figure figcaption .movie-year {\r\n  font-size: small;\r\n  color: grey;\r\n  line-height: 0.5;\r\n}\r\n\r\n/* MOVIE LISTING ENDS =================================*/\r\n\r\n\r\n/* -------------------------------------------------------------------------------------------------- */\r\n\r\n\r\n/* MOVIE DETAILS STARTS ===============================*/\r\n.details-section .movie-info,\r\n.trailer-section .trailer-row,\r\n.summary-section .movie-summary,\r\n.comments-section .movie-reviews {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.details-section .movie-info {\r\n  margin-top: 20px;\r\n  margin-bottom: 40px;\r\n}\r\n\r\n\r\n.details-section .movie-info img {\r\n  width: 260px;\r\n  height: 400px;\r\n  border: 5px #fff solid;\r\n  border-radius: 5px;\r\n  object-fit: cover;\r\n}\r\n\r\n.details-section .movie-info .movie-details {\r\n  width: 40%;\r\n}\r\n\r\n.details-section .movie-info .movie-details h1 {\r\n  margin-bottom: 25px;\r\n  font-size: 35px;\r\n}\r\n\r\n.details-section .movie-info .movie-details h2 {\r\n  font-size: 22px;\r\n}\r\n\r\n.details-section .movie-info .movie-details p {\r\n  margin: 8px 0;\r\n  font-size: 16px;\r\n  font-weight: 400;\r\n}\r\n\r\n.details-section .movie-info .movie-details h1,\r\n.details-section .movie-info .similar-movies h1 {\r\n  margin-top: 0;\r\n}\r\n\r\n.details-section .movie-info figure {\r\n  margin-left: 0;\r\n}\r\n\r\n.details-section .movie-info img:hover {\r\n  border: 5px #6ac045 solid;\r\n}\r\n\r\n.details-section .movie-info .similar-movies h1 {\r\n  margin-bottom: 10px;\r\n  font-size: 18px;\r\n}\r\n\r\n.details-section .similar-movies-box {\r\n  width: 230px;\r\n  height: 300px;\r\n}\r\n\r\n.details-section .similar-movies-box div {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-between;\r\n}\r\n\r\n.details-section .similar-movies-box img {\r\n  width: 100px;\r\n  height: 150px;\r\n  object-fit: cover;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n\r\n.trailer-section .trailer-row iframe,\r\n.trailer-section .trailer-row img {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.summary-section .movie-summary .plot-summary {\r\n  width: 60%;\r\n}\r\n\r\n.summary-section .movie-summary p {\r\n  opacity: 0.5;\r\n}\r\n\r\n.summary-section .movie-summary .movie-artists {\r\n  width: 30%;\r\n}\r\n\r\n.summary-section .movie-summary .movie-artists .director .content,\r\n.summary-section .movie-summary .movie-artists .top-cast .content {\r\n  display: flex;\r\n}\r\n\r\n.summary-section .movie-summary .movie-artists img {\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 50px;\r\n  margin-right: 10px;\r\n}\r\n\r\n.comments-section .users-comments {\r\n  width: 45%;\r\n}\r\n\r\n.comments-section .imdb-reviews {\r\n  width: 50%;\r\n}\r\n\r\n.comments-section .users-comments .scrollable-comments {\r\n  height: 600px;\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n  padding: 20px;\r\n  background-color: #171717;\r\n}\r\n\r\n.comments-section .users-comments .scrollable-comments .comment-content {\r\n  display: flex;\r\n}\r\n\r\n.comments-section .users-comments .scrollable-comments .comment-content .user-name {\r\n  margin-top: 0;\r\n  opacity: 0.5;\r\n}\r\n\r\n.comments-section .users-comments .scrollable-comments .comment-content img {\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 50px;\r\n  margin-right: 10px;\r\n}\r\n\r\n.comments-section .imdb-reviews .reviewd-by {\r\n  display: flex;\r\n}\r\n\r\n.comments-section .imdb-reviews .reviewd-by .pre-span {\r\n  opacity: 0.3;\r\n}\r\n\r\n.comments-section .imdb-reviews .reviewd-by p {\r\n  margin: 0 10px;\r\n}\r\n\r\n.comments-section .imdb-reviews p {\r\n  opacity: 0.5;\r\n}\r\n\r\n.comments-section .imdb-reviews .read-more {\r\n  opacity: 0.5;\r\n  ;\r\n}\r\n\r\n.comments-section .imdb-reviews hr {\r\n  margin: 30px 0;\r\n  opacity: 0.5;\r\n}\r\n\r\n\r\n/* MOVIE DETAILS ENDS ================================= */\r\n\r\n/* HOMEPAGE BODY STYLING ENDS ========================= */\r\n\r\n\r\n\r\n/* Search field ==================================================== */\r\n.big-search {\r\n  background-color: #171717;\r\n  height: 200px;\r\n  margin-top: 5px;\r\n  padding-top: 50px;\r\n}\r\n\r\n.big-search form {\r\n  width: 70%;\r\n  margin: 0 auto;\r\n  /* align-items: center; */\r\n}\r\n\r\n.big-search input {\r\n  width: 85%;\r\n  height: 50px;\r\n  margin: 0 auto;\r\n  color: white;\r\n  background-color: #282828;\r\n  border: none;\r\n  border-radius: 5px;\r\n  padding-left: 20px;\r\n  font-size: 18px;\r\n}\r\n\r\n.big-search input::placeholder {\r\n  font-size: 18px;\r\n}\r\n\r\n.big-search button {\r\n  cursor: pointer;\r\n  width: 13%;\r\n  height: 50px;\r\n  float: right;\r\n  font-size: 100%;\r\n  color: white;\r\n  font-weight: 600;\r\n  background-color: green;\r\n  border: none;\r\n  border-radius: 5px;\r\n}\r\n\r\n.big-search button:hover {\r\n  background: rgb(0, 150, 0);\r\n  border: 1px solid grey;\r\n  box-shadow: 1px 1px 3px green;\r\n}\r\n\r\n/* --------------------------------------------------------------------------------------- */\r\n\r\n\r\n\r\n/* COMMENT STARTS =========================== */\r\n.users-comments .scrollable-comments .load-comment {\r\n  margin: 0 auto;\r\n  height: 40px;\r\n  width: 100%;\r\n  background-color: green;\r\n  border-radius: 5px;\r\n  border: none;\r\n  color: white;\r\n  font-weight: bold;\r\n  font-size: 15px;\r\n  cursor: pointer;\r\n}\r\n\r\n.users-comments .comment-div {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding: 15px 0;\r\n  background-color: #171717;\r\n  margin-top: 5px;\r\n}\r\n\r\n.users-comments .comment-div .comment-form {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  width: 100%;\r\n}\r\n\r\n.comments-section .users-comments .comment-div .comment-input {\r\n  height: 40px;\r\n  width: 65%;\r\n  background-color: transparent;\r\n  border-radius: 5px;\r\n  border: 2px solid #333;\r\n  color: white;\r\n}\r\n\r\n.users-comments .comment-input::placeholder {\r\n  color: grey;\r\n  padding-left: 10px;\r\n}\r\n\r\n.comments-section .users-comments .comment-div .comment-btn {\r\n  width: 25%;\r\n  background-color: green;\r\n  border: none;\r\n  color: white;\r\n  font-weight: bold;\r\n  font-size: 100%;\r\n}\r\n\r\n/* ------------------------------------------------------------------------------------------------ */\r\n\r\n\r\n/* FOOTER STARTS =========================== */\r\n.footer {\r\n  background-color: #171717;\r\n  height: 100px;\r\n  opacity: 0.5;\r\n  padding-top: 30px;\r\n  margin-top: 50px;\r\n}\r\n\r\n.footer .container p {\r\n  text-align: center;\r\n}\r\n\r\n/* FOOTER ENDS =========================== */\r\n\r\n\r\n\r\n.hamburger .menu-ul {\r\n  display: none;\r\n}\r\n\r\n/* MEDIA QUERIES BEGINS */\r\n@media (max-width: 767px) {\r\n  header .nav-container .right-nav {\r\n    display: none;\r\n  }\r\n\r\n  .hamburger {\r\n    width: 30px;\r\n    height: 31px;\r\n    margin: 15px 0;\r\n    position: relative;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .hamburger .bar {\r\n    width: 100%;\r\n    height: 3px;\r\n    background-color: #fff;\r\n    position: absolute;\r\n    top: 50%;\r\n    z-index: 2;\r\n    transform: translateY(-50%);\r\n    transition: all 0.3s ease;\r\n  }\r\n\r\n  .hamburger .bar:nth-child(1) {\r\n    top: 25%;\r\n  }\r\n\r\n  .hamburger .bar:nth-child(3) {\r\n    top: 75%;\r\n  }\r\n\r\n  /* Hamburger to X animation */\r\n  .hamburger.active .bar:nth-child(1) {\r\n    transform: translateY(-50%) rotate(45deg);\r\n    top: 50%;\r\n  }\r\n\r\n  .hamburger.active .bar:nth-child(2) {\r\n    opacity: 0;\r\n  }\r\n\r\n  .hamburger.active .bar:nth-child(3) {\r\n    transform: translateY(-50%) rotate(-45deg);\r\n    top: 50%;\r\n  }\r\n\r\n  .hamburger .menu-ul {\r\n    display: none;\r\n  }\r\n\r\n  .hamburger .menu-ul.active {\r\n    list-style: none;\r\n    margin: 0;\r\n    padding: 70px 0 0 0;\r\n    position: absolute;\r\n    top: -50%;\r\n    right: -165%;\r\n    width: 100px;\r\n    height: 100vh;\r\n    border: none;\r\n    background-color: rgb(27, 36, 26);\r\n    z-index: 1;\r\n    display: block;\r\n  }\r\n\r\n  .hamburger .menu-ul .menu-link {\r\n    text-decoration: none;\r\n    color: #fff;\r\n  }\r\n\r\n  .hamburger .menu-ul .menu-list {\r\n    padding: 8px;\r\n    cursor: pointer;\r\n    font-size: 13px;\r\n    font-weight: bold;\r\n  }\r\n\r\n  .hamburger .menu-ul .menu-list:hover {\r\n    color: orange;\r\n  }\r\n\r\n  .big-search form {\r\n    width: 80%;\r\n    margin: 0 auto;\r\n    /* align-items: center; */\r\n  }\r\n\r\n  .big-search input {\r\n    width: 100%;\r\n    height: 50px;\r\n    margin: 0 auto;\r\n    color: white;\r\n    background-color: #282828;\r\n    border: none;\r\n    border-radius: 5px;\r\n    padding-left: 20px;\r\n    font-size: 18px;\r\n  }\r\n\r\n  .big-search input::placeholder {\r\n    font-size: 18px;\r\n  }\r\n\r\n  .big-search button {\r\n    display: none;\r\n  }\r\n\r\n  .details-section .movie-info,\r\n  .trailer-section .trailer-row,\r\n  .summary-section .movie-summary,\r\n  .comments-section .movie-reviews {\r\n    flex-wrap: wrap;\r\n    margin-top: 50px;\r\n  }\r\n\r\n  .details-section .movie-info .movie-image img {\r\n    width: 150px;\r\n    height: 250px;\r\n    border: 5px #fff solid;\r\n    border-radius: 5px;\r\n    object-fit: cover;\r\n  }\r\n\r\n  .details-section .movie-info .movie-details {\r\n    width: 40%;\r\n  }\r\n\r\n  .details-section .movie-info .movie-details h1 {\r\n    margin-bottom: 15px;\r\n    font-size: 28px;\r\n  }\r\n\r\n  .details-section .movie-info .movie-details h2 {\r\n    margin-bottom: 5px;\r\n    font-size: 15px;\r\n  }\r\n\r\n  .details-section .movie-info .movie-details p {\r\n    margin-top: 0;\r\n    margin-bottom: 15px;\r\n    font-size: 15px;\r\n    font-weight: 400;\r\n  }\r\n\r\n  .details-section .movie-info .similar-movies {\r\n    margin-top: 30px;\r\n    width: 100%;\r\n  }\r\n\r\n  .details-section .movie-info .similar-movies .similar-movies-box {\r\n    width: inherit;\r\n  }\r\n\r\n  .details-section .movie-info .similar-movies .similar-movies-box div a {\r\n    margin: 0 10px;\r\n  }\r\n\r\n  .details-section .movie-info .similar-movies .similar-movies-box div img {\r\n    width: 120px;\r\n  }\r\n\r\n  .details-section .movie-info .movie-details h1,\r\n  .details-section .movie-info .similar-movies h1 {\r\n    margin-top: 0;\r\n  }\r\n\r\n  /* .details-section .movie-info .movie-image {\r\n    \r\n  } */\r\n\r\n  .trailer-section .trailer-row .movie-trailer,\r\n  .trailer-section .trailer-row .movie-image {\r\n    width: 100%;\r\n  }\r\n\r\n  .trailer-section .trailer-row video,\r\n  .trailer-section .trailer-row img {\r\n    /* width: 100%;\r\n    height: 100%; */\r\n    padding-top: 30px;\r\n  }\r\n\r\n  .summary-section .movie-summary .plot-summary {\r\n    width: 100%;\r\n  }\r\n\r\n  .summary-section .movie-summary .movie-artists {\r\n    width: 100%;\r\n  }\r\n\r\n  .comments-section .users-comments {\r\n    width: 100%;\r\n  }\r\n\r\n  .comments-section .users-comments .comment-div .comment-input {\r\n    width: 65%;\r\n  }\r\n\r\n  .comments-section .users-comments .comment-div .comment-btn {\r\n    width: 25%;\r\n  }\r\n\r\n  .comments-section .imdb-reviews {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n/* MINI */\r\n@media (min-width: 768px) and (max-width: 900px) {\r\n\r\n  .details-section .movie-info,\r\n  .trailer-section .trailer-row,\r\n  .summary-section .movie-summary,\r\n  .comments-section .movie-reviews {\r\n    flex-wrap: wrap;\r\n  }\r\n\r\n  .trailer-section .trailer-row,\r\n  .trailer-section .trailer-row {\r\n    justify-content: center;\r\n    margin: 50px 0;\r\n  }\r\n\r\n  .trailer-section .trailer-row .movie-trailer,\r\n  .trailer-section .trailer-row .movie-image {\r\n    width: 80%;\r\n  }\r\n\r\n  .trailer-section .trailer-row video,\r\n  .trailer-section .trailer-row img {\r\n    width: 100%;\r\n    height: 100%;\r\n    padding: 10px 0;\r\n  }\r\n}\r\n\r\n/* MEDIUM */\r\n@media (min-width: 1200px) {\r\n  /* .movie-listing .movie-row {\r\n  } */\r\n}\r\n\r\n/* MEDIA QUERIES ENDS */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/images/TMA-logo.png":
/*!*********************************!*\
  !*** ./src/images/TMA-logo.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/TMA-logo.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/js/searchPage.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_pageCreation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/pageCreation.js */ "./src/utils/pageCreation.js");
/* harmony import */ var _config_config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/config.js */ "./src/config/config.js");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/style.css */ "./src/css/style.css");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }



function initializeSearchPage() {
  return _initializeSearchPage.apply(this, arguments);
}
function _initializeSearchPage() {
  _initializeSearchPage = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var searchContainer, bigSearchForm, bigSearchInput, bigSearchBtn, INITIAL_PAGE, baseApiUrl, myApiUrl, callRenderMovies;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          (0,_utils_pageCreation_js__WEBPACK_IMPORTED_MODULE_0__.createNav)();
          searchContainer = document.querySelector('.big-search');
          bigSearchForm = (0,_utils_pageCreation_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('form', {
            'action': '/search'
          });
          bigSearchInput = (0,_utils_pageCreation_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('input', {
            'class': 'search-input',
            'type': 'text',
            'placeholder': 'Search..',
            'name': 'search',
            'autocomplete': 'off'
          });
          bigSearchBtn = (0,_utils_pageCreation_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('button', {
            'type': 'submit'
          }, 'Search');
          bigSearchForm.append(bigSearchInput, bigSearchBtn);
          searchContainer.append(bigSearchForm);
          bigSearchForm.addEventListener('submit', function () {
            localStorage.setItem('searchQuery', bigSearchInput.value);
          });
          INITIAL_PAGE = 1;
          if (true) {
            baseApiUrl = "".concat(_config_config_js__WEBPACK_IMPORTED_MODULE_1__.config.devApiUrl, "/v1/movies");
          } else {}
          callRenderMovies = /*#__PURE__*/function () {
            var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(currentPage) {
              var searchValue, _myApiUrl, data, _data;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    if (!localStorage.getItem('searchQuery')) {
                      _context.next = 11;
                      break;
                    }
                    searchValue = localStorage.getItem('searchQuery');
                    _myApiUrl = "".concat(baseApiUrl, "/search?q=").concat(searchValue, "&page=").concat(currentPage, "&limit=8");
                    _context.next = 6;
                    return (0,_utils_pageCreation_js__WEBPACK_IMPORTED_MODULE_0__.fetch_function)(_myApiUrl);
                  case 6:
                    data = _context.sent;
                    _context.next = 9;
                    return (0,_utils_pageCreation_js__WEBPACK_IMPORTED_MODULE_0__.fetchAndRenderMovies)(data, currentPage);
                  case 9:
                    _context.next = 17;
                    break;
                  case 11:
                    myApiUrl = "".concat(baseApiUrl, "?page=").concat(currentPage, "&limit=12");
                    _context.next = 14;
                    return (0,_utils_pageCreation_js__WEBPACK_IMPORTED_MODULE_0__.fetch_function)(myApiUrl);
                  case 14:
                    _data = _context.sent;
                    _context.next = 17;
                    return (0,_utils_pageCreation_js__WEBPACK_IMPORTED_MODULE_0__.fetchAndRenderMovies)(_data, currentPage);
                  case 17:
                    _context.next = 22;
                    break;
                  case 19:
                    _context.prev = 19;
                    _context.t0 = _context["catch"](0);
                    console.error('Failed to fetch movies:', _context.t0.message);
                  case 22:
                  case "end":
                    return _context.stop();
                }
              }, _callee, null, [[0, 19]]);
            }));
            return function callRenderMovies(_x) {
              return _ref.apply(this, arguments);
            };
          }(); // Initial render
          callRenderMovies(INITIAL_PAGE);
        case 12:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _initializeSearchPage.apply(this, arguments);
}
window.addEventListener('load', initializeSearchPage);
})();

/******/ })()
;
//# sourceMappingURL=searchPage.bundle.js.map