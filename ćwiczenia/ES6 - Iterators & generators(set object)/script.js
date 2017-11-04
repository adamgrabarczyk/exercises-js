




let set = new Set();

set.add(10);                //wartośći koniecznie muszą być unikalne (nie powtarzaja sie)
set.add(20);
set.add('ok');
set.add(true);

set.delete(10);           // operujemy tylko i wylacznie na wartosciach bo nie ma kluczy

console.log(set.has(10));

for (const v of set)
{
console.log(v);}