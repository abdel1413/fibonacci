function snakeCase(str) {
    //insert underscore before UpperCase letters expect at the start
    // replace highen to underscore
    // convert to uppercase 
    str = str.replace(/([a-z0-9])([A-Z])/g, '$1_$2')
    .replace(/-/g, '_')
    .toUpperCase();
  return str
}

//2nd approach
function snakeCase(str) {
     let result = '';
     for (let i = 0; i < str.length; i++) {
         const char = str[i];
         if (char === '-') {
             result += '_';
         } else if (char >= 'A' && char <= 'Z') {
             if (i !== 0) {
                 result += '_';
             }
             result += char.toUpperCase();
         } else {
             result += char.toUpperCase();
         }
            }
        return result;  
}

//3rd approach  not that efficient
function snakeCase(variableName) {
     let result = '';
     for(let i = 0; i < variableName.length; i++) {
         if(variableName[i] === '-') {
        result = variableName.slice(0, i) + '_' + variableName.slice(i + 1);
         }else if (variableName[i] ===variableName[i].toUpperCase()) {    
            result = variableName.slice(0, i) + '_' + variableName[i] + variableName.slice(i + 1);
         }  
     }
     return (result.toUpperCase()|| variableName.toUpperCase());  
}

// Example usage:
console.log(snakeCase("helloWorld"));