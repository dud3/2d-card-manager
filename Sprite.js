(function(cm) {
	const ctx = cm.canvas.ctx

	// image -> new Image()
	function Sprite(image, w, h, s) {
		this.image = image;

		this.width = w || 64;
		this.height = h || 64;
		this.scale = s || 1;
	}

	Sprite.prototype.drawAt = function(x, y, w, h, s) {
		ctx.drawImage(this.image, x, y, w * s, h * s);
	}

	cm.Sprite = Sprite;
})(CardsManager);
