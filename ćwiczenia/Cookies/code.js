/*

 Cookies - ciasteczka to kontenery przechowujące wartości w postaci:
 klucz=wartość;klucz2=wartość2;
 WARTOŚCI TE SĄ DOSTĘPNE DLA NAS NAWET GDY UŻYTKOWNIK OPUŚCI JĄ
 przez co możemy identyfikować użytkownika przy ponownej wizycie


 path=/
 expires= - wygaszenie ważności ciastka domyślicznie po zakończeniu sesji (toUTCString())
 max-age= - maksymalny wiek cookie podany w sekundach (niewspierany w ie6-8)


 */



function createCookie(name, value, days) {

    var expires = "";

    if (days) {
        var time = new Date();

        time.setDate(time.getDate() + days)

        expires = ";expires=" + time.toUTCString();
    }

    document.cookie = name + "=" + encodeURIComponent(value) + expires + ";path=/"
}




function removeCookie(name) {

    var time = new Date();

    time.setTime(time.getTime()- 1)


    document.cookie = name + "=;expires="+time.toUTCString()+";path=/";

}


function getCookieByName(name) {

    var cookies = document.cookie.split("; ");

    for (var i = 0; i < cookies.length; i++) {

       var splitCookie = cookies[i].split("=");

       var cookiesName = splitCookie[0];

       if (cookiesName === name) {

           var cookieValue = splitCookie[1];

           return decodeURIComponent(cookieValue);

       }
    }


}

window.onload = function () {


    var info = document.getElementById("info");

    var button = document.getElementById("createCookie");

    var removebutton = document.getElementById("removeCookie");





    button.onclick = function () {



        // document.cookie = "name=Adam;expires="+ time.toUTCString();
createCookie("name","adam", 30);
        createCookie("surname","grabek;adada");
        // document.cookie = "name=Adam;max-age="+ 60*60 + ";path=/";
        // document.cookie = "surname=Grabek;max-age="+ 60*60 + ";path=/";


        info.innerHTML = getCookieByName("name");

    };


removebutton.onclick = function () {

    removeCookie("surname");
}



}














