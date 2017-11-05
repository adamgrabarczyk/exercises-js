
// premise to obiekt/classa

let x = 1;


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