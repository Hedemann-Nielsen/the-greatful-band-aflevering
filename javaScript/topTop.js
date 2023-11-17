goToTopBtn = document.getElementById("goToTop");

goToTopBtn.addEventListener("click", (e) => {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
});
