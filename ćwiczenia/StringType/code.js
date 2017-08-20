
/*
 substring/slice - potnij od / do
 substr - tnie od / ILE MA POCIAC
 split - rozdzielić na tablicę string
 join - łączy tablicę elmentów w string
 replace - podmiana
 trim - usunięcie białych znaków z lewj i prawej strony stringa
 lastIndexOf - ostatni indeks elementu w stringu
 indexOf - pierwszy indeks elementu w stringu
 search
 []
 */




window.onload = function () {


var info = document.getElementById("info")

    info.innerHTML = "test";


var tmp = new String("adAm");

tmp = tmp.charAt(0).toUpperCase() + tmp.slice(1).toLowerCase();

    // info.innerHTML = tmp;


    var link = "https://codepen.io/redfrost/pen/QwWMwb";


var tmpString = "XHTML PHP Java JS";

var tmpArray = tmpString.split(' ');

    // info.innerHTML = link.slice(link.lastIndexOf("/")+ 1);

    var resultString = tmpArray.join(', ')

    // info.innerHTML = tmpArray[1];
info.innerHTML = resultString;

}