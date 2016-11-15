define([
	'tracks/controller'
	],

	function( TracksController ) {

		var tracks = [];

		tracks.push( new TracksController({
			id: 1,
			title: 'Dave - Wanna Know',
			duration: 20
		}));
		tracks.push( new TracksController({
			id: 2,
			title: 'Yung Lean - AF1s',
			duration: 20
		}));
		tracks.push( new TracksController({
			id: 3,
			title: '21 Savage - No Heart',
			duration: 10
		}));

		return tracks;

});