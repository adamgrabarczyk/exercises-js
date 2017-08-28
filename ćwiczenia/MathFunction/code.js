/*
 Math.round() - zaokrąglenie do całości zgodnie z zasadami matematyki
 Math.ceil() - sufit - zawsze do góry
 Math.floor() - podłoga - zawsze w dół
 toFixed(ileMiejscPoPrzecinku);

 Math.abs() - wartość bezwględna z liczby
 Math.pow(x,y) - x^y

 parseInt
 parseFloat("2.567hahaasfasf");
 typeof

 Math.random(); - zwraca losową liczbę od 0 do 1

 */





window.onload = function () {


    var info = document.getElementById("info")

    var x = 20.6653;

    var y = -5;

    var z = "2.54sa"

    // info.innerHTML = Math.round(x); zaokragla matematycznie do całości


    // info.innerHTML = Math.floor(x); zaokrągla w dół


    // info.innerHTML = x.toFixed(2); wskazuje ilosc miejsc po przecinku


    // info.innerHTML = Math.abs(y); dziala jak wart.bezwzgledna i zmienia znak na dodatni

    // info.innerHTML = Math.pow(y, 2); podnosi do potegi wskazanej w 2 argumencie


    // info.innerHTML = Math.round(parseFloat(z));  przeparsowuje znaki na liczby


    info.innerHTML = Math.random(); // wybiera losowe wartosci ze zbioru




}

