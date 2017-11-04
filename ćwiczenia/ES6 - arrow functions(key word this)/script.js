

function Counter() {
    this.count = 0;
    setTimeout(() => {            //arow function ustawia kontekst taki jak w funkcji wyzszego rzedu
        this.count++
        console.log(this.count);
    }, 1)

};


var c = new Counter;




let product = {
    id: 293,
    showId: function () {
        return this.id
    }
}


console.log(product.showId());