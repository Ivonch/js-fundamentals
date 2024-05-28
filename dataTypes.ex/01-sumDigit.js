function sumDigit (num){
    let sum = 0
    
    let numAsString = `${num}`
    for(let i = 0 ; i < numAsString.length ; i++){
        let curNum = Number(numAsString[i])
        sum += curNum
        
        
    }
    console.log(sum)




}
sumDigit(543)