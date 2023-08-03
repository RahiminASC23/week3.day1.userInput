// git check
let submit = document.getElementById('submit_button');

submit.onclick = function(event) {
    event.preventDefault();

    let titleInput = document.getElementById("title_input");
    let nounInput = document.getElementById("noun");
    let verbInput = document.getElementById("verb");
    let adjectiveInput = document.getElementById("adjective");

    // Check if any field is left blank
    if (titleInput.value === "" || nounInput.value === "" || verbInput.value === "" || adjectiveInput.value === "") {
        alert("Please fill in all fields");
    } else {
        myFunction();
    }
}

function myFunction() {
    let x = document.getElementById("main_title");
    x.innerHTML = document.getElementById("title_input").value;
}

document.getElementById("title_input").onchange = function() {
    myFunction();
}
