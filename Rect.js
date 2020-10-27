(function(cm) {
	var ctx = cm.canvas.ctx;

	function Rect(vector, style, color) {
		this.pos = new cm.Vector(vector.x, vector.y);

		this.style = style || 'stroke';
		this.color = color || '#000';

		if (this.style == 'fill') {
			this.ctxFn = 'fillRect';
			this.ctxProp = 'fillStyle';
		}

		if (this.style == 'stroke') {
			this.ctxFn = 'strokeRect';
			this.ctxProp ='strokeStyle';
		}
	}

	Rect.prototype = Object.create(cm.Entity.prototype);
	Rect.prototype.constructor = Rect;

	Rect.prototype.render = function(dt, fps) {
		if(this.collider != null) this.collider.render();

		/*
			Renad color:
				'#' + Math.round(Math.random() * 9)
				+ Math.round(Math.random() * 9)
				+ Math.round(Math.random() * 9);
		*/
		ctx[this.ctxProp] = this.color;

		ctx.lineWidth = 4;

		ctx[this.ctxFn](this.pos.x, this.pos.y, this.shape.w * this.shape.s, this.shape.h * this.shape.s);
	}

	Rect.prototype.update = function(dt) {
		// Listen to events and update...

		// Check for collision...
	}

	cm.Rect = Rect;
})(CardsManager);
