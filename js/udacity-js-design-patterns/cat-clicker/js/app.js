// model

var model = {
	data: [{
		name: "john",
		image: "https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg",
		clicks: 0
	},
	{
		name: "sandra",
		image: "http://eskipaper.com/images/bed-sweet-cat-1.jpg",
		clicks: 0
	},
	{
		name: "kevin",
		image: "http://nextranks.com/data_images/cats/oriental-cat/oriental-cat-06.jpg",
		clicks: 0
	},
	{
		name: "jayden",
		image: "http://stuffpoint.com/cats/image/76353-cats-sweet-cat.jpg",
		clicks: 0
	},
	{
		name: "marie-celeste",
		image: "https://s-media-cache-ak0.pinimg.com/originals/a5/2f/07/a52f07c4de7636c68dafa26d478229e8.jpg",
		clicks: 0
	}]
};

// controller

var controller = {
	getCats: function(){
		return model.data;
	},
	currentCat: null,
	getCurrentCat: function() {
		return model.data[this.currentCat];
	},
	adminVisible: false,
	toggleAdmin: function(){
		adminView.admin.style = this.adminVisibile ? "display:none" : "display:flex";
		this.adminVisibile = !this.adminVisibile;
	},
	closeAdmin: function(){
		adminView.admin.style = "display:none";
		this.adminVisibile = false;
	},
	bindEvents: function(){
		var self = this;
		listView.catsList.addEventListener('click', function(e){
			var i = e.target.dataset.id;
			if ( i ) {
				self.currentCat = +i;
				profileView.render();
				adminView.render();
				self.closeAdmin();
			}
		});
		profileView.profile.addEventListener('click', function(e){
			if ( e.target.tagName.toLowerCase() === 'img' ) {
				var cat = self.getCurrentCat();
				cat.clicks++;
				profileView.render();
				adminView.render();
			} else if ( e.target.id === 'edit' ) {
				self.toggleAdmin();
				profileView.render();
				adminView.render();
			}
		});
		adminView.admin.addEventListener('click', function(e){
			if ( e.target.id === 'save' ) {

				var cat = self.getCurrentCat();

				cat.name = adminView.nameField.value;
				cat.image = adminView.imgField.value;
				cat.clicks = adminView.clicksField.value;

				self.closeAdmin();
				listView.render();
				profileView.render();

			} else if ( e.target.id === 'cancel' ) {
				self.closeAdmin();
				profileView.render();
			}
		});
	},
	init: function(){
		listView.init();
		profileView.init();
		adminView.init();
		this.bindEvents();
	}
};

// views

var listView = {
	init: function(){
		this.catsList = document.querySelector("ul");
		this.render();
	},
	render: function(){

		this.catsList.innerHTML = "";

		var cats = controller.getCats();

		cats.forEach(function(cat, i){

			// create li
			var item = document.createElement("li");
				item.id = cat.name;
				item.dataset.id = i;
				item.textContent = cat.name;

			//add to ul
			this.catsList.appendChild(item);

		}, this);
	}
};

var profileView = {
	init: function(){
		this.profile = document.getElementById("profile");
		this.render();
	},
	render: function(){

		var cat = controller.getCurrentCat();
		if ( cat === undefined ) profileView.profile.innerHTML =
			"<div>" +
				"<p class='empty-state'>Click a name to see sum cat stats</p>" +
			"</div>";

		else {

			// add edit button
			var edit = document.createElement("p");
				edit.id = "edit";
				edit.textContent = "edit cat";

			// add title
			var title = document.createElement("p");
				title.className = "title";
				title.textContent = cat.name + " ";

			// // add img
			var image = document.createElement("img");
				image.setAttribute("src", cat.image);
			

			// add score
			var score = document.createElement("p");
				score.className = "score";
				score.textContent = "score: " + cat.clicks;
			
			this.profile.innerHTML = "";
			this.profile.appendChild(edit);
			this.profile.appendChild(title);
			this.profile.appendChild(image);
			this.profile.appendChild(score);

		}
	}
};

var adminView = {
	init: function(){
		this.admin = document.getElementById("admin");
		this.admin.style = "display:none";
		this.nameField = document.getElementById("name");
		this.imgField = document.getElementById("img-url");
		this.clicksField = document.getElementById("clicks");
	},
	render: function() {

		var cat = controller.getCurrentCat();

		this.nameField.value = cat.name;
		this.imgField.value = cat.image;
		this.clicksField.value = cat.clicks;
	}
};

controller.init();