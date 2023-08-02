//git check
let submit = document.getElementById('submit_button');

submit.onclick = function(event) {
   event.preventDefault();
}

function myFunction() {
    let x = document.getElementById("main_title");
    x.innerHTML = document.getElementById("title_input").value;
  }

document.getElementById("title_input").onchange = function() {
    myFunction()};

