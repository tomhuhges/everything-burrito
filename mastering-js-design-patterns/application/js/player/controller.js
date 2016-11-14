define([
	'player/progress',
	'utils/dom',
	'utils/timer',
	'utils/pubsub'
	], function(PlayerProgressBar, D$, Timer, PubSub) {
	
	var playerTitle = document.getElementById("player-title"),
		playerButtonPlay = document.getElementById('player-button-play'),
		playerButtonPlayIcon = document.getElementById('player-button-play-icon'),
		playerState = {
			track: null,
			isPlaying: false,
			progress: 0,
			interval: null
		};

	function setButtonState(state) {
		D$.removeClass(playerButtonPlayIcon, 'glyphicon-play');
		D$.removeClass(playerButtonPlayIcon, 'glyphicon-pause');
		D$.addClass(playerButtonPlayIcon, 'glyphicon-' + state);
	}

	function playTrack(track){
		// if track is already playing, do nothing
		if ( track === playerState.track && playerState.isPlaying === true ) {
			return false;
		}

		if ( track !== playerState.track ) {
			playerState.track = track;
			playerTitle.innerHTML = track.title;
			PlayerProgressBar.progress = 0;
		}

		playerState.isPlaying = true;
		setButtonState('play');
		PubSub.trigger('player:play', track);
		PlayerProgressBar.progress = playerState.progress / playerState.track.duration;
		playerState.interval = Timer.setInterval(0.5, function(){
			playerState.progress += 0.5;

			if ( playerState.progress <= playerState.track.duration ) {
				PlayerProgressBar.progress = playerState.progress / playerState.track.duration;
			} else {
				clearInterval(playerState.interval);
				playerState.interval = null;
				playerState.progress = 0;

				playNextTrack();
			}
		});
	}

	function playNextTrack() {
		PubSub.trigger("request:queue:next");
	}

	function pauseTrack() {
		if ( !playerState.isPlaying ) return false;

		playerState.isPlaying = false;
		setButtonState('pause');
		PubSub.trigger('player:pause');
		clearInterval(playerState.interval);
		playerState.interval = 0;
	}

	D$.on(playerButtonPlay, 'click', function(e){
		e.preventDefault();
		if (playerState.isPlaying) {
			pauseTrack();
		} else {
			if ( playerState.track != null ) {
				playTrack(playerState.track);
			} else {
				PubSub.trigger("request:queue:next");
			}
		}
	});

	PubSub.on("request:player:play", function(trackData){
		playTrack(trackData);
	});

	PubSub.on("request:player:pause", function(){
		pauseTrack();
	});

});