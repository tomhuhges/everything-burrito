define([
	'tracks/model',
	'tracks/view',
	'utils/pubsub'
	],

	function( TrackModel, TrackView, PubSub ) {

		function TrackController( data ) {
			this.model = TrackModel(data);
			this.view = new TrackView(this.onEvent.bind(this));
			this.hookGlobalEvents();
		}

		TrackController.prototype.hookGlobalEvents = function() {
			PubSub.on("player:play", function(track){
				if ( track.id === this.model.get('id') ){
					this.model.set('isActive', true);
				} else {
					this.model.set('isActive', false);
				}
			}, this);
		};

		TrackController.prototype.show = function() {
			this.view.render(this.getModelData());
			this.hookModelEvents();
		}

		TrackController.prototype.hookModelEvents = function() {
			var self = this;
			this.model.on("change", function(){
				self.view.render(self.getModelData());
			})
		};

		// called from view
		TrackController.prototype.onEvent = function(action, value) {
			if ( action === "play" ) {
				PubSub.trigger("request:queue:play", this.getModelData());
			} else if ( action === "input" ) {
				this.model.set('title', value);
			}
		};

		TrackController.prototype.getModelData = function() {
			var data = this.model.toJSON();
			data.duration = Math.floor(data.duration / 60) + ":" + ("0" + data.duration % 60).slice(-2);
			console.log(data);
			return data;
		};

		return TrackController;

	});