function getFactorial(value){
    if(value == 1) return 1;
    return value * getFactorial(value-1)
} 