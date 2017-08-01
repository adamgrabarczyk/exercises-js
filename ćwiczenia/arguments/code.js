

function addNumbers() {

    var suma = 0;


    // 1 rozwiązanie

//     for (i = 0; i < arguments.length; i++) {
//         suma += arguments[i];
//     }
//     return suma;

    // 2 roziwązanie

    for (property in arguments) {

        suma += arguments[property];
    }
return suma;


}




var suma = addNumbers(1, 50, 13 ,8, 5);

alert(suma);






