/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/bird.js":
/*!*********************!*\
  !*** ./src/bird.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Bird)\n/* harmony export */ });\nconst CONSTANTS = {\n    GRAVITY: 0.4,\n    FLAP_SPEED: -8,\n    TERMINAL_VEL: 12,\n    BIRD_WIDTH: 40,\n    BIRD_HEIGHT: 30\n};\nclass Bird {\n    constructor(dimensions){\n        this.velocity = 1;\n        this.dimensions = dimensions;\n        this.y = 300;\n        this.x = 100;\n    }\n    drawBird(ctx){\n        ctx.fillStyle = \"yellow\";\n        ctx.fillRect(this.x,this.y, CONSTANTS.BIRD_WIDTH, CONSTANTS.BIRD_HEIGHT);\n    }\n    animate(ctx){\n        this.move();\n        this.drawBird(ctx);\n    }\n    move(){\n        this.y += this.velocity;\n        this.velocity += CONSTANTS.GRAVITY;\n    }\n    flap(){\n        this.velocity = CONSTANTS.FLAP_SPEED;\n    }\n}\n\n//# sourceURL=webpack://flappy_bird/./src/bird.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FlappyBird)\n/* harmony export */ });\n/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level */ \"./src/level.js\");\n/* harmony import */ var _bird__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bird */ \"./src/bird.js\");\n\n\n\nclass FlappyBird {\n  constructor(canvas){\n    this.ctx = canvas.getContext(\"2d\");\n    this.dimensions = { width: canvas.width, height: canvas.height };\n    this.restart();\n    // this.addEventListener(\"click\",click);\n  }\n  animate(){\n    this.level.animate(this.ctx);\n    this.bird.animate(this.ctx);\n    if(this.running){\n      requestAnimationFrame(this.animate.bind(this));\n    }\n  }\n  restart(){\n    this.running = false;\n    this.level = new _level__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.dimensions);\n    this.bird = new _bird__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.dimensions);\n    this.animate();\n  }\n  play(){\n    this.running = true;\n    this.animate();\n  }\n  click(){\n    if(!this.running){\n      this.play();\n    }\n    this.bird.flap();\n  }\n\n}\n\n//# sourceURL=webpack://flappy_bird/./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\nconst canvas = document.getElementById('bird-game');\nlet game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\ncanvas.addEventListener(\"mousedown\",() => {game.click().bind(canvas);});\ngame.play();\n// game.restart();\n\n//# sourceURL=webpack://flappy_bird/./src/index.js?");

/***/ }),

/***/ "./src/level.js":
/*!**********************!*\
  !*** ./src/level.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Level)\n/* harmony export */ });\nconst CONSTANTS = {\n  PAIR_DISTANCE:220,\n  GAP: 150\n};\n\nclass Level {\n  constructor(dimensions) {\n    this.dimensions = dimensions;\n    this.pipes = [100,270,420];\n  }\n\n  drawBackground(ctx) {\n    ctx.fillStyle = \"skyblue\";\n    ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);\n  }\n  drawPipes(ctx){\n    for(let ele of this.pipes){\n      ctx.fillStyle = \"green\";\n      ctx.fillRect(ele,0,40,250);\n      // ctx.fillStyle = \"green\";\n      // ctx.fillRect(ele,640,40,250);\n    }\n  }\n  animate(ctx){\n    this.drawBackground(ctx);\n    this.drawPipes(ctx);\n  }\n}\n\n//# sourceURL=webpack://flappy_bird/./src/level.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;