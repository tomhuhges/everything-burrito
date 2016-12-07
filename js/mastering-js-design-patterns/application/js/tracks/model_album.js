define([
	'tracks/model_track',
	'utils/util'
	], 

	function(TrackModel, Utils) {

		var AlbumModel = Object.create(TrackModel);

		AlbumModel.init = function() {
			TrackModel.init.apply(this, arguments);
			this.attributes.isPlayable = false;
			return this;
		}

		AlbumModel.toJSON = function() {
			var data = Utils.clone(this.attributes);
			data.title = '[' + data.albumYear + '][album] ' + data.albumTitle ;
			return data;
		}

		return AlbumModel;

	})