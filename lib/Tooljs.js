export class Tool {
	constructor() {}
	createEl(obj, className, append, listener, some) {
		let el = obj;
		let style, attr, data, prepend, content, id;
		let attrValues = [
			"type",
			"method",
			"encytype",
			"hidden",
			"contenteditable",
			"disabled",
			"checked",
			"src",
			"href",
			"value",
			"min",
			"max",
			"title",
			"name",
		];

		if (typeof obj == "object") {
			el = obj.el;
			className = obj.className;
			id = obj.id;
			style = obj.style;
			attr = obj.attr;
			data = obj.data;
			append = obj.append;
			prepend = obj.prepend;
			content = obj.content;
			listener = obj.listener;
		} else if (typeof obj == "string") {
			if (some) {
				style = some.s;
				attr = some.a;
				data = some.d;
				prepend = some.p;
				content = some.c;
				id = some.i;
			}
		}

		let element = document.createElement(el);
		className ? this.addClass(element, className) : false;
		id ? this.addId(element, id) : false;
		style ? this.addStyle(element, style) : false;

		content ? this.content(element, content) : false;
		append ? this.append(element, append) : false;
		prepend ? this.prepend(element, prepend) : false;

		data ? this.addData(element, data) : false;
		attr ? this.addAttr(element, attr) : false;

		listener ? this.addListener(element, listener) : false;

		attrValues.forEach((attr) => {
			if (obj[attr]) {
				this.addAttr(element, { [attr]: obj[attr] });
			}
		});

		return element;
	}

	content(element, content) {
		if (!element || !content) return false;
		element.innerHTML = content;
	}

	append(element, append) {
		if (!element || !append) return false;
		if (typeof append == "object" && Array.isArray(append)) {
			try {
				append.forEach((toAppend) => {
					if (toAppend) element.appendChild(toAppend);
				});
			} catch (e) {}
		} else {
			try {
				element.appendChild(append);
			} catch (e) {}
		}
	}

	prepend(element, prepend) {
		if (!element || !prepend) return false;
		if (typeof append == "object" && Array.isArray(prepend)) {
			append.forEach((toprepend) => {
				if (toprepend) {
					element.prepend(toAppend);
				}
			});
		} else {
			element.prepend(prepend);
		}
	}

	addClass(element, className) {
		if (!className || !element) return false;
		if (typeof className == "string") {
			element.classList.add(className);
		} else if (typeof className == "object" && Array.isArray(className)) {
			className.forEach((cl) => {
				if (cl) element.classList.add(cl);
			});
		} else {
			return false;
		}
	}

	removeClass(element, className) {
		if (!className || !element) return false;
		if (typeof className == "string") {
			element.classList.remove(className);
		} else if (typeof className == "object" && Array.isArray(className)) {
			className.forEach((cl) => {
				element.classList.remove(cl);
			});
		} else {
			return false;
		}
	}

	addId(element, id) {
		if (!id || !element) return false;
		if (typeof id == "string") {
			element.setAttribute("id", id);
		} else {
			return false;
		}
	}

	removeId(element, id) {
		if (!id || !element) return false;
		if (typeof id == "string") {
			element.removeAttribute(id);
		} else {
			return false;
		}
	}

	addStyle(element, styles) {
		if (!element || !styles) return false;
		if (typeof styles == "object") {
			Object.entries(styles).forEach((style) => {
				element.style[style[0].split("_").join("-").toString()] = style[1];
			});
		} else {
			return false;
		}
	}

	addAttr(element, attr) {
		if (!element || !attr) return false;
		if (typeof attr == "object") {
			Object.entries(attr).forEach((pair) => {
				element.setAttribute(pair[0].split("_").join("-").toString(), pair[1]);
			});
		} else {
			return false;
		}
	}

	removeAttr(element, attr) {
		if (!element || !attr) return false;
		if (typeof attr == "object" && Array.isArray(attr)) {
			attr.forEach(element.removeAttribute);
		} else if (typeof attr == "string") {
			element.removeAttribute(attr);
		}
	}

	getAttr(element, attr) {
		if (!element || !attr) return false;
		return element.getAttribute(attr);
	}

	addData(element, data) {
		if (!element || !data) return false;
		if (typeof data == "object") {
			Object.entries(data).forEach((pair) => {
				element.setAttribute(
					`data-${pair[0].split("_").join("-").toString()}`,
					pair[1]
				);
			});
		} else {
			element.setAttribute(`data-${data}`, true);
		}
	}

	removeData(element, data) {
		if (!element || !data) return false;
		if (typeof data == "object") {
			Object.entries(data).forEach((pair) => {
				element.removeAttribute(`data-${pair[0]}`, pair[1]);
			});
		} else {
			element.removeAttribute(`data-${data}`, true);
		}
	}

	getData(element, data) {
		if (!element || !data) return false;
		return element.getAttribute(`data-${data}`);
	}

	addListener(element, listener) {
		if (!element || !listener) return false;

		const add = function (el) {
			if (typeof listener == "object") {
				Object.entries(listener).forEach((event) => {
					event[0].split("_").forEach((splited) => {
						el.addEventListener(splited, event[1]);
					});
				});
			} else {
				return false;
			}
		};

		try {
			element.forEach(add);
		} catch (e) {
			add(element);
		}
	}

	removeListener(element, listener) {
		if (!element || !listener) return false;
		if (typeof listener == "object") {
			Object.entries(listener).forEach((event) => {
				event[0].split("_").forEach((splited) => {
					if (typeof splited[1] == "function") {
						element.removeListener(splited[0], splited[1]);
					}
				});
			});
		} else {
			return false;
		}
	}

	// HTTP REQUESTS AND ENCODING
	Ajax(request) {
		let {
			url,
			type,
			method,
			data,
			header,
			success,
			failure,
			loading,
		} = request;
		let http = new XMLHttpRequest();
		let formData = new FormData();

		http.onreadystatechange = function () {
			if (http.readyState == 4 && http.status == 200) {
				if (success && typeof success == "function") {
					success(http.responseText);
				}
			} else if (http.readyState == 1) {
				if (loading && typeof loading == "function") {
					loading();
				}
			} else {
				if (failure && typeof failure == "function") {
					failure();
				}
			}
		};

		http.open(type || method, url);

		header
			? http.setRequestHeader(
					"Content-type",
					"application/x-www-form-urlencoded"
			  )
			: false;

		if (data) {
			try {
				for (let pair of data.entries()) {
					formData.append(pair[0], pair[1]);
				}
			} catch (error) {
				Object.entries(data).forEach((pair) => {
					formData.append(pair[0], pair[1]);
				});
			}
		}

		try {
			http.send(formData);
		} catch (e) {}
	}

	loadFileContent(file, callback, loading) {
		this.Ajax({
			url: file,
			type: "POST",
			success: callback,
			loading: loading,
		});
	}

	isFileExist(file) {
		let http = new XMLHttpRequest();
		http.open("HEAD", file, false);
		http.send();
		return http.status != 404;
	}

	getJSON(url, callback) {
		fetch(url)
			.then((resp) => resp.json())
			.then((data) => (callback ? callback(data) : false));
	}

	ObjToPhp(object) {
		if (!object) return false;
		let txt = "";
		let arr = Object.entries(object);
		arr.forEach((data, index) => {
			data[1] = data[1].split(" ").join("-").toString();
			txt += `${data[0]}=${data[1]}`;
			txt += arr.length - 1 == index ? "" : "&";
		});

		return txt;
	}

	EncodeString(object) {
		if (!object) return false;
		let encodedString = "";
		for (let prop in object) {
			if (object.hasOwnProperty(prop)) {
				if (encodedString.length > 0) encodedString += "&";
				encodedString += encodeURI(prop + "=" + object[prop]);
			}
		}
		return encodedString;
	}

	// Element Checking
	isInViewport(element) {
		const rect = element.getBoundingClientRect();
		return (
			rect.top >= 0 &&
			rect.left >= 0 &&
			rect.bottom <=
				(window.innerHeight || document.documentElement.clientHeight) &&
			rect.right <= (window.innerWidth || document.documentElement.clientWidth)
		);
	}

	isVisible(element) {
		if (!element) return;
		return (
			getComputedStyle(element).display != "none" ||
			getComputedStyle(element).visibility != "hidden"
		);
	}

	// Element Usage
	getDataSvg(path, success) {
		let TOOL = this;
		let ills = document.querySelectorAll("[data-svg]"),
			file,
			ex,
			uri;

		ills.forEach((illustration, index) => {
			file = illustration.getAttribute("data-svg");
			ex = ".svg";
			uri = `${path}${file}.svg`;

			let content = illustration.getAttribute("data-content");
			let contents;
			if (content) {
				contents = content.split(",").map(function (value) {
					return illustration.querySelector(`.${value}`);
				});
			}

			TOOL.Ajax({
				url: `${path}${file}.svg`,
				type: "POST",
				success: function (data) {
					illustration.innerHTML = data;

					if (contents && contents.length) {
						contents.forEach((content) => illustration.appendChild(content));
					}

					if (index == ills.length - 1) {
						if (success && typeof success == "function") {
							setTimeout(success, 50);
						}
					}
				},
			});
		});
	}

	dragslide(autoslide) {
		let drag = document.querySelectorAll("[data-dragslide]");

		drag.forEach((element) => {
			let ClassName = element.getAttribute("data-dragslide");
			element.style.cursor = "grab";
			let pos = { top: 0, left: 0, x: 0, y: 0 };

			const mouseDownHandler = function (e) {
				active(false);
				element.style.cursor = "grabbing";
				element.style.userSelect = "none";

				pos = {
					left: element.scrollLeft,
					top: element.scrollTop,
					// Get the current mouse position
					x: e.clientX,
					y: e.clientY,
				};

				document.addEventListener("mousemove", mouseMoveHandler);
				document.addEventListener("mouseup", mouseUpHandler);
			};

			const mouseMoveHandler = function (e) {
				// How far the mouse has been moved
				const dx = e.clientX - pos.x;
				const dy = e.clientY - pos.y;

				// Scroll the element
				element.scrollTop = pos.top - dy;
				element.scrollLeft = pos.left - dx;
			};

			const mouseUpHandler = function () {
				active(true);
				element.style.cursor = "grab";
				element.style.removeProperty("user-select");

				document.removeEventListener("mousemove", mouseMoveHandler);
				document.removeEventListener("mouseup", mouseUpHandler);
			};

			const slide = function (slideTo) {
				let scroll = 0;
				let maxScrollLeft = element.scrollWidth - element.clientWidth;
				let timer = setInterval(function () {
					element.scrollLeft += slideTo / 9.5;
					scroll += 10;
					element.classList.remove("active");
					clearInterval(timer);
				}, 25);
			};

			const active = function (isActive) {
				if (isActive) {
					element.classList.remove(ClassName);
					element.classList.add("active");
				} else {
					element.classList.remove("active");
					element.classList.add(ClassName);
				}
			};

			const isgrabbing = function () {
				return element.style.cursor == "grabbing";
			};

			// Attach the handler
			element.addEventListener("mousedown", mouseDownHandler);

			if (!autoslide) return false;

			setInterval(function () {
				if (!isgrabbing()) {
					let item1 = element.querySelectorAll(".item")[0];
					let goal = item1.clientWidth;
					slide(goal);
				} else {
					active(false);
				}
			}, 5000);
		});
	}

	dragNDrop(object) {
		let { target, container, listener } = object;
		let className = container ? container.classList[0] : "droppable";
		let drop, leaveDroppable, enterDroppable;
		if (!listener) {
			drop = function () {
				console.log("Dropped");
			};
			leaveDroppable = function () {
				console.log("leaveDroppable");
			};
			enterDroppable = function () {
				console.log("enterDroppable");
			};
		}

		this.addListener(target, {
			mousedown: function (event) {
				let element = target;

				element.style.position = "absolute";
				element.style.zIndex = 1000;
				element.style.cursor = "grabbing";
				element.style.cursor = "-webkit-grabbing";

				moveAt(event.pageX, event.pageY);

				function moveAt(pageX, pageY) {
					element.style.cursor = "grabbing";
					element.style.left = pageX - element.offsetWidth / 2 + "px";
					element.style.top = pageY - element.offsetHeight / 2 + "px";
				}

				let currentDroppable = null;

				function onMouseMove(event) {
					moveAt(event.pageX, event.pageY);

					element.hidden = true;
					let elemBelow = document.elementFromPoint(
						event.clientX,
						event.clientY
					);

					element.hidden = false;

					if (!elemBelow) return;
					let droppableBelow = elemBelow.closest(`.${className}`);

					if (currentDroppable != droppableBelow) {
						if (currentDroppable) {
							if (!leaveDroppable) return;
							leaveDroppable(currentDroppable);
						}
						currentDroppable = droppableBelow;
						if (currentDroppable) {
							if (!enterDroppable) return;
							enterDroppable(currentDroppable);
						}
					}
				}

				document.addEventListener("mousemove", onMouseMove);

				element.onmouseup = function () {
					document.removeEventListener("mousemove", onMouseMove);
					element.style.cursor = "grab";
					if (drop) {
						drop();
					}
				};

				element.ondragstart = function () {
					return false;
				};
			},
		});
	}

	elementSlideShow() {
		let tool = this;
		const slideshow = function (parent) {
			let prev = parent.querySelector("[data-slideshow-btn=prev]");
			let next = parent.querySelector("[data-slideshow-btn=next]");
			let item = parent.querySelector("[data-slideshow-items]");

			if (!item) return;
			if (!prev || !next) return item.setAttribute("data-dragslide", "sliding");
			let st = getComputedStyle(item);
			let scrollWidth = parseInt(st.width);

			const NEXT = function () {
				let current = item.scrollLeft;
				let goal = current + scrollWidth;
				let tenPercent = tool.PercentageIf(10, scrollWidth);

				if (!item.classList.contains("sliding")) {
					item.classList.add("sliding");
				}

				let timer = setInterval(function () {
					if (current <= goal) {
						current += tenPercent;
					} else {
						item.classList.remove("sliding");
						clearInterval(timer);
					}

					item.scrollLeft = current - tenPercent;
				}, 10);
			};

			const PREV = function () {
				let current = item.scrollLeft;
				let goal = current - scrollWidth;
				let tenPercent = tool.PercentageIf(10, scrollWidth);
				if (!item.classList.contains("sliding")) {
					item.classList.add("sliding");
				}
				let timer = setInterval(function () {
					if (current >= goal) {
						current -= tenPercent;
					} else {
						item.classList.remove("sliding");
						clearInterval(timer);
					}

					item.scrollLeft = current + tenPercent;
				}, 10);
			};

			next.addEventListener("click", NEXT);
			prev.addEventListener("click", PREV);
			item.setAttribute("data-dragslide", "sliding");
		};

		let slideshows = document.querySelectorAll("[data-slideshow]");
		slideshows.forEach((s) => slideshow(s));
	}

	RewriteText(element, seperator = ",", a = 100, b = 5000) {
		let tool = this;
		let text = element.getAttribute("data-rewrite");
		let arr = text.split(seperator);

		if (!text) return;

		const setIndicator = function () {
			let indicator = tool.createEl({
				el: "span",
				content: "|",
			});

			setInterval(function () {
				indicator.style.visibility = "visible";
				setTimeout(function () {
					indicator.style.visibility = "hidden";
				}, 600);
			}, 1500);

			element.parentNode.appendChild(indicator);
		};

		const Remove = function (index) {
			let TEXT = arr[index];
			let len = TEXT.length;
			let timer = setInterval(function () {
				len--;
				element.innerHTML = TEXT.substring(0, len);
				if (len == 0) {
					if (index != arr.length - 1) {
						setTimeout(Type(index + 1), a);
					} else {
						Type(0);
					}
					clearInterval(timer);
				}
			}, a);
		};

		const Type = function (index) {
			let TEXT = arr[index];
			let len = 0;
			let timer = setInterval(function () {
				element.innerHTML += TEXT.charAt(len);
				len++;
				if (len == TEXT.length) {
					setTimeout(function () {
						Remove(index);
					}, b);
					clearInterval(timer);
				}
			}, a);
		};

		Type(0);
		setIndicator();
	}

	rewriteAll() {
		let el = document.querySelectorAll("[data-rewrite]");
		let tool = this;
		el.forEach((element) => {
			tool.RewriteText(element);
		});
	}

	ContainsLetter(word) {
		let status = false;
		let letters = "abcdefghijklmnopqrstuvwxyz";
		letters += letters.toUpperCase();

		word = word + "";

		for (let i = 0; i < letters.length; i++) {
			if (word.indexOf(letters[i]) > -1) {
				status = true;
			}
		}

		return status;
	}

	countAllCharacters(str) {
		var a = str.split("");
		var obj = {};
		a.forEach(function (s) {
			var count = 0;
			for (var j = 0; j < a.length; j++) {
				if (s == a[j]) {
					count += 1;
				}
				obj[s] = count;
			}
		});
		return obj;
	}

	Pagination(Parent, buttons, options) {
		let Child = Parent.querySelectorAll("[data-Pagination]");
		let { next, prev, close } = buttons;
		let len = Child.length - 1;
		let index = -1;
		let tool = this;

		const disabled = function (btn) {
			btn.classList.add("disabled");
		};

		const enabled = function (btn) {
			btn.classList.remove("disabled");
		};

		const check = function () {
			if (index == 0) {
				if (prev) prev.style.display = "none";
				if (close) close.style.display = "block";

				enabled(next) && enabled(prev);
			} else {
				if (prev) prev.style.display = "block";
				if (close) close.style.display = "none";

				enabled(next) && enabled(prev);
			}

			if (index == len) disabled(next) && enabled(prev);
		};

		const checkInput = function (index) {
			let curr = Child[index];
			let inputs = curr.querySelectorAll("input");
			let length = inputs.length;
			let phone = Parent.querySelector(".Pagination-Phone");

			if (phone) {
				phone.addEventListener("input", function () {
					let value = this.value;
					let display = phone.parentNode.parentNode.querySelector(
						".error-display"
					);
					display.style.color = "#E0245E";
					if (tool.ContainsLetter(value)) {
						phone.parentNode.classList.add("error");
						if (display) {
							display.innerHTML = "Please enter a valid phone number.";
						}
					} else {
						phone.parentNode.classList.remove("error");
						if (display) {
							display.innerHTML = "";
						}
					}
				});
			}

			const checkAll = function () {
				let inputshasvalue = [];
				for (let i = 0; i < inputs.length; i++) {
					if (inputs[i].value.length != 0) {
						if (!inputs[i].parentNode.classList.contains("error")) {
							inputshasvalue.push(true);
						}
					} else if (inputs[i].getAttribute("data-not-include")) {
						inputshasvalue.push(true);
					}
				}

				inputshasvalue.length == length ? enabled(next) : disabled(next);

				if (index == len) disabled(next) && enabled(prev);
			};

			tool.addListener(inputs, {
				blur_focus_input: checkAll,
			});

			checkAll();
		};

		const nextPage = function () {
			if (!next.classList.contains("disabled")) {
				index += 1;
				Child.forEach((child) => (child.style.display = "none"));
				Child[index].style.display = "block";

				check();

				options && options.inputRequired && checkInput(index);
			}
		};

		const prevPage = function () {
			if (!prev.classList.contains("disabled")) {
				index -= 1;
				Child.forEach((child) => (child.style.display = "none"));
				Child[index].style.display = "block";

				check();

				options && options.inputRequired && checkInput(index);
			}
		};

		check();
		nextPage(index);

		next.addEventListener("click", nextPage);
		prev.addEventListener("click", prevPage);
	}

	CheckForm(checkFilled) {
		let fr = document.querySelectorAll(".form");
		let st = document.querySelectorAll(".select");
		let tool = this;

		st.forEach((s) => {
			let i = s.querySelector("input");
			let o = s.querySelector(".options");
			if (!o) return;
			let op = o.querySelectorAll(".option");
			let current = 0;
			let CURRENTHEIGHT;

			const optionActive = function (option, scrollDown) {
				if (option) {
					let style = getComputedStyle(option);
					let height = parseInt(style.height);

					CURRENTHEIGHT = height;

					op.forEach((oo) => oo.classList.remove("active"));
					option.classList.add("active");

					i.value = option.getAttribute("value");

					if (scrollDown) {
						o.scrollTop += height;
					} else {
						o.scrollTop -= height;
					}
				}
			};

			const find = function (value) {
				for (let i = 0; i < op.length; i++) {
					if (op[i].getAttribute("value") == value) {
						current = i;
						return op[i];
					}
				}
			};

			o.style.display = "none";

			i.setAttribute("readonly", true);

			let typed = "";

			s.addEventListener("click", function () {
				let sty = getComputedStyle(o);
				let d = sty.display;
				let dis = d == "block";
				let value = i.value;
				typed = "";

				st.forEach((ss) => {
					let op = ss.querySelector(".options");

					op.style.display = "none";
					ss.classList.remove("showed");
				});

				optionActive(value ? find(value) : op.item(0));

				o.style.display = dis ? "none" : "block";
			});

			s.addEventListener("keydown", function (event) {
				let key = event.keyCode;
				let down = true;

				typed += String.fromCharCode(key).toUpperCase();

				if (key == 40) {
					if (op.item(current + 1)) {
						current += 1;
						down = true;
						optionActive(op.item(current), down);
					}
				} else if (key == 38) {
					if (op.item(current - 1)) {
						current -= 1;
						down = false;
						optionActive(op.item(current), down);
					}
				} else if (key == 13) {
					o.style.display = "none";
				}
			});

			op.forEach((oopp) => {
				oopp.addEventListener("click", function () {
					let value = this.getAttribute("value");
					if (i) i.value = value;
				});
			});
		});

		fr.forEach((f) => {
			let fg = f.querySelectorAll(".form-group");
			let submit = f.querySelector("input[type=submit]");
			let all = f.querySelectorAll("input");

			const check = function () {
				if (!checkFilled) return;
				let target = all.length;
				let hasvalue = [];

				all.forEach((input) => {
					if (input.value.length != 0) {
						if (!input.parentNode.classList.contains("error")) {
							if (!input.parentNode.classList.contains("required-error")) {
								hasvalue.push(true);
							}
						}
					}
				});

				if (hasvalue.length == target) {
					submit.removeAttribute("disabled");
				} else {
					submit.setAttribute("disabled", true);
				}
			};

			fg.forEach((f) => {
				let inp = f.querySelectorAll("input");

				if (inp.length) {
					f.addEventListener("click", function () {
						inp.forEach((i) => i.focus());
						check();
					});
					inp.forEach((i) => {
						let rule = i.getAttribute("rule");
						let type = i.getAttribute("type");
						if (type) type.toLowerCase();

						if (rule && type == "PASSWORD") {
							i.addEventListener("change", function () {
								let check = tool.CheckPassword(this.value, rule);

								if (check) {
									f.classList.remove("required-error");
								} else {
									f.classList.add("required-error");
									console.log(tool.GetPasswordRule(rule).rule);
								}
							});
						}
						i.addEventListener("blur", function () {
							f.classList.remove("active");

							if (this.value.length == 0) {
								f.classList.add("error");
							} else {
								f.classList.remove("error");
							}
							check();
						});
						i.addEventListener("focus", function () {
							f.classList.add("active");

							if (this.value.length == 0) {
								// f.classList.add("error");
							} else {
								f.classList.remove("error");
							}

							check();
						});
						i.addEventListener("input", function () {
							if (this.value.length == 0) {
								// f.classList.add("error");
							} else {
								f.classList.remove("error");
							}

							check();
						});
					});
				}
			});
		});
	}

	GetPasswordRule(rule) {
		let RULES = [
			{
				rule:
					"Password should be [7 to 15 characters which contain only characters, numeric digits, underscore and first character must be a letter]",
				regex: /^[A-Za-z]\w{7,14}$/,
			},
			{
				rule:
					"Password should be [6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter]",
				regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
			},
			{
				rule:
					"Password should be [7 to 15 characters which contain at least one numeric digit and a special character]",
				regex: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/,
			},
			{
				rule:
					"Password should be [8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character]",
				regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/,
			},
		];
		return RULES[rule];
	}

	CheckPassword(password, rule) {
		rule = rule ? rule : 0;

		let RULEUSE = this.GetPasswordRule(rule);

		if (password.match(RULEUSE.regex)) {
			return true;
		} else {
			return false;
		}
	}

	// Mathematical

	PercentageOf(value, base) {
		return (value / base) * 100;
	}

	PercentageIf(percentage, base) {
		return (percentage / 100) * base;
	}

	// Others

	textRandom(len, especialChar, numbers) {
		let res = "";
		let texts = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		texts += texts.toLowerCase();

		texts += especialChar ? "!@#$%^&*()_+=-`][;" : false;

		for (let i = 0; i < len; i++) {
			res += texts.charAt(Math.floor(Math.random() * texts.length));
		}
		return res;
	}

	textCapitalize(text, index) {
		if (!text) return;
		let NewText = "";
		for (let i = 0; i < text.length; i++) {
			let letter = text[i];
			if (index == i) {
				NewText += letter.toUpperCase();
			} else {
				NewText += letter;
			}
		}

		return NewText;
	}

	// Arrays
	ArrayHighLength(array) {
		let highest = null;
		let lengths = [];

		for (let i = 0; i < array.length; i++) {
			if (!Array.isArray(array)) return highest;
			let length = 0;

			for (let j = 0; j < array[i].length; j++) {
				if (array[i][j]) {
					length++;
				}
			}

			lengths.push(length);
		}

		return Math.max(sort);
	}

	ArraysMove(arr, old_index, new_index) {
		while (old_index < 0) old_index += arr.length;
		while (new_index < 0) new_index += arr.length;
		if (new_index >= arr.length) {
			let k = new_index - arr.length;
			while (k-- + 1) arr.push(undefined);
		}
		arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
		return arr;
	}

	ArraysRandom(array, many) {
		let values = [];
		let index;
		many = many ? many : 1;

		for (let i = 0; i < many; i++) {
			if (array.length == 0) return values;
			index = Math.floor(Math.random() * array.length);

			values.push(array[index]);

			array.splice(index, 1);
		}

		return values;
	}

	ArrayHas(array, values) {
		if (!Array.isArray(array)) return;

		let arrays = [];

		for (let i = 0; i < array.length; i++) {
			if (!Array.isArray(array[i])) return;
			let status = false;

			for (let j = 0; j < values.length; j++) {
				if (array[i].includes(values[j])) {
					status = true;
				}
			}

			if (status) arrays.push(array[i]) && array.splice(i, 1);
		}

		return arrays;
	}

	ArrayShuffle(array) {
		return array.sort(() => Math.random() - 0.5);
	}

	ArrayCountHasValue(array) {
		for (let i = 0, c = 0; i < array.length; i++) {
			if (array[i]) c++;
		}
		return c;
	}

	// TITLES

	TitleChange(newTitle) {
		document.title = newTitle;
	}

	// URLS
	URLadd(obj) {
		Object.entries(obj).forEach((data) => {
			let key = encodeURIComponent(data[0]);
			let value = encodeURIComponent(data[1]);

			var s = document.location.search;
			var kvp = key + "=" + value;

			var r = new RegExp("(&|\\?)" + key + "=[^&]*");

			s = s.replace(r, "$1" + kvp);

			if (!RegExp.$1) {
				s += (s.length > 0 ? "&" : "?") + kvp;
			}

			//again, do what you will here
			this.URLchange(s);
		});
	}

	URLget(parameter) {
		let urlparameter = "";
		if (window.location.href.indexOf(parameter) > -1) {
			urlparameter = this.getUrlVars()[parameter];
		}
		return decodeURIComponent(urlparameter);
	}

	URLgetFrom(parameter, from) {
		let urlparameter = "";
		if (from.indexOf(parameter) > -1) {
			urlparameter = this.getUrlVars(from)[parameter];
		}
		return decodeURIComponent(urlparameter);
	}

	URLchange(url) {
		if (window.location.pathname !== url) {
			window.history.pushState(null, null, url);
		}
	}

	URLGetLast() {
		let path = location.pathname;
		let split = path.split("/");
		let last = split[split.length - 1];

		return last;
	}

	ArraytoUrl(arr) {
		let text = "";
		for (let i = 0; i < arr.length; i++) {
			text += arr[i];
			text += i != arr.length - 1 ? "/" : "";
		}

		return text;
	}

	getUrlVars(from) {
		let vars = {};
		let parent = from ? from : window.location.href;
		parent.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
			vars[key] = value;
		});
		return vars;
	}

	// Canvas

	// SVGS
	getNode(n, v) {
		n = document.createElementNS("http://www.w3.org/2000/svg", n);
		for (var p in v)
			n.setAttributeNS(
				null,
				p.replace(/[A-Z]/g, function (m, p, o, s) {
					return "-" + m.toLowerCase();
				}),
				v[p]
			);
		return n;
	}

	createSvg(svgattr, arr) {
		let svg = this.getNode("svg", svgattr);
		let tool = this;

		if (svgattr.viewBox) {
			svg.removeAttribute("view-box");
			svg.setAttribute("viewBox", svgattr.viewBox);
		}

		if (!Array.isArray(arr)) return svg;

		arr.forEach((obj) => {
			let name = obj[0];
			let arr = obj[1];

			arr.forEach((ob) => {
				tool.append(svg, tool.getNode(name, ob));
			});
		});

		return svg;
	}

	Run(array) {
		array.forEach((value) => {
			if (this[value]) {
				if (typeof this[value] == "function") {
					this[value]();
				}
			}
		});
	}
}
