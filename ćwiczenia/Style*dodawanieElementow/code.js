


var kursyProgramowania = document.querySelectorAll("#kursyProgramowania li");


// for(var index in kursyProgramowania) {
//     kursyProgramowania[index].style.color = "red";
// }


for(var i = 0; i < kursyProgramowania.length; i++) {
    kursyProgramowania[i].style.color = "red";
}


var x = document.createElement("p");

x.style.color = "blue";
x.className = "paaragraf";
x.innerHTML = "tekst";

var body = document.querySelector("body");

var paragraf = body.appendChild(x);





































