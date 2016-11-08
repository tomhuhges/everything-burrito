define([], function() {

	return {
		setInterval: function(interval, callback) {
		return setInterval(callback, interval * 1000);
		},
		setTimeout: function(timeout, callback) {
			return setTimeout(callback, timeout * 1000);
		}
	};

	
});