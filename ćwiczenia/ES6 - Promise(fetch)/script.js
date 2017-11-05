

// metoda fetch zwraca promise dlatego uzwamy then









const image = document.querySelector('img');


fetch('desktop.png').then(function (response) {

    // console.log(response);

return response.blob();

}).then(function (blob) {
    let imageURL = URL.createObjectURL(blob);

    image.src = imageURL;
});


