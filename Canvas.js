(function(CardsManager) {
	var canvas, ctx;

	canvas = document.getElementById('canvas-cards-manager');
	ctx = canvas.getContext('2d');

	var width = 1800, height = 800;

	var devicePixelRatio = window.devicePixelRatio || 1;

	var backingStoreRatio =
		ctx.webkitBackingStorePixelRatio ||
	    ctx.mozBackingStorePixelRatio ||
	    ctx.msBackingStorePixelRatio ||
	    ctx.oBackingStorePixelRatio ||
	    ctx.backingStorePixelRatio || 1;

    var ratio = devicePixelRatio / backingStoreRatio;

    canvas.style.border = '1px solid #000';

    if (devicePixelRatio != backingStoreRatio) {
    	canvas.width = width * radio;
    	canvas.height = height * ratio;

    	canvas.style.width = width + 'px';
    	canvas.style.height = height + 'px';
    } else {
    	canvas.width = width;
    	canvas.height = height

    	canvas.style.width = '';
    	canvas.style.height = '';
    }

    console.log("radio: " + ratio);

    ctx.scale(ratio, ratio);

    // functions

	canvas.clear = function() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
	}

	canvas.fillRect = function(x, y, dx, dy) {
		ctx.fillRect(x, y, dx, dy);
	}

	CardsManager.canvas = {
		canvas,
		ctx
	};
})(CardsManager)
