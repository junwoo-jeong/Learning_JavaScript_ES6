//IIFE
'use strict';
const message = (function() {
    const secret = 'i\'m a secret';
    return `The secret is ${secret.length} characters long.`;
}());
console.log(message);

const f = (function() {
    let count = 0;
    return function(){
        return `I have been called ${++count} time(s).`;
    };
}());
f();
