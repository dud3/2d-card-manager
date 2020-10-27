// slots: 0, 1, 2, 3
// slot: -1 -> Unassigned
CardsManager.serverData = [
	{ id : 0, class: 'Slot', pos: { x: 208.5, y: 220 }, shape: { w: 208.5, h: 208.5 }, image: '', collider: { type: 'rect', args: [], calc: true, static: true } },
	{ id : 1, class: 'Slot', pos: { x: (208.5 * 2) + 16, y: 220 }, shape: { w: 208.5, h: 208.5 }, image: '', collider: { type: 'rect', args: [], calc: true, static: true } },
	{ id : 2, class: 'Slot', pos: { x: (208.5 * 3) + 32, y: 220 }, shape: { w: 208.5, h: 208.5 }, image: '', collider: { type: 'rect', args: [], calc: true, static: true } },
	{ id : 3, class: 'Slot', pos: { x: (208.5 * 4) + 48, y: 220 }, shape: { w: 208.5, h: 208.5 }, image: '', collider: { type: 'rect', args: [], calc: true, static: true } },

	{ id : 3, class: 'Slot', pos: { x: 20, y: 590 }, shape: { w: 132, h: 132 }, image: '', collider: { type: 'rect', args: [], calc: true, static: true } },

	{ id : 3, class: 'Slot', pos: { x: 1034, y: 590 }, shape: { w: 132, h: 132 }, image: '', collider: { type: 'rect', args: [], calc: true, static: true } },

	{ id : 4, class: 'Card', pos: { x: 10, y: 100 }, slot: -1, image: 'https://imgur.com/LZZLRu5.jpg', collider: { type: 'rect', calc: true, static: false } },
	{ id : 5, class: 'Card', pos: { x: 10, y: 140 }, slot: -1, image: 'https://imgur.com/KhecxvX.jpg', collider: { type: 'rect', calc: true, static: false } },
	{ id : 6, class: 'Card', pos: { x: 10, y: 180 }, slot: -1, image: 'https://imgur.com/B3Ae8DB.jpg', collider: { type: 'rect', calc: true, static: false } },
	{ id : 7, class: 'Card', pos: { x: 10, y: 220 }, slot: -1, image: 'https://imgur.com/XW6DzN2.jpg', collider: { type: 'rect', calc: true, static: false } },
	{ id : 8, class: 'Card', pos: { x: 10, y: 200 }, slot: -1, image: 'https://imgur.com/Qir3m6l.jpg', collider: { type: 'rect', calc: true, static: false } },

	{ id : 9, class: 'Card', pos: { x: 10, y: 180 }, slot: -1, image: 'https://imgur.com/B3Ae8DB.jpg', collider: { type: 'rect', calc: true, static: false } },
	{ id : 10, class: 'Card', pos: { x: 10, y: 220 }, slot: -1, image: 'https://imgur.com/XW6DzN2.jpg', collider: { type: 'rect', calc: true, static: false } },
	{ id : 11, class: 'Card', pos: { x: 10, y: 200 }, slot: -1, image: 'https://imgur.com/Qir3m6l.jpg', collider: { type: 'rect', calc: true, static: false } },

	{ id : 12, class: 'Rect', pos: { x: 620, y: 240 }, image: '', collider: { type: 'rect', calc: true, static: false } },
	{ id : 12, class: 'Rect', pos: { x: 620, y: 240 }, image: '', collider: { type: 'rect', calc: true, static: false } },
	{ id : 12, class: 'Rect', pos: { x: 620, y: 240 }, image: '', collider: { type: 'rect', calc: true, static: false } },

	{ id : 12, class: 'Circle', pos: { x: 620, y: 240 }, image: '', collider: { type: 'rect', calc: true, static: false } }

	/*
		{ id : 5, class: 'Rect', pos: { x: 160, y: 40 }, image: '', collider: { type: 'rect', calc: true, static: false } },
		{ id : 6, class: 'Rect', pos: { x: 180, y: 80 }, image: '', collider: { type: 'rect', calc: true, static: false } },
		{ id : 7, class: 'Rect', pos: { x: 260, y: 160  }, image: '', collider: { type: 'rect', calc: true, static: false } },
		{ id : 8, class: 'Rect', pos: { x: 300, y: 200 }, image: '', collider: { type: 'rect', calc: true, static: false } }
	*/
];
