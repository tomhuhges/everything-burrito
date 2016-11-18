define([], function(){

	var elementHandlers = {
		tr: function(parent){
			if ( parent != null ) return parent.insertRow();
			else return this['*'](parent, 'tr');
		},
		td: function(parent){
			if ( parent != null ) return parent.insertCell();
			else return this['*'](parent, 'td');
		},
		text: function(parent){
			var textNode = document.createTextNode("This is some dummy text");
			if ( parent != null ) return parent.appendChild(textNode);
			return textNode;
		},
		"*": function(parent, elementName) {
			var element = document.createElement(elementName);
			if ( parent != null ) parent.appendChild(element);
			return element;
		}
	};

	function createElement(elementName, options) {

		var element = null;
		options = options || {};

		if ( elementHandlers.hasOwnProperty(elementName) ) {
			element = elementHandlers[elementName](options.parent);
		} else {
			element = elementHandlers['*'](options.parent, elementName);
		}

		decorateElement(element, options);

		return element;

	}

	function decorateElement(element, options) {
		options = options || {};

		if ( options.text != null ) {
			setTextToElement(element, options.text);
		}
		if ( options.className != null ) {
			element.className = options.className;
		}
	}

	function setTextToElement( element, text ) {
		//modern browsers
		if ( element.nodeName === "INPUT" ) {
			element.value = text;
		} else if ( element.textContent != null ) {
			element.textContent = text;
		} else {
			element.innerHTML = text;
		}
	}

	function addClassName( element, className ) {
		var classes = element.className.split(" ");
		if (!~classes.indexOf(className)) {
			classes.push(className);
		}
		element.className = classes.join(" ");
	}

	function removeClassName( element, className ) {
		var classes = element.className.split(" ");
		if (~classes.indexOf(className)) {
			classes.splice(classes.indexOf(className), 1);
		}
		element.className = classes.join(" ");
	}

	function display( element, state ) {
		state = state || null;
		element.style.display = state;
	}

	function addEventListener( element, type, callback ) {
		if ( window.addEventListener ) {
			element.addEventListener(type, callback);
		} else if ( window.attachEvent ) {
			element.attachEvent('on'+type, callback);
		} else {
			element['on' + type] = callback;
		}
	}

	function removeEventListener( element, type, callback ) {
		if ( window.addEventListener ) {
			element.removeEventListener(type, callback);
		} else if ( window.attachEvent ) {
			element.detachEvent('on'+type, callback);
		} else {
			delete element['on' + type];
		}
	}

	return {
		create: createElement,
		text: setTextToElement,
		display: display,
		addClass: addClassName,
		removeClass: removeClassName,
		on: addEventListener,
		off: removeEventListener
	};

});