function division (num){
    let devisers = [10, 7, 6, 3, 2];

    for(let i = 0 ; i <= devisers.length ; i++){
        let devisor = devisers[i]

        if(num % devisor === 0){
            console.log(`The number is divisible by ${devisor}`)
            return;
        }
    }
    console.log('Not divisible')



}
division (1643)