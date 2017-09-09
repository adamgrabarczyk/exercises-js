







window.onload = function () {

    var box = document.getElementById("box");

    box.onclick = function () {

        var self = this;

        var howMuch = 0;

      var start = setInterval(function () {

self.style.left = (howMuch++) + "px";

if (howMuch > 1000) {

    clearInterval(start);
}

},10)

    };

};