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

/***/ "./bin/create-superuser.ts":
/*!*********************************!*\
  !*** ./bin/create-superuser.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst cli_1 = __webpack_require__(/*! ../cli */ \"./cli/index.ts\");\n(() => __awaiter(void 0, void 0, void 0, function* () {\n    yield (0, cli_1.createSuperUserCli)(process.argv);\n}))();\n\n\n//# sourceURL=webpack://theo-cli/./bin/create-superuser.ts?");

/***/ }),

/***/ "./cli/create-superuser/cleanup.ts":
/*!*****************************************!*\
  !*** ./cli/create-superuser/cleanup.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.cleanUp = void 0;\nconst database_manager_1 = __importDefault(__webpack_require__(/*! ./database_manager */ \"./cli/create-superuser/database_manager.ts\"));\nconst cleanUp = () => __awaiter(void 0, void 0, void 0, function* () {\n    yield database_manager_1.default.closeConnection();\n    process.exit(1);\n});\nexports.cleanUp = cleanUp;\n\n\n//# sourceURL=webpack://theo-cli/./cli/create-superuser/cleanup.ts?");

/***/ }),

/***/ "./cli/create-superuser/database_manager.ts":
/*!**************************************************!*\
  !*** ./cli/create-superuser/database_manager.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst mongoose_1 = __importDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\nconst connectDb = (url) => {\n    return mongoose_1.default.connect(url);\n};\nconst closeConnection = () => {\n    return mongoose_1.default.connection.close();\n};\nexports[\"default\"] = { connectDb, closeConnection };\n\n\n//# sourceURL=webpack://theo-cli/./cli/create-superuser/database_manager.ts?");

/***/ }),

/***/ "./cli/create-superuser/db_operation.ts":
/*!**********************************************!*\
  !*** ./cli/create-superuser/db_operation.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.dbOperation = void 0;\nconst database_manager_1 = __importDefault(__webpack_require__(/*! ./database_manager */ \"./cli/create-superuser/database_manager.ts\"));\nconst model_1 = __importDefault(__webpack_require__(/*! ./model */ \"./cli/create-superuser/model/index.ts\"));\nconst chalk_1 = __importDefault(__webpack_require__(/*! chalk */ \"chalk\"));\nconst types_1 = __webpack_require__(/*! ./model/types */ \"./cli/create-superuser/model/types.ts\");\nconst dbOperation = (username, password) => __awaiter(void 0, void 0, void 0, function* () {\n    yield database_manager_1.default.connectDb(\"mongodb://localhost:27017/libary-project?\");\n    console.log(\"not connection\");\n    let superuser = yield model_1.default.findOne({ role: types_1.Roles.admin });\n    if (superuser) {\n        throw Error(\"Superuser already exists\");\n    }\n    console.log(`${chalk_1.default.blue(\"Creating superuser with username\")} ${chalk_1.default.yellow(username)}`);\n    superuser = yield model_1.default.create({ username, password, role: types_1.Roles.admin });\n    console.log(chalk_1.default.blue(\"Superuser created successfully\"));\n});\nexports.dbOperation = dbOperation;\n\n\n//# sourceURL=webpack://theo-cli/./cli/create-superuser/db_operation.ts?");

/***/ }),

/***/ "./cli/create-superuser/index.ts":
/*!***************************************!*\
  !*** ./cli/create-superuser/index.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.createSuperUserCli = void 0;\nconst parseCliArgument_1 = __webpack_require__(/*! ./parseCliArgument */ \"./cli/create-superuser/parseCliArgument.ts\");\nconst arg_1 = __webpack_require__(/*! arg */ \"arg\");\nconst replaceWithEnvVariables_1 = __webpack_require__(/*! ./replaceWithEnvVariables */ \"./cli/create-superuser/replaceWithEnvVariables.ts\");\nconst promptUserForMissingValues_1 = __webpack_require__(/*! ./promptUserForMissingValues */ \"./cli/create-superuser/promptUserForMissingValues.ts\");\nconst db_operation_1 = __webpack_require__(/*! ./db_operation */ \"./cli/create-superuser/db_operation.ts\");\nconst chalk_1 = __importDefault(__webpack_require__(/*! chalk */ \"chalk\"));\nconst cleanup_1 = __webpack_require__(/*! ./cleanup */ \"./cli/create-superuser/cleanup.ts\");\nconst createSuperUserCli = (args) => __awaiter(void 0, void 0, void 0, function* () {\n    let parsedArgument;\n    try {\n        parsedArgument = (0, parseCliArgument_1.parseCliArgument)(args);\n    }\n    catch (error) {\n        if (error instanceof arg_1.ArgError) {\n            console.log(error.message);\n        }\n        else {\n            console.log(\"Unknown error occured\");\n        }\n        process.exit(1);\n    }\n    parsedArgument = (0, replaceWithEnvVariables_1.replaceWithEnvVariables)(parsedArgument);\n    const promptAnswers = yield (0, promptUserForMissingValues_1.promptForMissingValues)(parsedArgument);\n    const fullOptions = Object.assign(Object.assign({}, parsedArgument), promptAnswers);\n    try {\n        yield (0, db_operation_1.dbOperation)(fullOptions.username, fullOptions.password);\n    }\n    catch (error) {\n        console.log(chalk_1.default.red(\"Creating superuser failed\"));\n    }\n    yield (0, cleanup_1.cleanUp)();\n});\nexports.createSuperUserCli = createSuperUserCli;\n\n\n//# sourceURL=webpack://theo-cli/./cli/create-superuser/index.ts?");

/***/ }),

