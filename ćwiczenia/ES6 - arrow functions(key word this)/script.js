

function Counter() {
    this.count = 0;
    setTimeout(() => {            //arow function ustawia kontekst taki jak w funkcji wyzszego rzedu
        this.count++
        console.log(this.count);
    }, 1)

};


var c = new Counter;