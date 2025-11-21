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
// Combination formal C(n,r)= n!/(r!⋅(n−r)!)
//create a factorial function
// then use  apply the formula in the function
const factorial =(n)=>{
    //4 <=1? yes the go 4*
    //  factorial(3)=> n =4*3 => 3<=1 yes 3* fact(2) => 2<=1? yes 2*fact(1)=> 1<=1 yes =1
    //4*3*2*1
     

    return n <=1? n: n* factorial(n-1)
}

