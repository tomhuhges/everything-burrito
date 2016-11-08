define([
	'utils/dom',
	'utils/pubsub'
	], function( D$, PubSub ) {

		var headerStateElement = document.getElementById('header-state'),
			headerStateElementText = document.getElementById('header-state-text'),
			headerStateElementIcon = document.getElementById('header-state-icon');

		PubSub.on('player:play', function(track){
			D$.display(headerStateElement);
			D$.text(headerStateElementText, track.title);
			D$.removeClass(headerStateElementIcon, 'glyphicon-pause');
			D$.addClass(headerStateElementIcon, 'glyphicon-play');
		});

		PubSub.on('player:pause', function(track){
			D$.removeClass(headerStateElementIcon, 'glyphicon-play');
			D$.addClass(headerStateElementIcon, 'glyphicon-pause');
		});

});