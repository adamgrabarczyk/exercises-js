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

    var indeksy = "A-56 B-12  K-51 A-53";

    var result = indeksy.match(/[0-9]{1,}/g);

    info.innerHTML = result;

}