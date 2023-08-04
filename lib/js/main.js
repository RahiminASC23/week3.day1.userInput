let submit = document.getElementById('submit_button');
let mainTitle = document.getElementById("main_title");
let titleInput = document.getElementById("title_input");
let nounInput = document.getElementById("noun");
let verbInput = document.getElementById("verb");
let adjectiveInput = document.getElementById("adjective");
let formContainer = document.querySelector(".form_container");
let storyResult = document.getElementById("story_result");

submit.onclick = function(event) {
    event.preventDefault();

    // Check if any field is left blank
    if (titleInput.value === "" || nounInput.value === "" || verbInput.value === "" || adjectiveInput.value === "") {
        alert("Please fill in all fields");
    }
    else{
        let storyText = "Last night I ate a " + nounInput.value + ", and today I just had to " + verbInput.value + ". What a " + adjectiveInput.value + " day!";
        
        formContainer.style.display = "none";
        storyResult.textContent = storyText;
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
