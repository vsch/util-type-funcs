"use strict";

const each = require('jest-each');
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

// TODO: add tests

each([
])
    .describe(`arg: '%s, param: '%s'`, (arg, param, expected) => {
        test(`'${arg}'.suffixWith('${param}') === '${expected}'`, () => {
            expect(suffixWith(arg, param)).toBe(expected);
        });
    });

