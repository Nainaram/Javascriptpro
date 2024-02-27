function replaceChar(str ,Oldchar ,newChar){
    let newStr ="";
    for (let i = 0;i <= str.length-1;i++){
        if(str[i] ===Oldchar){
            newStr += newChar;
        }
        else{
            newStr +=str[i];
        }
    }
    return newStr;
}
let str = "cyschology";
let newStr = replaceChar(str,'c','p');
console.log(newStr);