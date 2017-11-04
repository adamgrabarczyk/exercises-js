




let set = new Set();

set.add(10);                //wartośći koniecznie muszą być unikalne (nie powtarzaja sie)
set.add(20);
set.add('ok');
set.add(true);

console.log(set.has(10)); 

for (const v of set)
{
console.log(v);}