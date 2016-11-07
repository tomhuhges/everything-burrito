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
})
```

### getters and setters

when creating modules, you can expose variables with `get` and `set` without giving outside code/users access any other functionality contained within the module. those variable values can be retrieved or assigned without 

##### usage

module:  
```js
var module = (function(){
	var moduleSetting = "Bob";  
	// probably do more interesting stuff with moduleSetting  
	return {
		get setting(){
			return moduleSetting
		},
		set setting(value){
			moduleSetting = value;
		}
	}
})();
```

outside use:  
```js
console.log(module.setting); // "Bob"
module.setting = "Jim";
console.log(module.setting); // "Jim"
```