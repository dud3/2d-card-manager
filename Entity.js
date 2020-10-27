(function(cm) {
	function Entity () {
		this.id = '';
		this.selectable = true;
		this.selected = false;

		this.static = false;

		this.pos = null;
		this.shape = null;
		this.collider = new Collider['point']([0, 0]);
		this.sprite = null;

		this.alpha = 1;

		this.dx = 0;
		this.dy = 0;
	}

	Entity.prototype.update = function(dt, du) {};
	Entity.prototype.render = function(dt, du, fps) {};

	Entity.prototype.setId = function(id) {
		this.id = id;
	};

	Entity.prototype.setVector = function(x, y) {
		this.pos = new cm.Vector(x, y);
	};

	// shape -> { h: 1, w: 1, s: 1 }
	Entity.prototype.setShape = function(shape) {
		this.shape = new cm.Shape(shape);
	};

	Entity.prototype.getShape = function(shape) {
		return this.shape;
	};

	Entity.prototype.setPos = function(x, y) {
		this.pos.setPos(x, y);
		if (this.collider != null) this.collider.setPos([this.pos.x, this.pos.y]);
	};

	Entity.prototype.move = function(dx, dy) {
		this.pos.move(dx, dy);
		// if (this.collider != null) this.collider.setPos([this.pos.x, this.pos.y]);
	};

	Entity.prototype.moveTo = function(x, y, v) {
		v = v || 1;

		this.dx = x - this.pos.x;
		this.dy = y - this.pos.y;

		this.dirx = this.dx > 0 ? 1 : -1;
		this.diry = this.dy > 0 ? 1 : -1;

		console.log(this.id, this.dx, this.dy);

		if(Math.abs(this.dx) > 0) this.move(this.dirx * v, 0);
		if(Math.abs(this.dy) > 0) this.move(0, this.diry * v);
	};

	Entity.prototype.scale = function(sc) {
		this.shape.scale(sc);
		if (this.collider != null) this.collider.scale(sc);
	};

	Entity.prototype.setCollider = function(type, args) {
		this.collider = new cm.Collider[type](args);
	};

	// image -> new Image()
	Entity.prototype.setSprite = function(image, w, h, s) {
		this.sprite = new cm.Sprite(image, w, h, s);
	};

	Entity.prototype.setAlpha = function(alpha) {
		this.alpha = alpha;
	};

	Entity.prototype.setStatic = function(static) {
		this.static = static;
	};

	cm.Entity = Entity
})(CardsManager);
