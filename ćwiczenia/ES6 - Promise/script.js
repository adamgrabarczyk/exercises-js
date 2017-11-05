
// premise to obiekt/classa

let x = 2;


let p = new Promise(function (resolve, reject) {

if (x == 1){
    resolve('ok');
}else {
    reject(Error('błąd'));
}

});



// console.log(p);

p.then(function(result){

    console.log(result);

}).catch(function (error) {
    console.log(error);
})



////////////////////////////////////////////



let p1 = new Promise((resolve, reject) => {

    resolve('Ok1');
});


let p2 = new Promise((resolve, reject) => {

    resolve('Ok2');
});


let p3 = new Promise((resolve, reject) => {

    resolve('Ok3');
});




Promise.all([p1, p2, p3]).then(results => {
    console.log(results);
}).catch(error => {
    console.log(error);
}) ;












