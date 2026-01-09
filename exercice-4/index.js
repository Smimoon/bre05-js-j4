window.addEventListener("DOMContentLoaded", () => {
    let button1 = document.getElementById("tab-1");
    let button2 = document.getElementById("tab-2");
    let button3 = document.getElementById("tab-3");
    let p1 = document.getElementById("tab-1-content");
    let p2 = document.getElementById("tab-2-content");
    let p3 = document.getElementById("tab-3-content");
    
    button1.addEventListener("click", (event) => {
        p1.style.display = "block";
        if(p2.style.display === "block" || p3.style.display === "block") {
            p2.style.display = "none";
            p3.style.display = "none";
        }
    });
    button2.addEventListener("click", (event) => {
        p2.style.display = "block";
        if(p1.style.display === "block" || p3.style.display === "block") {
            p1.style.display = "none";
            p3.style.display = "none";
        }
    });
    button3.addEventListener("click", (event) => {
        p3.style.display = "block";
        if(p2.style.display === "block" || p1.style.display === "block") {
            p2.style.display = "none";
            p1.style.display = "none";
        }
    });
})