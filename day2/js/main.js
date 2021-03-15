//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

// let person3 = {
//     pizza:["Deep Dish","South Side Thin Crust"],
//     tacos:"Anything not from Taco bell",
//     burgers:"Portillos Burgers",
//     ice_cream:["Chocolate","Vanilla","Oreo"],
//     shakes:[{
//         oberwise:"Chocolate",
//         dunkin:"Vanilla",
//         culvers:"All of them",
//         mcDonalds:"Sham-rock-shake",
//         cupids_candies:"Chocolate Malt"
//     }]
// };


// // console.log(Object.values(person3));
// function likesList(){}
//     for(let i = 0; i < Object.keys(person3).length; i++){
//         if(Array.isArray(Object.values(person3)[i])){
//             for (let j = 0; j < Object.values(person3)[i].length; j++){
//                 if(typeof(Object.values(person3)[i][j]) === 'object'){
//                     for (let k = 0; < Object.keys(Object.values(person3)[i][j]).length; k++){
//                         console.log(Object.values(person3)[i][j][k].join(', '))
//                     }
//                 }else {
//                     console.log(Object.values(person3)[i][j])
//                 }
//                 }
//             }
//         } else{
//             console.log(Object.values(person3)[i])
//         }
//         }
//     }



//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype



function Human(name, age){
    this.name = name
    this.age = age

    this.Aging = (age) => {
            return age + 1
    };
    this.printInfo = () => {
        return `Human ${this.name} has been around the sun ${this.age} times.`;
    };
};
let Antonio = new Human('Antonio', 34)
console.log(Antonio.printInfo())
Antonio.age = Antonio.Aging(Antonio.age)
console.log(Antonio.printInfo())
Antonio.age = Antonio.Aging(Antonio.age)
console.log(Antonio.printInfo())
Antonio.age = Antonio.Aging(Antonio.age)
console.log(Antonio.printInfo())
// let count_up = (function() {
//     let counter = 0; // This will be our private variable
//     console.log('Hit');
//     return function() {return counter++}
// })()


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 



// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"

// .filter()
let long_names = group_of_names.filter( element => element.length > 4);


*/

const under10 = (astring) => {
    return new Promise ((resolve, reject) =>{
        if (astring.length <= 10) {
            resolve("Big Word");
        } else {
            reject("Small Number") 
        }
    })
};


under10(10).then((result) => {
    console.log("Big Word")
}).catch((error) => {
    console.log("Small Number", error)
})

console.log(under10('Jabra'))
console.log(under10('Thing that you wear on your ear'))