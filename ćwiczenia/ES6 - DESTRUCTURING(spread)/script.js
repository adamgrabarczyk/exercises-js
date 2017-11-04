

function sumValues(a, b, c) {
    return a + b + c;
}


var values = [3,2,7];

// var sum = sumValues.apply(null, values)

// alert(sumValues(...values));  // operator spread pozwala przekazac nam tablice jako parametr funkcji


var array1 = [10,20,30];

var array2 = [40,50,60];


array1.push(...array2);

alert(array1);