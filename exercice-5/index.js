window.addEventListener("DOMContentLoaded", () => {
    let more = document.querySelector("span");
    let section = document.querySelector("section");
    let details = section.classList;
    
    more.addEventListener("click", (event) =>{
        if(section.classList === "closed") {
            let open = details.toggle("open")
        }
        else {
            let closed = details.toggle("closed")
        }
    });
});