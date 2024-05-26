function vacation (count , type , day){
    let tPrice = 0;

    switch (day){
        case 'Friday' :
            if(type === 'Students'){
                tPrice = count * 8.45
                if(count >= 30){
                    tPrice *= 0.85
                }
            }else if(type === 'Business'){
                tPrice = count * 10.90
                if(count >= 100){
                    tPrice = (count - 10) * 10.90
                }
            }else if(type === 'Regular'){
                tPrice = count * 15
                if(count >= 10 && count <= 20){
                    tPrice *=0.95
                }

            }
            break ;
            case 'Saturday' :
                if(type === 'Students'){
                    tPrice = count * 9.80
                    if(count >= 30){
                        tPrice *= 0.85
                    }
                }else if(type === 'Business'){
                    tPrice = count * 15.60
                    if(count >= 100){
                        tPrice = (count - 10) * 15.60
                    }
                }else if(type === 'Regular'){
                    tPrice = count * 20
                    if(count >= 10 && count <= 20){
                        tPrice *=0.85
                    }
                }
                
                break ;
                case 'Sunday' :
                    if(type === 'Students'){
                        tPrice = count * 10.46
                        if(count >= 30){
                            tPrice *= 0.85
                        }
                    }else if(type === 'Business'){
                        tPrice = count * 16
                        if(count >= 100){
                            tPrice = (count - 10) * 16
                        }
                    }else if(type === 'Regular'){
                        tPrice = count * 22.50
                        if(count >= 10 && count <= 20){
                            tPrice *=0.95
                        }
                    }
                    break ;                       
    }
    console.log(`Total price: ${tPrice.toFixed(2)}`)
    


}
vacation(101,"Business","Saturday")