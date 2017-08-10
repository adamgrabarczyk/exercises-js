/*
 keydown - gdy wciskamy jakikolwiek klawisz
 keypress - gdy wciskamy klawisz znakowy (1,2,3,4,a,b,c,d,', / etc.)
 keyup - gdy póścimy jakikolwiek klawisz

 onchange - gdy user zmieni zawartość i zmieni input
 onfocus - gdy user 'wejdzie' do inputa
 onblur - gdy stracimy focus (skupienie) - nie musi się nic zmienić

 e.which - kod klawisza........... znak = e.which || e.keycode by wspierać ie6-8

 charCode - kod znaku (tylko niektóre eventy) - nie używać - ma zostać usunięte
 */



function isNumber(valueToCheck) {

    return !isNaN(valueToCheck);
}


window.onload = function () {

    var poleLiczbowe = document.getElementById("myForm").poleLiczbowe; // elements[0]
    var poleTekstowe = document.getElementById("myForm").poleTekstowe;// elements[1]  - w taki spób też można pobierać elementy
var info = document.getElementById("info");

    poleLiczbowe.onkeyup = function (e) {

        if(isNumber(this.value) && this.value == "") {

            this.style.backgroundColor = 'green';
            info.innerHTML = "poprawne dane";
        }
        else {
            e.preventDefault();

            this.style.backgroundColor = "red";


            info.innerHTML = "wpisz liczbę";
        }};

}








