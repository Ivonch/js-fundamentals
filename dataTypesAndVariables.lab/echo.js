function echo(type){
    let dataType = typeof type
    console.log(typeof type);


    if(dataType === "string" || dataType === "number"){
        console.log(type)
    } else {
        console.log('Parameter is not suitable for printing')

    }


    

} 
echo(null)