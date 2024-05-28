function rightPlace (word , symbol , match){
    let res = '';

    for(let i = 0; i < word.length; i++){
        if(word[i] === '_'){
            res += symbol
        }else {
            res += word[i]
        }
    }
    if(res === match){
        console.log(`Matched`)
    }else{
        console.log(`Not Matched`)
    }
    



}
rightPlace('Str_ng', 'i',

    'String')