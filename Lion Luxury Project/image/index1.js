//initialising AOS
AOS.init();


function ShowMenu(){
    var box = document.querySelector(".box");
    var menu = document.querySelector(".menu");
    box.addEventListener("click", () => {
        menu.classList.toggle("ShowMenu");
        box.classList.toggle("toggle");
    });
}
ShowMenu();