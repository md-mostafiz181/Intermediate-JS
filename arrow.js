
// Function declaration
function name (firstName, lastName){
    return firstName + lastName ;
}

const fullName = name ("Mostafizur", "Rahman") ;
console.log(fullName)

// Function expression

const add = function (numb1, numb2){
    return numb1 + numb2 ;
}

const sum = add(5 , 7 ) ;
console.log(sum)

// Arrow Function 

const multiply = (a, b) => a * b ;
const mult = multiply (10, 10 ) ;
console.log(mult)

const jog = (numb1, numb2, numb3, numb4) => numb1 + numb2 + numb3 + numb4 ;
const result = jog(2,4,6,8);
console.log(result)

// Learning outcome : about function declaration, function expression and mostly arrow function