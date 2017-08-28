





window.onload = function () {

    var info2 = document.getElementById("info2")

    var cytaty = document.getElementById("cytaty")

    var cytat = ["Bezpowrotnie stracona jest każda chwila, której nie wypełnia miłość.",
    "Ludzie myślą czasem jak zabić czas, a to czas ich zabija","ylko życie poświęcone innym warte jest przeżycia.",
    "Największym złem, na które cierpi świat, jest nie siła złych, lecz słabość dobrych"];



    var autor = ["Torquato Tasso","Alphonse Allais",
    "Albert Eintstein","Monteskiusz"];


    var randomNumber = Math.floor(Math.random()*4);;


    info2.innerHTML = randomNumber;
cytaty.innerHTML = cytat[randomNumber];

}