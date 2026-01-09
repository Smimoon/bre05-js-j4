window.addEventListener("DOMContentLoaded", () => {
    let button = document.querySelector('button');
    let p = document.getElementById("text");
    let classes = p.classList;
    button.addEventListener("click", (event) => {
        let color = classes.toggle("red");
    });
});