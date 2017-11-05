

let s1 = Symbol('logowanie');   // symbole sa zawsze unikalne
let s2 = Symbol('logowanie');

console.log(s1 === s2);         // maja takie same wartosci ale nie sa identyczne






let person = {
    name: 'Adam',
    age: 40,
    city: "gdańsk"
}


let p = Symbol();

person[p] = '137';

// console.log(person);

for (let i  in person) {
    console.log(i);
}


console.log(person[p]);


console.log(Object.getOwnPropertySymbols(person));