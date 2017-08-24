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



    var info = document.getElementById("info");

    var testButton = document.getElementById("myForm").test;



    // var pw = "aAf4aasdsa";


    testButton.onclick = function (e) {

e.preventDefault();

        var pw = document.getElementById("myForm").pw.value;

        var regExpPAttern = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{7,}/ ;


        if (regExpPAttern.test(pw))

            document.getElementById("myForm").submit();
        else

        info.innerHTML = "za słabe hasło";


    }

    }