



window.onload = function () {


    var result = document.getElementById("result");

    var result1 = document.getElementById("result1");

    var result2 = document.getElementById("result2");

    var result3 = document.getElementById("result3");

    var button = document.getElementById("button");


    var tables = [result, result1, result2, result3];

    var players = ["LeBron James", "Carmelo Anthony", "Dwane Wade", "Chirs Paul"]


button.onclick = function () {


        tables.map(function () {

            for(var i = 0; i < tables.length; i ++)
            {
                tables[i].innerHTML = players[i];

            }
        })

}




}





























