function printSum (start , end){

    let sum = 0;
    
    let curNumPrint = '';

    for(let i = start ; i <= end ; i++){
        sum += i
        curNumPrint += i + ' ';
        
        
    }
    
    console.log(curNumPrint)
    console.log(`Sum: ${sum}`)


}
printSum(5 , 10)