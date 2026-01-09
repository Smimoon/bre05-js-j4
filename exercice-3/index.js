window.addEventListener("DOMContentLoaded",() => {
    let text = document.getElementById("text");
    let hide = document.getElementById("hide");
    let show = document.getElementById("show");
    
    hide.addEventListener("click", () =>{
        text.style.display = "none";
    })
    
    show.addEventListener("click", () => {
        text.style.display = "block";
    })
})