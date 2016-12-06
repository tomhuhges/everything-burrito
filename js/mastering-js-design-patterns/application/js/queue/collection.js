define([
	'tracks/controller'
	],

	function( TracksController ) {

		var tracks = [];

		tracks.push( new TracksController('track', {
			id: 1,
			title: 'Dave - Wanna Know',
			duration: 20
		}));
		tracks.push( new TracksController('track', {
			id: 2,
			title: 'Yung Lean - AF1s',
			duration: 20
		}));
		tracks.push( new TracksController('track', {
			id: 3,
			title: '21 Savage - No Heart',
			duration: 10
		}));

		tracks.push( new TracksController('single', {
			id: 4,
			name: 'single track',
			duration: 15,
			year: 2016
		}));

		tracks.push( new TracksController('album', {
			id: 5,
			duration: 30,
			name: 'album track',
			albumYear: 2017,
			albumTitle: 'album'
		}));

		return tracks;

});