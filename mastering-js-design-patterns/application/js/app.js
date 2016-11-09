require.config({
	paths: {
	  es6: "../node_modules/requirejs-babel/es6",
	  babel: "../node_modules/requirejs-babel/babel-5.8.34.min"
	}
});

define([
	'queue/collectionview',
	'player/controller',
	'header/view',
	'utils/timer',
	'es6!./utils/time'
	],
	function(CollectionView, PlayerController, HeaderView, Timer, Time){

		Time.logTime();
		CollectionView.render();
		PlayerController.play();

		Timer.setTimeout(2, function(){
			PlayerController.pause();
		});
	});