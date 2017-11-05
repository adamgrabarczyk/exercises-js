



// class Article {
//
// }
//
//
//
// const  art = new Article();
//
//
//


const Article = class ArticleClass {}


const art = new Article();

console.log(art);





class Car {


    constructor(id, title) {
        this.id = id;
        this.title = title;
    }

    getId() {                       // moze byc wywolywane tylko na obiekcie danej klasy
        return this.id;

    }

    static compareId (a, b){

        const  id1 = a.id;
        const  id2 = b.id;

        if (id1 > id2) {
            return true;
        }else {
            return false;
        }

    }

}

const car = new Car(897, 'siema');

const car2 = new Car(567, 'papapa');

 console.log(Article.compareId(car,car2));
// console.log(car.getId());
//  console.log(car.id);
// console.log(car.title);