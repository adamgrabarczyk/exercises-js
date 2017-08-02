





var result = document.getElementById('result');

result.onclick = function() {

    alert("siema");

}





//*********************************************************

function zmienKolor() {

    this.className = "zaminaKoloru"

}

function zmienSpoerotem() {
    // this.className = "zmienSpoerotem"
    // this.className = "";
    this.removeAttribute("class");
}

// Przy dużych projektach uważaj na to żeby używać onload,gdyż asyn w srcipt w HTML'u może nie zostać odpowiednio szybko załadowane

// window.onload = function () {
//
//
//     var example = document.getElementById("example");
//
//
//     example.onmouseover = zmienKolor;
//     example.onmouseout = zmienSpoerotem;
//
//
// }

//***********************************************************

// addEventListener



function powiekszCzcionke() {

    var font = parseInt(window.getComputedStyle(this).fontSize);

    this.style.fontSize = (++font) + "px";
}



window.onload = function () {


    var sample = document.getElementById("sample");
    var stop = document.getElementById("stop");

sample.addEventListener("mouseover", zmienKolor);
    sample.addEventListener("mouseout", zmienSpoerotem);
    sample.addEventListener("mouseover", powiekszCzcionke);
    stop.addEventListener("click", function () {
        sample.removeEventListener("mouseover", powiekszCzcionke);
    })

}


//*************************************************************
//automatycznie przesyłany do funkcji  obiekt event


/*
 altKey, ctrlKey, shiftKey - czy podczas wywołania eventu były wciśnięte klawisze alt, ctrl, shift?
 button - które przyciski myszy zostały kliknięte (nie działa w każdym evencie)
 clientX, clientY - w którym miejscu jest mycha względem 0,0
 keyCode - zwraca w postaci liczby jaki klawisz został wciśnięty, String.fromCharCode(e.keyCode) zwróci jaka to wartość
 target.tagName - nazwa tagu elementu który wywołał zdarzenie wspierane w każdej przeglądarce prócz IE 6-8
 użyj srcElement dla IE na starcie można napisać: var srcElement = e.target ? e.target : e.srcElement;

 */

function wykonaj(event, str) {

    var e = event || window.event;



    var lala = document.getElementById("lala");


    lala.innerHTML = e.clientX + " " + str;

var tooltip = document.getElementById("tooltip");

tooltip.style.display = "block";

tooltip.style.left = e.clientX + 10 +  "px";
    tooltip.style.top = e.clientY + 10 + "px";
}


window.onload = function () {

    var test = document.getElementById("lorem");

    test.onmousemove = function (event) {

wykonaj(event, "jakis tekst");
    };

}














































