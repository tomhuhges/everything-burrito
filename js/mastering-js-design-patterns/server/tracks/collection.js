var CollectionClass = require('./collection_class'),
	tracksCollection = new CollectionClass()

tracksCollection.add({
	id: 1,
	title: 'Dave - Wanna Know',
	duration: 20
});
tracksCollection.add({
	id: 2,
	title: 'Yung Lean - AF1s',
	duration: 20
});
tracksCollection.add({
	id: 3,
	title: '21 Savage - No Heart',
	duration: 10
});

tracksCollection.add({
	id: 4,
	type: 'single',
	name: 'single track',
	duration: 15,
	year: 2016
});

tracksCollection.add({
	id: 5,
	type: 'album',
	albumYear: 2017,
	albumTitle: 'album' 
});

tracksCollection.add({
	id: 6,
	parentId: 5,
	title: 'nested track',
	duration: 20
})

tracksCollection.add({
	id: 7,
	parentId: 5,
	type: 'album',
	albumYear: 1953,
	albumTitle: 'subalbum'
});

tracksCollection.add({
	id: 8,
	parentId: 7,
	title: 'sub nested track',
	duration: 10
});

module.exports = {
	getTracksTree: function() {
		return tracksCollection.getTracksTree();
	}
}




