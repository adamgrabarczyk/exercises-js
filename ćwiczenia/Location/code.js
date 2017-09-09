



window.onload = function () {

    var info = document.getElementById("info");

    var sample = document.getElementById("sample");

    
    
    sample.onclick = function (e) {


        e.preventDefault();


        window.location = this.getAttribute("href");
    }

info.innerHTML = window.location;



}