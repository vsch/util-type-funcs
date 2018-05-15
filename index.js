'use strict';

const isFunction = require('lodash.isfunction');
const isString = require('lodash.isstring');

const UNDEFINED = void 0;

module.exports.UNDEFINED = UNDEFINED;
module.exports.isString = isString;
module.exports.isFunction = isFunction;

module.exports.isValid = isValid;

function isValid(arg) {
    return arg || arg !== UNDEFINED && arg !== null && !Number.isNaN(arg);
}

module.exports.isNumber = isNumber;

function isNumber(arg) {
    return typeof arg === 'number';
}

/** @deprecated */
module.exports.hasOwnProperty = hasOwnProperty;

function hasOwnProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports.isObjectLike = isObjectLike;

function isObjectLike(param) {
    return !!param && typeof param === "object";
}

module.exports.isObject = isObject;

function isObject(param) {
    return !!param && typeof param === "object" && param.constructor === Object;
}

module.exports.isArray = isArray;

function isArray(param) {
    return isObjectLike(param) && param.constructor === Array;
}

module.exports.isNumeric = isNumeric;

function isNumeric(arg) {
    const n = !isObjectLike(arg) && Number.parseFloat(arg);
    return Number.isFinite(n) && +n === n;
}

module.exports.isNumericInteger = isNumericInteger;

function isNumericInteger(arg) {
    const n = !isObjectLike(arg) && Number.parseFloat(arg);
    return Number.isInteger(n) && +n === n;
}

module.exports.toNumberOrDefault = toNumberOrDefault;

function toNumberOrDefault(arg, defaultVal) {
    const n = !isObjectLike(arg) && Number.parseFloat(arg);
    return Number.isFinite(n) && +n === n ? n : defaultVal;
}

/**
 * Return arg or its numeric value if it is numeric
 * @param arg
 * @return {*|number}
 */
module.exports.toNumber = toNumber;

function toNumber(arg) {
    return toNumberOrDefault(arg, arg);
}

module.exports.toIntegerOrDefault = toIntegerOrDefault;

function toIntegerOrDefault(arg, defaultVal) {
    const n = !isObjectLike(arg) && Number.parseFloat(arg);
    return Number.isInteger(n) && +n === n ? n : defaultVal;
}

module.exports.toInteger = toInteger;

function toInteger(arg) {
    return toIntegerOrDefault(arg, arg);
}

module.exports.toArrayIndexOrDefault = toArrayIndexOrDefault;

function toArrayIndexOrDefault(arg, defaultVal) {
    const n = !isObjectLike(arg) && Number.parseFloat(arg);
    return Number.isInteger(n) && +n === n && n >= 0 ? n : defaultVal;
}

module.exports.isArrayIndex = isArrayIndex;

function isArrayIndex(arg) {
    return toArrayIndexOrDefault(arg) !== UNDEFINED;
}

module.exports.toArrayIndex = toArrayIndex;

function toArrayIndex(arg) {
    return toArrayIndexOrDefault(arg, arg);
}

module.exports.isUndefined = isUndefined;

function isUndefined(arg) {
    return arg === void 0;
}

module.exports.isNull = isNull;

function isNull(arg) {
    return arg === null;
}

module.exports.isNullOrUndefined = isNullOrUndefined;

function isNullOrUndefined(arg) {
    return arg === null || arg === void 0;
}

module.exports.firstDefined = firstDefined;

function firstDefined() {
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] !== void 0) {
            return arguments[i];
        }
    }
}

module.exports.firstValid = firstValid;

function firstValid() {
    let lastDefined;
    for (let i = 0; i < arguments.length; i++) {
        let arg = arguments[i];
        if (isValid(arg)) {
            return arg;
        } else if (arg !== UNDEFINED) {
            lastDefined = arg;
        }
    }
    return lastDefined;
}

module.exports.forAllPrototypes = forAllPrototypes;

/**
 * @this  {constructor}   constructor
 * @param callback      function(prototype) called for each prototype in the chain
 */
function forAllPrototypes(callback) {
    if (this) {
        let prototype = this.prototype;
        while (prototype) {
            callback(prototype);
            prototype = Object.getPrototypeOf(prototype);
        }
    }
}

module.exports.callPrototypeChainDown = callPrototypeChainDown;

/**
 * Call method in prototype chain in down chain order
 *
 * @this  {Model}   instance model
 * @param methodName
 */
function callPrototypeChainDown(methodName) {
    const methods = [];
    forAllPrototypes.call(this.constructor, prototype => {
        if (prototype.hasOwnProperty(methodName)) {
            methods.push(prototype[methodName]);
        }
    });

    const args = Array.prototype.slice.call(arguments, 1);
    let i = methods.length;
    while (i--) {
        const method = methods[i];
        method.apply(this, args);
    }
}

module.exports.callPrototypeChainUp = callPrototypeChainUp;

/**
 * Call method in prototype chain in up chain order
 *
 * @this  {Model}   instance model
 * @param methodName
 */
function callPrototypeChainUp(methodName) {
    const args = Array.prototype.slice.call(arguments, 1);
    forAllPrototypes.call(this.constructor, prototype => {
        if (prototype.hasOwnProperty(methodName)) {
            prototype[methodName].apply(this, args);
        }
    });
}

module.exports.extend = extend;

function extend(other, add) {
    if (!add || !isObjectLike(add)) return other;

    let keys = Object.keys(add);
    let i = keys.length;
    while (i--) {
        const key = keys[i];
        other[key] = add[key];
    }
    return other;
}

/*
const utilTypes = require('util-type-funcs');
const isString = utilTypes.isString;
const isFunction = utilTypes.isFunction;
const isValid = utilTypes.isValid;
const isNumber = utilTypes.isNumber;
const extend = utilTypes.extend;
const hasOwnProperty = utilTypes.hasOwnProperty;
const isObjectLike = utilTypes.isObjectLike;
const isArray = utilTypes.isArray;
const isNumeric = utilTypes.isNumeric;
const isNumericInteger = utilTypes.isNumericInteger;
const toNumberOrDefault = utilTypes.toNumberOrDefault;
const toNumber = utilTypes.toNumber;
const toIntegerOrDefault = utilTypes.toIntegerOrDefault;
const toInteger = utilTypes.toInteger;
const toArrayIndexOrDefault = utilTypes.toArrayIndexOrDefault;
const isArrayIndex = utilTypes.isArrayIndex;
const toArrayIndex = utilTypes.toArrayIndex;
const isUndefined = utilTypes.isUndefined;
const isNull = utilTypes.isNull;
const isNullOrUndefined = utilTypes.isNullOrUndefined;
const firstDefined = utilTypes.firstDefined;
const firstValid = utilTypes.firstValid;
const forAllPrototypes = utilTypes.forAllPrototypes;
const callPrototypeChainDown = utilTypes.callPrototypeChainDown;
const callPrototypeChainUp = utilTypes.callPrototypeChainUp;
*/
