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
        this.handler.innerHTML = this.getFormatedDate();
    }


    //FORMAT


    this.getFormatedDate = function () {

        var hours = this.actualDate.getHours();
        var minutes = this.actualDate.getMinutes();
        var second = this.actualDate.getSeconds();


        if(hours <10)
            hours = "0" + hours

        if(minutes <10)
            minutes = "0" + minutes

        if(second <10)
            second = "0" + second



        var suffix = "";
        if (hours < 12)
suffix = "AM"
        else
            hours -= 12;
            suffix = "PM"
        return hours + ":" + minutes + ":" + second + " " + suffix;
    }

}



window.onload = function () {


    var info = document.getElementById("info");

var clock = new Clock(info);


clock.start();

}