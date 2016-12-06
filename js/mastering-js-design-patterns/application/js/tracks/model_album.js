define([
	'tracks/model_track',
	'utils/util'
	], 

	function(TrackModel, Utils) {

		var AlbumModel = Object.create(TrackModel);

		AlbumModel.toJSON = function() {
			var data = Utils.clone(this.attributes);
			data.title = '[' + data.albumYear + '][album] ' + data.albumTitle ;
			return data;
		}

		return AlbumModel;

	})