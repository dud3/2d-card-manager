(function(cm) {
	function Shape(shape) {
		shape = shape || {};

		this.h = shape.h || 8;
		this.w = shape.w || 8;
		this.s = shape.s || 1;
	}

	Shape.prototype.set = function(w, h, s) {
		this.w = w;
		this.h = h;
		this.s = s;
	}

	Shape.prototype.scale = function(s) {
		this.s = s;
	}

	cm.Shape = Shape;
})(CardsManager)
