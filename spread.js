const array1 = [1, 2, 3 ] ;
const array2 = [...array1] ; // copying array to another array
console.log(array2)


// marging array 

const numb1 = [1, 2, 3, 4] ;
const numb2 = [5, 6, 6, 8] ;
const marged = [...numb1, ...numb2] ;
console.log(marged) 

//passing elements to function 

const numbers = [ 1, 2, 3 ,4 ] ;
const sum = Math.max(...numbers ); 
console.log(sum);

// more practice is spread operator

const friends = [34, 56, 67, 84, 90 , 12, 20 ] ;
const arrayMax = Math.max(...friends) ; // if i don't use spread operator here it will be NaN in result....
console.log(arrayMax) ;


