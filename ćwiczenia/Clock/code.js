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


function Clock(handler) {

    this.handler = handler;

    this.actualDate = new Date();

    this.start = function () {
        this.upDateHandler();
var seld = this;
        setInterval(function() {seld.addSecond(); seld.upDateHandler()}, 1000
            
        )
    }
    this.addSecond = function () {

        this.actualDate = new Date();
    }

    this.upDateHandler = function () {
        this.handler.innerHTML = this.actualDate.toLocaleTimeString();
    }


    //FORMAT


    this.getFormatedDate = function () {
        
    }

}



window.onload = function () {


    var info = document.getElementById("info");

var clock = new Clock(info);


clock.start();

}