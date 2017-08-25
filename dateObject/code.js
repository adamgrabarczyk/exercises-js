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



window.onload = function () {

var info = document.getElementById("info");



// info.innerHTML = today.getDate() + "/" + (today.getMonth()+1)+ "/" + today.getFullYear();

    var today = new Date;
var tomorow = new Date(today.getTime() + 1000*60*60*24);


    info.innerHTML = tomorow.getDay();

}