(function(cm) {
	"use strict";

	var Entities = {};

	Entities.queue = [];

	Entities.push = function(Entity) {
		this.queue.push(Entity);
	}

	Entities.remove = function(i) {
		this.queue.splice(i, 1);
	}

	Entities.delete = function(id) {
		var i;
		var entity = null;

		for (i = 0; i < this.queue.length; i++) {
			if (this.queue[i].id == id) {
				entity = this.queue[i];
				break;
			}
		}

		this.remove(i);

		return entity;
	}

	Entities.pend = function(id) {
		Entities.push(Entities.delete(id));
	}

	Entities.getSelected = function() {
		return this.queue.filter((e) => e.selected === true);
	}

	Entities._prepare = function(entityObject, key, imagePromise) {
		return new Promise(function(resolve, reject) {
			imagePromise.then(function(image) { // returns false or imag eobject

				// Entity type

				var entity = null;

				switch(entityObject.class) {
					case 'Rect':
						entity = new cm.Rect({ x: entityObject.pos.x, y: entityObject.pos.y })
						break;

					case 'Circle':
						entity = new cm.Circle({ x: entityObject.pos.x, y: entityObject.pos.y })
						break;

					case 'Card':
							entity = new cm.Card({ x: entityObject.pos.x, y: entityObject.pos.y });
						break;

					case 'Slot':
							entity = new cm.Slot({ x: entityObject.pos.x, y: entityObject.pos.y });
						break;
				}

				// id

				entity.setId(key);

				// Image

				var shape = image ? { w: image.image.width / 6, h: image.image.height / 6, s: 1 } : { w: 80, h: 80, s: 1 };

				// Shape

				// If shape defined, overwrite

				if (entityObject.shape !== undefined) shape = entityObject.shape;

				entity.setShape(shape);

				// Collider

				if (entityObject.collider !== undefined) {
					// Auto calculate the collider
					if (entityObject.collider.calc) {
						console.log(entityObject.pos, shape);
						entityObject.collider.args = [entityObject.pos.x, entityObject.pos.y, shape.w, shape.h];
					}

					entity.setCollider(entityObject.collider.type, entityObject.collider.args);
				}

				// Move-able?

				entity.setStatic(entityObject.collider.static);

				// Sprite

				if (image !== false) entity.setSprite(image.image, shape.w, shape.h, shape.s);

				resolve(entity)
			});
		});
	}

	Entities.load = function(entities) {
		var that = this;

		if (cm.debug) console.log(entities);

		var promises = [];

		return new Promise(function(resolve, reject) {
			for (var key in entities) {
				let imagePromise = entities[key].image.length > 0 ? new cm.Image(entities[key].image) : new Promise(function(resolve, reject) { resolve(false); });

				// note: a quick solution for now...
				promises.push(cm.Entities._prepare(entities[key], key, imagePromise));
			}

			Promise.all(promises).then(function(entities) {
				if(cm.debug) console.log("Promise all: ", entities);

				// The rest of entities

				entities.map(function(e) { that.queue.push(e) });

				resolve();
			});
		});
	}

	cm.Entities = Entities;
})(CardsManager);
