(function(cm) {
	var Mouse = {
		selected: [],
		collider: new cm.Collider.rect([0, 0, 1, 1]),
		multi: false
	};

	Mouse.collider.setLineWidth(4);
	Mouse.collider.setStrokeStyle('#d0f');

	Mouse.render = function(dt, du, fps) {
		this.collider.render(2, '#000');
	}

	Mouse.update = function(dt, du) {
		var cardHover = null;

		// reset entities

		// note: filter for now...
		const entities = cm.Entities.queue.filter(e => !e.static);

		entities.map((e) => {
			e.selected = false;
			e.collider.setLineWidth(4);
			e.collider.setStrokeStyle('#ccc');
			e.setAlpha(1);

			// check if we're in a collison...

			if (cm.Collider.check.pointRect(Mouse.collider, e.collider)) cardHover = e;
		})

		// keep the mouse tracking...

		if(!cm.Events.mouse.clickHold) {
			// while no on hold, keep track of the mouse collider
			// once on hold save the value to create the rect collider for multi selection
			Mouse.collider.x = cm.Events.mouse.x;
			Mouse.collider.y = cm.Events.mouse.y;

			Mouse.collider.w = 0;
			Mouse.collider.h = 0;

			// disto = distance from the origin, origin being the mouse vector
			// keep track per each entity, it will be benificial

 			entities.map((e) => { e.disto = { x: Mouse.collider.x - e.pos.x, y: Mouse.collider.y - e.pos.y } });
		}

		if(cm.Events.mouse.clickHold) {

			// ... are we colliding?
			if(cardHover != null) {
				// we need to update the collider here
				// if we reset these values out of this condition, we won't be able
				// to create the multi select rectangle collider
				Mouse.collider.x = cm.Events.mouse.x;
				Mouse.collider.y = cm.Events.mouse.y;

				console.log(cardHover.selected);

				if (!this.multi && !cardHover.selected) this.selected = [cardHover];

				// and move them all...
				this.selected.map((e) => {
					cm.Entities.pend(e.id); // re-order for z-indexing

					e.pos.x = cm.Events.mouse.x - e.disto.x;
					e.pos.y = cm.Events.mouse.y - e.disto.y;

					e.collider.setPos([e.pos.x, e.pos.y]);
				});

			// draw the mouse collider for multiselect

			} else {
				this.selected = [];

				Mouse.collider.w = cm.Events.mouse.x - Mouse.collider.x;
				Mouse.collider.h = cm.Events.mouse.y - Mouse.collider.y;

				entities.map(e => { if(cm.Collider.check.select(Mouse.collider, e.collider)) Mouse.selected.push(e); });

				this.multi = this.selected.length > 1
			}
		}

		// ...finally highlight

		this.selected.map(e => {
			e.selected = true;
			e.collider.setStrokeStyle('#cfc');
			e.collider.setLineWidth(8);
			e.setAlpha(0.1);
		});


		if (cm.Events.keyboard.keyDown('g') && cm.Events.keyboard.keyDown('control')) {
			this.selected.map((e) => {
				e.setPos(cm.Events.mouse.x - 50, cm.Events.mouse.y - 50);
			})
		}

		if (cm.Events.keyboard.keyDown('z') && cm.Events.keyboard.keyDown('control')) {
			this.selected.map((e) => {
				e.scale(3);
			})
		}

		if (cm.Events.keyboard.keyDown('x') && cm.Events.keyboard.keyDown('control')) {
			this.selected.map((e) => {
				e.scale(1);
			})
		}

		if (cm.Events.keyboard.keyDown('a') && cm.Events.keyboard.keyDown('control')) {
			Mouse.multi = true;
			this.selected = entities;
		}
	}

	cm.Mouse = Mouse;
})(CardsManager);
