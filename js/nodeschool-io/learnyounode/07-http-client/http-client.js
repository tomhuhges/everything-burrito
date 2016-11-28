var http = require("http");

var geturl = process.argv[2];

http.get(geturl, function callback (response) {

	response.setEncoding('utf8').on("data", function (data) { 
		console.log(data);
	 });

});

