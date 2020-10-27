(function(CardsManager) {
	function Vector(x, y) {
		this.x = x || 0;
		this.y = y || 0;
	}

	Vector.prototype.scale = function(c) {
		return new Vector(this.x * c, this.y * c);
	}

	Vector.prototype.dot = function(v) {
	    return (this.x * v.x + this.y * v.y);
	}

	Vector.prototype.cross = function(v) {
	    return (this.x * v.y - this.y * v.x);
	}

	Vector.prototype.add = function(v) {
		return new Vector(this.x + v.x, this.y + v.y);
	}

	Vector.prototype.add = function(v) {
		return new Vector(this.x + v.x, this.y + v.y);
	}

	Vector.prototype.sub = function(v) {
		return new Vector(this.x - v.x, this.y - v.y);
	}

	Vector.prototype.mul = function(v) {
		return new Vector(this.x * v.x, this.y * v.y);
	}

	Vector.prototype.div = function(v) {
		return new Vector(this.x / v.x, this.y / v.y);
	}

	Vector.prototype.dist = function(v) {
		var dx = this.x - v.x;
		var dy = this.y - v.y;

		// c^2 = a^2 + b^2
		return Math.sqrt((dx * dx) + (dy * dy));
	}

	Vector.prototype.isBetween = function(v0, v1) {
		return this.x > v0.x
			&& this.y > v0.y
			&& this.x < v1.x
			&& this.y < v1.y;
	}

	Vector.prototype.setPos = function(x, y) {
		this.x = x;
		this.y = y;
	}

	Vector.prototype.getPos = function() {
		return { x: this.x, y: this.y };
	}

	Vector.prototype.move = function(x, y) {
		this.x += x;
		this.y += y;
	}

	CardsManager.Vector = Vector;
})(CardsManager);
