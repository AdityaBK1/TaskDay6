//https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md

class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    static getPG(arr) {
        let pgArray = arr.filter((movie) => movie.rating == "PG");
        return pgArray;
    }
}

let a = new Movie("Casino Royale", "Eon Productions", "PG13");
let b = new Movie("Inception", "Warner Bros", "PG");
let c = new Movie("Iron Man", "Marvel Studios");
let d = new Movie("Orphan", "Dark Castle Entertainment", "PG13");
let e = new Movie("Cars", "Pixar", "G");

console.log(Movie.getPG([a, b, c, d, e]));

//

Output:

[
  Movie { title: 'Inception', studio: 'Warner Bros', rating: 'PG' },
  Movie { title: 'Iron Man', studio: 'Marvel Studios', rating: 'PG' }
]

//

                                                          //Write a “person” class to hold all the details.


class Person{
    constructor(height,age){
        this.a = height
        this.b = age
  
    }
    
    welcome(){
        return ("Nice to meet you")
    }
    
}

let obj1 = new Person("Aditya born on",2000)
let obj2 = new Person("age is",22)

console.log(`${obj1.a}  ${obj1.b}`)
console.log(obj2.a,obj2.b,obj2.welcome())


//
Output:

Aditya born on  2000
age is 22 Nice to meet you
//



                                                                     //write a class to calculate the uber price.


class Uber{
    constructor(base,startpoint,endpoint){
        this.a = base
        this.b = startpoint
        this.c = endpoint
  
    }
    
    cost(){
        return ((this.c-this.b)*this.a)
    }
    
}

let obj1 = new Uber(3,0,6)
let obj2 = new Uber(3,0,6)

// console.log(`${obj1.a}  ${obj1.b}`)
console.log("The cost for travelling in uber is Rs:",obj2.cost())

//
Output:
The cost for travelling in uber is Rs: 18
//


                                                 //    https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md


class Circle {
    constructor(radius,color) {
        this.radius = radius;
        this.color = color;
    
    }
    
    getRadius() {
        return this.radius;
    }

    getColor() {
        return this.color;
    }

    setRadius(rad) {
        this.radius = rad;
    }

    setColor(col) {
        this.color = col;
    }

    toString(){
        return `Radius : ${this.radius}, Color : ${this.color}`;
    }

    getArea(){
        return Math.PI * Math.pow(this.radius,2);
    }
    
     getCircumference(){
        return Math.PI * 2 * (this.radius);
    }

}

let a = new Circle()    
let b = new Circle(5.5) 
let c = new Circle(5.5, "red") 
console.log(b.getArea())
console.log(b.getCircumference())


//
Output:

95.03317777109125
34.55751918948772
//
//

