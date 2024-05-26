function rounding (num , count){

    if(count > 15){
        count = 15
    }
    
    let roundedNum = num.toFixed(count)
    let newNum = parseFloat(roundedNum)

    console.log(newNum)


}
rounding(10.5,3)