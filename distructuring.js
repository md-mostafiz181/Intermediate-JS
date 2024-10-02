
// object destructuring 
const student = {
    name : "Mostafizur Rahman" ,
    age : 29 ,
    education : "Masters is English" ,
    SkinColor : "Black",
    favHobby : "coding"
}

const {name, age, SkinColor, favHobby, education } = student ;
console.log(name, age , SkinColor, favHobby, education)

// Array destructuring 

const numbers = [1, 2 , 3] ;
const [first, second, third] = numbers ;
console.log(first, second)

//Skipping Elements: 

const friends = ["mofiz" , "kofiz" , "nofiz"] ;
const [firstFrnd , secondFrnd, ...rest] = friends ;


console.log(firstFrnd, secondFrnd, rest )