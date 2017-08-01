





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
















































