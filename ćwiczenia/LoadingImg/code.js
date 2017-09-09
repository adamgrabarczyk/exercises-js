
var i =1;


function loadMoreImg () {

    if (i<4) {

        var images = document.getElementById("images")

        var image = new Image();

        image.src = "images/img" + (i++) + ".png"

        images.appendChild(image)


        var buttonClone = this.cloneNode(true);
buttonClone.onclick = loadMoreImg; 

        this.parentNode.removeChild(this);


        document.body.appendChild(buttonClone);
    }
    }


window.onload = function () {

    var button = document.getElementById("button");


button.onclick = loadMoreImg;



}