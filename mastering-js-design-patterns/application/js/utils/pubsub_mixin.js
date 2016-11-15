define([], function(){

	return {
		init: function () {
			this._observers = {};
			return this;
		},
		destroy: function () {
			delete this._observers;
		},
		ensureTopicExists: function( topic ) {
			if ( !this._observers.hasOwnProperty(topic) ) {
				this._observers[topic] = [];
			}
		},
		on: function( topic, callback, self ) {
			self = self || null;
			this.ensureTopicExists(topic);
			this._observers[topic].push({callback: callback, self: self});
		},
		off: function( topic, callback ) {
			this.ensureTopicExists(topic);
			for ( var i = this._observers[topic].length -1; i>=0; i-- ) {
				if ( this._observers[topic][i].callback === callback ) {
					this._observers[topic].splice(i,1);
				}
			}
		},
		trigger: function( topic ) {
			if ( this._observers.hasOwnProperty(topic)) {
				for ( var i=0; i < this._observers[topic].length; i++ ) {
					this._observers[topic][i].callback.apply(this._observers[topic][i].self, Array.prototype.slice.call(arguments, 1));
				}
			}
		}
	};

});