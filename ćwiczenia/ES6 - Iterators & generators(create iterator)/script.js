






function createIterator(array) {

    let nextIndex = 0;

    return {
        next: function() {
       return nextIndex < array.length ?

           {value: array[nextIndex++], done: false} :

           {done:true};

        }
     };

}


let users = createIterator(['andrzej', 'madzia', 'zabka']);

console.log(users.next().value);
console.log(users.next().value);
console.log(users.next().value);
console.log(users.next().done);   //jessli done ma wartosc true tzn ze kolekcja sie wyczerpala





