





$('document').ready(
function () {


    // $("div > b").css("color", "red"); // znak oznacza ze ma byc bezposrednie dziecko

    // $("div.a, li.b").css("color", "red");

    $("#box + div").css("color", "red");  // pobierz tagi div które są obok tagu z identfikatorem #box

}
    
);