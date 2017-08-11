/*
 .options - tablica z możliwymi opcjami
 .length - ilość elementów w combo box
 .text - zawartość opcji tekstowa - można ją zmienić

 .value; - w evence onchange wartość opcji w atr. value lub tekstowa jeśli value brak

 .selectedIndex - indeks zaznaczonego elementu
 .add - funkcja dodająca nową opcję np.        var newOption = document.createElement("option");  newOption.text = "hej";
 .remove(indeks) - funkcja usuwająca element o indeksie


 */



window.onload = function () {

    var myForm = document.getElementById("myForm");

    var info = document.getElementById("info");

    var newOption = document.createElement("option");
    newOption.text = "PAscal";

    myForm.kursy.add(newOption);



    var kursy = myForm.kursy


    kursy.onchange = function () {


        info.innerHTML = kursy[kursy.selectedIndex].value;
    }

}