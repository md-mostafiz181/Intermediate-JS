const getAge = (person)=> person.name ;

const student = {
    name : "mosta" ,
    age  : 20 
}

const name = getAge(student);
console.log(name)


const getThird = numbers => numbers[3];
const third = getThird([2,4,5,6,7])
console.log(third);

// large arrow function 

const doMath = (x,y,z)=>{
    const sum = x + y + z ;
    const multiply = x * y * z ;
    const result = sum + multiply ;
    return result ;
}

const total = doMath (5,3,4) ;
console.log(total)