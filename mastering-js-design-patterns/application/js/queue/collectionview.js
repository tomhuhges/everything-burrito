define([
	'queue/collection',
	'utils/dom'
	],
	
	function(tracks, D$){

		var tracksContainer = document.getElementById("tracks");

		function render(){

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
		}

		return { render: render };

});