/***/ "./cli/create-superuser/model/index.ts":
/*!*********************************************!*\
  !*** ./cli/create-superuser/model/index.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst bcryptjs_1 = __importDefault(__webpack_require__(/*! bcryptjs */ \"bcryptjs\"));\nconst types_1 = __webpack_require__(/*! ./types */ \"./cli/create-superuser/model/types.ts\");\nconst UserSchema = new mongoose_1.Schema({\n    username: {\n        type: String,\n        trim: true,\n        required: true,\n        minlength: [3, \"name must be atleast characters\"],\n        unique: true,\n    },\n    password: {\n        type: String,\n        required: true,\n        minlength: [4, \"password must be atleast 4 characters\"],\n    },\n    role: {\n        type: String,\n        enum: types_1.Roles,\n        default: types_1.Roles.user,\n    },\n}, { timestamps: true });\nUserSchema.pre(\"save\", function (next) {\n    return __awaiter(this, void 0, void 0, function* () {\n        let user = this;\n        if (!user.isModified(\"password\"))\n            return next();\n        const salt = yield bcryptjs_1.default.genSalt(10);\n        const hash = yield bcryptjs_1.default.hash(this.password, salt);\n        this.password = hash;\n        return next();\n    });\n});\nUserSchema.methods.comparePassword = function (password) {\n    return __awaiter(this, void 0, void 0, function* () {\n        const isMatch = yield bcryptjs_1.default.compare(password, this.password);\n        return isMatch;\n    });\n};\nconst User = (0, mongoose_1.model)(\"User\", UserSchema);\nexports[\"default\"] = User;\n\n\n//# sourceURL=webpack://theo-cli/./cli/create-superuser/model/index.ts?");

/***/ }),

/***/ "./cli/create-superuser/model/types.ts":
/*!*********************************************!*\
  !*** ./cli/create-superuser/model/types.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Roles = void 0;\nvar Roles;\n(function (Roles) {\n    Roles[\"admin\"] = \"admin\";\n    Roles[\"user\"] = \"user\";\n})(Roles = exports.Roles || (exports.Roles = {}));\n\n\n//# sourceURL=webpack://theo-cli/./cli/create-superuser/model/types.ts?");

/***/ }),

/***/ "./cli/create-superuser/parseCliArgument.ts":
/*!**************************************************!*\
  !*** ./cli/create-superuser/parseCliArgument.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.parseCliArgument = void 0;\nconst arg_1 = __importDefault(__webpack_require__(/*! arg */ \"arg\"));\nconst parseCliArgument = (rawArgs) => {\n    const args = (0, arg_1.default)({\n        \"--username\": String,\n        \"--password\": String,\n        \"--help\": String,\n        \"-u\": \"--username\",\n        \"-p\": \"--password\",\n        \"-h\": \"--help\",\n    }, {\n        argv: rawArgs.slice(2),\n    });\n    return {\n        password: args[\"--password\"],\n        username: args[\"--username\"],\n    };\n};\nexports.parseCliArgument = parseCliArgument;\n\n\n//# sourceURL=webpack://theo-cli/./cli/create-superuser/parseCliArgument.ts?");

/***/ }),

/***/ "./cli/create-superuser/promptUserForMissingValues.ts":
/*!************************************************************!*\
  !*** ./cli/create-superuser/promptUserForMissingValues.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.promptForMissingValues = void 0;\nconst inquirer_1 = __importDefault(__webpack_require__(/*! inquirer */ \"inquirer\"));\nconst promptForMissingValues = (options) => __awaiter(void 0, void 0, void 0, function* () {\n    const questions = [];\n    if (!options.username) {\n        questions.push({\n            name: \"username\",\n            message: \"Please provide username\",\n            type: \"input\",\n        });\n    }\n    if (!options.password) {\n        questions.push({\n            name: \"password\",\n            message: \"Please provide a password\",\n            type: \"password\",\n        });\n    }\n    return inquirer_1.default.prompt(questions);\n});\nexports.promptForMissingValues = promptForMissingValues;\n\n\n//# sourceURL=webpack://theo-cli/./cli/create-superuser/promptUserForMissingValues.ts?");

/***/ }),

/***/ "./cli/create-superuser/replaceWithEnvVariables.ts":
/*!*********************************************************!*\
  !*** ./cli/create-superuser/replaceWithEnvVariables.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.replaceWithEnvVariables = void 0;\nconst dotenv_1 = __importDefault(__webpack_require__(/*! dotenv */ \"dotenv\"));\ndotenv_1.default.config();\nconst replaceWithEnvVariables = (options) => {\n    if (!options.username) {\n        options.username = process.env.SUPERUSER_USERNAME;\n    }\n    if (!options.password) {\n        options.username = process.env.SUPERUSER_PASSWORD;\n    }\n    return options;\n};\nexports.replaceWithEnvVariables = replaceWithEnvVariables;\n\n\n//# sourceURL=webpack://theo-cli/./cli/create-superuser/replaceWithEnvVariables.ts?");

/***/ }),

/***/ "./cli/index.ts":
/*!**********************!*\
  !*** ./cli/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__exportStar(__webpack_require__(/*! ./create-superuser */ \"./cli/create-superuser/index.ts\"), exports);\n\n\n//# sourceURL=webpack://theo-cli/./cli/index.ts?");

/***/ }),

/***/ "arg":
/*!**********************!*\
  !*** external "arg" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("arg");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "chalk":
/*!************************!*\
  !*** external "chalk" ***!
  \************************/
/***/ ((module) => {

module.exports = require("chalk");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "inquirer":
/*!***************************!*\
  !*** external "inquirer" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("inquirer");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./bin/create-superuser.ts");
/******/ 	
/******/ })()
;