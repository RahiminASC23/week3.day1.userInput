let submit = document.getElementById('submit_button');
let mainTitle = document.getElementById("main_title");
let titleInput = document.getElementById("title_input");
let nounInput = document.getElementById("noun");
let verbInput = document.getElementById("verb");
let adjectiveInput = document.getElementById("adjective");

submit.onclick = function(event) {
    event.preventDefault();

    // Check if any field is left blank
    if (titleInput.value === "" || nounInput.value === "" || verbInput.value === "" || adjectiveInput.value === "") {
        alert("Please fill in all fields");
    }
    else{
        alert("Last night, I ate at a " + nounInput.value + " and today, I just had to" + verbInput.value + ". What a " + adjectiveInput.value + " day!");
        
    }
}

function myFunction() {
    let x = document.getElementById("main_title");
    x.innerHTML = document.getElementById("title_input").value;
}

// Update the main_title with the current value of the titleInput
titleInput.addEventListener("input", function() {
    mainTitle.textContent = titleInput.value;
})
