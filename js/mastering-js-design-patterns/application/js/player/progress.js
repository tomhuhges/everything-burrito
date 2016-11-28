define([], function(){
	
	var playerProgressElement = document.getElementById('player-progress'),
	playerProgress = 0;

	function setPlayerProgress(float){
		playerProgress = float;
		playerProgressElement.style.width = Math.round(float * 10000) / 100 + '%';
	}

	return {
		set progress(value){
			setPlayerProgress(value);
		},
		get progress() {
			return playerProgress;
		}
	};

});