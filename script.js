let nameEl = document.querySelector("#name")
const submitBtnEl = document.getElementById("submit-btn")
const formContainerEl = document.querySelector("form")
let greetEl = document.getElementById("greet")
let clickBtnEl = document.getElementById("click-me-btn")

formContainerEl.addEventListener("submit", (event) => {
    event.preventDefault()
    nameInput = nameEl.value
    if(!nameInput) {
        alert("Please, enter your name!")
        return;
    }

    window.location.href = `main.html?userName=${nameInput}`;
    
})



