




// NodeList - lista węzłów obiektowego modelu dokumentu - mozemy tworzyc latwo zapytania o elementy html




window.onload = function () {

    const paragraphs = document.querySelectorAll("p");


    for (const p of paragraphs) {
        p.className = 'blue';
    }

}










