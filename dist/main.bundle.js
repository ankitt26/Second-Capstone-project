"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcapston_2"] = self["webpackChunkcapston_2"] || []).push([["main"],{

/***/ "./modules/addcomment.js":
/*!*******************************!*\
  !*** ./modules/addcomment.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst addComment = async (id, username, comment) => {\n  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/pBIYWv6nEx7bPsY1jHDg/comments', {\n    method: 'POST',\n    body: JSON.stringify({\n      item_id: id,\n      username,\n      comment,\n    }),\n    headers: {\n      'Content-Type': 'application/json',\n    },\n  });\n  console.log('response from API', response);\n  return response;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addComment);\n\n//# sourceURL=webpack://capston-2/./modules/addcomment.js?");

/***/ }),

/***/ "./modules/commentPopup.js":
/*!*********************************!*\
  !*** ./modules/commentPopup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _addcomment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addcomment.js */ \"./modules/addcomment.js\");\n/* harmony import */ var _displaycomment_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displaycomment.js */ \"./modules/displaycomment.js\");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (data) => {\n  const mainSection = document.querySelector('.main-section');\n  mainSection.addEventListener('click', async (event) => {\n    if (event.target.classList.contains('comment-btn')) {\n      const index = parseInt(event.target.dataset.index, 10);\n      // const data = await fetchApi();\n      const selected = data[index];\n      const moviedetails = document.getElementById('comment-info');\n      moviedetails.innerHTML = `\n      <img class=\"pop-img\" src=${selected.image.medium}>\n      <p class=\"movieName\">${selected.name}</p>\n      <div class=\"info-ms\">\n        <p class=\"sum\">LANGUAGE: ${selected.language}</p>\n        <p class=\"sum\">Status: ${selected.status}</p>\n        <p class=\"sum\">PREMIERED: ${selected.premiered}</p>\n        <p class=\"sum\">ENDED: ${selected.ended}</p>\n        <br>\n        <br>\n        <p class=\"sum\">SUMMARY:</p>\n        <div class=\"summary-text\">${selected.summary}</div>\n        <button id=\"close-btn\">x</button>\n        <ul id=\"comment-list\"></ul>\n        <form class=\"form\" id='input-form'>\n          <h3>Add a comment</h3>\n          <input type=\"text\" id=\"user\" name=\"username\" required placeholder=\"Your name\"/>\n          <textarea id=\"comment\" rows=\"4\" cols=\"40\" required placeholder=\"Your insights\"></textarea>\n          <button class=\"submit\" id=\"submit\" data-index=\"${selected.id}\" type=\"submit\">Comment</button>\n        </form>\n      </div>\n    `;\n      const user = document.getElementById('user');\n      const comment = document.getElementById('comment');\n      const commentbtn = document.querySelector('#comment-info .submit');\n      commentbtn.dataset.index = selected.id;\n      commentbtn.addEventListener('click', async (e) => {\n        e.preventDefault();\n        await (0,_addcomment_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(selected.id, user.value, comment.value);\n        user.value = '';\n        comment.value = '';\n        (0,_displaycomment_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(selected.id);\n      });\n      (0,_displaycomment_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(selected.id);\n      const closeButton = document.getElementById('close-btn');\n      const commentpopup = document.getElementById('comment-popup');\n      commentpopup.classList.add('show');\n      const commentsection = document.getElementById('comment-section');\n      commentsection.classList.add('show');\n      closeButton.addEventListener('click', () => {\n        commentpopup.classList.remove('show');\n        commentsection.classList.remove('show');\n      });\n    }\n  });\n});\n\n//# sourceURL=webpack://capston-2/./modules/commentPopup.js?");

/***/ }),

/***/ "./modules/countItem.js":
/*!******************************!*\
  !*** ./modules/countItem.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst item = document.querySelector('.main-section');\nconst movieC = document.getElementById('movies');\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\n  const itemsCount = item.childNodes.length;\n  movieC.innerHTML += ` (${itemsCount})`;\n});\n\n//# sourceURL=webpack://capston-2/./modules/countItem.js?");

/***/ }),

/***/ "./modules/displayCard.js":
/*!********************************!*\
  !*** ./modules/displayCard.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst mainSection = document.querySelector('.main-section');\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((data) => {\n  data.forEach((data, index) => {\n    mainSection.innerHTML += `<div class=\"card\" id=\"${data.id}\">\n<img\n  class=\"card-img\"\n  src=${data.image.original}\n  alt=\"${data.name}\"\n/>\n<div class=\"detail\">\n  <h3>${data.name}</h3>\n  <div class=\"likes\">\n    <i class=\"fa-solid fa-heart like-icon\"  id=\"icon${data.id}\"></i>\n    <span class=\"count-like\" id=\"item${data.id}\">0 likes</span>\n  </div>\n</div>\n<button class=\"comment-btn\" data-index=\"${index}\" >comments</button>\n</div>`;\n  });\n});\n\n\n//# sourceURL=webpack://capston-2/./modules/displayCard.js?");

/***/ }),

