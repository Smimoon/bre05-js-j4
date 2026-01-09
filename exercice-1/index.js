window.addEventListener("DOMContentLoaded", () => {
    let button = document.querySelector('button');
    button.addEventListener("click", (event) => {
        let p = document.querySelector("p");
        p.style.color = "red";
    });
});
