const factorial = (value) => {
    if(value == 1) return 1;
    return value * getFactorial(value-1)
} 

export {factorial};