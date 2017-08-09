

function stopWacht(uchwytStopera, liczba) {
    uchwytStopera.innerHTML = --liczba;
}




window.onload = function () {

var poczatkowaWartosc = document.getElementById("poczatkowaWartosc").value;
    var odpalStoper = document.getElementById("odpalStoper");
    var zatrzymajStoper = document.getElementById("zatrzymajStoper");

    var uchwytStopera = document.getElementById("uchwytStopera");


    odpalStoper.onclick = function () {
        uchwytStopera.innerHTML = poczatkowaWartosc;
        stopWacht(poczatkowaWartosc);
    };


};



























