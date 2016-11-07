## things i learned on this course

### clearInterval()

when using `setInterval` for regularly repeating a function, you can call clearInterval at some point inside of the callback to stop it from running.

#####usage

```js
var i = 0;
var recurringAction = setInterval(function(){
	i++;
	if ( i>10 ) {
		clearInterval(recurringAction);
}
})
```