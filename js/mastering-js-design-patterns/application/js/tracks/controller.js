define([
	'tracks/model_factory',
	'tracks/view',
	'utils/pubsub'
	],

	function( ModelFactory, TrackView, PubSub ) {

		function TrackController( type, data ) {
			this.model = ModelFactory(type, data);
			this.view = new TrackView(this.onEvent.bind(this));
			this.hookGlobalEvents();
		}

		TrackController.prototype.hookGlobalEvents = function() {
			this._onPlayerPlay = function(track){
				if ( track.id === this.model.get('id') ){
					this.model.set('isActive', true);
				} else {
					this.model.set('isActive', false);
				}
			}

			PubSub.on("player:play", this._onPlayerPlay, this);
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
				PubSub.trigger("request:queue:play", this.model.toJSON());
			} else if ( action === "input" ) {
				this.model.set('title', value);
			} else if ( action === "remove" ) {
				PubSub.trigger("request:queue:remove", this.model.toJSON())
			}
		};

		TrackController.prototype.getModelData = function() {
			var data = this.model.toJSON();
			data.duration = Math.floor(data.duration / 60) + ":" + ("0" + data.duration % 60).slice(-2);
			return data;
		};

		TrackController.prototype.destroy = function() {
			this.view.destroy();
			PubSub.off("player:play", this._onPlayerPlay, this);
		};

		return TrackController;

	});