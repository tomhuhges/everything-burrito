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

		tracks.push(album5);

		function TracksIterator() {
			this.init();
		}

		TracksIterator.prototype.init = function() {
			this.currentIndex = -1;
		};

		TracksIterator.prototype.hasNext = function() {
			return this.currentIndex + 1 < tracks.length;
		};

		TracksIterator.prototype.next = function() {
			this.currentIndex++;
			return this.current();
		};

		TracksIterator.prototype.current = function() {
			if (this.currentIndex < tracks.length) {
				return {
					value: tracks[this.currentIndex],
					done: false
				}
			} else {
				return {
					value: undefined,
					done: true
				}
			}
		};

		TracksIterator.prototype.reset = function() {
			this.currentIndex = -1;
		};

		TracksIterator.prototype.resetById = function(id) {
			for (var i=0; i<tracks.length; i++) {
				if (tracks[i].model.get('id') == id) {
					tracks[i].destroy();
					tracks.splice(i, 1);

					if ( i < this.currentIndex ) {
						this.currentIndex -= 1;
					}
					break;
				}
			}
		};

		return function () {
			return new TracksIterator();
		}




});