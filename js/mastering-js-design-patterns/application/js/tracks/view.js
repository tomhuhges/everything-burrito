define([
	'utils/dom',

	], function( D$ ) {

		function TrackView ( onEvent ) {
			this.onEvent = onEvent;
			this.isRendered = false;
			this.isEditing = false;
			this.$row = null;
		}

		TrackView.prototype.render = function(data) {

			var col2,
				col4,
				tracksContainer = document.getElementById("tracks"),
				className = data.isActive ? 'success' : '';

			if ( this.isRendered ) {
				if ( data.isActive ) {
					D$.addClass(this.$row, 'success');
				} else {
					D$.removeClass(this.$row, 'success');
				}

				D$.text(this.title, data.title);
				if (!this.isEditing) {
					D$.text(this.input, data.title);
				}

			} else {
				this.$row = D$.create('tr', {parent: tracksContainer, className: className});
				D$.create('td', {parent: this.$row, text: data.id});
				col2 = D$.create('td', {parent: this.$row});
				D$.create('td', {parent: this.$row, text: data.duration});
				col4 = D$.create('td', {parent: this.$row});

				this.renderTitle(col2, data.title);
				this.renderButtons(col4);
				this.isRendered = true;
			}
		}

		TrackView.prototype.renderTitle = function(inputContainer, text) {
			var self = this,
				button = null;

			this.title = D$.create('span', {parent: inputContainer, text: text});
			this.input = D$.create('input', {parent: inputContainer, text: text});
			button = D$.create('button', {parent: inputContainer, text: "Done editing"});

			if ( this.isEditing ) {
				D$.display(this.title, "none");
			} else {
				D$.display(this.input, "none");
				D$.display(button, "none");
			}

			D$.on(inputContainer, 'click', function(e){
				if ( e.target == button ) {
					return false;
				}
				self.isEditing = true;
				D$.display(self.title, "none");
				D$.display(self.input);
				D$.display(button);
			});

			D$.on(button, 'click', function(){
				self.isEditing = false;
				D$.display(self.title);
				D$.display(self.input, "none");
				D$.display(button, "none");
			});

			D$.on(this.input, 'keyup', function(){
				self.onEvent("input", self.input.value);
			});
		};

		TrackView.prototype.renderButtons = function(buttonsContainer) {

			var button1,
				button2,
				self = this;

			button1 = D$.create('button', {parent: buttonsContainer, className: 'btn btn-xs btn-danger'});
			D$.create('span', {parent: button1, className: 'glyphicon glyphicon-remove'});

			D$.on(button1, 'click', function(){
				self.onEvent("remove");
			});

			button2 = D$.create('button', {parent: buttonsContainer, className: 'btn btn-xs btn-primary'});
			D$.create('span', {parent: button2, className: 'glyphicon glyphicon-play'});

			D$.on(button2, 'click', function(){
				self.onEvent("play");
			});

		}

		TrackView.prototype.destroy = function() {
			this.$row.parentNode.removeChild(this.$row);
		};

		return TrackView;

	});