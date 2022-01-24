/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/index.scss":
/*!*****************************!*\
  !*** ./src/scss/index.scss ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function() {

if ($("#name").val() === '') {
    console.log("no change")
    let url = 'https://rickandmortyapi.com/api/character';
    $.get(`${url}`, function (res, status) {
            if (status === 'success') {
                let characters = res.results;
                characters.forEach(el => {
                    let imgUrl = el.image;
                    let name = el.name;

                    $('.article').append(
                        $(`<div class="card" id="character-${el.id}">
                        <div class="card__img-container">
                            <img class="card__img" src=${imgUrl} alt="img">
                        </div>
                        <div class="card__meta">
                            <div class="card__meta__name">${name}</div>
                            <div class="card__meta__delete btn" id="remove-ch-${el.id}">Delete</div>
                        </div>
                     </div>
                    `)
                    );

                    $(`#remove-ch-${el.id}`).click(function () {
                        $(`#character-${el.id}`).remove();
                    })
                })
            }
        }
    );
}

$("#name").on("input",function () {
    let searchText = $('#name').val();
    console.log("there is a change")
    $(".article").remove();
    $(".article-container").append(`<div class="article"></div>`)
    let url = `https://rickandmortyapi.com/api/character/?name=` + searchText;
    $.get(`${url}`, function (res, status) {
            if (status === 'success') {
                let characters = res.results;
                characters.forEach(el => {
                    let imgUrl = el.image;
                    let name = el.name;

                    $('.article').append(
                        $(`<div class="card" id="character-${el.id}">
                        <div class="card__img-container">
                            <img class="card__img" src=${imgUrl} alt="img">
                        </div>
                        <div class="card__meta">
                            <div class="card__meta__name">${name}</div>
                            <div class="card__meta__delete btn" id="remove-ch-${el.id}">Delete</div>
                        </div>
                     </div>
                    `)
                    );

                    $(`#remove-ch-${el.id}`).click(function () {
                        $(`#character-${el.id}`).remove();
                    })
                })
            }
        }
    );
})



let removeCharacter = function (id) {
    $("#character-" + id).remove();
}





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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/index.scss */ "./src/scss/index.scss");
/* harmony import */ var _js_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/main */ "./src/js/main.js");
/* harmony import */ var _js_main__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_main__WEBPACK_IMPORTED_MODULE_1__);




}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map