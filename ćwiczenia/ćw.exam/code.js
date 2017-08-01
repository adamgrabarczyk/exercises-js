




var showHide = document.getElementById('new');


var button = document.getElementById('guzik');


button.onclick = function () {

    showHide.setAttribute("class", "hide");
// alert("zabka");
    button.innerHTML = "pokaż";

    if(button.innerHTML === "pokaż") {

        button.onclick = function () {

            showHide.removeAttribute("class");
            button.innerHTML = "wyślij";
        }
    }
}




































