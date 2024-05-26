function triangleOfNum (n){
    let line = '';

    for(let i = 1 ; i <= n; i++){
        line = i + ' ' ; 
        for(let j = 1 ; j < i; j++){
            line += i + ' '

            
        }
        console.log(line)
    }

    
} 
triangleOfNum(3)