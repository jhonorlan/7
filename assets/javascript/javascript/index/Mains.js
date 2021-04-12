import { Tool } from "../../../../lib/Tooljs.js";
import { Calendar } from "../../modules/Calendar/js/Calendar.js";
import { Slideshow } from "../../modules/slideshow/js/Slideshow.js";

const Lists = document.querySelector("nav .lists");
const Links = Lists.querySelectorAll("ul .nav-links");
const Hamburger = document.querySelector(".hamburger");

const TOOL = new Tool();

function is850() {
	return innerWidth <= 850;
}

function EnrollNow(flag = false) {
	const enroll = document.querySelector("#enroll-now");

	if (!enroll) return;

	const items = enroll.querySelectorAll("#contents #content .item");

	const getTotal = function () {
		const totalel = items[items.length - 1].querySelector(".top span");
		let total = 0;

		items.forEach(function (item) {
			const span = item.querySelector(".top span");
			total += parseInt(span.innerHTML);
		});

		totalel.innerHTML = total;
	};

	const go = function () {
		items.forEach(function (item) {
			const span = item.querySelector(".top span");
			let goal = parseInt(span.innerHTML);
			let current = 0;
			let percent = 5;

			span.innerHTML = 0;

			const Timer = setInterval(function () {
				let add = TOOL.PercentageIf(percent, goal);
				if (current <= goal) {
					current += add;

					if (current > goal) {
						current = current - (current - goal);
					}
				} else {
					clearInterval(Timer);
				}

				span.innerHTML = Math.round(current);
			}, 100);
		});
	};

	const check = function () {
		if (!flag && TOOL.isInViewport(enroll)) {
			flag = true;
			go();
		}
	};

	getTotal();
	addEventListener("scroll", check);
	check(check);
}

function forSlideshow() {
	const slideshow = document.querySelector(".main-slideshow");

	if (!slideshow) return;

	const left = slideshow.querySelector(".row-1");
	const main = left.querySelector(".main-image");
	const next = left.querySelector(".button-container.right");
	const prev = left.querySelector(".button-container.left");
	const store = slideshow.querySelector(".row-2 .images");

	const imagepath = "./assets/media/image/campus/";
	const extension = ".jpg";
	const campus = [
		"Centennial Building",
		"Fr. Daniel Courtens, CICM Quadrangle",
		"Grade School Department",
		"Pre-School Department",
		"Admin Building",
		"College Department",
		"CCC Auditorium",
		"Centennial Gym",
		"Audio-Visual Room",
		"Computer Laboratory",
		"Learning Resource Center",
		"Dental Clinic",
		"Medical Clinic",
		"Science Laboratory",
		"Speech Laboratory",
		"Function Room",
	].map(function (c) {
		const image = new Image();
		image.src = `${imagepath}${c}${extension}`;

		return image;
	});

	new Slideshow(campus, { left, main, next, prev, store });
}

function Nav() {
	Hamburger.addEventListener("click", function () {
		Lists.style.display = isHidden(Lists) ? "flex" : "none";
	});
}

function Buttons() {
	TOOL.addListener(Links, {
		click: function () {
			if (!is850()) return;
			const hoverContainer = this.querySelector(".hover-container");
			if (!hoverContainer) return;
			hoverContainer.style.display = isHidden(hoverContainer) ? "flex" : "none";
		},
	});
}

function isHidden(el) {
	var style = window.getComputedStyle(el);
	return style.display === "none";
}

Nav();
Buttons();
EnrollNow();
forSlideshow();
