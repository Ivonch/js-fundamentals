function amazingNum (num) {
    const stringNum = `${num}`;
    let sum = 0;

    for(let i = 0 ; i < stringNum.length ; i++){
        sum +=Number(stringNum[i]) 
    }

    let itAmazing = false

    let stringSum = `${sum}`;
    
    for (let i = 0; i < stringSum.length; i++) {
        if(stringSum === '9'){
            itAmazing = 'True'
        }     
        break; 
    }

    console.log(`${num} Amazing? ${itAmazing}`)
    
}
amazingNum(999)