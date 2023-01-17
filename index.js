const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

function jsbuttonClick (e) {
    e.preventDefault();
    alert("Stop poking around!");
}

let myButton = document.querySelector(".jsbutton");
// myButton.addEventListener("click", jsbuttonClick ());
myButton.onclick = () => {
    alert("Stop poking around!");
};