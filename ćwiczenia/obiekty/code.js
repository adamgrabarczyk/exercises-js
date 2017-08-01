

var div = document.getElementById("point");

div.innerHTML = "ala nie ma kota";


var x = {

    imie: "Arek",
    nazwisko: "Gałka",
info: function () {
    return this.imie + " " + this.nazwisko;
},
    toString: function () {

        return this.imie + " " + this.nazwisko;
    }

};

function osoba(imie, nazwisko) {

    this.name = imie;
    this.surname = nazwisko;
    this.toString = function () {
        return this.name + " " + this.surname;
    }
}

var y = new osoba("Arek","Gałka");
var z = new osoba("Adam","Gałka");
var a = new osoba("Adrian","Gałka");

// alert(x.imie);

div.innerHTML = y + "<br>" + z + "<br>" + a;