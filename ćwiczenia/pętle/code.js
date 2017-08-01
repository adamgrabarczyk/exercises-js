

var kursy = [

    "Java",
    "SQL",
    "JS",
    "Pascal"
];


var rezultat = document.getElementById("result");

// var i = 0;

// while (i < kursy.length) {
//     rezultat.innerHTML += kursy[i] + "<br>";
//     i++;
// }


// rezultat.innerHTML += kursy[1];
// rezultat.innerHTML += kursy[2];
// rezultat.innerHTML += kursy[3];

/******************************************/

// do {
//
// alert(i);
// i++;
//
// } while ( i < 5);


var kursyProgramowania = document.getElementById("kursyProgramowania").getElementsByTagName("li");

var i = 0;

while ( i < kursyProgramowania.length) {

    if(kursyProgramowania[i].innerHTML === "C++") {

        rezultat.innerHTML += kursyProgramowania[i].innerHTML += " test" + "<br>";
        i++;
    }
    else
        rezultat.innerHTML += kursyProgramowania[i].innerHTML + "<br>";
    i++;
}

/*************************************************/
// PETLA FOR

for (var i = 0; i < 5; i++) {

    document.getElementById("result").innerHTML += i + "<br>";

}

/*********************************************/

// konstrukcja brake i continue

    var tutorial = document.getElementById("kursy").getElementsByTagName("li");

    for (var i = 0; i < tutorial.length; i++) {

        if( i % 2 !== 0 ) {

            tutorial[i].innerHTML = "parzysty: " + tutorial[i].innerHTML;
        }
        else
            continue
    }



for(var j = 0; j < 6; j++ ) {

        if (j === 4) {
            break;
        }
        alert(j);
}

/***************************************/

// PĘTLA FOR IN


var person = {

    imie: "Adam",
nazwisko: "Grabczyk",
    wiek: 15

};


var tutorials = document.getElementById("tutorials").getElementsByTagName("li");


var szkolenia =  [

    "Java",
    "SQL",
    "JS"

];



for (var property in tutorials) {
    if (typeof (tutorials[property]) !== "object")
break;

    alert(tutorials[property].innerHTML)
}





















































