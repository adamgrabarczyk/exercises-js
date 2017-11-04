

var sumValue =function (a, b) {
   return a + b
}

alert(sumValue(5,5));



const sumValuearrow = (a,b) => {

    return a +b

}

alert(sumValuearrow(5,8));


const sumValueShortArrow = (a,b) => a +b ;

alert(sumValueShortArrow(5,20));


const showValue = x => x;


alert(showValue(20));







let array = [10,20,30,40,50];

let sum = array.reduce(function (a,b) {
  return a + b;
})

alert(sum);