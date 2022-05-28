function factorial(value){
    if(value == 1) return 1;
    return value * factorial(value-1)
}


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question(`Enter the number?`, n => {
    let result = factorial(n)
    console.log(result)
    readline.close();
  });
  
