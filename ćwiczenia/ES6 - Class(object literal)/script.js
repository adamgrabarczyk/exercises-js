
function getPErson(name, age) {

    return {
        name,
        age,
checkAge() {
            if (this.age >= 18)
            {return true}else
            {return false}
        }

    };
};


let p =getPErson("tomek", 19);


console.log(p);

console.log(p.checkAge());