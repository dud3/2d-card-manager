(function(cm) {
	var Events = {};
	var canvas = cm.canvas.canvas;
	var bounds = canvas.getBoundingClientRect();

	Events.mouse = { x: 0, y: 0, click: 0, clickHold: false };

	Events.keyboard = {
		keys: {},
		pressed: false
	};

	Events.keyboard.keyDown = function(key) {
		return (Events.keyboard.keys[key] != undefined && Events.keyboard.keys[key] != false);
	}

	Events.register = function() {
		canvas.addEventListener('mousemove', function(e) {
			Events.mouse.x = e.clientX - bounds.left;
			Events.mouse.y = e.clientY - bounds.top;
		});

		// Mouse

		canvas.addEventListener('click', function(e) {
			Events.mouse.click++;

			// if(cm.debug) console.log("Events.mouse.click: ", Events.mouse);

			clearTimeout(Events.clickTimeout);
			Events.clickTimeout = setTimeout(function() {
				Events.mouse.click = 0;
			}, 300);
		});

		canvas.addEventListener('mousedown', function(e) {
			Events.mouse.clickHold = true;
		})

		canvas.addEventListener('mouseup', function(e) {
			Events.mouse.clickHold = false;
		});

		// Keyboard

		window.addEventListener('keydown', function(e) {
			Events.keyboard.pressed = true;
			Events.keyboard.keys[e.key.toLowerCase()] = true;

			e.preventDefault();
		});

		window.addEventListener('keyup', function(e) {
			Events.keyboard.pressed = false;
			Events.keyboard.keys[e.key.toLowerCase()] = false;
		});
	}

	cm.Events = Events;
})(CardsManager);
