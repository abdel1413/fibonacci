const longest = (str)=>{
 let longest = '';
 for(let i = 0; i< str.length; i++){
    for(let j =i+1; j< str.length; j++){
        let current = '';
        let a = i;
        let b = j;

        while (a <str.length && b < str.length &&  str[a] === str[b]){
            current += str[a]
            a++; 
            b++
        }

        if(current.length > longest.length){
            longest = current;
        }
    }
 }
 return longest;
}