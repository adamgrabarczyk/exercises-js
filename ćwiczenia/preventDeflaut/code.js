



window.onload = function () {
    var email = document.getElementById("input");
    var submit = document.querySelector("#test input[type='submit']");


    submit.onclick = function (e) {
        var tmp = document.getElementById('tmp');
        e.preventDefault();
        tmp.innerHTML = email.value;

this.parentNode.submit();
    }
submit.oncontextmenu = function (e) {

        var e = e || window.event;
        if(e.preventDefault)
            e.preventDefault();
        else
            e.returnValue = false;
};

}



