/***/ "./modules/displayLike.js":
/*!********************************!*\
  !*** ./modules/displayLike.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (json) => {\n  json.forEach((value) => {\n    const likebtn = document.getElementById(value.item_id);\n    likebtn.innerHTML = `${value.likes} likes`;\n  });\n});\n\n\n//# sourceURL=webpack://capston-2/./modules/displayLike.js?");

/***/ }),

/***/ "./modules/displaycomment.js":
/*!***********************************!*\
  !*** ./modules/displaycomment.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getComments = async (id) => {\n  try {\n    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/pBIYWv6nEx7bPsY1jHDg/comments?item_id=${id}`, {\n      method: 'GET',\n      headers: {\n        'content-type': 'application/json',\n      },\n    });\n    const data = await response.json();\n    console.log('Data from API:', data);\n    return data;\n  } catch (error) {\n    console.error('Error fetching reservations:', error);\n    return null;\n  }\n};\n\nconst displayComments = async (id) => {\n  const data = await getComments(id);\n  console.log('data from getComments:', data);\n  const scoreboard = document.getElementById('comment-list');\n  scoreboard.innerHTML = '';\n  scoreboard.classList.add('comment-list'); // Add class for comment list\n  const header = document.createElement('h3');\n  header.textContent = `Comments${data.length ? `(${data.length})` : ''}`;\n  scoreboard.appendChild(header);\n  if (!data.error) {\n    data.forEach((comm) => {\n      const li = document.createElement('li');\n      li.classList.add('comment-item');\n      li.textContent = `${comm.creation_date} ${comm.username} : ${comm.comment}`;\n      scoreboard.appendChild(li);\n    });\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayComments);\n\n//# sourceURL=webpack://capston-2/./modules/displaycomment.js?");

/***/ }),

/***/ "./modules/fetchLikes.js":
/*!*******************************!*\
  !*** ./modules/fetchLikes.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _displayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayLike.js */ \"./modules/displayLike.js\");\n\n\nconst appId = 'rtnq9Qf95LeYRJqVUQcC';\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async () => {\n  await fetch(\n    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes/`,\n  )\n    .then((response) => response.json())\n    .then((json) => {\n      (0,_displayLike_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(json);\n    });\n});\n\n\n//# sourceURL=webpack://capston-2/./modules/fetchLikes.js?");

/***/ }),

/***/ "./modules/fetchdata.js":
/*!******************************!*\
  !*** ./modules/fetchdata.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _commentPopup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentPopup.js */ \"./modules/commentPopup.js\");\n/* harmony import */ var _displayCard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayCard.js */ \"./modules/displayCard.js\");\n\n\n\nconst API = 'https://api.tvmaze.com/shows';\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async () => {\n  await fetch(API)\n    .then((response) => response.json())\n    .then((json) => json)\n    .then((data) => {\n      (0,_displayCard_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data);\n      (0,_commentPopup_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data);\n    });\n});\n\n//# sourceURL=webpack://capston-2/./modules/fetchdata.js?");

/***/ }),

