define([
	'tracks/model_track',
	'tracks/model_single',
	'tracks/model_album'
	],

	function( TrackModel, SingleModel, AlbumModel ){

		return function(type, data) {
			var Model;

			Model = type === 'album'
			? AlbumModel

			: type === 'single'
			? SingleModel

			: type === 'track'
			? TrackModel

			: TrackModel

			return Object.create(Model).init(data)
		}

	})