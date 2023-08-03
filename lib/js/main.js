let submit = document.getElementById('submit_button');
let mainTitle = document.getElementById("main_title");
let titleInput = document.getElementById("title_input");
let nounInput = document.getElementById("noun");
let verbInput = document.getElementById("verb");
let adjectiveInput = document.getElementById("adjective");

submit.onclick = function(event) {
    event.preventDefault();
    myFunction();

    // Check if any field is left blank
    if (titleInput.value === "" || nounInput.value === "" || verbInput.value === "" || adjectiveInput.value === "") {
        alert("Please fill in all fields");
    }
}

function myFunction() {
    let x = document.getElementById("main_title");
    x.innerHTML = document.getElementById("title_input").value;
}

document.getElementById("title_input").onchange = function() {
    myFunction();
}

titleInput.addEventListener("input", function() {
    // Update the main_title with the current value of the titleInput
    mainTitle.textContent = titleInput.value;
})