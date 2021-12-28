console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Form submitted successfully.")
}

function compliment(){
	alert("you're cute")
}

let form = document.querySelector('form#contact');

form.addEventListener('submit',handleSubmit);

document.querySelector('img').addEventListener('mouseover',compliment)