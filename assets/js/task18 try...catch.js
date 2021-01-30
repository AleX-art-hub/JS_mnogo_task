const myPow = (n) => {
    if(typeof n !=='number'){
        throw new TypeError('Param n mast be a number');
    }
    if(!Number.isSafeInteger(n)){
        throw new RangeError('Param n is not a safe integer');
    }
    return n*n;
};

const testFun = () =>{
    let res = null;
    try{
        res = myPow(4);
        //res = myPow('Bolt na 32');
    }catch{
        res = 'Error for myPow';
    } finally{
        return res;
    }
};

console.log('Result of function = ', testFun());