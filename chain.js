const myobj ={
    value :0,
    increment: function(){
        this.value++;
        return this;
    },
    double: function(){
        this.value *=2;
        return this;
    },
    getValue: function(){
        return this.value;
    },
};
const res = myobj.increment().double().double().getValue();
console.log(res);