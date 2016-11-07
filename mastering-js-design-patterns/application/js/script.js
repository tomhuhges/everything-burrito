(function(){

	var tracks = [{
		id: 1,
		title: 'Dave - Wanna Know',
		duration: 246
	}, {
		id: 2,
		title: 'Yung Lean - AF1s',
		duration: 272
	}];

	var tracksContainer = document.getElementById("tracks");

	var i, row, col1, col2, col3, col4, button1icon, button1, button2icon, button2;

	for ( i=0; i<tracks.length; i++ ) {
		row = tracksContainer.insertRow(i);
		col1 = row.insertCell(0);
		col2 = row.insertCell(1);
		col3 = row.insertCell(2);
		col4 = row.insertCell(3);

		col1.innerHTML = tracks[i].id;
		col2.innerHTML = tracks[i].title;
		col3.innerHTML = tracks[i].duration;

		button1icon = document.createElement('span');
		button1icon.className = 'glyphicon glyphicon-remove';
		button1 = document.createElement('button');
		button1.className = 'btn btn-xs btn-danger';
		button1.appendChild(button1icon);
		col4.appendChild(button1);

		button2icon = document.createElement('span');
		button2icon.className = 'glyphicon glyphicon-play';
		button2 = document.createElement('button');
		button2.className = 'btn btn-xs btn-primary';
		button2.appendChild(button2icon);
		col4.appendChild(button2);
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
			playerState.interval = setInterval(function(){
				playerState.progress += 0.5;
	
				if ( playerState.progress <= playerState.track.duration ) {
					playerProgressBar.progress = playerState.progress / playerState.track.duration;
				} else {
					clearInterval(playerState.interval);
					playerState.interval = null;
					playerState.progress = 0;
	
					playNextTrack();
				}
			}, 500);
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
	
		playerButtonPlay.addEventListener('click', function(e){
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
	setTimeout(function(){
		playerController.pause();
	}, 2000);

})();