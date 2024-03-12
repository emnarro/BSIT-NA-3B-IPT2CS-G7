document.addEventListener('DOMContentLoaded', function () {
    var typed = new Typed(".text", {
        strings: ["BSIT STUDENT", "Motorcycle Enthusiast", "3rd Year Student", "PC Builder"],
        typeSpeed: 200,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
});

let myDocument = document.documentElement;
let btn = document.getElementById("btn");

btn.addEventListener("click", ()=>{
    if(btn.textContent == "Go Fullscreen"){
        if(myDocument.requestFullscreen){
            myDocument.requestFullscreen();
        }
        else if(myDocument.msRequestFullscreen){
            myDocument.msRequestFullscreen();
        }
        else if(myDocument.mozRequestFullscreen){
            myDocument.mozRequestFullscreen();
        }
        else if(myDocument.webkitRequestFullscreen){
            myDocument.webkitRequestFullscreen();
        }

        btn.textContent = "Exit Fullscreen";
    }
    else{
        if(document.exitFullscreen){
            document.exitFullscreen();
        }
        else if(document.msexitFullscreen){
            document.msexitFullscreen();
        }
        else if(document.mozexitFullscreen){
            document.mozexitFullscreen();
        }
        else if(document.webkitexitFullscreen){
            document.webkitexitFullscreen();
        }

        btn.textContent = "Go Fullscreen";
    }
});