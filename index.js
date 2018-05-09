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

module.exports.hasOwnProperty = hasOwnProperty;

function hasOwnProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports.isObjectLike = isObjectLike;

function isObjectLike(param) {
    return !!param && typeof param === "object";
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
*/
