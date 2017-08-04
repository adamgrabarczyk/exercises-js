


window.onload = function () {

    var topButton = document.getElementById('topButton');



    window.onscroll = function () {
        var scroll = document.getElementById('test');

        var topButton = document.getElementById('topButton');

        scroll.innerHTML = window.pageYOffset;


        var yScroll = window.pageYOffset

        if(yScroll > 200)
topButton.style.display = "block";
        else
            topButton.style.display = "none";

    };


    topButton.onclick = function () {

        window.scrollBy(0, -1 * window.pageYOffset);

    }

}









































