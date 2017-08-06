/*
 onmouseover - gdy kursor myszy najedzie na element
 onmouseout - gdy kursor myszy opuście elemen
 onmousemove - gdy kursor myszy "jeździ" po elemencie.
 onclick = gdy element zostanie kliknięty
 ondblclick = gdy element zostanie 2x szybko kliknięty

 onclick to tak naprawdę:

 onmousedown - gdy mamy wciśnięty przycisk myszy
 onmouseup - gdy opuścimy przycisk myszy
 */

function movingImage(e, objToMove) {
    objToMove.style.left  = e.clientX - objToMove.width /2 + "px";
    objToMove.style.top = e.clientY - objToMove.height/2 + "px";

}





window.onload =  function () {

    var img = document.getElementById("img");

img.onmousedown = function () {

    var self = this;

    document.onmousemove = function (e) {
movingImage(e, self);

    };
};

img.onmouseup = function () {
    document.onmousemove = null;
};

img.ondragstart = function (e) {

    e.preventDefault();
}


};



































