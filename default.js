function add (numb1 = 0 , numb2 = 0){
    const result = numb1 + numb2 ;
    return result ;
}

// const total = add (5, 7 ); // Here I use two parameters . first is numb1 and second is numb2 ... Here code is run properly BUT.. >
// console.log(total)
console.log(add(5, 7 )) // when I use any parameter it will be replace in the parameter but when I don't use any parameter It will be replace in default parameter.


function name (firstName, lastName = "" ){
    const fullName = firstName + " " + lastName ;
    return fullName
}
// In lastName parameter I use a default parameter its only a string. When I use any parameter It will be shown but it will empty when I don't use any parameter,


const result = name("Mostafizur");
console.log(result)


// default parameter in an array


function friend ( numbs = [] ){
    return
}

friend() // when I use default parameter in an array it will be empty array.