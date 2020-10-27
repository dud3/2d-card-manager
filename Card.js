(function(cm) {
	var ctx = cm.canvas.ctx;

	// sprit -> obj -> { imgUrl, w, h, s }, s = scale
	function Card(vector) {
		this.pos = new cm.Vector(vector.x, vector.y);
		this.selectable = true;

		this.slot = -1;
	}

	Card.prototype = Object.create(cm.Entity.prototype);
	Card.prototype.constructor = Card;

	Card.prototype.render = function(dt, du, fps) {
		ctx.globalAlpha = this.alpha;

		this.sprite.drawAt(this.pos.x, this.pos.y, this.shape.w, this.shape.h, this.shape.s);

		this.collider.render();

		ctx.globalAlpha = 1;
	}

	Card.prototype.update = function(dt, du) {
		var that = this;

		// noted: for now filter them on each frame
		// todo: group them when building the queue
		cm.Entities.queue.filter(function(e) { return (e instanceof cm.Slot) }).map(function(e) {
			if (!cm.Events.mouse.clickHold) {
				if(cm.Collider.check.select(that.collider, e.collider)) {
					that.setPos(e.pos.x + 30, e.pos.y + 10);
				}
			}
		});

		/*
		if (this.selected) {
			animation -= du * 0.1;
			animation = cm.Math.clamp(animation, 0, 1);

			console.log(animation);

			ctx.globalAlpha = animation;
		}

		if (animation <= 0) animation = 1;
		*/
	}

	cm.Card = Card;
})(CardsManager);
