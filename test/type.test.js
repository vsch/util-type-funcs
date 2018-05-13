"use strict";

const jestEach = require('jest-each');
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

jestEach([
    [undefined, 'undefined', false],
    [null, 'null', false],
    [NaN, 'NaN', false],
    ["test", '"test"', false],
    [true, 'true', false],
    [false, 'false', false],
    [0, '0', true],
    [5, '5', true],
    [-5, '-5', true],
    [-5.3, '-5', true],
    ['0', '"0"', true],
    ['5', '"5"', true],
    ['5.3', '"5"', true],
    ['-1', '"-1"', true],
    ['-5', '"-5"', true],
    ['-5.3', '"-5.3"', true],
])
    .describe('isNumeric', (value, valueText, expectedVal) => {
        test(`isNumeric(${valueText}) === ${expectedVal}`, () => {
            expect(isNumeric(value)).toBe(expectedVal);
        });
    });

jestEach([
    [undefined, 'undefined', undefined],
    [null, 'null', null],
    [NaN, 'NaN', NaN],
    ["test", '"test"', "test"],
    [true, 'true', true],
    [false, 'false', false],
    [0, '0', 0],
    [5, '5', 5],
    [-5, '-5', -5],
    [-5.3, '-5', -5.3],
    ['0', '"0"', 0],
    ['5', '"5"', 5],
    ['5.3', '"5"', 5.3],
    ['-1', '"-1"', -1],
    ['-5', '"-5"', -5],
    ['-5.3', '"-5.3"', -5.3],
])
    .describe('toNumber', (value, valueText, expectedVal) => {
        test(`toNumber(${valueText}) === ${expectedVal}`, () => {
            expect(toNumber(value)).toBe(expectedVal);
        });
    });

jestEach([
    [undefined, 'undefined', undefined],
    [null, 'null', null],
    [NaN, 'NaN', NaN],
    ["test", '"test"', "test"],
    [true, 'true', true],
    [false, 'false', false],
    [0, '0', 0],
    [5, '5', 5],
    [-5, '-5', -5],
    [-5.3, '-5', -5.3],
    ['0', '"0"', 0],
    ['5', '"5"', 5],
    ['5.3', '"5"', 5.3],
    ['-1', '"-1"', -1],
    ['-5', '"-5"', -5],
    ['-5.3', '"-5.3"', -5.3],
])
    .describe('toNumber', (value, valueText, expectedVal) => {
        test(`toNumber(${valueText}) === ${expectedVal}`, () => {
            expect(toNumber(value)).toBe(expectedVal);
        });
    });
