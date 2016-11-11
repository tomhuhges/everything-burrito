define([], function(){

	var observers = {};

	function ensureTopicExists( topic ) {
		if ( !observers.hasOwnProperty(topic) ) {
			observers[topic] = [];
		}
	}

	return {
		on: function( topic, callback, self ) {
			self = self || null;
			ensureTopicExists(topic);
			observers[topic].push({callback: callback, this: self});
		},
		off: function( topic, callback ) {
			ensureTopicExists(topic);
			for ( var i = observers[topic].length -1; i>=0; i-- ) {
				if ( observers[topic][i].callback === callback ) {
					observers[topic].splice(i,1);
				}
			}
		},
		trigger: function( topic ) {
			if ( observers.hasOwnProperty(topic)) {
				for ( var i=0; i < observers[topic].length; i++ ) {
					observers[topic][i].callback.apply(observers[topic][i].this, Array.prototype.slice.call(arguments, 1));
				}
			}
		}
	};

});