define([
	'tracks/controller',
	'utils/iterator_mixin',
	'utils/util'
	],

	function( TracksController, IteratorMixin, Utils ) {

		function TracksIterator () {
			this.init();
		}

		Utils.mixFromTo(IteratorMixin, TracksIterator.prototype);

		var tracksCollection = new TracksIterator();

		tracksCollection.addChild( new TracksController('track', {
			id: 1,
			title: 'Dave - Wanna Know',
			duration: 20
		}));
		tracksCollection.addChild( new TracksController('track', {
			id: 2,
			title: 'Yung Lean - AF1s',
			duration: 20
		}));
		tracksCollection.addChild( new TracksController('track', {
			id: 3,
			title: '21 Savage - No Heart',
			duration: 10
		}));

		tracksCollection.addChild( new TracksController('single', {
			id: 4,
			name: 'single track',
			duration: 15,
			year: 2016
		}));

		var album5 = new TracksController('album', {
			id: 5,
			albumYear: 2017,
			albumTitle: 'album' 
		});

		album5.addChild(new TracksController('track', {
			id: 6,
			title: 'nested track',
			duration: 20
		}))

		var subAlbum7 = new TracksController('album', {
			id: 7,
			albumYear: 1953,
			albumTitle: 'subalbum'
		});

		subAlbum7.addChild(new TracksController('track', {
			id: 8,
			title: 'sub nested track',
			duration: 10
		}));

		album5.addChild(subAlbum7);

		tracksCollection.addChild(album5);

		return function () {
			return tracksCollection;
		}




});