const Stack = require("../lib/stack");

const postfix = (expression) => {
    const stack = new Stack();
    const result = [];
    const trimmedExpression = expression.replaceAll(" ", "");

    for(const character of trimmedExpression){
        if(character === "("){
            stack.push(character);
        }
        else if(character === ")"){
            let top = stack.pop();
            while(top !== '('){
                result.push(top);
                top = stack.pop();
            }
        }
        else if(isOperator(character)){
            const top = stack.top;
            if(top === null || top.value === '(' || hasHigherPrecedence(character, top.value)){
                stack.push(character);
            }else{
                while (stack.top && (hasHigherPrecedence(stack.top.value, character) || hasEqualPrecedence(stack.top.value, character))) {
                    result.push(stack.pop());
                }
                stack.push(character);
            }
        }else{
            result.push(character);
        }
    }
    
    while(stack.top){
        result.push(stack.pop());
    }
    
    return result.join(' ');
};

const isOperator = (operator) => ['+','-','/','*'].includes(operator);

const hasHigherPrecedence = (operator1, operator2) => {
    if(['*','/'].includes(operator2)){
        return false;
    }
    if(['+','-'].includes(operator2)){
        return ['*','/'].includes(operator1);
    }
};
const hasEqualPrecedence = (operator1, operator2) => {
    if(['*','/'].includes(operator2)){
        return ['*','/'].includes(operator1);
    }
    if(['+','-'].includes(operator2)){
        return ['+','-'].includes(operator1);
    }
};

module.exports = postfix;
