function spice (yield){
    let days = 0 ;
    let totalYield = 0 ;

    while (yield >= 100){
        totalYield += yield;

        if(totalYield >= 26){
            totalYield -= 26;
        }
        days ++ ;
        yield -= 10

    }
    if (totalYield >= 26) {
        totalYield -= 26;
    }
    console.log(days);
    console.log(totalYield)

}
spice (111)