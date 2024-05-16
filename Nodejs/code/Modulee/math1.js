function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}

// module.exports = add;
// module.exports = sub; sub will override the value of add
module.exports = {add,sub,};

//anonymous function

// exports.add1 = (a,b)=> a+b;
// exports.sub2 = (a,b)=>a-b;