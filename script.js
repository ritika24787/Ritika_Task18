
// Change greeting message

let heading = document.getElementById("heading");
let userName = document.getElementById("userName");
let btn = document.getElementById("btn");

btn.addEventListener("click", function() {

    if (userName.value == "") {
        heading.innerText = "Please enter your name";
    } else {
        heading.innerText = "Hello, " + userName.value;
    }

});

// Change box colors

let boxes = document.querySelectorAll(".box");

boxes.forEach(function(box) {

    box.addEventListener("click", function() {
        box.style.backgroundColor = box.innerText.toLowerCase();
    });

});
