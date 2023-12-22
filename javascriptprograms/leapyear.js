function isleapyear(year){
    if(year%4===0){
        if(year%100 === 0){
            if(year%400 == 0){
                console.log("leap year");
            }
            else{
               console.log("not a leap year");
            }

        }
        else{
            console.log('not a leap year');
        }

    }
    else{
        console.log('not a leap year');
    }
}
year = 1899// you can give a dynamic input using a prompt or any list.
isleapyear(year);