var color = "red";

var myDiv = document.getElementById('myDiv');

myDiv.style.background = "black";
myDiv.style.color = "white";

var world = "world";

function sayhello () {
	var hello = "hello ";

	function inner () {
		var extra = "there is more";
		console.log(hello + world + extra);
	}
	inner();
}

sayhello ();

console.log("world outside sayhello(): ", world);
//console.log("hello outside sayhello(): ", hello);

var mycolor = "blue";
console.log("mycolor before myfunc()", mycolor);

function myfunc() {
	var mycolor = "yellow"
	var mynumber = 42;
	console.log("mycolor inside myfunc()", mycolor);

} 

myfunc();
console.log("mycolor after myfunc()", mycolor);
console.log("mynumber after myfunc()", mynumber);