(function(cm) {
	var MainLoop = {};

	MainLoop.stop = null;

	var lFrameMs = 0,
		maxFPS = 60,
		dt = 0,
		du = 0,
		fps = 0,
		tStep = 1000 / 60;

	MainLoop.loop = function(tFrame) {
		if (tFrame < lFrameMs + (1000 / maxFPS)) {
			window.requestAnimationFrame(MainLoop.loop);
			return;
		}

		fps = 1000 / (tFrame - lFrameMs);

		dt += tFrame - lFrameMs;
		lFrameMs = tFrame;
		du = 1 / tStep;

		// Update

		var updateSteps = 0;

		while (dt >= tStep) {
			cm.Update.main(tStep, du);
			dt -= tStep;

			if(++updateSteps >= 240) {
				dt = 0; // fast-forward
				break;
			}
		}

		cm.Render.main(dt, du, fps);

		window.requestAnimationFrame(MainLoop.loop);
	}

	MainLoop.main = function() {
		MainLoop.animationFrame = window.requestAnimationFrame(MainLoop.loop);
	}

	cm.MainLoop = MainLoop;
})(CardsManager);
