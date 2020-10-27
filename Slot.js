(function(cm) {
	var ctx = cm.canvas.ctx;

	// sprit -> obj -> { imgUrl, w, h, s }, s = scale
	function Slot(vector) {
		this.pos = new cm.Vector(vector.x, vector.y);
	}

	Slot.prototype = Object.create(cm.Entity.prototype);
	Slot.prototype.constructor = Slot;

	Slot.prototype.render = function(dt, du, fps) {
		// this.sprite.drawAt(this.pos.x, this.pos.y, this.shape.w, this.shape.h, this.shape.s);

		ctx.strokeStyle = '#' + Math.round(Math.random() * 9)
			+ Math.round(Math.random() * 9)
			+ Math.round(Math.random() * 9);

		ctx.lineWidth = 1;

		ctx.strokeRect(this.pos.x, this.pos.y, this.shape.w, this.shape.h);
	}

	Slot.prototype.update = function(dt, du) {
		// Listen to events and update...
	}

	cm.Slot = Slot;
})(CardsManager)
