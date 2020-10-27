(function(cm) {
	var ctx = cm.canvas.ctx;

	var Collider = {
		point : function(x, y) {
			this.pos = new cm.Vector(x, y);

			this.setBouns = function(x, y) {
				this.pos.setPos(x, y);
			}

			this.getBounds = function() {
				return {
					x: this.pos.x,
					y: this.pos.y
				}
			}

			this.scale = function(sc) {}

			this.render = function() {
				ctx.fillRect(this.pos.x, this.pos.y, 4, 4);
			}
		},

		rect: function(args) {
			var that = this;

			this.sc = 1;

			this.x = args[0];
			this.y = args[1];
			this.w = args[2];
			this.h = args[3];

			this.setPos = function(args) {
				this.x = args[0];
				this.y = args[1];
			}

			this.setBounds = function(args) {
				this.x = args[0];
				this.y = args[1];
				this.w = args[2];
				this.h = args[3];
			}

			this.getBounds = function() {
				return {
					x: this.x,
					y: this.y,
					x1: this.x + this.w,
					y1: this.y + this.h
				}
			}

			this.scale = function(sc) {
				this.sc = sc;
			}

			this.lineWidth = 4;
			this.strokeStyle = "#ccc";

			this.setLineWidth = function(lineWidth) {
				this.lineWidth = lineWidth;
			}

			this.setStrokeStyle = function(strokeStyle) {
				this.strokeStyle = strokeStyle;
			}

			this.render = function() {
				ctx.beginPath();

				ctx.moveTo(this.x, this.y);

				ctx.lineTo(this.x + (this.w * this.sc), this.y);
				ctx.lineTo(this.x + (this.w * this.sc), this.y + (this.h * this.sc));
				ctx.lineTo(this.x, this.y + (this.h * this.sc));
				ctx.lineTo(this.x, this.y);

				ctx.lineWidth = this.lineWidth;
				ctx.strokeStyle = this.strokeStyle;

				ctx.stroke();
			}
		},

		helper: {
			isBetween: function(v0, v1, v2) {
				return v0.x > v1.x
					&& v0.x < v2.x
					&& v0.y > v1.y
					&& v0.y < v2.y;
			}
		},

		check: {
			rect: function(r0, r1) {
				var r0b = r0.getBounds(),
					r1b = r1.getBounds();

				var r0tl = { x: r0b.x, y: r0b.y };
				var r0tr = { x: r0b.x, y: r0b.x1 };
				var r0bl = { x: r0b.x, y: r0b.y1 };
				var r0br = { x: r0b.x1, y: r0b.y1 };

				var r1tl = { x: r1b.x, y: r1b.y };
				var r1br = { x: r1b.x1, y: r1b.y1 };

				var tl = Collider.helper.isBetween(r0tl, r1tl, r1br);
				var tr = Collider.helper.isBetween(r0tr, r1tl, r1br);
				var bl = Collider.helper.isBetween(r0bl, r1tl, r1br);
				var br = Collider.helper.isBetween(r0br, r1tl, r1br);

				return tl || tr || bl || br;
			},

			select: function(r0, r1) {
				var r0b = r0.getBounds(),
					r1b = r1.getBounds();

				var r0tl = { x: r0b.x, y: r0b.y };
				var r0tr = { x: r0b.x, y: r0b.x1 };
				var r0bl = { x: r0b.x, y: r0b.y1 };
				var r0br = { x: r0b.x1, y: r0b.y1 };

				var r1tl = { x: r1b.x, y: r1b.y };
				var r1tr = { x: r1b.x, y: r1b.x1 };
				var r1bl = { x: r1b.x, y: r1b.y1 };
				var r1br = { x: r1b.x1, y: r1b.y1 };

				var lx = Math.max(r0.x, r1.x);
				var rx = Math.min(r0.x + r0.w, r1.x + r1.w);
				var ty = Math.max(r0.y, r1.y);
				var by = Math.min(r0.y + r0.h, r1.y + r1.h);

				// When rectangle origin sits on the negative side
				// ... swap the point of origin

				if (rx - lx < 0) {
					lx = Math.max(r0.x + r0.w, r1.x);
					rx = Math.min(r0.x, r1.x + r1.w);
				}

				if (by - ty < 0) {
					ty = Math.max(r0.y + r0.h, r1.y);
					by = Math.min(r0.y, r1.y + r1.h);
				}

				return lx < rx && ty < by;
			},

			pointRect: function(p0, r0) {
				var p0b = p0.getBounds(),
					r0b = r0.getBounds();

				return p0b.x > r0b.x && p0b.x < r0b.x1 && p0b.y > r0b.y && p0b.y < r0b.y1;
			}
		}
	};

	cm.Collider = Collider;
})(CardsManager);
