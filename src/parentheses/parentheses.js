const Stack = require("../lib/stack");

const match = (expression) => {
    const stack = new Stack();
    for(const char of expression){
        if(char === "("){
            stack.push(char);
        }else if(char === ")"){
            if(stack.top){
                stack.pop();
            }else{
                return false;
            }
        }
    }
    if(stack.top){
        return false;
    }else{
        return true;
    }
};


module.exports = match;
