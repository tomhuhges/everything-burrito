(function(){

	var tracks = [{
		id: 1,
		title: 'Dave - Wanna Know',
		duration: 246
	}, {
		id: 2,
		title: 'Yung Lean - AF1s',
		duration: 272
	}, {
		id: 3,
		title: '21 Savage - No Heart',
		duration: 142
	}];

	var tracksContainer = document.getElementById("tracks");

	var i, row, col1, col2, col3, col4, button1icon, button1, button2icon, button2;

	for ( i=0; i<tracks.length; i++ ) {
		row = D$.create('tr', {parent: tracksContainer});
		col1 = D$.create('td', {parent: row, text: tracks[i].id});
		col2 = D$.create('td', {parent: row, text: tracks[i].title});
		col3 = D$.create('td', {parent: row, text: tracks[i].duration});
		col4 = D$.create('td', {parent: row});

		button1 = D$.create('button', {parent: col4, className: 'btn btn-xs btn-danger'});
		D$.create('span', {parent: button1, className: 'glyphicon glyphicon-remove'});

		button2 = D$.create('button', {parent: col4, className: 'btn btn-xs btn-primary'});
		D$.create('span', {parent: button2, className: 'glyphicon glyphicon-play'});
	}

	var playerProgressBar = (function(){
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

	})();

	var playerController = (function() {
		var playerTitle = document.getElementById("player-title"),
			playerButtonPlay = document.getElementById('player-button-play'),
			playerState = {
				track: null,
				isPlaying: false,
				progress: 0,
				interval: null
			};
	
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
			playerState.interval = Timer.setInterval(0.5, function(){
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
	
		D$.on(playerButtonPlay, 'click', function(e){
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

	playerController.play();
	Timer.setTimeout(2, function(){
		playerController.pause();
	});

})();