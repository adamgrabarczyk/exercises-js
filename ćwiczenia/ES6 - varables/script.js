

//
// function showOrderValue() {
//
//     var  orderValue = 320;
//
//     if ( orderValue >= 100) {
//
//         let newOrderValue = orderValue - orderValue *0.1 // zmienne definiowane za pomocą let maja swoj scope tylko w bloku w ktorym zostaly zdefioniowane
//      }
//
//     alert(newOrderValue);
//
// }
//
//
// showOrderValue();




let score = 10;

let x = 1 ;

if ( x == 1) {

    let score = 20;
    console.log(score);
}


const env = 'DEV';
{
    const env = 'PRO';
}
console.log(env);



const config = {};
config.env = 'DEV';
config.env = 'PRO';


console.log(config.env);