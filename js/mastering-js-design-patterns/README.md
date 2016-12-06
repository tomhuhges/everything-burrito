## things i learned on this course

- [clearInterval()](#clearinterval)
- [getters and setters](#getters-and-setters)
- [facade pattern](#facade-pattern)
- [adapter pattern](#adapter-pattern)
- [namespacing](#namespacing)
- [amd/require.js](#amdrequirejs)
- [pubsub pattern](#pubsub-pattern)
- [prototypal inheritance](#prototypal-inheritance)
- [mixins pattern](#mixins-pattern)
- [mvc / mvp / mvvc](#mvc-mvp-mvvc)
- [factory pattern](#factory-pattern)

----

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

----

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

----

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

----

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

----

### namespacing

for this exercise we split the functionality of the main file into a kind of MVC structure, with a main PlayerJS object, and separate folders and files reflecting separate methods and properties of the PlayerJS object. The directory structure looked like this:

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
└─ utils/				// event handlers and helper functions
   └─ index.js
   └─ dom.js
   └─ timer.js
└─ index.js
└─ app.js
```

the `index.js` in each folder just set up an empty object for each namespace.

----

### AMD/Require.js

we replaced all namespaces with require.js modules. require.js seems very easy and clean but i'm aware it's been/being eclipsed by webpack so i had a brief look at the docs but didn't delve too much further.

----

### pubsub pattern

the pubsub pattern is a way to decouple modules through a module which acts as a middleman between the others. rather than having a module call lots of other module methods when a particular event occurs, it can simply call the pubsub module's 'trigger/emit' method. the pubsub module keeps a list of callbacks for each event, and fires them when the trigger is called. the pubsub module has 2 other methods, 'on' and 'off', which allow modules to subscribe or unsubscribe from events.

##### usage

```js
// simple pubsub module

var events = {}

var on = function( event, callback ) {
	if ( events.hasOwnProperty( event ) {
		events[event].push({callback: callback});
	} else {
		events[event] = [{callback: callback}];
	}
}

var off = function( event, callback ) {
	for ( var i=events.length-1; i >= 0; i-- ) {
		if ( events[event][i].callback === callback ) {
			events[event].splice(i,1);
		}
	}
}

var emit = function( event ) {
	if ( events.hasOwnProperty( event ) ) {
		for ( var i=0; i < events[event].length; i++ ) {
			events[event][i].callback();
		}
	} 
}

```

----

### prototypal inheritance

we added the pubsub pattern to the tracks and split them into individual components using a mix of constructor functions and `Object.create`. towards the end of this section, my app had a few errors when it shouldn't have. i went through each error in the console by checking the line numbers and files and finally got to a point where there were no errors. however, the tracks in the queue were duplicated. instead of reading 1,2,3 it read 3,3,3. i used the debugger to step through the track view creation and saw that each track constructor was being passed the correct data, and that was creating the correct instance in the model, but when it came to render the list, the data in the model was changed.

eventually i realised by checking the track prototype that every time the model was getting updated, the track prototype was being overwritten. looking at my code i had this in my `model.js`:

```js
return function( data ) {
	return Object.create(TrackModel.init(data));
}
```

the `init` function adds the data to an attributes property for `this`, so each time it was overwriting the track prototype's attribute property and then creating a new object with TrackModel as the prototype. this is useless because then each track object is empty, and it looks to the prototype to get the attributes, which by that point have been overwritten by the last track. to fix, i needed to be adding the data to the created object like this:

```js
return function( data ) {
	return Object.create(TrackModel).init(data);
}
```

so it was just an annoying misplaced parenthesis, but it taught me how prototypes can sometimes hide errors if they can find what they want up the prototype chain, rather than where it should be.

---

### mixin pattern

a mixin is a class containing useful, reusable methods that can be added to other objects. the methods usually provide general-use functionality that can be applicable for multiple things, and added to multiple modules.

it can used as `Object.create(Mixin)`, with Mixin acting as a prototype, or with a helper function (like underscore's `_.extend`) that adds methods from the mixin directly to an existing prototype if the object is created from a constructor (this seems like bad practice, as it directly mutates the existing protype, but seems to be used by big frameworks/libraries?) backbone + ember both have mixins for adding pubsub functionality to multiple objects.


##### usage
```js
var Mixin = {
	sayHello: function(){
		console.log('hello');
	}
}

// Object.create()
var newObj = Object.create(Mixin);
newObj.sayHello() // 'hello'

// constructor
var Obj = function() {...}
_.extend( Obj.prototype, Mixin );
var newObj2 = new Obj();
newObj2.sayHello() // 'hello'
```

----

### mvc / mvp / mvvm

**mvc** - the controller reacts to events and updates the model when data is changed via the view  
**mvp** - some controller functionality is handed off to the view. the presenter just updates the model and view  
**mvvm** - the view doesn't have any functional code at all, it just displays data. the viewmodel instead handles all events, updating both the model and the view.

----

### factory pattern

factories are useful when we need to create lots of objects that are similar but may have a few differences. in our case we created a track factory that is able to create 3 different track types - a standalone track, a single, and an album track.

##### usage

```js
// factory function
function ModelFactory(type, data) {
	var Model;

	Model = type === 'album'
	? AlbumModel

	: type === 'single'
	? SingleModel

	: type === 'track'
	? TrackModel

	: TrackModel

	return Object.create(Model).init(data)
}
```

The different models (`AlbumModel`, `SingleModel` and `TrackModel`) are defined in other modules and all have their own idiosyncracies. However, we can create any one of them with a single call:

```js
ModelFactory('album', { /* data */ })
```









