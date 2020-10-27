(function (cm) {
	var Update = {};

	Update.main = function(dt, du) {
		// The mouse
		cm.Mouse.update(dt, du);

		// Loop over entities update methods (functions)
		for(let key in cm.Entities.queue) cm.Entities.queue[key].update(dt, du);
	}

	cm.Update = Update;
})(CardsManager);
