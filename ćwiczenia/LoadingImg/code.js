
var i =1;


function loadMoreImg () {

    if (i<4) {

        var images = document.getElementById("images")

        var image = new Image();

        image.src = "images/img" + (i++) + ".png"

        images.appendChild(image)

        if (i !== 4) {
            var buttonClone = this.cloneNode(true);
            buttonClone.onclick = loadMoreImg;


            document.body.appendChild(buttonClone);
        }
    }
    this.parentNode.removeChild(this);
    }


window.onload = function () {

    var button = document.getElementById("button");


button.onclick = loadMoreImg;



}