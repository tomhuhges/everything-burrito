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

when creating modules, you can expose variables with `get` and `set` without giving outside code/users access any other functionality contained within the module. those variable values can be retrieved or assigned without calling any other methods that are called to create them.

##### usage

module:  
```js
var module = (function(){
	var firstName = "Bob";
	var lastName = "Smith";    
	return {
		get fullName(){
			return moduleFullName
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