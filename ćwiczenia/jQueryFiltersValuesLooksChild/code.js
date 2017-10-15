





$('document').ready(
function () {


    // FILTRY PODSTAWOWE

// $('div:first').css("border", "2px solid blue");  pierwszy element

    // $('div:last').css("border", "2px solid blue"); ostatni element

    // $('div:even').css("border", "2px solid blue");  parzyste elementy


    // $('div:odd').css("border", "2px solid blue"); nieparzyste elementy

    // $('div:eq(2)').css("border", "2px solid blue");  z indeksem 2

    // $('div:gt(1)').css("border", "2px solid blue"); wysztskie z indeksem wiekszym od 1

    // $('div:lt(2)').css("border", "2px solid blue"); wszystkie z indeksem mniejszym od 2

    // $('div:not(div:eq(2))').css("border", "2px solid blue"); nie taki ktorego indeks jest równy 2


    // $("*:header").css("border", "2px solid blue"); //  wszystkie nagłówki


 //  - animated : tylko gdy jest aktualnie animowany



// FILTRY ZAWARTOŚCI


    $("div:contains('this')").css("border", "2px solid blue");

}

);