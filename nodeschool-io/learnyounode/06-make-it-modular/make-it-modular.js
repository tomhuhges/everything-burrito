var ls = require('./make-it-modular-module.js');

var dir = process.argv[2];
var ext = process.argv[3];

ls(dir, ext, function(err, files){

	if (err) throw err;

	files.forEach(function(file){
		console.log(file);
	});
});