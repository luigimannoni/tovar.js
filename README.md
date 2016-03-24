# Lightweight-flexible-supercharged Library for Var assignments

[![npm version](https://img.shields.io/npm/v/bootstrap.svg)](https://www.npmjs.com/package/bootstrap)
[![Build Status](https://img.shields.io/travis/twbs/bootstrap/master.svg)](https://travis-ci.org/twbs/bootstrap)

ToVar.js is a sleek, intuitive, and powerful front-end framework for faster and easier web development.
Development files are usually bloated with `var` assignments, this simple library supercharges your web application leveraging variable assignments to a third-party module.

## Quick start
Install it from npm

    $ npm install -g tovar.js

## How to implement
```javascript
toVar = require("tovar");

var myString = toVar('Hello World!');
var myObject = toVar({ value: 'Hello World!' });
var myInteger = toVar(42);

console.log(myString);
	// Returns: "Hello World!"

console.log(myObject);
	// Returns: { value: 'Hello World!' }

console.log(myInteger);
	// Returns: 42
```

## Bugs and feature requests

Have a bug or a feature request? [Please open a new issue](https://github.com/luigimannoni/tovar.js/issues/new).
