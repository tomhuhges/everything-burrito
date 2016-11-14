require.config({
	paths: {
	  es6: "../node_modules/requirejs-babel/es6",
	  babel: "../node_modules/requirejs-babel/babel-5.8.34.min"
	}
});

define([
	'queue/controller',
	'player/controller',
	'header/view',
	'utils/timer',
	'utils/pubsub'
	],
	function( QueueController, PlayerController, HeaderView, Timer, PubSub ){

		var queueController = new QueueController({autoplay: true, autoload: true, autorender: true});

		Timer.setTimeout(3, function(){
			PubSub.trigger("request:player:pause");
		});
	});