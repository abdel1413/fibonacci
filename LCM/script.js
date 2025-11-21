const lcm=(a,b)=>{
   const aValues = findMultiple(a,1000);
   const bValues  =findMultiple(b,1000)
   const common = aValues.filter(v => bValues.includes(v))
   return  common[0]
}
const findMultiple =(a,count)=>{
    const result = [];
    for(let i = 1; count; i++){
         result(a*i)
    }

    return result;
}

//Using GCD (more efficient)

const gdc = (a,b)=>{
    if(b !== 0){
        //find the remainder the assign b to a and r to b; then return a
        let r = a%b;
        a=b;
        b=r;
    }
    return a;
}

const lcm2 =(a,b)=>{
    return (a*b)/ gdc(a,b)
}