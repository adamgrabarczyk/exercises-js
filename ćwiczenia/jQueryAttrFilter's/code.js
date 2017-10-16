





$('document').ready(
function () {

// $('img[alt]').css("border", "2px solid blue");
// $('img[src="git.svg"]').css("border", "2px solid blue");

    // $('img[alt != "git"]').css("border", "2px solid blue"); // rózny od alt ..


    // $('img[src$=".png"]').css("border", "2px solid blue"); // konczy sie na png

    // $('img[src^="git"]').css("border", "2px solid blue"); // zaczyna sie od ..


    $('img[src*="."]').css("border", "2px solid blue");

}
    
);