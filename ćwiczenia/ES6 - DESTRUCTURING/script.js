
//
// var numbers = [1, 2, 3, 4, 5];
//
//
//  var [a, b, c]  = numbers;
//
//  alert(a);
// alert(b);
// alert(c);
//
//
// var x = 1;
//
// var y = 2;
//
// [x, y] = [y,x];
//
// alert(x);
// alert(y);
//



var person = {

    name: 'tomek',
    age: 30,
    // city: "Gdańsk"

}


var {name: n, age: a, city: c = "Gdańsk"} = person;

// alert(n);
// alert(a);
// alert(c);









function getNumbers() {

    return[1,2,3,4,5];

}


var [ab, cd, ef] = getNumbers();


alert(ab);
alert(cd);
alert(ef);




















