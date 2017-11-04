




let m = new Map();

m.set(1, 'React');
m.set(2, 'Angular');
m.set(3, 'Ember');

m.clear();

console.log(m);




for(const v of m) {console.log(v);
}


console.log(m.size);   // w przypadku tablicy mamy length a w przypadku MAP size

// m.delete(1);       usuwa wartosc 1 z obiektu
const r = m.get(1);

console.log(r);