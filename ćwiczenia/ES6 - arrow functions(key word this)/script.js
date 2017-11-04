

function Counter() {
    this.count = 0;
    setTimeout(() => {            //arow function ustawia kontekst taki jak w funkcji wyzszego rzedu
        this.count++
        console.log(this.count);
    }, 1)

};


var c = new Counter;


//
//
// let product = {
//     id: 293,
//     showId: () => this. id
// }
//
//
// console.log(product.showId());
//
//
//
// let Product = () => {};
//
//
// let p = new Product();



// let car = () => {id: 1245};  // undefined bo nie potrafi odczytac tego jako literału obiektowego tylko jako ciało funkcji

let car = () => ({id: 1245});

console.log(car());