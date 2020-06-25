"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.dispatch = exports.getStore = exports.initStore = exports.updateStore = void 0;
var createReducers = function (options) {
    window.appStoreReducers = __assign({}, options.reducers);
};
exports.updateStore = function (action) {
    for (var _i = 0, _a = Object.entries(window.appStoreReducers); _i < _a.length; _i++) {
        var _b = _a[_i], reducerName = _b[0], reducerMethod = _b[1];
        window.appStore[reducerName] = reducerMethod(window.appStore[reducerName], action);
    }
};
exports.initStore = function (options) {
    window.appStore = {};
    createReducers(options);
    exports.updateStore();
};
exports.getStore = function () {
    return window.appStore;
};
exports.dispatch = function (action) {
    exports.updateStore(action);
};
