// This program is very simple and cool that gives an output , whoshould pay your food bill in a group.
// it is a function that takes an array and find the array length 
// and then find the index the by random function to give random index 
// finally it will print the statement with who will pay the bill$$$.
function whospaying(names){
    var numberofperson = names.length;
    var randomPersonPosition = Math.floor(Math.random()*numberofperson);
    var randomPerson = names[randomPersonPosition];
    return randomPerson + "is going to pay the bill today"
}
    Friends = ['manikanta','sai','pavan','vikram','shahid','tarun'];
    whospaying(Friends)