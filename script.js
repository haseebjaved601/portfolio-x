document.getElementById("year").textContent = new Date().getFullYear();

const navToggle = document.querySelector(".nav__toggle");
const navLinks = document.querySelector(".nav__links");

navToggle.addEventListener("click", () => {
	navLinks.classList.toggle("is-open");
});

document.querySelectorAll(".nav__links a").forEach((link) => {
	link.addEventListener("click", () => {
		navLinks.classList.remove("is-open");
	});
});
