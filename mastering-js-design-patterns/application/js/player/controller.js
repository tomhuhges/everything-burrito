PlayerJS.player.controller = (function() {
	
	var playerTitle = document.getElementById("player-title"),
		playerProgressBar = PlayerJS.player.progress,
		playerButtonPlay = document.getElementById('player-button-play'),
		playerState = {
			track: null,
			isPlaying: false,
			progress: 0,
			interval: null
		},
		tracks = PlayerJS.queue.collection;

	function playTrack(track){
		// if track is already playing, do nothing
		if ( track === playerState.track && playerState.isPlaying === true ) {
			return false;
		}

		if ( track !== playerState.track ) {
			playerState.track = track;
			playerTitle.innerHTML = track.title;
			playerProgressBar.progress = 0;
		}

		playerState.isPlaying = true;
		playerProgressBar.progress = playerState.progress / playerState.track.duration;
		playerState.interval = PlayerJS.utils.Timer.setInterval(0.5, function(){
			playerState.progress += 0.5;

			if ( playerState.progress <= playerState.track.duration ) {
				playerProgressBar.progress = playerState.progress / playerState.track.duration;
			} else {
				clearInterval(playerState.interval);
				playerState.interval = null;
				playerState.progress = 0;

				playNextTrack();
			}
		});
	}

	function playNextTrack() {
		for ( var i=0; i<tracks.length; i++ ) {
			if ( tracks[i] === playerState.track ) {
				if ( i < tracks.length -1) {
					playTrack(tracks[i+1]);
				}
			}
		}
	}

	function pauseTrack() {
		if ( !playerState.isPlaying ) return false;

		playerState.isPlaying = false;
		clearInterval(playerState.interval);
		playerState.interval = 0;
	}

	PlayerJS.utils.D$.on(playerButtonPlay, 'click', function(e){
		e.preventDefault();
		if (playerState.isPlaying) {
			pauseTrack();
		} else {
			playTrack(playerState.track || tracks[0]);
		}
	});

	return {
		play: function(){
			playTrack(playerState.track || tracks[0]);
		},
		pause: function(){
			pauseTrack();
		}
	};

})();