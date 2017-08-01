
//
// var produkty = [
//
//     "PHP",
//     "JS",
//     "HTML&CSS"
// ];
//
// produkty[produkty.length] = "PDP";
//
// // alert(produkty[0]);
//
//
// /**************************/
//
//
//
// var ul = document.getElementById("kursyProgramowania");
//
// var li = ul.getElementsByTagName("li")
//
// alert(li[2].innerHTML);



/******************************************************/

var produkty = [
    "PHP",
    "SQL",
    "JS",
    "Java",
    "C++",
    "C#"

]


var tmp = ["Front-End", "Back-End"]


produkty[produkty.length] = "Pascal"


document.getElementById("result").innerHTML = produkty.join("<br >");

document.getElementById("result").innerHTML += "<br>-----------</br>";

document.getElementById("result").innerHTML += produkty;






























