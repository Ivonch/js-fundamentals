function calculator (n1 , operator , n2) {

    res = 0;

    switch(operator){
        case '+' :
            res = n1 + n2;
            break;
            case '-':
                res = n1-n2;
                break;
                case '/' :
                    res = n1 / n2;
                    break;
                    case '*' :
                        res = n1 * n2;
                        break;
    }
    console.log(res.toFixed(2))

   



}
calculator(25.5, '-' ,3)