function gladiatorExpenses (lostFlightCount , helmetprice,swordPrice , shieldPrice , armorPrice){

    let sum = 0 ; 
    let shieldBrakeCount = 0

    for(let i = 1 ; i <= lostFlightCount ; i++){
        if(i % 2 === 0){
            sum += helmetprice
        }
        if(i % 3 === 0){
            sum+= swordPrice     
        }
        if (i % 2 === 0 && i % 3 === 0){
            sum += shieldPrice
            shieldBrakeCount ++
            if(shieldBrakeCount % 2 === 0){
                sum += armorPrice
            }
        }       
    } 
    console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`)




}
gladiatorExpenses(23,12.50,21.50,40,200)