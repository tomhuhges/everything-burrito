<a href="https://www.youtube.com/watch?v=xDButnEa320">![everything burrito](/everything-burrito.png)</a>
*what it feels like to learn js*

# learning js

this is a syllabus of everything i either used or didnt use to learn front end js to a decent level. it's based on a hellish trello board i kept that rapidly grew out of my control. 

i've rated everything from 1-5 burritos (🌯) depending on the skill level required to understand the concepts. i've also treated ES2015 as something that should be used from the start, rather than a separate section.

----

### contents

1. the basics
2. in-built methods & objects
3. intermediate js concepts
	1. passing by value/reference
	2. recursive functions
	3. callbacks
	7. the event loop
4. advanced js concepts
	4. this
	5. prototypes
	6. closures
	8. namespacing & modules
4. bom, dom & events (aka makin' websites)
	1. bom
	2. dom
	3. events
5. object oriented js + mvc
6. tdd
7. node.js & npm
8. common.js & amd
9. gulp & webpack
10. design patterns
11. functional js
12. react & redux

----

### 1. the basics

```js

// the different data types, how they're written, and how they work.
// - values (booleans, numbers, strings)
// - operators
// - other values (null, undefined, NaN)
// - arrays
// - functions
// - objects
// - control flow (if, else if, else)
// - loops (for, while, do-while)

```

- \[mooc\] [Codecademy - Learn JavaScript](https://www.codecademy.com/learn/learn-javascript) 🌯
- \[book\] [Eloquent JS - Chs. 1-4](http://eloquentjavascript.net/01_values.html) 🌯
- \[mooc\] [FreeCodeCamp - Basic JavaScript](https://www.freecodecamp.com/challenges/comment-your-javascript-code)
- \[reference\] Babel ES2015 Features
	- [let is the new var, const](https://babeljs.io/docs/learn-es2015/#let-const) 🌯
	- [template strings](https://babeljs.io/docs/learn-es2015/#template-strings) 🌯
	- [arrow functions](https://babeljs.io/docs/learn-es2015/#arrows-and-lexical-this) 🌯
	- [default, rest, spread](https://babeljs.io/docs/learn-es2015/#default-rest-spread) 🌯🌯
- \[reference\] [conditional (ternary) operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) 🌯
- \[training\] [Codewars (8kyu & 7kyu)](https://www.codewars.com/) 🌯

----

### 2. in-built methods & objects

```js
// the most useful/interesting ones:
// - number - isNan, toFixed
// - string - split, join, toLowerCase, toUpperCase, indexOf, search, match, replace, repeat
// - array - pop/push/shift/unshift, forEach, map, filter, reduce, sort, concat, every, some, from (loads!)
// - object - hasOwnProperty, Object.create, Object.assign, Object.keys
// - function - apply, call, bind
// - math + date
```

- \[book\] [Eloquent JS - Ch. 5: Higher-Order Functions](http://eloquentjavascript.net/05_higher_order.html) 🌯🌯
- \[mooc\] [FreeCodeCamp - the rest of the course](https://www.freecodecamp.com/challenges/comment-your-javascript-code) 🌯🌯
- \[reference\] [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects) 🌯🌯
- \[training\] [Codewars (6kyu & 5kyu)](https://www.codewars.com/) 🌯🌯
- \[article\] [JavaScript’s Apply, Call, and Bind Methods are Essential for JavaScript Professionals](http://javascriptissexy.com/javascript-apply-call-and-bind-methods-are-essential-for-javascript-professionals/) 🌯🌯🌯 (requires understanding of `this`, see ch 3)

----

### 3. intermediate js concepts

1. passing by value/reference
2. recursive functions
3. callbacks
7. the event loop

----

### 4. advanced js concepts

```js
// i recommend reading the entirety of You Don't Know JS (YDKJS) by Kyle Simpson if you can
// the full book is online: https://github.com/getify/You-Dont-Know-JS
```

1. `this`
	- \[mooc\] [Udacity - Object Oriented JavaScript](https://www.udacity.com/course/object-oriented-javascript--ud015) 🌯🌯🌯 (has a good bit on `this`)
	- \[book\] [YDKJS - this & object prototypes ch 1+2](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch1.md) 🌯🌯🌯
2. prototypes & inheritance
	- \[book\] [Object-Oriented JavaScript - ch 5+6](ftp://ftp.micronet-rostov.ru/linux-support/books/programming/JavaScript/[Packt]%20-%20Object-Oriented%20JavaScript%20-%20[Stefanov].pdf) 🌯🌯🌯🌯
	- \[book\] [YDKJS - this & object prototypes ch 5](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch5.md) 🌯🌯🌯🌯
3. closures
	- \[book\] [YDKJS - scope & closures ch 5](https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch5.md) 🌯🌯🌯🌯
4. namespacing & modules

----

### 4. bom, dom & events (aka makin' websites)

1. bom
2. dom
3. events

----

### 5. object oriented js + mvc

- \[mooc\] [Watch And Code - Practical JS](https://watchandcode.com/p/practical-javascript) 🌯🌯 (make a todo app with OOJS)
- \[mooc\] [Udacity - Object Oriented JavaScript](https://www.udacity.com/course/object-oriented-javascript--ud015) 🌯🌯🌯
- \[mooc\] [Udacity - JavaScript Design Patterns](https://www.udacity.com/course/javascript-design-patterns--ud989) 🌯🌯🌯 (OOJS is technically a design pattern, hence the title of this. See ch 10 for extra design patterns)
- \[book\] [YDKJS - this & object prototypes ch 4](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch4.md) 🌯🌯🌯

----

### 6. tdd

- \[(paid) mooc\] [Watch And Code Premium - Test Driven Development](https://watchandcode.com/p/premium) 🌯🌯🌯 (just vanilla js)
- \[mooc\] [Udacity - JavaScript Testing](https://www.udacity.com/course/javascript-testing--ud549) 🌯🌯🌯 (vanilla + jasmine)

----

### 7. node.js & npm

```js
// the only things you'll really need to know about npm are that it's where modules other people have
// written are stored and you can install them on your computer like this:

npm i dependency-name

// to install locally in your project, do:

npm i -D dependency-name

// learning node at at least some level is good, even if you don't plan to use it. it'll help you understand
// npm, modules and web tooling a bit better
```

- \[mooc\] [nodeschool.io learn-you-node](https://github.com/workshopper/learnyounode) 🌯🌯🌯
- \[mooc\] [FreeCodeCamp - Backend Certificate](https://www.freecodecamp.com/challenges/use-the-javascript-console) (includes learn-you-node) 🌯🌯🌯
- \[further reading\] [node-for-beginners](https://github.com/rockbot/node-for-beginners) 🌯🌯🌯 - 🌯🌯🌯🌯🌯

----

### 8. commonjs & amd

```js
// tldr: both are ways to load modules.

// amd (see require.js) is ugly as hell, but asynchronous

	define([moduleToImport], function () {
	  return somethingToExport
	});

// commonjs (used by node.js) is synchronous as hell, but pretty

	require('./moduleToImport');
	exports.thing = somethingToExport;

// but you should use es2015 modules anyway

	import {module} from 'moduleToImport';
	export somethingToExport;
```

- \[article\] [ES6 Modules: The End of Civilization As We Know It?](https://medium.com/@brianleroux/es6-modules-amd-and-commonjs-c1acefbe6fc0#.o7t29ysim) 🌯🌯🌯🌯
- \[article\] [Addy Osmani - Writing Modular JS](https://addyosmani.com/writing-modular-js/) 🌯🌯🌯🌯

----

### 9. gulp & webpack

```js
// i learned gulp first, which i thought was useful (and fun! i recommend it!). but then i learned webpack and it is
// a great replacement for gulp. you should definitely learn webpack.
```

gulp 

- \[mooc\] [Udacity - Web Tooling & Automation](https://www.udacity.com/course/web-tooling-automation--ud892) 🌯🌯🌯

webpack  

- \[article\] [Beginner's guide to Webpack](https://medium.com/@dabit3/beginner-s-guide-to-webpack-b1f1a3638460#.rjc0btf32) 🌯🌯🌯
- \[article\] [webpack-howto](https://github.com/petehunt/webpack-howto) 🌯🌯🌯🌯
- \[book\] [SurviveJS - Become a Webpack Master](http://survivejs.com/webpack/) 🌯🌯🌯🌯

----

### 10. design patterns

```js
// MVC, OOJS and modules are actually design patterns that help keep your code maintainable.
// some other key design patterns to learn are:

// - getters & setters
// - singleton
// - pub-sub / observer
// - mixin
// - factory
// - decorator

// the resources below individually cover all of these
```

- \[(paid) mooc\] [Mastering JS Design Patterns](https://www.packtpub.com/web-development/mastering-javascript-design-patterns-practical-introduction-building-better-applicat) 🌯🌯🌯🌯
- \[book\] [Addy Osmani - Learning JavaScript Design Patterns](https://addyosmani.com/resources/essentialjsdesignpatterns/book/) 🌯🌯🌯🌯🌯

----

### 11. functional js

- currying
- monads

----

### 12. react & redux

- \[mooc\] [Codeacademy - Learn ReactJS: Part I](https://www.codecademy.com/learn/react-101) 🌯🌯🌯
- \[book\] [SurviveJS - Become a React Master](http://survivejs.com/react/) 🌯🌯🌯🌯🌯
- \[mooc\] [React Fundamentals](https://egghead.io/courses/react-fundamentals) 🌯🌯🌯🌯🌯
- \[mooc\] [Codeacademy - Learn ReactJS: Part II](https://www.codecademy.com/learn/react-102) 🌯🌯🌯🌯🌯





