



// Checkbox validation


window.onload = function () {

    var myForm = document.getElementById("myForm");
    var button = document.getElementById("myForm").submitButton;

    var info = document.getElementById("info");


    button.onclick = function (e) {

var tmp = "";


        for (i = 0; i < myForm.name.length; i++)
        {
            if(myForm.name[i].checked)

        tmp += myForm.name[i].value + " ";
        }

info.innerHTML += tmp + "<br>";

        e.preventDefault();
    }



// Radio validation

    myForm.akceptacjaRegualminu[0].onclick = function () {

      button.disabled = false

    }

    myForm.akceptacjaRegualminu[1].onclick = function () {

        button.disabled = true

    }



}





