




function createTooltips() {

    var elementsWithtooltips = document.getElementsByClassName("tooltip");

for (var i = 0; i < elementsWithtooltips.length; i++)
{

elementsWithtooltips[i].addEventListener("mouseover", function () {

    alert("siema");

})

}

}


window.onload = function () {

createTooltips();

    var mainImage = document.getElementById("mainImage");

    var image = new Image();

    mainImage.appendChild(image);

    var thumbnails = document.getElementsByClassName("thumbnail");

    var currentThumbnail = thumbnails[0];

image.src = currentThumbnail.getAttribute("src");

currentThumbnail.className += " current"
    // image.src = "img/img1.png";  poor solution



    for (var i = 0; i < thumbnails.length; i++) {

         thumbnails[i].addEventListener("mouseover", function() {

             currentThumbnail.className = currentThumbnail.className.replace("current", "");

             currentThumbnail = this;

             currentThumbnail.className += " current"; 

image.src = this.getAttribute("src");

         });
    }


}