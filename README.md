# Lightweight-flexible-supercharged Library for Var assignments

[![npm version](https://img.shields.io/npm/v/bootstrap.svg)](#)
[![Build Status](https://img.shields.io/travis/twbs/bootstrap/master.svg)](#)

ToVar.js is a sleek, intuitive, and powerful front-end framework for faster and easier web development.
Development files are usually bloated with `var` assignments, this simple library supercharges your web application leveraging variable assignments to a third-party module.

## Quick start
Install it from npm

    $ npm install -g tovar.js

## How to implement
```javascript
const t = require('tovar');

const myString = t('Hello World!');
const myObject = t({ value: 'Hello World!' });
let myInteger = t(42);

console.log(myString);  // Returns: 'Hello World!'
console.log(myObject);  // Returns: { value: 'Hello World!' }
console.log(myInteger); // Returns: 42

myInteger = t(0);

console.log(myInteger); // Returns: 0
```
Magic, huh?

## Bugs and feature requests

Have a bug or a feature request? [Please open a new issue](https://github.com/luigimannoni/tovar.js/issues/new).


```





















































```



## No, really. What's the deal with this package?
Probably you've heard about the [packages which broke npm](http://blog.npmjs.org/post/141577284765/kik-left-pad-and-npm) in the last days, this just a mock package to make joke of all those coders who waste 5 minutes of their time looking for a 1 liner code which probably it would take 25 seconds to write.

[A good article from David Haney](http://www.haneycodes.net/npm-left-pad-have-we-forgotten-how-to-program/) pretty much explains what I think about the current state of NPM and it's awful dependencies waterfall for each module. I can't deny how much frustrating is when a NPM dependency build fails because of this or because of that, and lately happens every 3 or 4 builds.

You're free to use this npm package if you really want, but have fun downloading the 50-or-so random declared dependencies inside the package file even if they aren't used (that's another weak point of NPM if I have to say).



