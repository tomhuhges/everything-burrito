var args = process.argv;
var sum = 0;
for (var i=2;i<args.length;i++) {
	sum += +args[i];
}

console.log(sum);