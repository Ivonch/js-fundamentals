function login (input){
    let username = input[0];
    let count = 0;

    for(let i = 1; i < input.length ; i++){
        let word = input[i] ;
        let password = '';

        for(let j = word.length ; j > 0 ; j--){
            let key = word[j-1];
            password += key;
        }
            
        if(username === password){
            console.log(`User ${username} logged in.`)
        }else {
            if(count >= 3){
                console.log(`User ${username} blocked!`)
                return;
            }
            
            
                 count++ ;
                console.log(`Incorrect password. Try again.`)

    }


  }

 }
login(['sunny','rainy','cloudy','sunny','not sunny'])