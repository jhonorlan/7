export class Calendar {
	constructor(obj) {
		let { el, month, day, year, datePoints, tdListener } = obj;

		this.currentDateName = "";
		this.element = el;
		this.datePoints = datePoints;
		this.month = month;
		this.day = day;
		this.year = year;
		this.tdListener = tdListener;

		// Other Information
		this.currentDayName = null;
		// Arrays
		this.weekName = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
		this.months = [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec",
		];

		this.monthsFullName = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December",
		];

		this.weeksFullName = [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday",
		];

		this.createUICallendar();
	}

	createUICallendar() {
		let today = new Date();
		// Elements
		let table_container = document.createElement("div"),
			table = document.createElement("table"),
			thead = document.createElement("thead"),
			tbody = document.createElement("tbody"),
			tr1 = document.createElement("tr");

		// Create Td for WeekName
		for (let i = 0; i < this.weekName.length; i++) {
			let th = document.createElement("th");
			let name = this.weekName[i];
			th.innerText = name;
			tr1.appendChild(th);
		}

		thead.appendChild(tr1);
		table.appendChild(thead);
		table.appendChild(tbody);
		table_container.appendChild(table);
		table_container.classList.add("calendar-table-container");
		table.classList.add("calendar-table");

		if (this.element) {
			this.element.appendChild(table_container);
		}

		this.table_container = table_container;
		this.table = table;
		this.tbody = tbody;
		this.thead = thead;

		this.month = this.month ? this.month - 1 : today.getMonth();
		this.year = this.year ? this.year : today.getFullYear();
		this.day = this.day ? this.day : false;

		this.createCalendar({
			month: this.month,
			year: this.year,
			day: this.day,
		});
	}

	createCalendar(obj) {
		let { month, year, day } = obj;

		let today = new Date(),
			date = 1,
			description,
			has_target = day ? true : false;

		this.tbody.innerHTML = "";
		this.currentMonth = month;
		this.currentYear = year;
		this.currentDay = day;

		this.addName();

		let firstDay = new Date(year, month).getDay();

		for (let i = 0; i < 6; i++) {
			let row = document.createElement("tr"),
				cell,
				cellText,
				span,
				p;

			for (let j = 0; j < 7; j++) {
				if (i === 0 && j < firstDay) {
					cell = document.createElement("td");

					cellText = document.createTextNode("");

					cell.appendChild(cellText);

					row.appendChild(cell);
				} else if (date > this.daysInMonth(month, year)) {
					break;
				} else {
					cell = document.createElement("td");

					cellText = document.createTextNode(date);

					span = document.createElement("span");

					span.appendChild(cellText);

					if (
						date === today.getDate() &&
						year === today.getFullYear() &&
						month === today.getMonth()
					) {
						description = document.createElement("div");

						description.classList.add("description");

						p = document.createElement("p");

						p.innerText = "Today";

						description.appendChild(p);

						cell.classList.add("todays-date");

						cell.appendChild(description);
					} // color today's date

					cell.appendChild(span);

					row.appendChild(cell);

					date++;

					if (has_target) {
						if (day == date - 1) {
							this.addEvent({
								cell,
								eventName: "Target",
							});
						}
					}

					if (this.datePoints) {
						let ArrDatePoints = Object.entries(this.datePoints);

						ArrDatePoints.forEach((points) => {
							let eventName = points[0],
								eventDate = points[1];

							if (
								eventDate["day"] == date - 1 &&
								eventDate["month"] == month + 1
							) {
								this.addEvent({
									cell,
									eventName,
								});
							}
						});
					}
				}
				this.tdListener
					? Object.entries(this.tdListener).forEach((listener) => {
							let tttt = this;
							cell.addEventListener(listener[0], function () {
								let day = this.querySelector("span").innerText;

								let event = false;

								Object.entries(tttt.datePoints).forEach((points) => {
									let eventName = points[0],
										eventDate = points[1];

									if (
										eventDate["day"] == day &&
										eventDate["month"] == month + 1
									) {
										event = eventName;
									}
								});

								listener[1]({
									year,
									month,
									day,
									event,
								});
								tttt.tbody.querySelectorAll("td").forEach((t) => {
									t.classList.remove("active");
								});
								this.classList.add("active");
							});
					  })
					: false;
			}
			this.tbody.appendChild(row);
		}
		this.createHeader();
	}

	daysInMonth(iMonth, iYear) {
		return 32 - new Date(iYear, iMonth, 32).getDate();
	}

	next() {
		this.currentYear = parseInt(this.currentYear);
		this.currentYear =
			this.currentMonth === 11 ? this.currentYear + 1 : this.currentYear;

		this.currentMonth = (this.currentMonth + 1) % 12;

		this.createCalendar({
			month: this.currentMonth,
			year: this.currentYear,
		});
	}

	previous() {
		this.currentYear = parseInt(this.currentYear);
		this.currentYear =
			this.currentMonth === 0 ? this.currentYear - 1 : this.currentYear;

		this.currentMonth = this.currentMonth === 0 ? 11 : this.currentMonth - 1;

		this.createCalendar({
			month: this.currentMonth,
			year: this.currentYear,
		});
	}

	jump(month, year) {
		this.createCalendar({
			month,
			year,
		});
	}

	open(month, year, day) {
		month -= 1;
		this.createCalendar({
			month,
			year,
			day,
		});
	}

	addEvent(obj) {
		let { cell, eventName } = obj;
		let description, p;

		description = document.createElement("div");

		description.classList.add("description");

		p = document.createElement("p");

		p.innerText = eventName.replace("_", " ");

		description.appendChild(p);

		cell.classList.add("targets-date");

		cell.appendChild(description);
	}

	addName() {
		this.currentDateName = `${this.months[this.currentMonth]} ${
			this.currentYear
		}`;
	}

	createHeader() {
		const UpperCaseFirstLetter = function (word) {
			if (word && word.length) {
				let First, Other, Length, result;
				Length = word.length;
				First = word.substr(0, 1);
				First = First.toUpperCase();
				Other = word.substr(1, Length);
				result = `${First}${Other}`;

				return result;
			}
		};
		if (this.table_container.querySelector(".calendar-header")) {
			this.table_container.querySelector(".calendar-header").remove();
		}
		let header = document.createElement("div"),
			h2 = document.createElement("h2"),
			buttons = document.createElement("div"),
			calendar = this;

		h2.innerText = this.currentDateName;

		h2.setAttribute("contenteditable", true);

		buttons.classList.add("buttons");

		for (let i = 0; i < 3; i++) {
			let button = document.createElement("div");

			button.classList.add("button");

			buttons.appendChild(button);

			if (i == 1) {
				button.classList.add("prev");

				button.innerText = "Prev";

				button.addEventListener("click", function () {
					calendar.previous();
				});
			} else if (i == 2) {
				button.classList.add("next");

				button.innerText = "Next";

				button.addEventListener("click", function () {
					calendar.next();
				});
			} else {
				button.classList.add("add");

				button.innerText = "Add Schedule";
			}
		}

		header.classList.add("calendar-header");

		header.appendChild(h2);

		header.appendChild(buttons);

		this.table_container.prepend(header);

		h2.addEventListener("input", function () {
			let InputDate = this.innerText,
				Split = InputDate.split(" "),
				MONTH = UpperCaseFirstLetter(Split[0]),
				YEAR = Split[1];

			if (!YEAR) return false;

			if (!MONTH) return false;

			if (YEAR.length == 4 && YEAR.length) {
				for (let i = 0; i < calendar.months.length; i++) {
					if (calendar.months[i] == MONTH) {
						calendar.createCalendar({
							month: i,
							year: YEAR,
						});
					}
				}
			}
		});
	}
}
