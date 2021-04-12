import { Tool } from "../../../../../lib/Tooljs.js";

const TOOL = new Tool();

export class Slideshow {
	constructor(images, elements) {
		let { main, next, prev, store } = elements;
		this.IMAGES = images;
		this.ELEMENTS = { main, next, prev, store };
		this.bug = true;
		this.DISPLAYED = null;

		this._place();
		this._listener();
	}

	_createItem(image) {
		const store = this.ELEMENTS.store;
		const c = this;

		const item = TOOL.createEl({
			el: "DIV",
			className: "item",
			append: image,
		});

		return item;
	}

	_place() {
		const store = this.ELEMENTS.store;
		const todisplay = this.IMAGES.shift();
		const clone = todisplay.cloneNode();

		let index = 0;

		for (const image of this.IMAGES) {
			if (index != 0) {
				store.appendChild(this._createItem(image));
			}
			index++;
		}

		this.IMAGES.push(todisplay);

		this._display(clone);
	}

	_display(img) {
		const main = this.ELEMENTS.main.querySelector(".image");
		const image = main.querySelector("img");

		if (image) {
			image.replaceWith(img);
		} else {
			main.appendChild(img);
		}

		this.DISPLAYED = img;
	}

	_next() {
		const store = this.ELEMENTS.store;
		const items = store.querySelectorAll(".item");
		const target = items[0];
		const clone = target.querySelector("img").cloneNode();
		const displayed = this.DISPLAYED;

		store.appendChild(this._createItem(displayed));

		this._display(clone);

		this._animateRemove(target);
	}

	_prev() {
		const store = this.ELEMENTS.store;
		const items = store.querySelectorAll(".item");
		const target = items[items.length - 1];
		const clone = target.querySelector("img").cloneNode();
		const displayed = this.DISPLAYED;

		store.prepend(this._createItem(displayed));

		this._display(clone);

		this._animateRemove(target);
	}

	_animateRemove(target) {
		const goal = 1;
		let current = 0;
		const timer = setInterval(function () {
			if (current != 1) {
				current += TOOL.PercentageIf(5, goal);

				if (current > goal) {
					current = current - (current - goal);
				}
			} else {
				clearInterval(timer);
				target.remove();
			}

			target.style.opacity = current;
		}, 10);
	}
	_listener() {
		const next = this.ELEMENTS.next;
		const prev = this.ELEMENTS.prev;

		TOOL.addListener(next, { click: this._next.bind(this) });
		TOOL.addListener(prev, { click: this._prev.bind(this) });
	}
}
