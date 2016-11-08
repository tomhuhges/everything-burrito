## things i learned on this course

### clearInterval()

when using `setInterval` for regularly repeating a function, you can call clearInterval at some point inside of the callback to stop it from running.

##### usage

```js
var i = 0;
var recurringAction = setInterval(function(){
	i++;
	if ( i>10 ) {
		clearInterval(recurringAction);
	}
});
```

### getters and setters

when creating modules, you can expose variables with `get` and `set` without giving outside code/users access any other functionality contained within the module. those variable values can be retrieved or assigned without calling any other methods that are called to create them.

##### usage

module:  
```js
var module = (function(){
	var firstName = "Bob";
	var lastName = "Smith";

	return {
		get fullName(){
			return firstName + " " + lastName;
		},
		set fullName(value){
			value.split(" ");
			firstName = ( value[0] || "" );
			lastName = ( value[1] || "" );
		}
	}
})();
```

outside use:  
```js
console.log(module.fullName); // "Bob Smith"
module.fullName = "Jim Bloggs";
console.log(module.fullName); // "Jim Bloggs"
```

### facade pattern

facades abstract complicated code into a single function with a simple interface, for example a function that allows users to pass in an element, event, and callback to add an event listener. inside, the function checks to see which method is available depending on the browser version and calls the relevant one. the user doesn't have to update three separate function calls when maintaining the code. facades are typically created when dealing with multiple apis to do one job.

##### usage

```js
function addEvent(element, type, callback) {
	if ( window.addEventListener ) {
		element.addEventListener(type, callback);
	} else if ( window.attachEvent ) {
		element.attachEvent("on" + type, callback);
	} else {
		element["on" + type] = callback;
	}
}

addEvent(myelement, "click", alert("myelement was clicked!")); // calls the relevant function under the hood
```

### adapter pattern

similar, to `facade`, the adapter pattern wraps one function in another in order to make it more useable or suitable. Most often it's used to provide an interface to a function where the existing one is incompatible.

##### usage

```js
/* the adapter below lets you call a
setTimeout with seconds instead of milliseconds,
and places the timing as the first argument.
the below is probably not recommended, given
most developers will be familiar with standard
setTimeout but not your own implementation,
whether it's more pleasant to read or not. */

function setTimeoutAdapter( seconds, callback ) {
	return setTimeout(callback, seconds * 1000 );
}

setTimeoutAdapter( 5, alert("hello 5 seconds later!") );
```

### namespacing

for this exercise we split the functionality of the main file into an MVC structure, with a main PlayerJS object, and separate folders and files reflecting separate methods and properties of the PlayerJS object. The directory structure looked like this:

```
js/
└─ player/				// main functionality
   └─ index.js
   └─ controller.js
   └─ progress.js
└─ queue/				// essentially the model, and the view of the model
   └─ index.js
   └─ collection.js
   └─ collectionview.js
└─ utils				// event handlers and helper functions
   └─ index.js
   └─ dom.js
   └─ timer.js
└─ index.js
└─ app.js
```

