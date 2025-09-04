const fibonacci = (array, length) => {
    if(length ===0) return [];
    if(length ===1) return array[0];
    let newArray = [...array];
    for(let i = array.length; i < length; i++){

        newArray[i] = newArray[i-1] + newArray[i-2];
    }

    return newArray;
}

console.log(fibonacci([0,1],0));
console.log(fibonacci([0,1],1));
console.log(fibonacci([0,1],2));
console.log(fibonacci([0,1],3));
console.log(fibonacci([0,1],8));


const tribonacci = (array, length) => {
    if(length ===0) return [];
    if(length === 1) return array[0]
    if(length ===2) return array[1]
    let newArray = [...array];
    for(let i = array.length; i < length; i++){
        newArray[i] = newArray[i-1] + newArray[i-2] + newArray[i-3];
    }
}