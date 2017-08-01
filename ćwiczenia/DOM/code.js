/*
 nodeName	nazwa węzła (najczęściej nazwa tagu)
 nodeValue	wartosć węzła
 parentNode	rodzic węzła
 childNodes	tablica dzieci danego obiektu
 firstChild	pierwsze dziecko (węzeł)
 lastChild	ostatnie dziecko (węzeł)
 previousSibling	zwraca poprzedni węzeł na tym samym poziomie (jego krewniaka)
 nextSibling         zwraca następny węzeł na tym samym poziomie (jego krewniaka)
 attributes          tablica atrybutów elementu
 attributes[indeks].nodeValue zwraca wartość atrybutu
 lepiej stosować funkcję getAttribute("nazwa")
 textContent zawartość tekstowa JEST WSPIERANY OD IE 9 >
 innerHTML   zawartość HTML

 setAttribute("nazwaAtrybutu", "wartosc atrybutu");
 removeAttribute("nazwaAtrybutudousuniecia");

 */



//
// var kursyProgramowania = document.getElementById("kursyProgramowania");
//
// alert(kursyProgramowania.setAttribute("class", "zaminaKoloru"));
//
// var tmp = kursyProgramowania.childNodes[1].parentNode.getAttibute("id");
//
// alert(tmp);



/***********************************************************************/



// QuerySelector



// var kursy = document.getElementById("kursyProgramowania").getElementsByTagName("li");
//
// alert(kursy[0].innerHTML);






var kursy = document.querySelector("#kursyProgramowania li");

alert(kursy.innerHTML);









































