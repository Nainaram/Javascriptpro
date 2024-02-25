// const arr = [1,2,3,4,5];
//  arr.push(6);
//  console.log(arr);
Array.prototype.mypush = function(...elements){
    for (let element of elements){this[this.length]=element}
    return this.element;
}
const arr = [1,2,3,4,5];
 arr.mypush(7);
 console.log(arr);