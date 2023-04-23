"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./Error.scss");
const Error = () => {
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: "error" }, { children: "404 - Page Not Found" })));
};
exports.default = Error;
