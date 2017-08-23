/*
 REGEXP
 regular expression - regularne wyrażenia

 stringDoPrzeszukania.search(wzór) - szuka i zwraca indeks
 stringDoPrzeszukania.match(wzór) - szuka i zwraca w postaci tablicy
 regExp.exec(stringDoPrzeszukania) - to samo co wyżej tyle, że nie działa flaga global i zwracana jest tylko jedna wartość
 stringDoPrzeszukania.replace(wzór, "naCO"); - podmienia
 wzór.test(stringDoPrzeszukania); - sprawdza, czy po prostu coś takiego się znajduje w stringu


 g - global - po całym stringu
 i - insensitive (nieczuły na wielkość znaków)

 */



window.onload = function () {


    var info = document.getElementById('info');

    var indeksy = "A-56 B-12  K-51 A-53 A.45";

    // var result = indeksy.match(/A\.[0-9]{1,}/g);

    var imie = "Dąręk";


    var src = "obrazek.jpg"

    // var result = imie.match(/^[A-Z][a-zA-Z]+/g);

    var  result = src.match(/jpg|png/gi)


var regExp = /A\.?\d{1,}/g

    regExp.exec(indeksy)



var kodPocztowy = "80-271";

    var czyKod = /[0-9]{2}-{0,1}[0-9]{3}/.test(kodPocztowy);




    info.innerHTML = czyKod;

}


// 16.00 koniec