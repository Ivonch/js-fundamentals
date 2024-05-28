function specialNum (n){
    let sum = 0;
    for(let i = 1 ; i <= n ; i++){
        sum = 0 ;
        let curNumAsString = `${i}`;
        for(let j = 0; j < curNumAsString.length ; j++ ){
            let curNum = Number(curNumAsString[j]);
            sum += curNum
        }
        if(sum === 5 || sum === 7 || sum === 11){
            console.log(`${i} -> True`)
        }else {
            console.log(`${i} -> False`)
        }

    }

}
specialNum(20)