/***/ "./modules/updateLike.js":
/*!*******************************!*\
  !*** ./modules/updateLike.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _fetchLikes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchLikes.js */ \"./modules/fetchLikes.js\");\n\n\nconst appId = 'rtnq9Qf95LeYRJqVUQcC';\n\nconst updateLike = async (id) => {\n  await fetch(\n    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes/`,\n    {\n      method: 'POST',\n      body: JSON.stringify({\n        item_id: id,\n      }),\n      headers: {\n        'Content-type': 'application/json; charset=UTF-8',\n      },\n    },\n  ).then(() => (0,_fetchLikes_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\n  const main = document.querySelector('.main-section');\n  const len = main.childNodes.length;\n\n  for (let i = 1; i <= len; i += 1) {\n    const likebtn = document.getElementById(`icon${i}`);\n    if (likebtn !== null) {\n      likebtn.addEventListener('click', () => {\n        const uId = `item${i}`;\n        updateLike(uId);\n      });\n    }\n  }\n});\n\n\n//# sourceURL=webpack://capston-2/./modules/updateLike.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Nunito:wght@600&family=Ysabeau:wght@300&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  width: 100%;\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\nnav {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  justify-content: space-between;\\r\\n  font-family: \\\"Nunito\\\", sans-serif;\\r\\n  font-size: 20px;\\r\\n  align-items: center;\\r\\n  width: 700px;\\r\\n  padding: 2px 15%;\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n  width: 70px;\\r\\n}\\r\\n\\r\\n.nav-a {\\r\\n  text-decoration: none;\\r\\n  color: rgb(21, 118, 198);\\r\\n}\\r\\n\\r\\n.nav-a:hover {\\r\\n  color: rgb(194, 192, 192);\\r\\n}\\r\\n\\r\\n.active {\\r\\n  color: rgb(225, 104, 104);\\r\\n  border-bottom: 2.5px solid #b58989;\\r\\n}\\r\\n\\r\\n.copyright {\\r\\n  font-size: 18px;\\r\\n  font-family: \\\"Ysabeau\\\", sans-serif;\\r\\n  margin: 2px 0;\\r\\n  padding: 5px 0 4px 60px;\\r\\n  color: rgb(171, 163, 163);\\r\\n  border: 3px solid rgb(231, 231, 178);\\r\\n}\\r\\n\\r\\n/* home page css */\\r\\n\\r\\n.main-section {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  justify-content: space-evenly;\\r\\n  align-items: center;\\r\\n  flex-wrap: wrap;\\r\\n  padding: 40px 100px;\\r\\n}\\r\\n\\r\\n.card {\\r\\n  width: 280px;\\r\\n  height: auto;\\r\\n  font-family: \\\"Ysabeau\\\", sans-serif;\\r\\n  background-color: antiquewhite;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  border: 2px solid rgb(127, 123, 123);\\r\\n  border-radius: 20px;\\r\\n  margin-bottom: 40px;\\r\\n}\\r\\n\\r\\n.card-img {\\r\\n  width: 250px;\\r\\n  height: 333px;\\r\\n  border-radius: 10px;\\r\\n  margin-top: 13px;\\r\\n}\\r\\n\\r\\n.detail {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  justify-content: space-evenly;\\r\\n  align-items: center;\\r\\n  width: 95%;\\r\\n}\\r\\n\\r\\nh3 {\\r\\n  color: rgb(24, 43, 37);\\r\\n  color: #4a4545;\\r\\n  max-width: 70%;\\r\\n  word-wrap: break-word;\\r\\n}\\r\\n\\r\\n.likes {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: flex-end;\\r\\n  align-items: center;\\r\\n  color: #4a4545;\\r\\n}\\r\\n\\r\\n.count-like {\\r\\n  font-size: 15px;\\r\\n}\\r\\n\\r\\n.like-icon {\\r\\n  color: red;\\r\\n  font-size: 20px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.like-icon:hover {\\r\\n  transition: box-shadow 0.5s ease, transform 0.5s ease;\\r\\n  box-shadow: 0 0.5em 0.5em -0.4em var(--hover);\\r\\n  transform: translateY(-0.25em);\\r\\n  color: #f76969;\\r\\n}\\r\\n\\r\\n.comment-btn {\\r\\n  width: 70%;\\r\\n  height: 25px;\\r\\n  border: none;\\r\\n  border-radius: 10px;\\r\\n  background-color: azure;\\r\\n  margin: 4px 1px 8px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.comment-btn:hover,\\r\\n.comment-btn:focus {\\r\\n  transition: box-shadow 0.3s ease, transform 0.3s ease;\\r\\n  box-shadow: 0 0.5em 0.5em -0.4em var(--hover);\\r\\n  transform: translateY(-0.25em);\\r\\n  background-color: rgb(215, 255, 242);\\r\\n}\\r\\n\\r\\n#movies {\\r\\n  font-size: 15px;\\r\\n}\\r\\n\\r\\n/* .............................Pop up comment........................... */\\r\\n\\r\\nform > input,\\r\\ntextarea {\\r\\n  outline: none;\\r\\n  border: 2px solid hsla(260, 11%, 85%, 1);\\r\\n  border-radius: 4px;\\r\\n  padding: 5px;\\r\\n}\\r\\n\\r\\n.popup {\\r\\n  display: none;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  border-radius: 10px;\\r\\n  padding: 10px;\\r\\n  margin: 4em;\\r\\n  border: 1px solid lightgray;\\r\\n  height: 76vh;\\r\\n  top: 0;\\r\\n  position: fixed;\\r\\n  bottom: 0;\\r\\n  right: 0;\\r\\n  left: 0;\\r\\n  background: #fff;\\r\\n  overflow-y: scroll;\\r\\n  gap: 10px;\\r\\n}\\r\\n\\r\\n.popup.show {\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n#comment-list {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  width: 55%;\\r\\n  padding: 10px;\\r\\n  border: 1px solid lightgray;\\r\\n  border-radius: 5px;\\r\\n}\\r\\n\\r\\n.info-ms {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-content: center;\\r\\n  justify-content: center;\\r\\n  width: 100%;\\r\\n  padding: 0 0 10px 0;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n#comment-info {\\r\\n  margin: 0;\\r\\n  padding-top: 10px;\\r\\n  width: 100%;\\r\\n  align-items: center;\\r\\n  display: contents;\\r\\n}\\r\\n\\r\\n#close-btn {\\r\\n  position: fixed;\\r\\n  right: 0;\\r\\n  margin-right: 4em;\\r\\n  background: none;\\r\\n  font-size: x-large;\\r\\n  border: none;\\r\\n  top: 80px;\\r\\n}\\r\\n\\r\\n.comment-show {\\r\\n  display: none;\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  height: 100vh;\\r\\n  width: 100vw;\\r\\n  background-color: rgba(0, 0, 0, 0.8);\\r\\n}\\r\\n\\r\\n.comment-show.show {\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n#input-form input {\\r\\n  margin-bottom: 10px;\\r\\n}\\r\\n\\r\\nform {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  width: 50%;\\r\\n}\\r\\n\\r\\n#submit {\\r\\n  margin-top: 8px;\\r\\n  width: fit-content;\\r\\n  color: hsla(240, 7%, 100%, 1);\\r\\n  padding: 5px;\\r\\n  background: seagreen;\\r\\n  border: none;\\r\\n  border-radius: 5px;\\r\\n  box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.8);\\r\\n  align-self: start;\\r\\n}\\r\\n\\r\\n.sum {\\r\\n  margin: 2px;\\r\\n  font-size: 12px;\\r\\n  font-family: cursive;\\r\\n  font-weight: 900;\\r\\n  color: lightseagreen;\\r\\n}\\r\\n\\r\\n.summary-text {\\r\\n  margin: 2px;\\r\\n  font-size: 12px;\\r\\n  font-family: cursive;\\r\\n  font-weight: 900;\\r\\n  color: lightseagreen;\\r\\n}\\r\\n\\r\\n.movieName {\\r\\n  margin: 4px;\\r\\n  font-family: cursive;\\r\\n  font-size: 24px;\\r\\n}\\r\\n\\r\\n.comment-list {\\r\\n  list-style-type: none;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\n.comment-item {\\r\\n  background-color: #f1f1f1;\\r\\n  padding: 10px;\\r\\n  margin-bottom: 10px;\\r\\n  list-style-type: none; /* Add this line to remove bullet points */\\r\\n}\\r\\n\\r\\n.comment {\\r\\n  background-color: #f2f2f2;\\r\\n  padding: 10px;\\r\\n  margin-bottom: 10px;\\r\\n}\\r\\n\\r\\n.comment-date {\\r\\n  font-weight: bold;\\r\\n  font-size: 14px; /* Adjust the font size as needed */\\r\\n  color: #555;\\r\\n}\\r\\n\\r\\n.comment-username {\\r\\n  font-weight: bold;\\r\\n  font-size: 14px; /* Adjust the font size as needed */\\r\\n  color: #333;\\r\\n}\\r\\n\\r\\n.comment-text {\\r\\n  margin-top: 5px;\\r\\n  font-size: 12px; /* Adjust the font size as needed */\\r\\n  color: #777;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://capston-2/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://capston-2/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://capston-2/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://capston-2/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://capston-2/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://capston-2/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://capston-2/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://capston-2/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://capston-2/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://capston-2/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_countItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/countItem.js */ \"./modules/countItem.js\");\n/* harmony import */ var _modules_fetchLikes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/fetchLikes.js */ \"./modules/fetchLikes.js\");\n/* harmony import */ var _modules_fetchdata_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/fetchdata.js */ \"./modules/fetchdata.js\");\n/* harmony import */ var _modules_updateLike_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/updateLike.js */ \"./modules/updateLike.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\n\nconst func = async () => {\n  await (0,_modules_fetchdata_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  (0,_modules_fetchLikes_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  (0,_modules_updateLike_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  (0,_modules_countItem_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n};\n\nfunc();\n\n//# sourceURL=webpack://capston-2/./src/index.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);