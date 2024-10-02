const firstName = "Mostafizur" ;
const lastName = "Rahman" ;

const fullName = firstName + " " + lastName ;
console.log(fullName) // when I here also added something I use quotation ..

const numb1 = 10 ;
const numb2 = 20 ;
const total= "The sum of " + numb1 + " and " + numb2 + " is " + (numb1 + numb2 ) ; // its too difficult to write but i also use here template string for more easy to execute code
console.log(total)

const a = 20 ;
const b = 30 ;

const result = `The sum of ${a} and ${b} is ${a+b}` // it is more flexible to write and its very easy .... its name backtick.....
console.log(result)

const number = [20, 30, 40 , 50 ] ;
const student = {
    name : "Mostafizur Rahman", 
    age : 20 ,
}

const kahiniDekh = `The sum of ${number[1]} and ${student.age} is ${number[1] + student.age}` // its added array and object also .. So its very powerful...
console.log(kahiniDekh)