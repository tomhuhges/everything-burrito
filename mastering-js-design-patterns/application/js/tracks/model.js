define([
	'utils/util',
	'utils/pubsub_mixin'
	],

	function( Utils, PubSubMixin ) {

		var TrackModel = Object.create(PubSubMixin);

		TrackModel.init = function( data ){
			PubSubMixin.init.call(this);
			this.attributes = data || {};
			return this;
		}

		TrackModel.toJSON = function() {
			return Utils.clone(this.attributes)
		}

		TrackModel.has = function( attr ) {
			return this.attributes.hasOwnProperty(attr);
		}

		TrackModel.get = function( attr ) {
			if ( this.has(attr) ) {
				return this.attributes[attr];
			} else {
				return null;
			}
		}

		return function( data ) {
			return Object.create(TrackModel).init(data);
		}

	});