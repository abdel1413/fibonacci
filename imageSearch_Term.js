function imageSearchTerm(array, term) {
    const result = [];  
    for (let i = 0; i < array.length; i++) {
        if (array[i].toLowerCase().includes(term.toLowerCase())) {
            result.push(array[i]);
        }
    }
    return result;

}

//2way 

function imageSearchTerm(array, term) {
    const lowerTerm = term.toLowerCase();
    return array.filter(item => item.toLowerCase().includes(lowerTerm));
}   