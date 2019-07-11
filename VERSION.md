# Version History

[TOC]: # " "

- [0.2.10](#0210)
- [0.2.8](#028)
- [0.2.6](#026)
- [0.2.4](#024)
- [0.2.2](#022)
- [0.2.1](#021)
- [0.2.0](#020)
- [0.1.0](#010)


## 0.2.10

* Fix: update jest version

## 0.2.8

* Fix: test jest each

## 0.2.6

* Fix: update dependencies

## 0.2.4

* Add: prototype chain functions:
  * `forAllPrototypes.call(constructor, callback)` - calls callback(prototype) for all
    prototypes in the prototype chain, including constructor.prototype
  * `callPrototypeChainDown.call(instance, methodName,...args)` - calls methodName with args in
    all prototypes in the chain which have the method in own properties with `this` set to
    `instance`, calls are made in reverse prototype chain order
  * `callPrototypeChainUp.call(instance, methodName,...args)` - calls methodName with args in
    all prototypes in the chain which have the method in own properties with `this` set to
    `instance`, calls are made in prototype chain order

## 0.2.2

Deprecate: `hasOwnPropterty` function

## 0.2.1

Add: `isObject` function returning true if argument is a plain `Object`

## 0.2.0

Add: defined/null tests and firstDefined/firstValid functions

## 0.1.0

Initial release
