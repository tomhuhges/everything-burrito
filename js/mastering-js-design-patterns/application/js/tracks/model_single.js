define([
	'tracks/model_track',
	'utils/util'
	], 

	function(TrackModel, Utils) {

		var SingleModel = Object.create(TrackModel);

		SingleModel.toJSON = function() {
			var data = Utils.clone(this.attributes);
			data.title = '[' + data.year + '] ' + data.name;
			return data;
		}

		return SingleModel;

	})