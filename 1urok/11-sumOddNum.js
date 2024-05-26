function oddNum (n){
    
    if(n < 1 || n > 100 ){
        return;
    }

    let sum = 0;
    let i = 0;
    while (n >= 1){
        for(let i = 1 ; n >= 1 ; i++){
            if (i % 2 === 1){
                console.log(i)
                sum += i
    
                --n
    
            }
        }


    }

    console.log(`Sum: ${sum}`)
    
} 
oddNum(5)