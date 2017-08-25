/*

 Manipulacja czasem z pomocą obiektu Date

 new Date()
 new Date(miliseconds) - ilość milisekund od 1 stycznia 1970 r
 new Date(year, month, day, hours, minutes, seconds, milliseconds) - tylko 3 pierwsze argumenty są wymagane,
 miesiące liczymy od 0
 new Date(dateString) gdzie dateString to data podana w formacie stringu zgodnie z założonymi normami
 np. YYYY-MM-DD, YYYY-MM, YYYY
 YYYY/MM/DD, MM/DD/YYYY - UWAGA MIESIĄC PODAWAĆ PRZED DNIEM
 */

Date.prototype.getMothPL = function () {

    var months = ["styczeń", "luty", "marzec", "kwiecień",
        "maj","czerwiec","lipiec","sierpien","wrzesien","pazdziernik",
        "listopad","grudzień"];

    return months[this.getMonth()];

};

//
// function getMonthFromNumber(monthNumber) {
//
//     var months = ["styczeń", "luty", "marzec", "kwiecień",
//         "maj","czerwiec","lipiec","sierpien","wrzesien","pazdziernik",
//         "listopad","grudzień"];
//
//     return months[monthNumber];
//
// }


function howMenyTime(from, to) {

    return "s:"+(from - to)/1000 + " " + "min:"+(from - to)/1000/60+ " " + "h:"+(from - to)/1000/60/60+ " " + "d:"+(from - to)/1000/60/60/24
}




window.onload = function () {

var info = document.getElementById("info");



// info.innerHTML = today.getDate() + "/" + (today.getMonth()+1)+ "/" + today.getFullYear();

    var today = new Date;
var tomorow = new Date(today.getTime() + 1000*60*60*24);

    // var tomorow = new Date(today.getFullYear(), today.getMonth(), today.getDay() + 3)
    // var tommorow = new Date("2017/08/26");

    // var monthPL = getMonthFromNumber(tommorow.getMonth());



    info.innerHTML = howMenyTime(tomorow, today);

}