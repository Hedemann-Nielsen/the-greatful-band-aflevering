// Validering af kontakt formular
const submitBtn = document.getElementById("submit");
let myName = document.getElementById("name");
let myEmail = document.getElementById("email");

const myForm = document.getElementById("form");

//Lytter efter et klik på knappen
submitBtn.addEventListener("click", submitClick);

function submitClick(event) {
	//Sørger for at siden ikke reloader når der trykkes på knappen
	event.preventDefault();

	//Forvendt alt er rigtigt
	let validated = true;

	//tjek om navn email og telefonnummer er korrekte ifølge funktionerne. Er alt ok, sendes der en alert boks med en besked
	validated = validateName(myName.value);
	validated = validateEmail(myEmail.value);

	//og formularens input felter rydes.
	if (validated) {
		alert(
			"Woohoo! 🤘 We have caught your wild sign up for our awesome newsletter! You are now officially in the club of the cool and the well-informed. 🎸 So keep an eye on your inbox, where we'll send you a steady stream of laughs, knowledge and maybe even a little magic! ✨ Don't hesitate to give us a high-five the next time you see our emails pop up - it's going to be greatful! 🖐️"
		);
		clearForm();
	}
}

//navn
//Tjek om navnet i feltet til navn er korrekt udfyldt
function validateName(name) {
	//navnet skal have minimum 2 tegn
	if (name.length < 2) {
		//hvis navnet ikke har 2 tegn, farves borderen rød og bliver større
		myName.style.border = "3px solid #ff2222";

		return false;
	} else {
		return true;
	}
}

// E-mail
//Tjek om Email feltet er korrekt udfyldt
function validateEmail(email) {
	//emailen skal have minimum et @ og et .
	const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (validation.test(email)) {
		return true;
	} else {
		//ellers bfarves borderen rød
		myEmail.style.borderBottom = "3px solid #ff2222";
		return false;
	}
}

//ryd felterne i formularen når der trykkes på knappen og alle værdier er korrekte.
function clearForm() {
	myName.value = ""; // Sæt værdien til en tom streng
	myEmail.value = "";

	myName.style.borderBottom = "3px solid #fcfcfc";
	myEmail.style.borderBottom = "3px solid #fcfcfc";
}
