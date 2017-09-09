

window.onload = function () {


    var slideShow = document.getElementById("images");


    var imagesSrc = ["img1.png","img2.png","img3.png"];



    for (var i = 0; i < imagesSrc.length; i++){


        var image = new Image();

        image.src = "images/"+imagesSrc[i];


        slideShow.appendChild(image);

    };


    slideShow.childNodes[0].setAttribute("class", "current");




}