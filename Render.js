(function(cm) {
	var Render = {};

	var ctx = cm.canvas.ctx;
	var canvas = cm.canvas.canvas;

	Render.debug = function (dt, fps) {
		ctx.fillStyle = '#' + Math.round(Math.random() * 9)
			+ Math.round(Math.random() * 9)
			+ Math.round(Math.random() * 9);

		ctx.fillText('dt: ' + dt, 10, 20)
		ctx.fillText('fps: ' + Math.round(fps), 10, 30);

		ctx.fillRect(10, 40, 40, 40);
	}

	Render.main = function(dt, du, fps) {
		canvas.clear();

		// Debug
		Render.debug(dt, fps);

		for(let key in cm.Entities.queue) cm.Entities.queue[key].render(dt, du, fps);

		// Mouse
		cm.Mouse.render(dt, fps);

		// Reset the alpha channel
		// ctx.globalAlpha = 1;
	}

	cm.Render = Render;
})(CardsManager);
