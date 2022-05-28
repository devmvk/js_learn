function fibonacci(value){
    if(value == 1 || value== 2) return 1;
    return fibonacci(value - 1) + fibonacci(value - 2);
}