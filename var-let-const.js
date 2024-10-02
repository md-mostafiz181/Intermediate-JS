// difference between var let and const variable

const money = 40 ;
// money = 50 ;

console.log(money) // we can't reassign constant variable.. but when we want to reassign any variable we can use let variable.. [NOTE : Not use var variable in anymore]


let man = 1000 ;
let rich = man + 2000 ;
console.log(rich) // Here I use let variable to reassign to the value of man... so I use let variable here.....

// Variable conflict in array methods

const friends = ["Rizu", "Shanto", "Motiur", "Nijami", "Johurul"] ;
friends[2]= "Khuni" ; 
// friends = ["Mamun"] // we can't change the array methods totally when I use constant variable but I can push any value in the array only.
friends.push("Mamun") // Here I successfully push mamun in this array by using array.push()
console.log(friends)

// variable conflict in object

let student = {
    name : "mostafizur rahman" ,
    class : 10
}

student = {
    name : "Tasnim"
}

// when I use const variable in the student it occurs an error but when I use let variable It runs successfully.
console.log(student)

// variable conflict in loop

for(let i = 0 ; i <= 10 ; i++){
    console.log(i)
}