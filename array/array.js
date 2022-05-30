let firstArray = []
let secondArray = [8,1,5,7]



let result= secondArray.map(mapFunction)

function mapFunction(value) {return value +1}

if(secondArray.length !== 0){
    let i = 0
    while(i< secondArray.length){
        console.log(secondArray[i])
        i++
    }
}