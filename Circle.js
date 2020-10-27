(function(cm) {
	var ctx = cm.canvas.ctx;

	function Circle(vector) {
		this.pos = new cm.Vector(vector.x, vector.y);
	}

	Circle.prototype = Object.create(cm.Entity.prototype);
	Circle.prototype.constructor = Circle;

	Circle.prototype.render = function(dt, fps) {
		if(this.collider != null) this.collider.render();

		ctx.beginPath();
		ctx.arc(this.pos.x, this.pos.y, 50, 0, 2 * Math.PI);
		ctx.stroke();
	}

	Circle.prototype.update = function(dt) {}

	cm.Circle = Circle;
})(CardsManager);
