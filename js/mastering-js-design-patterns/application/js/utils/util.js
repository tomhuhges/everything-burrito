define([],

	function(){

		return {
			clone: function(obj) {
				return Object.assign({}, obj);
			},
			mixFromTo: function( From, To ) {
				for ( var key in From ) {
					if ( From.hasOwnProperty(key) ) {
						To[key] = From[key]
					}
				}
			}
		};

	});